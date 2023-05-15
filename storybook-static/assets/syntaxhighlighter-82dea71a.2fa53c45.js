import {
  t as it,
  b as Q,
  u as st,
  v as we,
  m as ct,
  j as be,
  a as rn,
  l as ut,
  f as pt,
} from './iframe.b13c84ce.js'
import {
  w as Oe,
  _ as dt,
  s as Se,
  S as gt,
  a as ft,
  A as vt,
} from './index.3861d36b.js'
var Nn = Fe
Fe.displayName = 'jsx'
Fe.aliases = []
function Fe(e) {
  ;(function (n) {
    var t = n.util.clone(n.languages.javascript),
      a = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source
    function d(h, b) {
      return (
        (h = h
          .replace(/<S>/g, function () {
            return a
          })
          .replace(/<BRACES>/g, function () {
            return r
          })
          .replace(/<SPREAD>/g, function () {
            return s
          })),
        RegExp(h, b)
      )
    }
    ;(s = d(s).source),
      (n.languages.jsx = n.languages.extend('markup', t)),
      (n.languages.jsx.tag.pattern = d(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (n.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (n.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (n.languages.jsx.tag.inside.tag.inside['class-name'] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (n.languages.jsx.tag.inside.comment = t.comment),
      n.languages.insertBefore(
        'inside',
        'attr-name',
        {spread: {pattern: d(/<SPREAD>/.source), inside: n.languages.jsx}},
        n.languages.jsx.tag
      ),
      n.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: d(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': {pattern: /^=(?=\{)/, alias: 'punctuation'},
              rest: n.languages.jsx,
            },
          },
        },
        n.languages.jsx.tag
      )
    var i = function (h) {
        return h
          ? typeof h == 'string'
            ? h
            : typeof h.content == 'string'
            ? h.content
            : h.content.map(i).join('')
          : ''
      },
      v = function (h) {
        for (var b = [], g = 0; g < h.length; g++) {
          var m = h[g],
            w = !1
          if (
            (typeof m != 'string' &&
              (m.type === 'tag' && m.content[0] && m.content[0].type === 'tag'
                ? m.content[0].content[0].content === '</'
                  ? b.length > 0 &&
                    b[b.length - 1].tagName === i(m.content[0].content[1]) &&
                    b.pop()
                  : m.content[m.content.length - 1].content === '/>' ||
                    b.push({
                      tagName: i(m.content[0].content[1]),
                      openedBraces: 0,
                    })
                : b.length > 0 && m.type === 'punctuation' && m.content === '{'
                ? b[b.length - 1].openedBraces++
                : b.length > 0 &&
                  b[b.length - 1].openedBraces > 0 &&
                  m.type === 'punctuation' &&
                  m.content === '}'
                ? b[b.length - 1].openedBraces--
                : (w = !0)),
            (w || typeof m == 'string') &&
              b.length > 0 &&
              b[b.length - 1].openedBraces === 0)
          ) {
            var k = i(m)
            g < h.length - 1 &&
              (typeof h[g + 1] == 'string' || h[g + 1].type === 'plain-text') &&
              ((k += i(h[g + 1])), h.splice(g + 1, 1)),
              g > 0 &&
                (typeof h[g - 1] == 'string' ||
                  h[g - 1].type === 'plain-text') &&
                ((k = i(h[g - 1]) + k), h.splice(g - 1, 1), g--),
              (h[g] = new n.Token('plain-text', k, null, k))
          }
          m.content && typeof m.content != 'string' && v(m.content)
        }
      }
    n.hooks.add('after-tokenize', function (h) {
      ;(h.language !== 'jsx' && h.language !== 'tsx') || v(h.tokens)
    })
  })(e)
}
var ht = Nn,
  mt = Te
Te.displayName = 'bash'
Te.aliases = ['shell']
function Te(e) {
  ;(function (n) {
    var t =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      a = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: 'punctuation',
        inside: null,
      },
      r = {
        bash: a,
        environment: {pattern: RegExp('\\$' + t), alias: 'constant'},
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [
                {pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0},
                /^\$\(\(/,
              ],
              number:
                /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator:
                /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/,
            },
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: {variable: /^\$\(|^`|\)$|`$/},
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp('(\\{)' + t),
                lookbehind: !0,
                alias: 'constant',
              },
            },
          },
          /\$(?:\w+|[#?*!@$])/,
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
      }
    ;(n.languages.bash = {
      shebang: {pattern: /^#!\s*\/.*/, alias: 'important'},
      comment: {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
      'function-name': [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: 'function',
        },
        {pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function'},
      ],
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: !0,
      },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
            lookbehind: !0,
            alias: 'constant',
          },
        },
        alias: 'variable',
        lookbehind: !0,
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: r,
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: {bash: a},
        },
        {
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: r,
        },
        {pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0},
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: {entity: r.entity},
        },
      ],
      environment: {pattern: RegExp('\\$?' + t), alias: 'constant'},
      variable: r.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name',
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      'file-descriptor': {pattern: /\B&\d\b/, alias: 'important'},
      operator: {
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {'file-descriptor': {pattern: /^\d/, alias: 'important'}},
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0},
    }),
      (a.inside = n.languages.bash)
    for (
      var s = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number',
        ],
        d = r.variable[1].inside,
        i = 0;
      i < s.length;
      i++
    )
      d[s[i]] = n.languages.bash[s[i]]
    n.languages.shell = n.languages.bash
  })(e)
}
var yt = mt,
  Cn = _e
_e.displayName = 'css'
_e.aliases = []
function _e(e) {
  ;(function (n) {
    var t =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
    ;(n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector',
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            t.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {pattern: RegExp('^' + t.source + '$'), alias: 'url'},
        },
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            t.source +
            ')*(?=\\s*\\{)'
        ),
        lookbehind: !0,
      },
      string: {pattern: t, greedy: !0},
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
      punctuation: /[(){};:,]/,
    }),
      (n.languages.css.atrule.inside.rest = n.languages.css)
    var a = n.languages.markup
    a && (a.tag.addInlined('style', 'css'), a.tag.addAttribute('style', 'css'))
  })(e)
}
var bt = Cn,
  xt = Ie
Ie.displayName = 'jsExtras'
Ie.aliases = []
function Ie(e) {
  ;(function (n) {
    n.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            n.languages.javascript['function-variable'].pattern.source
        ),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access'],
      },
    }),
      n.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + n.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access'],
        },
      }),
      n.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name',
          },
          {pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name'},
        ],
      })
    function t(v, h) {
      return RegExp(
        v.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
        }),
        h
      )
    }
    n.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: t(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript,
      },
      exports: {
        pattern: t(
          /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript,
      },
    }),
      n.languages.javascript.keyword.unshift(
        {pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module'},
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow',
        },
        {pattern: /\bnull\b/, alias: ['null', 'nil']},
        {pattern: /\bundefined\b/, alias: 'nil'}
      ),
      n.languages.insertBefore('javascript', 'operator', {
        spread: {pattern: /\.{3}/, alias: 'operator'},
        arrow: {pattern: /=>/, alias: 'operator'},
      }),
      n.languages.insertBefore('javascript', 'punctuation', {
        'property-access': {pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0},
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0,
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable',
        },
        console: {pattern: /\bconsole(?=\s*\.)/, alias: 'class-name'},
      })
    for (
      var a = [
          'function',
          'function-variable',
          'method',
          'method-variable',
          'property-access',
        ],
        r = 0;
      r < a.length;
      r++
    ) {
      var s = a[r],
        d = n.languages.javascript[s]
      n.util.type(d) === 'RegExp' &&
        (d = n.languages.javascript[s] = {pattern: d})
      var i = d.inside || {}
      ;(d.inside = i), (i['maybe-class-name'] = /^[A-Z][\s\S]*/)
    }
  })(e)
}
var wt = xt,
  St = je
je.displayName = 'json'
je.aliases = ['webmanifest']
function je(e) {
  ;(e.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    comment: {pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0},
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {pattern: /\bnull\b/, alias: 'keyword'},
  }),
    (e.languages.webmanifest = e.languages.json)
}
var At = St,
  kt = Re
Re.displayName = 'graphql'
Re.aliases = []
function Re(e) {
  ;(e.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern:
        /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: e.languages.markdown,
        },
      },
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0,
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {pattern: /@[a-z_]\w*/i, alias: 'function'},
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    'atom-input': {pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name'},
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern:
        /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-query': {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
    e.hooks.add('after-tokenize', function (t) {
      if (t.language !== 'graphql') return
      var a = t.tokens.filter(function (S) {
          return (
            typeof S != 'string' && S.type !== 'comment' && S.type !== 'scalar'
          )
        }),
        r = 0
      function s(S) {
        return a[r + S]
      }
      function d(S, A) {
        A = A || 0
        for (var o = 0; o < S.length; o++) {
          var l = s(o + A)
          if (!l || l.type !== S[o]) return !1
        }
        return !0
      }
      function i(S, A) {
        for (var o = 1, l = r; l < a.length; l++) {
          var p = a[l],
            u = p.content
          if (p.type === 'punctuation' && typeof u == 'string') {
            if (S.test(u)) o++
            else if (A.test(u) && (o--, o === 0)) return l
          }
        }
        return -1
      }
      function v(S, A) {
        var o = S.alias
        o ? Array.isArray(o) || (S.alias = o = [o]) : (S.alias = o = []),
          o.push(A)
      }
      for (; r < a.length; ) {
        var h = a[r++]
        if (h.type === 'keyword' && h.content === 'mutation') {
          var b = []
          if (
            d(['definition-mutation', 'punctuation']) &&
            s(1).content === '('
          ) {
            r += 2
            var g = i(/^\($/, /^\)$/)
            if (g === -1) continue
            for (; r < g; r++) {
              var m = s(0)
              m.type === 'variable' &&
                (v(m, 'variable-input'), b.push(m.content))
            }
            r = g + 1
          }
          if (
            d(['punctuation', 'property-query']) &&
            s(0).content === '{' &&
            (r++, v(s(0), 'property-mutation'), b.length > 0)
          ) {
            var w = i(/^\{$/, /^\}$/)
            if (w === -1) continue
            for (var k = r; k < w; k++) {
              var N = a[k]
              N.type === 'variable' &&
                b.indexOf(N.content) >= 0 &&
                v(N, 'variable-input')
            }
          }
        }
      }
    })
}
var Et = kt,
  Ln = De
De.displayName = 'markup'
De.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']
function De(e) {
  ;(e.languages.markup = {
    comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
    prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/},
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/]},
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {namespace: /^[^\s>\/:]+:/},
        },
      },
    },
    entity: [
      {pattern: /&[\da-z]{1,8};/i, alias: 'named-entity'},
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (e.languages.markup.tag.inside['attr-value'].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside['internal-subset'].inside =
      e.languages.markup),
    e.hooks.add('wrap', function (n) {
      n.type === 'entity' &&
        (n.attributes.title = n.content.value.replace(/&amp;/, '&'))
    }),
    Object.defineProperty(e.languages.markup.tag, 'addInlined', {
      value: function (t, a) {
        var r = {}
        ;(r['language-' + a] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[a],
        }),
          (r.cdata = /^<!\[CDATA\[|\]\]>$/i)
        var s = {
          'included-cdata': {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r},
        }
        s['language-' + a] = {pattern: /[\s\S]+/, inside: e.languages[a]}
        var d = {}
        ;(d[t] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return t
              }
            ),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s,
        }),
          e.languages.insertBefore('markup', 'cdata', d)
      },
    }),
    Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
      value: function (n, t) {
        e.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              n +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i'
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: e.languages[t],
                },
                punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/],
              },
            },
          },
        })
      },
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend('markup', {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml)
}
var $t = Ln,
  Nt = Me
Me.displayName = 'markdown'
Me.aliases = ['md']
function Me(e) {
  ;(function (n) {
    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source
    function a(g) {
      return (
        (g = g.replace(/<inner>/g, function () {
          return t
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + g + ')')
      )
    }
    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return r
        }
      ),
      d = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source
    ;(n.languages.markdown = n.languages.extend('markup', {})),
      n.languages.insertBefore('markdown', 'prolog', {
        'front-matter-block': {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            'front-matter': {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ['yaml', 'language-yaml'],
              inside: n.languages.yaml,
            },
          },
        },
        blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation'},
        table: {
          pattern: RegExp('^' + s + d + '(?:' + s + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + s + d + ')(?:' + s + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': {
                  pattern: RegExp(r),
                  inside: n.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
            'table-line': {
              pattern: RegExp('^(' + s + ')' + d + '$'),
              lookbehind: !0,
              inside: {punctuation: /\||:?-{3,}:?/},
            },
            'table-header-row': {
              pattern: RegExp('^' + s + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(r),
                  alias: 'important',
                  inside: n.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
          },
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword',
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0,
              },
              'code-language': {pattern: /^(```).+/, lookbehind: !0},
              punctuation: /```/,
            },
          },
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: {punctuation: /==+$|--+$/},
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: {punctuation: /^#+|#+$/},
          },
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
          },
          alias: 'url',
        },
        bold: {
          pattern: a(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /\*\*|__/,
          },
        },
        italic: {
          pattern: a(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {}},
            punctuation: /[*_]/,
          },
        },
        strike: {
          pattern: a(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /~~?/,
          },
        },
        'code-snippet': {
          pattern:
            /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ['code', 'keyword'],
        },
        url: {
          pattern: a(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {}},
            variable: {pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0},
            url: {pattern: /(^\]\()[^\s)]+/, lookbehind: !0},
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0,
            },
          },
        },
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (g) {
        ;['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
          m
        ) {
          g !== m &&
            (n.languages.markdown[g].inside.content.inside[m] =
              n.languages.markdown[m])
        })
      }),
      n.hooks.add('after-tokenize', function (g) {
        if (g.language !== 'markdown' && g.language !== 'md') return
        function m(w) {
          if (!(!w || typeof w == 'string'))
            for (var k = 0, N = w.length; k < N; k++) {
              var S = w[k]
              if (S.type !== 'code') {
                m(S.content)
                continue
              }
              var A = S.content[1],
                o = S.content[3]
              if (
                A &&
                o &&
                A.type === 'code-language' &&
                o.type === 'code-block' &&
                typeof A.content == 'string'
              ) {
                var l = A.content
                  .replace(/\b#/g, 'sharp')
                  .replace(/\b\+\+/g, 'pp')
                l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase()
                var p = 'language-' + l
                o.alias
                  ? typeof o.alias == 'string'
                    ? (o.alias = [o.alias, p])
                    : o.alias.push(p)
                  : (o.alias = [p])
              }
            }
        }
        m(g.tokens)
      }),
      n.hooks.add('wrap', function (g) {
        if (g.type === 'code-block') {
          for (var m = '', w = 0, k = g.classes.length; w < k; w++) {
            var N = g.classes[w],
              S = /language-(.+)/.exec(N)
            if (S) {
              m = S[1]
              break
            }
          }
          var A = n.languages[m]
          if (A) g.content = n.highlight(b(g.content.value), A, m)
          else if (m && m !== 'none' && n.plugins.autoloader) {
            var o =
              'md-' +
              new Date().valueOf() +
              '-' +
              Math.floor(Math.random() * 1e16)
            ;(g.attributes.id = o),
              n.plugins.autoloader.loadLanguages(m, function () {
                var l = document.getElementById(o)
                l &&
                  (l.innerHTML = n.highlight(l.textContent, n.languages[m], m))
              })
          }
        }
      })
    var i = RegExp(n.languages.markup.tag.pattern.source, 'gi'),
      v = {amp: '&', lt: '<', gt: '>', quot: '"'},
      h = String.fromCodePoint || String.fromCharCode
    function b(g) {
      var m = g.replace(i, '')
      return (
        (m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (w, k) {
          if (((k = k.toLowerCase()), k[0] === '#')) {
            var N
            return (
              k[1] === 'x'
                ? (N = parseInt(k.slice(2), 16))
                : (N = Number(k.slice(1))),
              h(N)
            )
          } else {
            var S = v[k]
            return S || w
          }
        })),
        m
      )
    }
    n.languages.md = n.languages.markdown
  })(e)
}
var Ct = Nt,
  Lt = Be
Be.displayName = 'yaml'
Be.aliases = ['yml']
function Be(e) {
  ;(function (n) {
    var t = /[*&][^\s[\]{},]+/,
      a =
        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      r =
        '(?:' +
        a.source +
        '(?:[ 	]+' +
        t.source +
        ')?|' +
        t.source +
        '(?:[ 	]+' +
        a.source +
        ')?)',
      s =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source
          }
        ),
      d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source
    function i(v, h) {
      h = (h || '').replace(/m/g, '') + 'm'
      var b =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return r
          })
          .replace(/<<value>>/g, function () {
            return v
          })
      return RegExp(b, h)
    }
    ;(n.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return r
            }
          )
        ),
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return r
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + s + '|' + d + ')'
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule',
      },
      directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important'},
      datetime: {
        pattern: i(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: 'number',
      },
      boolean: {
        pattern: i(/false|true/.source, 'i'),
        lookbehind: !0,
        alias: 'important',
      },
      null: {
        pattern: i(/null|~/.source, 'i'),
        lookbehind: !0,
        alias: 'important',
      },
      string: {pattern: i(d), lookbehind: !0, greedy: !0},
      number: {
        pattern: i(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i'
        ),
        lookbehind: !0,
      },
      tag: a,
      important: t,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (n.languages.yml = n.languages.yaml)
  })(e)
}
var Ot = Lt,
  On = He
He.displayName = 'typescript'
He.aliases = ['ts']
function He(e) {
  ;(function (n) {
    ;(n.languages.typescript = n.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      n.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete n.languages.typescript.parameter,
      delete n.languages.typescript['literal-property']
    var t = n.languages.extend('typescript', {})
    delete t['class-name'],
      (n.languages.typescript['class-name'].inside = t),
      n.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {pattern: /^@/, alias: 'operator'},
            function: /^[\s\S]+/,
          },
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {pattern: /<[\s\S]+/, alias: 'class-name', inside: t},
          },
        },
      }),
      (n.languages.ts = n.languages.typescript)
  })(e)
}
var Ft = On,
  Tt = Nn,
  _t = On,
  It = ze
ze.displayName = 'tsx'
ze.aliases = []
function ze(e) {
  e.register(Tt),
    e.register(_t),
    (function (n) {
      var t = n.util.clone(n.languages.typescript)
      ;(n.languages.tsx = n.languages.extend('jsx', t)),
        delete n.languages.tsx.parameter,
        delete n.languages.tsx['literal-property']
      var a = n.languages.tsx.tag
      ;(a.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + '(?:' + a.pattern.source + ')',
        a.pattern.flags
      )),
        (a.lookbehind = !0)
    })(e)
}
var jt = It
function Rt(e, n) {
  if (e == null) return {}
  var t = it(e, n),
    a,
    r
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e)
    for (r = 0; r < s.length; r++)
      (a = s[r]),
        !(n.indexOf(a) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, a) || (t[a] = e[a]))
  }
  return t
}
function Ne(e, n) {
  ;(n == null || n > e.length) && (n = e.length)
  for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t]
  return a
}
function Dt(e) {
  if (Array.isArray(e)) return Ne(e)
}
function Mt(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function Bt(e, n) {
  if (!!e) {
    if (typeof e == 'string') return Ne(e, n)
    var t = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e)
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ne(e, n)
  }
}
function Ht() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function zt(e) {
  return Dt(e) || Mt(e) || Bt(e) || Ht()
}
function Fn(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  )
}
function on(e, n) {
  var t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    n &&
      (a = a.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable
      })),
      t.push.apply(t, a)
  }
  return t
}
function le(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {}
    n % 2
      ? on(Object(t), !0).forEach(function (a) {
          Fn(e, a, t[a])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : on(Object(t)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
  }
  return e
}
function Ut(e) {
  var n = e.length
  if (n === 0 || n === 1) return e
  if (n === 2)
    return [
      e[0],
      e[1],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0]),
    ]
  if (n === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ]
  if (n >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ]
}
var $e = {}
function Pt(e) {
  if (e.length === 0 || e.length === 1) return e
  var n = e.join('.')
  return $e[n] || ($e[n] = Ut(e)), $e[n]
}
function Gt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0,
    a = e.filter(function (s) {
      return s !== 'token'
    }),
    r = Pt(a)
  return r.reduce(function (s, d) {
    return le(le({}, s), t[d])
  }, n)
}
function ln(e) {
  return e.join(' ')
}
function qt(e, n) {
  var t = 0
  return function (a) {
    return (
      (t += 1),
      a.map(function (r, s) {
        return Tn({
          node: r,
          stylesheet: e,
          useInlineStyles: n,
          key: 'code-segment-'.concat(t, '-').concat(s),
        })
      })
    )
  }
}
function Tn(e) {
  var n = e.node,
    t = e.stylesheet,
    a = e.style,
    r = a === void 0 ? {} : a,
    s = e.useInlineStyles,
    d = e.key,
    i = n.properties,
    v = n.type,
    h = n.tagName,
    b = n.value
  if (v === 'text') return b
  if (h) {
    var g = qt(t, s),
      m
    if (!s) m = le(le({}, i), {}, {className: ln(i.className)})
    else {
      var w = Object.keys(t).reduce(function (A, o) {
          return (
            o.split('.').forEach(function (l) {
              A.includes(l) || A.push(l)
            }),
            A
          )
        }, []),
        k = i.className && i.className.includes('token') ? ['token'] : [],
        N =
          i.className &&
          k.concat(
            i.className.filter(function (A) {
              return !w.includes(A)
            })
          )
      m = le(
        le({}, i),
        {},
        {
          className: ln(N) || void 0,
          style: Gt(i.className, Object.assign({}, i.style, r), t),
        }
      )
    }
    var S = g(n.children)
    return Q.createElement(h, st({key: d}, m), S)
  }
}
var Zt = function (e, n) {
    var t = e.listLanguages()
    return t.indexOf(n) !== -1
  },
  Wt = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator',
  ]
function sn(e, n) {
  var t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e)
    n &&
      (a = a.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable
      })),
      t.push.apply(t, a)
  }
  return t
}
function V(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {}
    n % 2
      ? sn(Object(t), !0).forEach(function (a) {
          Fn(e, a, t[a])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : sn(Object(t)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
  }
  return e
}
var Xt = /\n/g
function Kt(e) {
  return e.match(Xt)
}
function Yt(e) {
  var n = e.lines,
    t = e.startingLineNumber,
    a = e.style
  return n.map(function (r, s) {
    var d = s + t
    return Q.createElement(
      'span',
      {
        key: 'line-'.concat(s),
        className: 'react-syntax-highlighter-line-number',
        style: typeof a == 'function' ? a(d) : a,
      },
      ''.concat(
        d,
        `
`
      )
    )
  })
}
function Vt(e) {
  var n = e.codeString,
    t = e.codeStyle,
    a = e.containerStyle,
    r = a === void 0 ? {float: 'left', paddingRight: '10px'} : a,
    s = e.numberStyle,
    d = s === void 0 ? {} : s,
    i = e.startingLineNumber
  return Q.createElement(
    'code',
    {style: Object.assign({}, t, r)},
    Yt({
      lines: n.replace(/\n$/, '').split(`
`),
      style: d,
      startingLineNumber: i,
    })
  )
}
function Jt(e) {
  return ''.concat(e.toString().length, '.25em')
}
function _n(e, n) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: n,
    },
    children: [{type: 'text', value: e}],
  }
}
function In(e, n, t) {
  var a = {
      display: 'inline-block',
      minWidth: Jt(t),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    r = typeof e == 'function' ? e(n) : e,
    s = V(V({}, a), r)
  return s
}
function xe(e) {
  var n = e.children,
    t = e.lineNumber,
    a = e.lineNumberStyle,
    r = e.largestLineNumber,
    s = e.showInlineLineNumbers,
    d = e.lineProps,
    i = d === void 0 ? {} : d,
    v = e.className,
    h = v === void 0 ? [] : v,
    b = e.showLineNumbers,
    g = e.wrapLongLines,
    m = typeof i == 'function' ? i(t) : i
  if (((m.className = h), t && s)) {
    var w = In(a, t, r)
    n.unshift(_n(t, w))
  }
  return (
    g & b && (m.style = V(V({}, m.style), {}, {display: 'flex'})),
    {type: 'element', tagName: 'span', properties: m, children: n}
  )
}
function jn(e) {
  for (
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var r = e[a]
    if (r.type === 'text')
      t.push(xe({children: [r], className: zt(new Set(n))}))
    else if (r.children) {
      var s = n.concat(r.properties.className)
      jn(r.children, s).forEach(function (d) {
        return t.push(d)
      })
    }
  }
  return t
}
function Qt(e, n, t, a, r, s, d, i, v) {
  var h,
    b = jn(e.value),
    g = [],
    m = -1,
    w = 0
  function k(u, c) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return xe({
      children: u,
      lineNumber: c,
      lineNumberStyle: i,
      largestLineNumber: d,
      showInlineLineNumbers: r,
      lineProps: t,
      className: y,
      showLineNumbers: a,
      wrapLongLines: v,
    })
  }
  function N(u, c) {
    if (a && c && r) {
      var y = In(i, c, d)
      u.unshift(_n(c, y))
    }
    return u
  }
  function S(u, c) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return n || y.length > 0 ? k(u, c, y) : N(u, c)
  }
  for (
    var A = function () {
      var c = b[w],
        y = c.children[0].value,
        x = Kt(y)
      if (x) {
        var f = y.split(`
`)
        f.forEach(function ($, C) {
          var _ = a && g.length + s,
            D = {
              type: 'text',
              value: ''.concat(
                $,
                `
`
              ),
            }
          if (C === 0) {
            var P = b
                .slice(m + 1, w)
                .concat(xe({children: [D], className: c.properties.className})),
              H = S(P, _)
            g.push(H)
          } else if (C === f.length - 1) {
            var M = b[w + 1] && b[w + 1].children && b[w + 1].children[0],
              X = {type: 'text', value: ''.concat($)}
            if (M) {
              var L = xe({children: [X], className: c.properties.className})
              b.splice(w + 1, 0, L)
            } else {
              var I = [X],
                T = S(I, _, c.properties.className)
              g.push(T)
            }
          } else {
            var O = [D],
              j = S(O, _, c.properties.className)
            g.push(j)
          }
        }),
          (m = w)
      }
      w++
    };
    w < b.length;

  )
    A()
  if (m !== b.length - 1) {
    var o = b.slice(m + 1, b.length)
    if (o && o.length) {
      var l = a && g.length + s,
        p = S(o, l)
      g.push(p)
    }
  }
  return n ? g : (h = []).concat.apply(h, g)
}
function ea(e) {
  var n = e.rows,
    t = e.stylesheet,
    a = e.useInlineStyles
  return n.map(function (r, s) {
    return Tn({
      node: r,
      stylesheet: t,
      useInlineStyles: a,
      key: 'code-segement'.concat(s),
    })
  })
}
function Rn(e) {
  return e && typeof e.highlightAuto != 'undefined'
}
function na(e) {
  var n = e.astGenerator,
    t = e.language,
    a = e.code,
    r = e.defaultCodeValue
  if (Rn(n)) {
    var s = Zt(n, t)
    return t === 'text'
      ? {value: r, language: 'text'}
      : s
      ? n.highlight(t, a)
      : n.highlightAuto(a)
  }
  try {
    return t && t !== 'text' ? {value: n.highlight(a, t)} : {value: r}
  } catch {
    return {value: r}
  }
}
function ta(e, n) {
  return function (a) {
    var r = a.language,
      s = a.children,
      d = a.style,
      i = d === void 0 ? n : d,
      v = a.customStyle,
      h = v === void 0 ? {} : v,
      b = a.codeTagProps,
      g =
        b === void 0
          ? {
              className: r ? 'language-'.concat(r) : void 0,
              style: V(
                V({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(r, '"]')]
              ),
            }
          : b,
      m = a.useInlineStyles,
      w = m === void 0 ? !0 : m,
      k = a.showLineNumbers,
      N = k === void 0 ? !1 : k,
      S = a.showInlineLineNumbers,
      A = S === void 0 ? !0 : S,
      o = a.startingLineNumber,
      l = o === void 0 ? 1 : o,
      p = a.lineNumberContainerStyle,
      u = a.lineNumberStyle,
      c = u === void 0 ? {} : u,
      y = a.wrapLines,
      x = a.wrapLongLines,
      f = x === void 0 ? !1 : x,
      $ = a.lineProps,
      C = $ === void 0 ? {} : $,
      _ = a.renderer,
      D = a.PreTag,
      P = D === void 0 ? 'pre' : D,
      H = a.CodeTag,
      M = H === void 0 ? 'code' : H,
      X = a.code,
      L = X === void 0 ? (Array.isArray(s) ? s[0] : s) || '' : X,
      I = a.astGenerator,
      T = Rt(a, Wt)
    I = I || e
    var O = N
        ? Q.createElement(Vt, {
            containerStyle: p,
            codeStyle: g.style || {},
            numberStyle: c,
            startingLineNumber: l,
            codeString: L,
          })
        : null,
      j = i.hljs || i['pre[class*="language-"]'] || {backgroundColor: '#fff'},
      ae = Rn(I) ? 'hljs' : 'prismjs',
      z = w
        ? Object.assign({}, T, {style: Object.assign({}, j, h)})
        : Object.assign({}, T, {
            className: T.className
              ? ''.concat(ae, ' ').concat(T.className)
              : ae,
            style: Object.assign({}, h),
          })
    if (
      (f
        ? (g.style = V(V({}, g.style), {}, {whiteSpace: 'pre-wrap'}))
        : (g.style = V(V({}, g.style), {}, {whiteSpace: 'pre'})),
      !I)
    )
      return Q.createElement(P, z, O, Q.createElement(M, g, L))
    ;((y === void 0 && _) || f) && (y = !0), (_ = _ || ea)
    var K = [{type: 'text', value: L}],
      G = na({astGenerator: I, language: r, code: L, defaultCodeValue: K})
    G.language === null && (G.value = K)
    var Y = G.value.length + l,
      se = Qt(G, y, C, N, A, l, Y, c, f)
    return Q.createElement(
      P,
      z,
      Q.createElement(
        M,
        g,
        !A && O,
        _({rows: se, stylesheet: i, useInlineStyles: w})
      )
    )
  }
}
var aa = oa,
  ra = Object.prototype.hasOwnProperty
function oa() {
  for (var e = {}, n = 0; n < arguments.length; n++) {
    var t = arguments[n]
    for (var a in t) ra.call(t, a) && (e[a] = t[a])
  }
  return e
}
var Dn = Mn,
  Ue = Mn.prototype
Ue.space = null
Ue.normal = {}
Ue.property = {}
function Mn(e, n, t) {
  ;(this.property = e), (this.normal = n), t && (this.space = t)
}
var cn = aa,
  la = Dn,
  ia = sa
function sa(e) {
  for (var n = e.length, t = [], a = [], r = -1, s, d; ++r < n; )
    (s = e[r]), t.push(s.property), a.push(s.normal), (d = s.space)
  return new la(cn.apply(null, t), cn.apply(null, a), d)
}
var Pe = ca
function ca(e) {
  return e.toLowerCase()
}
var Bn = Hn,
  Z = Hn.prototype
Z.space = null
Z.attribute = null
Z.property = null
Z.boolean = !1
Z.booleanish = !1
Z.overloadedBoolean = !1
Z.number = !1
Z.commaSeparated = !1
Z.spaceSeparated = !1
Z.commaOrSpaceSeparated = !1
Z.mustUseProperty = !1
Z.defined = !1
function Hn(e, n) {
  ;(this.property = e), (this.attribute = n)
}
var J = {},
  ua = 0
J.boolean = te()
J.booleanish = te()
J.overloadedBoolean = te()
J.number = te()
J.spaceSeparated = te()
J.commaSeparated = te()
J.commaOrSpaceSeparated = te()
function te() {
  return Math.pow(2, ++ua)
}
var zn = Bn,
  un = J,
  Un = Ge
Ge.prototype = new zn()
Ge.prototype.defined = !0
var Pn = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated',
  ],
  pa = Pn.length
function Ge(e, n, t, a) {
  var r = -1,
    s
  for (pn(this, 'space', a), zn.call(this, e, n); ++r < pa; )
    (s = Pn[r]), pn(this, s, (t & un[s]) === un[s])
}
function pn(e, n, t) {
  t && (e[n] = t)
}
var dn = Pe,
  da = Dn,
  ga = Un,
  ge = fa
function fa(e) {
  var n = e.space,
    t = e.mustUseProperty || [],
    a = e.attributes || {},
    r = e.properties,
    s = e.transform,
    d = {},
    i = {},
    v,
    h
  for (v in r)
    (h = new ga(v, s(a, v), r[v], n)),
      t.indexOf(v) !== -1 && (h.mustUseProperty = !0),
      (d[v] = h),
      (i[dn(v)] = v),
      (i[dn(h.attribute)] = v)
  return new da(d, i, n)
}
var va = ge,
  ha = va({
    space: 'xlink',
    transform: ma,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  })
function ma(e, n) {
  return 'xlink:' + n.slice(5).toLowerCase()
}
var ya = ge,
  ba = ya({
    space: 'xml',
    transform: xa,
    properties: {xmlLang: null, xmlBase: null, xmlSpace: null},
  })
function xa(e, n) {
  return 'xml:' + n.slice(3).toLowerCase()
}
var wa = Sa
function Sa(e, n) {
  return n in e ? e[n] : n
}
var Aa = wa,
  Gn = ka
function ka(e, n) {
  return Aa(e, n.toLowerCase())
}
var Ea = ge,
  $a = Gn,
  Na = Ea({
    space: 'xmlns',
    attributes: {xmlnsxlink: 'xmlns:xlink'},
    transform: $a,
    properties: {xmlns: null, xmlnsXLink: null},
  }),
  qe = J,
  Ca = ge,
  U = qe.booleanish,
  q = qe.number,
  ne = qe.spaceSeparated,
  La = Ca({
    transform: Oa,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: U,
      ariaAutoComplete: null,
      ariaBusy: U,
      ariaChecked: U,
      ariaColCount: q,
      ariaColIndex: q,
      ariaColSpan: q,
      ariaControls: ne,
      ariaCurrent: null,
      ariaDescribedBy: ne,
      ariaDetails: null,
      ariaDisabled: U,
      ariaDropEffect: ne,
      ariaErrorMessage: null,
      ariaExpanded: U,
      ariaFlowTo: ne,
      ariaGrabbed: U,
      ariaHasPopup: null,
      ariaHidden: U,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: ne,
      ariaLevel: q,
      ariaLive: null,
      ariaModal: U,
      ariaMultiLine: U,
      ariaMultiSelectable: U,
      ariaOrientation: null,
      ariaOwns: ne,
      ariaPlaceholder: null,
      ariaPosInSet: q,
      ariaPressed: U,
      ariaReadOnly: U,
      ariaRelevant: null,
      ariaRequired: U,
      ariaRoleDescription: ne,
      ariaRowCount: q,
      ariaRowIndex: q,
      ariaRowSpan: q,
      ariaSelected: U,
      ariaSetSize: q,
      ariaSort: null,
      ariaValueMax: q,
      ariaValueMin: q,
      ariaValueNow: q,
      ariaValueText: null,
      role: null,
    },
  })
function Oa(e, n) {
  return n === 'role' ? n : 'aria-' + n.slice(4).toLowerCase()
}
var ie = J,
  Fa = ge,
  Ta = Gn,
  E = ie.boolean,
  _a = ie.overloadedBoolean,
  ce = ie.booleanish,
  F = ie.number,
  B = ie.spaceSeparated,
  he = ie.commaSeparated,
  Ia = Fa({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: Ta,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: he,
      acceptCharset: B,
      accessKey: B,
      action: null,
      allow: null,
      allowFullScreen: E,
      allowPaymentRequest: E,
      allowUserMedia: E,
      alt: null,
      as: null,
      async: E,
      autoCapitalize: null,
      autoComplete: B,
      autoFocus: E,
      autoPlay: E,
      capture: E,
      charSet: null,
      checked: E,
      cite: null,
      className: B,
      cols: F,
      colSpan: null,
      content: null,
      contentEditable: ce,
      controls: E,
      controlsList: B,
      coords: F | he,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: E,
      defer: E,
      dir: null,
      dirName: null,
      disabled: E,
      download: _a,
      draggable: ce,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: E,
      formTarget: null,
      headers: B,
      height: F,
      hidden: E,
      high: F,
      href: null,
      hrefLang: null,
      htmlFor: B,
      httpEquiv: B,
      id: null,
      imageSizes: null,
      imageSrcSet: he,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: E,
      itemId: null,
      itemProp: B,
      itemRef: B,
      itemScope: E,
      itemType: B,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: E,
      low: F,
      manifest: null,
      max: null,
      maxLength: F,
      media: null,
      method: null,
      min: null,
      minLength: F,
      multiple: E,
      muted: E,
      name: null,
      nonce: null,
      noModule: E,
      noValidate: E,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: E,
      optimum: F,
      pattern: null,
      ping: B,
      placeholder: null,
      playsInline: E,
      poster: null,
      preload: null,
      readOnly: E,
      referrerPolicy: null,
      rel: B,
      required: E,
      reversed: E,
      rows: F,
      rowSpan: F,
      sandbox: B,
      scope: null,
      scoped: E,
      seamless: E,
      selected: E,
      shape: null,
      size: F,
      sizes: null,
      slot: null,
      span: F,
      spellCheck: ce,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: he,
      start: F,
      step: null,
      style: null,
      tabIndex: F,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: E,
      useMap: null,
      value: ce,
      width: F,
      wrap: null,
      align: null,
      aLink: null,
      archive: B,
      axis: null,
      background: null,
      bgColor: null,
      border: F,
      borderColor: null,
      bottomMargin: F,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: E,
      declare: E,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: F,
      leftMargin: F,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: F,
      marginWidth: F,
      noResize: E,
      noHref: E,
      noShade: E,
      noWrap: E,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: F,
      rules: null,
      scheme: null,
      scrolling: ce,
      standby: null,
      summary: null,
      text: null,
      topMargin: F,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: F,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: E,
      disableRemotePlayback: E,
      prefix: null,
      property: null,
      results: F,
      security: null,
      unselectable: null,
    },
  }),
  ja = ia,
  Ra = ha,
  Da = ba,
  Ma = Na,
  Ba = La,
  Ha = Ia,
  za = ja([Da, Ra, Ma, Ba, Ha]),
  Ua = Pe,
  Pa = Un,
  Ga = Bn,
  Ze = 'data',
  qa = Xa,
  Za = /^data[-\w.:]+$/i,
  qn = /-[a-z]/g,
  Wa = /[A-Z]/g
function Xa(e, n) {
  var t = Ua(n),
    a = n,
    r = Ga
  return t in e.normal
    ? e.property[e.normal[t]]
    : (t.length > 4 &&
        t.slice(0, 4) === Ze &&
        Za.test(n) &&
        (n.charAt(4) === '-' ? (a = Ka(n)) : (n = Ya(n)), (r = Pa)),
      new r(a, n))
}
function Ka(e) {
  var n = e.slice(5).replace(qn, Ja)
  return Ze + n.charAt(0).toUpperCase() + n.slice(1)
}
function Ya(e) {
  var n = e.slice(4)
  return qn.test(n)
    ? e
    : ((n = n.replace(Wa, Va)), n.charAt(0) !== '-' && (n = '-' + n), Ze + n)
}
function Va(e) {
  return '-' + e.toLowerCase()
}
function Ja(e) {
  return e.charAt(1).toUpperCase()
}
var Qa = er,
  gn = /[#.]/g
function er(e, n) {
  for (var t = e || '', a = n || 'div', r = {}, s = 0, d, i, v; s < t.length; )
    (gn.lastIndex = s),
      (v = gn.exec(t)),
      (d = t.slice(s, v ? v.index : t.length)),
      d &&
        (i
          ? i === '#'
            ? (r.id = d)
            : r.className
            ? r.className.push(d)
            : (r.className = [d])
          : (a = d),
        (s += d.length)),
      v && ((i = v[0]), s++)
  return {type: 'element', tagName: a, properties: r, children: []}
}
var We = {}
We.parse = ar
We.stringify = rr
var fn = '',
  nr = ' ',
  tr = /[ \t\n\r\f]+/g
function ar(e) {
  var n = String(e || fn).trim()
  return n === fn ? [] : n.split(tr)
}
function rr(e) {
  return e.join(nr).trim()
}
var Xe = {}
Xe.parse = or
Xe.stringify = lr
var Ce = ',',
  vn = ' ',
  pe = ''
function or(e) {
  for (
    var n = [], t = String(e || pe), a = t.indexOf(Ce), r = 0, s = !1, d;
    !s;

  )
    a === -1 && ((a = t.length), (s = !0)),
      (d = t.slice(r, a).trim()),
      (d || !s) && n.push(d),
      (r = a + 1),
      (a = t.indexOf(Ce, r))
  return n
}
function lr(e, n) {
  var t = n || {},
    a = t.padLeft === !1 ? pe : vn,
    r = t.padRight ? vn : pe
  return e[e.length - 1] === pe && (e = e.concat(pe)), e.join(r + Ce + a).trim()
}
var ir = qa,
  hn = Pe,
  sr = Qa,
  mn = We.parse,
  yn = Xe.parse,
  cr = pr,
  ur = {}.hasOwnProperty
function pr(e, n, t) {
  var a = t ? hr(t) : null
  return r
  function r(d, i) {
    var v = sr(d, n),
      h = Array.prototype.slice.call(arguments, 2),
      b = v.tagName.toLowerCase(),
      g
    if (
      ((v.tagName = a && ur.call(a, b) ? a[b] : b),
      i && dr(i, v) && (h.unshift(i), (i = null)),
      i)
    )
      for (g in i) s(v.properties, g, i[g])
    return (
      Zn(v.children, h),
      v.tagName === 'template' &&
        ((v.content = {type: 'root', children: v.children}), (v.children = [])),
      v
    )
  }
  function s(d, i, v) {
    var h, b, g
    v == null ||
      v !== v ||
      ((h = ir(e, i)),
      (b = h.property),
      (g = v),
      typeof g == 'string' &&
        (h.spaceSeparated
          ? (g = mn(g))
          : h.commaSeparated
          ? (g = yn(g))
          : h.commaOrSpaceSeparated && (g = mn(yn(g).join(' ')))),
      b === 'style' && typeof v != 'string' && (g = vr(g)),
      b === 'className' && d.className && (g = d.className.concat(g)),
      (d[b] = fr(h, b, g)))
  }
}
function dr(e, n) {
  return typeof e == 'string' || 'length' in e || gr(n.tagName, e)
}
function gr(e, n) {
  var t = n.type
  return e === 'input' || !t || typeof t != 'string'
    ? !1
    : typeof n.children == 'object' && 'length' in n.children
    ? !0
    : ((t = t.toLowerCase()),
      e === 'button'
        ? t !== 'menu' && t !== 'submit' && t !== 'reset' && t !== 'button'
        : 'value' in n)
}
function Zn(e, n) {
  var t, a
  if (typeof n == 'string' || typeof n == 'number') {
    e.push({type: 'text', value: String(n)})
    return
  }
  if (typeof n == 'object' && 'length' in n) {
    for (t = -1, a = n.length; ++t < a; ) Zn(e, n[t])
    return
  }
  if (typeof n != 'object' || !('type' in n))
    throw new Error('Expected node, nodes, or string, got `' + n + '`')
  e.push(n)
}
function fr(e, n, t) {
  var a, r, s
  if (typeof t != 'object' || !('length' in t)) return bn(e, n, t)
  for (r = t.length, a = -1, s = []; ++a < r; ) s[a] = bn(e, n, t[a])
  return s
}
function bn(e, n, t) {
  var a = t
  return (
    e.number || e.positiveNumber
      ? !isNaN(a) && a !== '' && (a = Number(a))
      : (e.boolean || e.overloadedBoolean) &&
        typeof a == 'string' &&
        (a === '' || hn(t) === hn(n)) &&
        (a = !0),
    a
  )
}
function vr(e) {
  var n = [],
    t
  for (t in e) n.push([t, e[t]].join(': '))
  return n.join('; ')
}
function hr(e) {
  for (var n = e.length, t = -1, a = {}, r; ++t < n; )
    (r = e[t]), (a[r.toLowerCase()] = r)
  return a
}
var mr = za,
  yr = cr,
  Wn = yr(mr, 'div')
Wn.displayName = 'html'
var br = Wn,
  xr = br
const wr = '\xC6',
  Sr = '&',
  Ar = '\xC1',
  kr = '\xC2',
  Er = '\xC0',
  $r = '\xC5',
  Nr = '\xC3',
  Cr = '\xC4',
  Lr = '\xA9',
  Or = '\xC7',
  Fr = '\xD0',
  Tr = '\xC9',
  _r = '\xCA',
  Ir = '\xC8',
  jr = '\xCB',
  Rr = '>',
  Dr = '\xCD',
  Mr = '\xCE',
  Br = '\xCC',
  Hr = '\xCF',
  zr = '<',
  Ur = '\xD1',
  Pr = '\xD3',
  Gr = '\xD4',
  qr = '\xD2',
  Zr = '\xD8',
  Wr = '\xD5',
  Xr = '\xD6',
  Kr = '"',
  Yr = '\xAE',
  Vr = '\xDE',
  Jr = '\xDA',
  Qr = '\xDB',
  eo = '\xD9',
  no = '\xDC',
  to = '\xDD',
  ao = '\xE1',
  ro = '\xE2',
  oo = '\xB4',
  lo = '\xE6',
  io = '\xE0',
  so = '&',
  co = '\xE5',
  uo = '\xE3',
  po = '\xE4',
  go = '\xA6',
  fo = '\xE7',
  vo = '\xB8',
  ho = '\xA2',
  mo = '\xA9',
  yo = '\xA4',
  bo = '\xB0',
  xo = '\xF7',
  wo = '\xE9',
  So = '\xEA',
  Ao = '\xE8',
  ko = '\xF0',
  Eo = '\xEB',
  $o = '\xBD',
  No = '\xBC',
  Co = '\xBE',
  Lo = '>',
  Oo = '\xED',
  Fo = '\xEE',
  To = '\xA1',
  _o = '\xEC',
  Io = '\xBF',
  jo = '\xEF',
  Ro = '\xAB',
  Do = '<',
  Mo = '\xAF',
  Bo = '\xB5',
  Ho = '\xB7',
  zo = '\xA0',
  Uo = '\xAC',
  Po = '\xF1',
  Go = '\xF3',
  qo = '\xF4',
  Zo = '\xF2',
  Wo = '\xAA',
  Xo = '\xBA',
  Ko = '\xF8',
  Yo = '\xF5',
  Vo = '\xF6',
  Jo = '\xB6',
  Qo = '\xB1',
  el = '\xA3',
  nl = '"',
  tl = '\xBB',
  al = '\xAE',
  rl = '\xA7',
  ol = '\xAD',
  ll = '\xB9',
  il = '\xB2',
  sl = '\xB3',
  cl = '\xDF',
  ul = '\xFE',
  pl = '\xD7',
  dl = '\xFA',
  gl = '\xFB',
  fl = '\xF9',
  vl = '\xA8',
  hl = '\xFC',
  ml = '\xFD',
  yl = '\xA5',
  bl = '\xFF'
var xl = {
    AElig: wr,
    AMP: Sr,
    Aacute: Ar,
    Acirc: kr,
    Agrave: Er,
    Aring: $r,
    Atilde: Nr,
    Auml: Cr,
    COPY: Lr,
    Ccedil: Or,
    ETH: Fr,
    Eacute: Tr,
    Ecirc: _r,
    Egrave: Ir,
    Euml: jr,
    GT: Rr,
    Iacute: Dr,
    Icirc: Mr,
    Igrave: Br,
    Iuml: Hr,
    LT: zr,
    Ntilde: Ur,
    Oacute: Pr,
    Ocirc: Gr,
    Ograve: qr,
    Oslash: Zr,
    Otilde: Wr,
    Ouml: Xr,
    QUOT: Kr,
    REG: Yr,
    THORN: Vr,
    Uacute: Jr,
    Ucirc: Qr,
    Ugrave: eo,
    Uuml: no,
    Yacute: to,
    aacute: ao,
    acirc: ro,
    acute: oo,
    aelig: lo,
    agrave: io,
    amp: so,
    aring: co,
    atilde: uo,
    auml: po,
    brvbar: go,
    ccedil: fo,
    cedil: vo,
    cent: ho,
    copy: mo,
    curren: yo,
    deg: bo,
    divide: xo,
    eacute: wo,
    ecirc: So,
    egrave: Ao,
    eth: ko,
    euml: Eo,
    frac12: $o,
    frac14: No,
    frac34: Co,
    gt: Lo,
    iacute: Oo,
    icirc: Fo,
    iexcl: To,
    igrave: _o,
    iquest: Io,
    iuml: jo,
    laquo: Ro,
    lt: Do,
    macr: Mo,
    micro: Bo,
    middot: Ho,
    nbsp: zo,
    not: Uo,
    ntilde: Po,
    oacute: Go,
    ocirc: qo,
    ograve: Zo,
    ordf: Wo,
    ordm: Xo,
    oslash: Ko,
    otilde: Yo,
    ouml: Vo,
    para: Jo,
    plusmn: Qo,
    pound: el,
    quot: nl,
    raquo: tl,
    reg: al,
    sect: rl,
    shy: ol,
    sup1: ll,
    sup2: il,
    sup3: sl,
    szlig: cl,
    thorn: ul,
    times: pl,
    uacute: dl,
    ucirc: gl,
    ugrave: fl,
    uml: vl,
    uuml: hl,
    yacute: ml,
    yen: yl,
    yuml: bl,
  },
  wl = {
    0: '\uFFFD',
    128: '\u20AC',
    130: '\u201A',
    131: '\u0192',
    132: '\u201E',
    133: '\u2026',
    134: '\u2020',
    135: '\u2021',
    136: '\u02C6',
    137: '\u2030',
    138: '\u0160',
    139: '\u2039',
    140: '\u0152',
    142: '\u017D',
    145: '\u2018',
    146: '\u2019',
    147: '\u201C',
    148: '\u201D',
    149: '\u2022',
    150: '\u2013',
    151: '\u2014',
    152: '\u02DC',
    153: '\u2122',
    154: '\u0161',
    155: '\u203A',
    156: '\u0153',
    158: '\u017E',
    159: '\u0178',
  },
  Xn = Sl
function Sl(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e
  return n >= 48 && n <= 57
}
var Al = kl
function kl(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e
  return (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57)
}
var El = $l
function $l(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e
  return (n >= 97 && n <= 122) || (n >= 65 && n <= 90)
}
var Nl = El,
  Cl = Xn,
  Ll = Ol
function Ol(e) {
  return Nl(e) || Cl(e)
}
var me,
  Fl = 59,
  Tl = _l
function _l(e) {
  var n = '&' + e + ';',
    t
  return (
    (me = me || document.createElement('i')),
    (me.innerHTML = n),
    (t = me.textContent),
    (t.charCodeAt(t.length - 1) === Fl && e !== 'semi') || t === n ? !1 : t
  )
}
var xn = xl,
  wn = wl,
  Il = Xn,
  jl = Al,
  Kn = Ll,
  Rl = Tl,
  Dl = Yl,
  Ml = {}.hasOwnProperty,
  re = String.fromCharCode,
  Bl = Function.prototype,
  Sn = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  Hl = 9,
  An = 10,
  zl = 12,
  Ul = 32,
  kn = 38,
  Pl = 59,
  Gl = 60,
  ql = 61,
  Zl = 35,
  Wl = 88,
  Xl = 120,
  Kl = 65533,
  oe = 'named',
  Ke = 'hexadecimal',
  Ye = 'decimal',
  Ve = {}
Ve[Ke] = 16
Ve[Ye] = 10
var Ae = {}
Ae[oe] = Kn
Ae[Ye] = Il
Ae[Ke] = jl
var Yn = 1,
  Vn = 2,
  Jn = 3,
  Qn = 4,
  et = 5,
  Le = 6,
  nt = 7,
  ee = {}
ee[Yn] = 'Named character references must be terminated by a semicolon'
ee[Vn] = 'Numeric character references must be terminated by a semicolon'
ee[Jn] = 'Named character references cannot be empty'
ee[Qn] = 'Numeric character references cannot be empty'
ee[et] = 'Named character references must be known'
ee[Le] = 'Numeric character references cannot be disallowed'
ee[nt] =
  'Numeric character references cannot be outside the permissible Unicode range'
function Yl(e, n) {
  var t = {},
    a,
    r
  n || (n = {})
  for (r in Sn) (a = n[r]), (t[r] = a == null ? Sn[r] : a)
  return (
    (t.position.indent || t.position.start) &&
      ((t.indent = t.position.indent || []), (t.position = t.position.start)),
    Vl(e, t)
  )
}
function Vl(e, n) {
  var t = n.additional,
    a = n.nonTerminated,
    r = n.text,
    s = n.reference,
    d = n.warning,
    i = n.textContext,
    v = n.referenceContext,
    h = n.warningContext,
    b = n.position,
    g = n.indent || [],
    m = e.length,
    w = 0,
    k = -1,
    N = b.column || 1,
    S = b.line || 1,
    A = '',
    o = [],
    l,
    p,
    u,
    c,
    y,
    x,
    f,
    $,
    C,
    _,
    D,
    P,
    H,
    M,
    X,
    L,
    I,
    T,
    O
  for (
    typeof t == 'string' && (t = t.charCodeAt(0)),
      L = j(),
      $ = d ? ae : Bl,
      w--,
      m++;
    ++w < m;

  )
    if ((y === An && (N = g[k] || 1), (y = e.charCodeAt(w)), y === kn)) {
      if (
        ((f = e.charCodeAt(w + 1)),
        f === Hl ||
          f === An ||
          f === zl ||
          f === Ul ||
          f === kn ||
          f === Gl ||
          f !== f ||
          (t && f === t))
      ) {
        ;(A += re(y)), N++
        continue
      }
      for (
        H = w + 1,
          P = H,
          O = H,
          f === Zl
            ? ((O = ++P),
              (f = e.charCodeAt(O)),
              f === Wl || f === Xl ? ((M = Ke), (O = ++P)) : (M = Ye))
            : (M = oe),
          l = '',
          D = '',
          c = '',
          X = Ae[M],
          O--;
        ++O < m && ((f = e.charCodeAt(O)), !!X(f));

      )
        (c += re(f)), M === oe && Ml.call(xn, c) && ((l = c), (D = xn[c]))
      ;(u = e.charCodeAt(O) === Pl),
        u && (O++, (p = M === oe ? Rl(c) : !1), p && ((l = c), (D = p))),
        (T = 1 + O - H),
        (!u && !a) ||
          (c
            ? M === oe
              ? (u && !D
                  ? $(et, 1)
                  : (l !== c && ((O = P + l.length), (T = 1 + O - P), (u = !1)),
                    u ||
                      ((C = l ? Yn : Jn),
                      n.attribute
                        ? ((f = e.charCodeAt(O)),
                          f === ql
                            ? ($(C, T), (D = null))
                            : Kn(f)
                            ? (D = null)
                            : $(C, T))
                        : $(C, T))),
                (x = D))
              : (u || $(Vn, T),
                (x = parseInt(c, Ve[M])),
                Jl(x)
                  ? ($(nt, T), (x = re(Kl)))
                  : x in wn
                  ? ($(Le, T), (x = wn[x]))
                  : ((_ = ''),
                    Ql(x) && $(Le, T),
                    x > 65535 &&
                      ((x -= 65536),
                      (_ += re((x >>> 10) | 55296)),
                      (x = 56320 | (x & 1023))),
                    (x = _ + re(x))))
            : M !== oe && $(Qn, T)),
        x
          ? (z(),
            (L = j()),
            (w = O - 1),
            (N += O - H + 1),
            o.push(x),
            (I = j()),
            I.offset++,
            s && s.call(v, x, {start: L, end: I}, e.slice(H - 1, O)),
            (L = I))
          : ((c = e.slice(H - 1, O)), (A += c), (N += c.length), (w = O - 1))
    } else y === 10 && (S++, k++, (N = 0)), y === y ? ((A += re(y)), N++) : z()
  return o.join('')
  function j() {
    return {line: S, column: N, offset: w + (b.offset || 0)}
  }
  function ae(K, G) {
    var Y = j()
    ;(Y.column += G), (Y.offset += G), d.call(h, ee[K], Y, K)
  }
  function z() {
    A && (o.push(A), r && r.call(i, A, {start: L, end: j()}), (A = ''))
  }
}
function Jl(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111
}
function Ql(e) {
  return (
    (e >= 1 && e <= 8) ||
    e === 11 ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65535) === 65535 ||
    (e & 65535) === 65534
  )
}
var tt = {exports: {}}
;(function (e) {
  var n =
    typeof window != 'undefined'
      ? window
      : typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope
      ? self
      : {}
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var t = (function (a) {
    var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      s = 0,
      d = {},
      i = {
        manual: a.Prism && a.Prism.manual,
        disableWorkerMessageHandler:
          a.Prism && a.Prism.disableWorkerMessageHandler,
        util: {
          encode: function o(l) {
            return l instanceof v
              ? new v(l.type, o(l.content), l.alias)
              : Array.isArray(l)
              ? l.map(o)
              : l
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ')
          },
          type: function (o) {
            return Object.prototype.toString.call(o).slice(8, -1)
          },
          objId: function (o) {
            return (
              o.__id || Object.defineProperty(o, '__id', {value: ++s}), o.__id
            )
          },
          clone: function o(l, p) {
            p = p || {}
            var u, c
            switch (i.util.type(l)) {
              case 'Object':
                if (((c = i.util.objId(l)), p[c])) return p[c]
                ;(u = {}), (p[c] = u)
                for (var y in l) l.hasOwnProperty(y) && (u[y] = o(l[y], p))
                return u
              case 'Array':
                return (
                  (c = i.util.objId(l)),
                  p[c]
                    ? p[c]
                    : ((u = []),
                      (p[c] = u),
                      l.forEach(function (x, f) {
                        u[f] = o(x, p)
                      }),
                      u)
                )
              default:
                return l
            }
          },
          getLanguage: function (o) {
            for (; o; ) {
              var l = r.exec(o.className)
              if (l) return l[1].toLowerCase()
              o = o.parentElement
            }
            return 'none'
          },
          setLanguage: function (o, l) {
            ;(o.className = o.className.replace(RegExp(r, 'gi'), '')),
              o.classList.add('language-' + l)
          },
          currentScript: function () {
            if (typeof document == 'undefined') return null
            if ('currentScript' in document && 1 < 2)
              return document.currentScript
            try {
              throw new Error()
            } catch (u) {
              var o = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(u.stack) ||
                [])[1]
              if (o) {
                var l = document.getElementsByTagName('script')
                for (var p in l) if (l[p].src == o) return l[p]
              }
              return null
            }
          },
          isActive: function (o, l, p) {
            for (var u = 'no-' + l; o; ) {
              var c = o.classList
              if (c.contains(l)) return !0
              if (c.contains(u)) return !1
              o = o.parentElement
            }
            return !!p
          },
        },
        languages: {
          plain: d,
          plaintext: d,
          text: d,
          txt: d,
          extend: function (o, l) {
            var p = i.util.clone(i.languages[o])
            for (var u in l) p[u] = l[u]
            return p
          },
          insertBefore: function (o, l, p, u) {
            u = u || i.languages
            var c = u[o],
              y = {}
            for (var x in c)
              if (c.hasOwnProperty(x)) {
                if (x == l)
                  for (var f in p) p.hasOwnProperty(f) && (y[f] = p[f])
                p.hasOwnProperty(x) || (y[x] = c[x])
              }
            var $ = u[o]
            return (
              (u[o] = y),
              i.languages.DFS(i.languages, function (C, _) {
                _ === $ && C != o && (this[C] = y)
              }),
              y
            )
          },
          DFS: function o(l, p, u, c) {
            c = c || {}
            var y = i.util.objId
            for (var x in l)
              if (l.hasOwnProperty(x)) {
                p.call(l, x, l[x], u || x)
                var f = l[x],
                  $ = i.util.type(f)
                $ === 'Object' && !c[y(f)]
                  ? ((c[y(f)] = !0), o(f, p, null, c))
                  : $ === 'Array' && !c[y(f)] && ((c[y(f)] = !0), o(f, p, x, c))
              }
          },
        },
        plugins: {},
        highlightAll: function (o, l) {
          i.highlightAllUnder(document, o, l)
        },
        highlightAllUnder: function (o, l, p) {
          var u = {
            callback: p,
            container: o,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          }
          i.hooks.run('before-highlightall', u),
            (u.elements = Array.prototype.slice.apply(
              u.container.querySelectorAll(u.selector)
            )),
            i.hooks.run('before-all-elements-highlight', u)
          for (var c = 0, y; (y = u.elements[c++]); )
            i.highlightElement(y, l === !0, u.callback)
        },
        highlightElement: function (o, l, p) {
          var u = i.util.getLanguage(o),
            c = i.languages[u]
          i.util.setLanguage(o, u)
          var y = o.parentElement
          y && y.nodeName.toLowerCase() === 'pre' && i.util.setLanguage(y, u)
          var x = o.textContent,
            f = {element: o, language: u, grammar: c, code: x}
          function $(_) {
            ;(f.highlightedCode = _),
              i.hooks.run('before-insert', f),
              (f.element.innerHTML = f.highlightedCode),
              i.hooks.run('after-highlight', f),
              i.hooks.run('complete', f),
              p && p.call(f.element)
          }
          if (
            (i.hooks.run('before-sanity-check', f),
            (y = f.element.parentElement),
            y &&
              y.nodeName.toLowerCase() === 'pre' &&
              !y.hasAttribute('tabindex') &&
              y.setAttribute('tabindex', '0'),
            !f.code)
          ) {
            i.hooks.run('complete', f), p && p.call(f.element)
            return
          }
          if ((i.hooks.run('before-highlight', f), !f.grammar)) {
            $(i.util.encode(f.code))
            return
          }
          if (l && a.Worker) {
            var C = new Worker(i.filename)
            ;(C.onmessage = function (_) {
              $(_.data)
            }),
              C.postMessage(
                JSON.stringify({
                  language: f.language,
                  code: f.code,
                  immediateClose: !0,
                })
              )
          } else $(i.highlight(f.code, f.grammar, f.language))
        },
        highlight: function (o, l, p) {
          var u = {code: o, grammar: l, language: p}
          if ((i.hooks.run('before-tokenize', u), !u.grammar))
            throw new Error('The language "' + u.language + '" has no grammar.')
          return (
            (u.tokens = i.tokenize(u.code, u.grammar)),
            i.hooks.run('after-tokenize', u),
            v.stringify(i.util.encode(u.tokens), u.language)
          )
        },
        tokenize: function (o, l) {
          var p = l.rest
          if (p) {
            for (var u in p) l[u] = p[u]
            delete l.rest
          }
          var c = new g()
          return m(c, c.head, o), b(o, c, l, c.head, 0), k(c)
        },
        hooks: {
          all: {},
          add: function (o, l) {
            var p = i.hooks.all
            ;(p[o] = p[o] || []), p[o].push(l)
          },
          run: function (o, l) {
            var p = i.hooks.all[o]
            if (!(!p || !p.length)) for (var u = 0, c; (c = p[u++]); ) c(l)
          },
        },
        Token: v,
      }
    a.Prism = i
    function v(o, l, p, u) {
      ;(this.type = o),
        (this.content = l),
        (this.alias = p),
        (this.length = (u || '').length | 0)
    }
    v.stringify = function o(l, p) {
      if (typeof l == 'string') return l
      if (Array.isArray(l)) {
        var u = ''
        return (
          l.forEach(function ($) {
            u += o($, p)
          }),
          u
        )
      }
      var c = {
          type: l.type,
          content: o(l.content, p),
          tag: 'span',
          classes: ['token', l.type],
          attributes: {},
          language: p,
        },
        y = l.alias
      y &&
        (Array.isArray(y)
          ? Array.prototype.push.apply(c.classes, y)
          : c.classes.push(y)),
        i.hooks.run('wrap', c)
      var x = ''
      for (var f in c.attributes)
        x +=
          ' ' + f + '="' + (c.attributes[f] || '').replace(/"/g, '&quot;') + '"'
      return (
        '<' +
        c.tag +
        ' class="' +
        c.classes.join(' ') +
        '"' +
        x +
        '>' +
        c.content +
        '</' +
        c.tag +
        '>'
      )
    }
    function h(o, l, p, u) {
      o.lastIndex = l
      var c = o.exec(p)
      if (c && u && c[1]) {
        var y = c[1].length
        ;(c.index += y), (c[0] = c[0].slice(y))
      }
      return c
    }
    function b(o, l, p, u, c, y) {
      for (var x in p)
        if (!(!p.hasOwnProperty(x) || !p[x])) {
          var f = p[x]
          f = Array.isArray(f) ? f : [f]
          for (var $ = 0; $ < f.length; ++$) {
            if (y && y.cause == x + ',' + $) return
            var C = f[$],
              _ = C.inside,
              D = !!C.lookbehind,
              P = !!C.greedy,
              H = C.alias
            if (P && !C.pattern.global) {
              var M = C.pattern.toString().match(/[imsuy]*$/)[0]
              C.pattern = RegExp(C.pattern.source, M + 'g')
            }
            for (
              var X = C.pattern || C, L = u.next, I = c;
              L !== l.tail && !(y && I >= y.reach);
              I += L.value.length, L = L.next
            ) {
              var T = L.value
              if (l.length > o.length) return
              if (!(T instanceof v)) {
                var O = 1,
                  j
                if (P) {
                  if (((j = h(X, I, o, D)), !j || j.index >= o.length)) break
                  var G = j.index,
                    ae = j.index + j[0].length,
                    z = I
                  for (z += L.value.length; G >= z; )
                    (L = L.next), (z += L.value.length)
                  if (((z -= L.value.length), (I = z), L.value instanceof v))
                    continue
                  for (
                    var K = L;
                    K !== l.tail && (z < ae || typeof K.value == 'string');
                    K = K.next
                  )
                    O++, (z += K.value.length)
                  O--, (T = o.slice(I, z)), (j.index -= I)
                } else if (((j = h(X, 0, T, D)), !j)) continue
                var G = j.index,
                  Y = j[0],
                  se = T.slice(0, G),
                  an = T.slice(G + Y.length),
                  ke = I + T.length
                y && ke > y.reach && (y.reach = ke)
                var ve = L.prev
                se && ((ve = m(l, ve, se)), (I += se.length)), w(l, ve, O)
                var lt = new v(x, _ ? i.tokenize(Y, _) : Y, H, Y)
                if (((L = m(l, ve, lt)), an && m(l, L, an), O > 1)) {
                  var Ee = {cause: x + ',' + $, reach: ke}
                  b(o, l, p, L.prev, I, Ee),
                    y && Ee.reach > y.reach && (y.reach = Ee.reach)
                }
              }
            }
          }
        }
    }
    function g() {
      var o = {value: null, prev: null, next: null},
        l = {value: null, prev: o, next: null}
      ;(o.next = l), (this.head = o), (this.tail = l), (this.length = 0)
    }
    function m(o, l, p) {
      var u = l.next,
        c = {value: p, prev: l, next: u}
      return (l.next = c), (u.prev = c), o.length++, c
    }
    function w(o, l, p) {
      for (var u = l.next, c = 0; c < p && u !== o.tail; c++) u = u.next
      ;(l.next = u), (u.prev = l), (o.length -= c)
    }
    function k(o) {
      for (var l = [], p = o.head.next; p !== o.tail; )
        l.push(p.value), (p = p.next)
      return l
    }
    if (!a.document)
      return (
        a.addEventListener &&
          (i.disableWorkerMessageHandler ||
            a.addEventListener(
              'message',
              function (o) {
                var l = JSON.parse(o.data),
                  p = l.language,
                  u = l.code,
                  c = l.immediateClose
                a.postMessage(i.highlight(u, i.languages[p], p)), c && a.close()
              },
              !1
            )),
        i
      )
    var N = i.util.currentScript()
    N &&
      ((i.filename = N.src), N.hasAttribute('data-manual') && (i.manual = !0))
    function S() {
      i.manual || i.highlightAll()
    }
    if (!i.manual) {
      var A = document.readyState
      A === 'loading' || (A === 'interactive' && N && N.defer)
        ? document.addEventListener('DOMContentLoaded', S)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(S)
        : window.setTimeout(S, 16)
    }
    return i
  })(n)
  e.exports && (e.exports = t), typeof we != 'undefined' && (we.Prism = t)
})(tt)
var ei = Je
Je.displayName = 'clike'
Je.aliases = []
function Je(e) {
  e.languages.clike = {
    comment: [
      {pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0},
      {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0},
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {punctuation: /[.\\]/},
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }
}
var ni = Qe
Qe.displayName = 'javascript'
Qe.aliases = ['js']
function Qe(e) {
  ;(e.languages.javascript = e.languages.extend('clike', {
    'class-name': [
      e.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      {pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0},
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          (/NaN|Infinity/.source +
            '|' +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            /\d+(?:_\d+)*n/.source +
            '|' +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (e.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    e.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: e.languages.regex,
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/,
        },
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function',
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    e.languages.insertBefore('javascript', 'string', {
      hashbang: {pattern: /^#!.*/, greedy: !0, alias: 'comment'},
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation',
              },
              rest: e.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      'string-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
      },
    }),
    e.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property',
      },
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined('script', 'javascript'),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript'
      )),
    (e.languages.js = e.languages.javascript)
}
var de =
    typeof globalThis == 'object'
      ? globalThis
      : typeof self == 'object'
      ? self
      : typeof window == 'object'
      ? window
      : typeof we == 'object'
      ? we
      : {},
  ti = mi()
de.Prism = {manual: !0, disableWorkerMessageHandler: !0}
var ai = xr,
  ri = Dl,
  at = tt.exports,
  oi = Ln,
  li = Cn,
  ii = ei,
  si = ni
ti()
var en = {}.hasOwnProperty
function rt() {}
rt.prototype = at
var R = new rt(),
  nn = R
R.highlight = ui
R.register = fe
R.alias = ci
R.registered = pi
R.listLanguages = di
fe(oi)
fe(li)
fe(ii)
fe(si)
R.util.encode = vi
R.Token.stringify = gi
function fe(e) {
  if (typeof e != 'function' || !e.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + e + '`')
  R.languages[e.displayName] === void 0 && e(R)
}
function ci(e, n) {
  var t = R.languages,
    a = e,
    r,
    s,
    d,
    i
  n && ((a = {}), (a[e] = n))
  for (r in a)
    for (
      s = a[r], s = typeof s == 'string' ? [s] : s, d = s.length, i = -1;
      ++i < d;

    )
      t[s[i]] = t[r]
}
function ui(e, n) {
  var t = at.highlight,
    a
  if (typeof e != 'string')
    throw new Error('Expected `string` for `value`, got `' + e + '`')
  if (R.util.type(n) === 'Object') (a = n), (n = null)
  else {
    if (typeof n != 'string')
      throw new Error('Expected `string` for `name`, got `' + n + '`')
    if (en.call(R.languages, n)) a = R.languages[n]
    else throw new Error('Unknown language: `' + n + '` is not registered')
  }
  return t.call(this, e, a, n)
}
function pi(e) {
  if (typeof e != 'string')
    throw new Error('Expected `string` for `language`, got `' + e + '`')
  return en.call(R.languages, e)
}
function di() {
  var e = R.languages,
    n = [],
    t
  for (t in e) en.call(e, t) && typeof e[t] == 'object' && n.push(t)
  return n
}
function gi(e, n, t) {
  var a
  return typeof e == 'string'
    ? {type: 'text', value: e}
    : R.util.type(e) === 'Array'
    ? fi(e, n)
    : ((a = {
        type: e.type,
        content: R.Token.stringify(e.content, n, t),
        tag: 'span',
        classes: ['token', e.type],
        attributes: {},
        language: n,
        parent: t,
      }),
      e.alias && (a.classes = a.classes.concat(e.alias)),
      R.hooks.run('wrap', a),
      ai(a.tag + '.' + a.classes.join('.'), hi(a.attributes), a.content))
}
function fi(e, n) {
  for (var t = [], a = e.length, r = -1, s; ++r < a; )
    (s = e[r]), s !== '' && s !== null && s !== void 0 && t.push(s)
  for (r = -1, a = t.length; ++r < a; )
    (s = t[r]), (t[r] = R.Token.stringify(s, n, t))
  return t
}
function vi(e) {
  return e
}
function hi(e) {
  var n
  for (n in e) e[n] = ri(e[n])
  return e
}
function mi() {
  var e = 'Prism' in de,
    n = e ? de.Prism : void 0
  return t
  function t() {
    e ? (de.Prism = n) : delete de.Prism, (e = void 0), (n = void 0)
  }
}
var tn = ta(nn, {})
tn.registerLanguage = function (e, n) {
  return nn.register(n)
}
tn.alias = function (e, n) {
  return nn.alias(e, n)
}
var W = tn
function yi(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  )
}
function ot(e, n) {
  return Si(e) || wi(e, n) || xi(e, n) || bi()
}
function bi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function xi(e, n) {
  if (!!e) {
    if (typeof e == 'string') return En(e, n)
    var t = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e)
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return En(e, n)
  }
}
function En(e, n) {
  ;(n == null || n > e.length) && (n = e.length)
  for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t]
  return a
}
function wi(e, n) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
  if (t != null) {
    var a = [],
      r = !0,
      s = !1,
      d,
      i
    try {
      for (
        t = t.call(e);
        !(r = (d = t.next()).done) && (a.push(d.value), !(n && a.length === n));
        r = !0
      );
    } catch (v) {
      ;(s = !0), (i = v)
    } finally {
      try {
        !r && t.return != null && t.return()
      } finally {
        if (s) throw i
      }
    }
    return a
  }
}
function Si(e) {
  if (Array.isArray(e)) return e
}
var ye = Oe.navigator,
  ue = Oe.document,
  $n = Oe.window
W.registerLanguage('jsextra', wt)
W.registerLanguage('jsx', ht)
W.registerLanguage('json', At)
W.registerLanguage('yml', Ot)
W.registerLanguage('md', Ct)
W.registerLanguage('bash', yt)
W.registerLanguage('css', bt)
W.registerLanguage('html', $t)
W.registerLanguage('tsx', jt)
W.registerLanguage('typescript', Ft)
W.registerLanguage('graphql', Et)
var Ai = ct(2)(function (e) {
    return Object.entries(e.code || {}).reduce(function (n, t) {
      var a = ot(t, 2),
        r = a[0],
        s = a[1]
      return Object.assign(Object.assign({}, n), yi({}, '* .'.concat(r), s))
    }, {})
  }),
  ki = Ei()
function Ei() {
  var e = this
  return ye != null && ye.clipboard
    ? function (n) {
        return ye.clipboard.writeText(n)
      }
    : function (n) {
        return dt(
          e,
          void 0,
          void 0,
          regeneratorRuntime.mark(function t() {
            var a, r
            return regeneratorRuntime.wrap(function (d) {
              for (;;)
                switch ((d.prev = d.next)) {
                  case 0:
                    ;(a = ue.createElement('TEXTAREA')),
                      (r = ue.activeElement),
                      (a.value = n),
                      ue.body.appendChild(a),
                      a.select(),
                      ue.execCommand('copy'),
                      ue.body.removeChild(a),
                      r.focus()
                  case 8:
                  case 'end':
                    return d.stop()
                }
            }, t)
          })
        )
      }
}
var $i = Se.div(
    function (e) {
      var n = e.theme
      return {
        position: 'relative',
        overflow: 'hidden',
        color: n.color.defaultText,
      }
    },
    function (e) {
      var n = e.theme,
        t = e.bordered
      return t
        ? {
            border: '1px solid '.concat(n.appBorderColor),
            borderRadius: n.borderRadius,
            background: n.background.content,
          }
        : {}
    }
  ),
  Ni = Se(function (e) {
    var n = e.children,
      t = e.className
    return be(gt, {horizontal: !0, vertical: !0, className: t, children: n})
  })({position: 'relative'}, function (e) {
    var n = e.theme
    return Ai(n)
  }),
  Ci = Se.pre(function (e) {
    var n = e.theme,
      t = e.padded
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: t ? n.layoutMargin : 0,
    }
  }),
  Li = Se.div(function (e) {
    var n = e.theme
    return {flex: 1, paddingLeft: 2, paddingRight: n.layoutMargin, opacity: 1}
  }),
  Ti = function (n) {
    var t = n.children,
      a = n.language,
      r = a === void 0 ? 'jsx' : a,
      s = n.copyable,
      d = s === void 0 ? !1 : s,
      i = n.bordered,
      v = i === void 0 ? !1 : i,
      h = n.padded,
      b = h === void 0 ? !1 : h,
      g = n.format,
      m = g === void 0 ? !0 : g,
      w = n.formatter,
      k = w === void 0 ? null : w,
      N = n.className,
      S = N === void 0 ? null : N,
      A = n.showLineNumbers,
      o = A === void 0 ? !1 : A,
      l = ft(n, [
        'children',
        'language',
        'copyable',
        'bordered',
        'padded',
        'format',
        'formatter',
        'className',
        'showLineNumbers',
      ])
    if (typeof t != 'string' || !t.trim()) return null
    var p = k ? k(m, t) : t.trim(),
      u = rn.exports.useState(!1),
      c = ot(u, 2),
      y = c[0],
      x = c[1],
      f = rn.exports.useCallback(function ($) {
        $.preventDefault()
        var C = $n.getSelection().toString(),
          _ = $.type !== 'click' && C ? C : p
        ki(_)
          .then(function () {
            x(!0),
              $n.setTimeout(function () {
                return x(!1)
              }, 1500)
          })
          .catch(ut.error)
      }, [])
    return pt($i, {
      bordered: v,
      padded: b,
      className: S,
      onCopyCapture: f,
      children: [
        be(Ni, {
          children: be(W, {
            ...Object.assign(
              {
                padded: b || v,
                language: r,
                showLineNumbers: o,
                showInlineLineNumbers: o,
                useInlineStyles: !1,
                PreTag: Ci,
                CodeTag: Li,
                lineNumberContainerStyle: {},
              },
              l
            ),
            children: p,
          }),
        }),
        d
          ? be(vt, {actionItems: [{title: y ? 'Copied' : 'Copy', onClick: f}]})
          : null,
      ],
    })
  }
export {
  Ti as SyntaxHighlighter,
  Ei as createCopyToClipboardFunction,
  Ti as default,
}
//# sourceMappingURL=syntaxhighlighter-82dea71a.2fa53c45.js.map
