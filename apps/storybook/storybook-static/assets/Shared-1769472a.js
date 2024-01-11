import {
  o as s,
  b as r,
  B as i,
  j as o,
  f as a,
} from './TextareaAutosizeElement-ce2d51c3.js'
import {B as c} from './Box-be2cf80e.js'
function p() {
  const {reset: t} = s()
  return r(i, {
    onClick: () => {
      t({})
    },
    children: 'Reset',
  })
}
const e = ({children: t}) => r(c, {sx: {marginY: 2}, children: t}),
  n = () =>
    o(a, {
      direction: 'row',
      spacing: 2,
      children: [
        r(p, {}),
        o(i, {type: 'submit', color: 'primary', children: [' ', 'Submit']}),
      ],
    })
try {
  ;(e.displayName = 'BoxMargin'),
    (e.__docgenInfo = {description: '', displayName: 'BoxMargin', props: {}})
} catch {}
try {
  ;(n.displayName = 'SubmitButton'),
    (n.__docgenInfo = {description: '', displayName: 'SubmitButton', props: {}})
} catch {}
export {n as S}
//# sourceMappingURL=Shared-1769472a.js.map
