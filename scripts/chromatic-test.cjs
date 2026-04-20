#!/usr/bin/env node
/** Loads root `.env` then `.env.local` and runs Chromatic with `--project-token <token>`. */
const {spawnSync} = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const root = path.join(__dirname, '..')

// Preserve token already in the environment (CI / shell). Loading `.env.local`
// with override:true can set CHROMATIC_PROJECT_TOKEN to "" if the file has an
// empty assignment, which would otherwise wipe a valid value.
const tokenFromShell = process.env.CHROMATIC_PROJECT_TOKEN?.trim()

require('dotenv').config({path: path.join(root, '.env')})
const tokenAfterEnv = process.env.CHROMATIC_PROJECT_TOKEN?.trim()

require('dotenv').config({path: path.join(root, '.env.local'), override: true})

let token = process.env.CHROMATIC_PROJECT_TOKEN?.trim()
// Treat blank `CHROMATIC_PROJECT_TOKEN=` in `.env.local` as "do not override"
if (!token) {
  token = tokenAfterEnv || tokenFromShell || ''
}

function chromaticKeyDeclaredButEmptyInEnvLocal() {
  const p = path.join(root, '.env.local')
  if (!fs.existsSync(p)) return false
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/)
  return lines.some((line) => {
    const m = line.match(/^\s*(?:export\s+)?CHROMATIC_PROJECT_TOKEN\s*=/)
    if (!m) return false
    const rest = line.slice(m[0].length).trim()
    const v = rest.replace(/^["']|["']$/g, '').trim()
    return v.length === 0
  })
}

if (!token) {
  const emptyDecl = chromaticKeyDeclaredButEmptyInEnvLocal()
  console.error(
    'Missing CHROMATIC_PROJECT_TOKEN.\n' +
      'Set a non-empty value on one line in repo-root .env.local, e.g. CHROMATIC_PROJECT_TOKEN=chpt_…\n' +
      (emptyDecl
        ? 'Your .env.local declares CHROMATIC_PROJECT_TOKEN but the value is empty on disk. If you pasted a token in the editor, save the file (⌘S / Ctrl+S).\n'
        : '') +
      'If the line is only CHROMATIC_PROJECT_TOKEN= with nothing after =, add your token or remove the line.'
  )
  process.exit(1)
}

const extra = process.argv.slice(2)
// Yarn runs `chromatic` as `npx -y chromatic`, which does not reliably forward
// `yarn run chromatic -- --project-token …` args to the Chromatic CLI. Spawn
// Chromatic directly from the Storybook workspace so flags reach the binary.
const storybookDir = path.join(root, 'apps', 'storybook')
const npxArgs = ['-y', 'chromatic', '--project-token', token, ...extra]

const result = spawnSync('npx', npxArgs, {
  cwd: storybookDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env,
})

if (result.error) {
  console.error(result.error)
  process.exit(1)
}
process.exit(result.status === null ? 1 : result.status)
