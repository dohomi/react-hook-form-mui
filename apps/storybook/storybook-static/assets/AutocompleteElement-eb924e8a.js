import {
  j as I,
  d as ue,
  u as rt,
  _ as at,
  e as et,
  b as ye,
  F as wt,
} from './useThemeProps-3be52b90.js'
import {
  r as We,
  x as Tt,
  o as it,
  n as st,
  p as P,
  c as ge,
  q as lt,
  y as Ot,
  z as St,
  t as Mt,
  C as Pt,
} from './Button-934b6c03.js'
import {_ as u} from './extends-98964cd2.js'
import {r as O} from './index-ebeaab24.js'
import {
  i as tt,
  a as Be,
  b as ft,
  f as Fe,
  M as $t,
  A as Dt,
} from './Select-c55867f3.js'
import {c as Nt} from './createSvgIcon-2ce5bfe4.js'
import {I as vt} from './IconButton-ab13b570.js'
import {M as kt} from './Popper-852f71a7.js'
import {u as Et} from './useId-3f89f7ef.js'
import {u as ot} from './useControlled-32189460.js'
import {C as zt} from './Chip-6299b5c8.js'
import {C as Vt} from './Checkbox-d8c1e2f4.js'
import {T as Ht} from './TextField-4354f47c.js'
function gt(e) {
  return typeof e.normalize < 'u'
    ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : e
}
function Wt(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: a = !0,
    limit: f,
    matchFrom: m = 'any',
    stringify: C,
    trim: S = !1,
  } = e
  return (c, {inputValue: D, getOptionLabel: k}) => {
    let y = S ? D.trim() : D
    a && (y = y.toLowerCase()), t && (y = gt(y))
    const E = y
      ? c.filter((U) => {
          let A = (C || k)(U)
          return (
            a && (A = A.toLowerCase()),
            t && (A = gt(A)),
            m === 'start' ? A.indexOf(y) === 0 : A.indexOf(y) > -1
          )
        })
      : c
    return typeof f == 'number' ? E.slice(0, f) : E
  }
}
function nt(e, t) {
  for (let a = 0; a < e.length; a += 1) if (t(e[a])) return a
  return -1
}
const Bt = Wt(),
  ht = 5
function Ft(e) {
  const {
      autoComplete: t = !1,
      autoHighlight: a = !1,
      autoSelect: f = !1,
      blurOnSelect: m = !1,
      clearOnBlur: C = !e.freeSolo,
      clearOnEscape: S = !1,
      componentName: c = 'useAutocomplete',
      defaultValue: D = e.multiple ? [] : null,
      disableClearable: k = !1,
      disableCloseOnSelect: y = !1,
      disabled: E,
      disabledItemsFocusable: U = !1,
      disableListWrap: A = !1,
      filterOptions: Q = Bt,
      filterSelectedOptions: oe = !1,
      freeSolo: q = !1,
      getOptionDisabled: B,
      getOptionLabel: z = (n) => {
        var o
        return (o = n.label) != null ? o : n
      },
      groupBy: L,
      handleHomeEndKeys: he = !e.freeSolo,
      id: d,
      includeInputInList: g = !1,
      inputValue: K,
      isOptionEqualToValue: j = (n, o) => n === o,
      multiple: h = !1,
      onChange: X,
      onClose: Ge,
      onHighlightChange: Oe,
      onInputChange: Y,
      onOpen: we,
      open: Ue,
      openOnFocus: Te = !1,
      options: qe,
      readOnly: Se = !1,
      selectOnFocus: ct = !e.freeSolo,
      value: $e,
    } = e,
    V = Et(d)
  let ne = z
  ne = (n) => {
    const o = z(n)
    return typeof o != 'string' ? String(o) : o
  }
  const be = O.useRef(!1),
    ve = O.useRef(!0),
    R = O.useRef(null),
    F = O.useRef(null),
    [Me, Pe] = O.useState(null),
    [Z, ke] = O.useState(-1),
    De = a ? 0 : -1,
    H = O.useRef(De),
    [s, Ke] = ot({controlled: $e, default: D, name: c}),
    [x, pe] = ot({controlled: K, default: '', name: c, state: 'inputValue'}),
    [Ae, me] = O.useState(!1),
    xe = O.useCallback(
      (n, o) => {
        if (!(h ? s.length < o.length : o !== null) && !C) return
        let i
        if (h) i = ''
        else if (o == null) i = ''
        else {
          const b = ne(o)
          i = typeof b == 'string' ? b : ''
        }
        x !== i && (pe(i), Y && Y(n, i, 'reset'))
      },
      [ne, x, h, Y, pe, C, s]
    ),
    Le = O.useRef()
  O.useEffect(() => {
    const n = s !== Le.current
    ;(Le.current = s), !(Ae && !n) && ((q && !n) || xe(null, s))
  }, [s, xe, Ae, Le, q])
  const [ie, Ne] = ot({controlled: Ue, default: !1, name: c, state: 'open'}),
    [je, Ee] = O.useState(!0),
    ze = !h && s != null && x === ne(s),
    W = ie && !Se,
    w = W
      ? Q(
          qe.filter(
            (n) => !(oe && (h ? s : [s]).some((o) => o !== null && j(n, o)))
          ),
          {inputValue: ze && je ? '' : x, getOptionLabel: ne}
        )
      : [],
    de = ie && w.length > 0 && !Se,
    Ie = We((n) => {
      n === -1
        ? R.current.focus()
        : Me.querySelector(`[data-tag-index="${n}"]`).focus()
    })
  O.useEffect(() => {
    h && Z > s.length - 1 && (ke(-1), Ie(-1))
  }, [s, h, Z, Ie])
  function Ze(n, o) {
    if (!F.current || n === -1) return -1
    let r = n
    for (;;) {
      if ((o === 'next' && r === w.length) || (o === 'previous' && r === -1))
        return -1
      const i = F.current.querySelector(`[data-option-index="${r}"]`),
        b = U
          ? !1
          : !i || i.disabled || i.getAttribute('aria-disabled') === 'true'
      if ((i && !i.hasAttribute('tabindex')) || b) r += o === 'next' ? 1 : -1
      else return r
    }
  }
  const J = We(({event: n, index: o, reason: r = 'auto'}) => {
      if (
        ((H.current = o),
        o === -1
          ? R.current.removeAttribute('aria-activedescendant')
          : R.current.setAttribute('aria-activedescendant', `${V}-option-${o}`),
        Oe && Oe(n, o === -1 ? null : w[o], r),
        !F.current)
      )
        return
      const i = F.current.querySelector('[role="option"].Mui-focused')
      i &&
        (i.classList.remove('Mui-focused'),
        i.classList.remove('Mui-focusVisible'))
      const b = F.current.parentElement.querySelector('[role="listbox"]')
      if (!b) return
      if (o === -1) {
        b.scrollTop = 0
        return
      }
      const T = F.current.querySelector(`[data-option-index="${o}"]`)
      if (
        T &&
        (T.classList.add('Mui-focused'),
        r === 'keyboard' && T.classList.add('Mui-focusVisible'),
        b.scrollHeight > b.clientHeight && r !== 'mouse')
      ) {
        const v = T,
          te = b.clientHeight + b.scrollTop,
          dt = v.offsetTop + v.offsetHeight
        dt > te
          ? (b.scrollTop = dt - b.clientHeight)
          : v.offsetTop - v.offsetHeight * (L ? 1.3 : 0) < b.scrollTop &&
            (b.scrollTop = v.offsetTop - v.offsetHeight * (L ? 1.3 : 0))
      }
    }),
    _ = We(({event: n, diff: o, direction: r = 'next', reason: i = 'auto'}) => {
      if (!W) return
      const T = Ze(
        (() => {
          const v = w.length - 1
          if (o === 'reset') return De
          if (o === 'start') return 0
          if (o === 'end') return v
          const te = H.current + o
          return te < 0
            ? te === -1 && g
              ? -1
              : (A && H.current !== -1) || Math.abs(o) > 1
              ? 0
              : v
            : te > v
            ? te === v + 1 && g
              ? -1
              : A || Math.abs(o) > 1
              ? v
              : 0
            : te
        })(),
        r
      )
      if ((J({index: T, reason: i, event: n}), t && o !== 'reset'))
        if (T === -1) R.current.value = x
        else {
          const v = ne(w[T])
          ;(R.current.value = v),
            v.toLowerCase().indexOf(x.toLowerCase()) === 0 &&
              x.length > 0 &&
              R.current.setSelectionRange(x.length, v.length)
        }
    }),
    Re = O.useCallback(() => {
      if (!W) return
      const n = h ? s[0] : s
      if (w.length === 0 || n == null) {
        _({diff: 'reset'})
        return
      }
      if (F.current) {
        if (n != null) {
          const o = w[H.current]
          if (h && o && nt(s, (i) => j(o, i)) !== -1) return
          const r = nt(w, (i) => j(i, n))
          r === -1 ? _({diff: 'reset'}) : J({index: r})
          return
        }
        if (H.current >= w.length - 1) {
          J({index: w.length - 1})
          return
        }
        J({index: H.current})
      }
    }, [w.length, h ? !1 : s, oe, _, J, W, x, h]),
    Ce = We((n) => {
      Tt(F, n), n && Re()
    })
  O.useEffect(() => {
    Re()
  }, [Re])
  const re = (n) => {
      ie || (Ne(!0), Ee(!0), we && we(n))
    },
    fe = (n, o) => {
      ie && (Ne(!1), Ge && Ge(n, o))
    },
    ee = (n, o, r, i) => {
      if (h) {
        if (s.length === o.length && s.every((b, T) => b === o[T])) return
      } else if (s === o) return
      X && X(n, o, r, i), Ke(o)
    },
    se = O.useRef(!1),
    ae = (n, o, r = 'selectOption', i = 'options') => {
      let b = r,
        T = o
      if (h) {
        T = Array.isArray(s) ? s.slice() : []
        const v = nt(T, (te) => j(o, te))
        v === -1
          ? T.push(o)
          : i !== 'freeSolo' && (T.splice(v, 1), (b = 'removeOption'))
      }
      xe(n, T),
        ee(n, T, b, {option: o}),
        !y && (!n || (!n.ctrlKey && !n.metaKey)) && fe(n, b),
        (m === !0 ||
          (m === 'touch' && se.current) ||
          (m === 'mouse' && !se.current)) &&
          R.current.blur()
    }
  function M(n, o) {
    if (n === -1) return -1
    let r = n
    for (;;) {
      if ((o === 'next' && r === s.length) || (o === 'previous' && r === -1))
        return -1
      const i = Me.querySelector(`[data-tag-index="${r}"]`)
      if (
        !i ||
        !i.hasAttribute('tabindex') ||
        i.disabled ||
        i.getAttribute('aria-disabled') === 'true'
      )
        r += o === 'next' ? 1 : -1
      else return r
    }
  }
  const $ = (n, o) => {
      if (!h) return
      x === '' && fe(n, 'toggleInput')
      let r = Z
      Z === -1
        ? x === '' && o === 'previous' && (r = s.length - 1)
        : ((r += o === 'next' ? 1 : -1),
          r < 0 && (r = 0),
          r === s.length && (r = -1)),
        (r = M(r, o)),
        ke(r),
        Ie(r)
    },
    G = (n) => {
      ;(be.current = !0),
        pe(''),
        Y && Y(n, '', 'clear'),
        ee(n, h ? [] : null, 'clear')
    },
    ut = (n) => (o) => {
      if (
        (n.onKeyDown && n.onKeyDown(o),
        !o.defaultMuiPrevented &&
          (Z !== -1 &&
            ['ArrowLeft', 'ArrowRight'].indexOf(o.key) === -1 &&
            (ke(-1), Ie(-1)),
          o.which !== 229))
      )
        switch (o.key) {
          case 'Home':
            W &&
              he &&
              (o.preventDefault(),
              _({
                diff: 'start',
                direction: 'next',
                reason: 'keyboard',
                event: o,
              }))
            break
          case 'End':
            W &&
              he &&
              (o.preventDefault(),
              _({
                diff: 'end',
                direction: 'previous',
                reason: 'keyboard',
                event: o,
              }))
            break
          case 'PageUp':
            o.preventDefault(),
              _({
                diff: -ht,
                direction: 'previous',
                reason: 'keyboard',
                event: o,
              }),
              re(o)
            break
          case 'PageDown':
            o.preventDefault(),
              _({diff: ht, direction: 'next', reason: 'keyboard', event: o}),
              re(o)
            break
          case 'ArrowDown':
            o.preventDefault(),
              _({diff: 1, direction: 'next', reason: 'keyboard', event: o}),
              re(o)
            break
          case 'ArrowUp':
            o.preventDefault(),
              _({
                diff: -1,
                direction: 'previous',
                reason: 'keyboard',
                event: o,
              }),
              re(o)
            break
          case 'ArrowLeft':
            $(o, 'previous')
            break
          case 'ArrowRight':
            $(o, 'next')
            break
          case 'Enter':
            if (H.current !== -1 && W) {
              const r = w[H.current],
                i = B ? B(r) : !1
              if ((o.preventDefault(), i)) return
              ae(o, r, 'selectOption'),
                t &&
                  R.current.setSelectionRange(
                    R.current.value.length,
                    R.current.value.length
                  )
            } else
              q &&
                x !== '' &&
                ze === !1 &&
                (h && o.preventDefault(), ae(o, x, 'createOption', 'freeSolo'))
            break
          case 'Escape':
            W
              ? (o.preventDefault(), o.stopPropagation(), fe(o, 'escape'))
              : S &&
                (x !== '' || (h && s.length > 0)) &&
                (o.preventDefault(), o.stopPropagation(), G(o))
            break
          case 'Backspace':
            if (h && !Se && x === '' && s.length > 0) {
              const r = Z === -1 ? s.length - 1 : Z,
                i = s.slice()
              i.splice(r, 1), ee(o, i, 'removeOption', {option: s[r]})
            }
            break
        }
    },
    Je = (n) => {
      me(!0), Te && !be.current && re(n)
    },
    Qe = (n) => {
      if (
        F.current !== null &&
        F.current.parentElement.contains(document.activeElement)
      ) {
        R.current.focus()
        return
      }
      me(!1),
        (ve.current = !0),
        (be.current = !1),
        f && H.current !== -1 && W
          ? ae(n, w[H.current], 'blur')
          : f && q && x !== ''
          ? ae(n, x, 'blur', 'freeSolo')
          : C && xe(n, s),
        fe(n, 'blur')
    },
    Xe = (n) => {
      const o = n.target.value
      x !== o && (pe(o), Ee(!1), Y && Y(n, o, 'input')),
        o === '' ? !k && !h && ee(n, null, 'clear') : re(n)
    },
    Ve = (n) => {
      J({
        event: n,
        index: Number(n.currentTarget.getAttribute('data-option-index')),
        reason: 'mouse',
      })
    },
    p = () => {
      se.current = !0
    },
    N = (n) => {
      const o = Number(n.currentTarget.getAttribute('data-option-index'))
      ae(n, w[o], 'selectOption'), (se.current = !1)
    },
    le = (n) => (o) => {
      const r = s.slice()
      r.splice(n, 1), ee(o, r, 'removeOption', {option: s[n]})
    },
    He = (n) => {
      ie ? fe(n, 'toggleInput') : re(n)
    },
    At = (n) => {
      n.target.getAttribute('id') !== V && n.preventDefault()
    },
    Lt = () => {
      R.current.focus(),
        ct &&
          ve.current &&
          R.current.selectionEnd - R.current.selectionStart === 0 &&
          R.current.select(),
        (ve.current = !1)
    },
    Rt = (n) => {
      ;(x === '' || !ie) && He(n)
    }
  let Ye = q && x.length > 0
  Ye = Ye || (h ? s.length > 0 : s !== null)
  let pt = w
  return (
    L &&
      (pt = w.reduce((n, o, r) => {
        const i = L(o)
        return (
          n.length > 0 && n[n.length - 1].group === i
            ? n[n.length - 1].options.push(o)
            : n.push({key: r, index: r, group: i, options: [o]}),
          n
        )
      }, [])),
    E && Ae && Qe(),
    {
      getRootProps: (n = {}) =>
        u({'aria-owns': de ? `${V}-listbox` : null}, n, {
          onKeyDown: ut(n),
          onMouseDown: At,
          onClick: Lt,
        }),
      getInputLabelProps: () => ({id: `${V}-label`, htmlFor: V}),
      getInputProps: () => ({
        id: V,
        value: x,
        onBlur: Qe,
        onFocus: Je,
        onChange: Xe,
        onMouseDown: Rt,
        'aria-activedescendant': W ? '' : null,
        'aria-autocomplete': t ? 'both' : 'list',
        'aria-controls': de ? `${V}-listbox` : void 0,
        'aria-expanded': de,
        autoComplete: 'off',
        ref: R,
        autoCapitalize: 'none',
        spellCheck: 'false',
        role: 'combobox',
      }),
      getClearProps: () => ({tabIndex: -1, onClick: G}),
      getPopupIndicatorProps: () => ({tabIndex: -1, onClick: He}),
      getTagProps: ({index: n}) =>
        u(
          {key: n, 'data-tag-index': n, tabIndex: -1},
          !Se && {onDelete: le(n)}
        ),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${V}-listbox`,
        'aria-labelledby': `${V}-label`,
        ref: Ce,
        onMouseDown: (n) => {
          n.preventDefault()
        },
      }),
      getOptionProps: ({index: n, option: o}) => {
        const r = (h ? s : [s]).some((b) => b != null && j(o, b)),
          i = B ? B(o) : !1
        return {
          key: ne(o),
          tabIndex: -1,
          role: 'option',
          id: `${V}-option-${n}`,
          onMouseOver: Ve,
          onClick: N,
          onTouchStart: p,
          'data-option-index': n,
          'aria-disabled': i,
          'aria-selected': r,
        }
      },
      id: V,
      inputValue: x,
      value: s,
      dirty: Ye,
      popupOpen: W,
      focused: Ae || Z !== -1,
      anchorEl: Me,
      setAnchorEl: Pe,
      focusedTag: Z,
      groupedOptions: pt,
    }
  )
}
const _t = Nt(
  I('path', {
    d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'Close'
)
function Gt(e) {
  return it('MuiListSubheader', e)
}
st('MuiListSubheader', [
  'root',
  'colorPrimary',
  'colorInherit',
  'gutters',
  'inset',
  'sticky',
])
const Ut = [
    'className',
    'color',
    'component',
    'disableGutters',
    'disableSticky',
    'inset',
  ],
  qt = (e) => {
    const {
        classes: t,
        color: a,
        disableGutters: f,
        inset: m,
        disableSticky: C,
      } = e,
      S = {
        root: [
          'root',
          a !== 'default' && `color${ue(a)}`,
          !f && 'gutters',
          m && 'inset',
          !C && 'sticky',
        ],
      }
    return lt(S, Gt, t)
  },
  Kt = P('li', {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const {ownerState: a} = e
      return [
        t.root,
        a.color !== 'default' && t[`color${ue(a.color)}`],
        !a.disableGutters && t.gutters,
        a.inset && t.inset,
        !a.disableSticky && t.sticky,
      ]
    },
  })(({theme: e, ownerState: t}) =>
    u(
      {
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: (e.vars || e).palette.text.secondary,
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(14),
      },
      t.color === 'primary' && {color: (e.vars || e).palette.primary.main},
      t.color === 'inherit' && {color: 'inherit'},
      !t.disableGutters && {paddingLeft: 16, paddingRight: 16},
      t.inset && {paddingLeft: 72},
      !t.disableSticky && {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: (e.vars || e).palette.background.paper,
      }
    )
  ),
  jt = O.forwardRef(function (t, a) {
    const f = rt({props: t, name: 'MuiListSubheader'}),
      {
        className: m,
        color: C = 'default',
        component: S = 'li',
        disableGutters: c = !1,
        disableSticky: D = !1,
        inset: k = !1,
      } = f,
      y = at(f, Ut),
      E = u({}, f, {
        color: C,
        component: S,
        disableGutters: c,
        disableSticky: D,
        inset: k,
      }),
      U = qt(E)
    return I(Kt, u({as: S, className: ge(U.root, m), ref: a, ownerState: E}, y))
  }),
  Zt = jt
function Jt(e) {
  return it('MuiAutocomplete', e)
}
const Qt = st('MuiAutocomplete', [
    'root',
    'fullWidth',
    'focused',
    'focusVisible',
    'tag',
    'tagSizeSmall',
    'tagSizeMedium',
    'hasPopupIcon',
    'hasClearIcon',
    'inputRoot',
    'input',
    'inputFocused',
    'endAdornment',
    'clearIndicator',
    'popupIndicator',
    'popupIndicatorOpen',
    'popper',
    'popperDisablePortal',
    'paper',
    'listbox',
    'loading',
    'noOptions',
    'option',
    'groupLabel',
    'groupUl',
  ]),
  l = Qt
var bt, mt
const Xt = [
    'autoComplete',
    'autoHighlight',
    'autoSelect',
    'blurOnSelect',
    'ChipProps',
    'className',
    'clearIcon',
    'clearOnBlur',
    'clearOnEscape',
    'clearText',
    'closeText',
    'componentsProps',
    'defaultValue',
    'disableClearable',
    'disableCloseOnSelect',
    'disabled',
    'disabledItemsFocusable',
    'disableListWrap',
    'disablePortal',
    'filterOptions',
    'filterSelectedOptions',
    'forcePopupIcon',
    'freeSolo',
    'fullWidth',
    'getLimitTagsText',
    'getOptionDisabled',
    'getOptionLabel',
    'isOptionEqualToValue',
    'groupBy',
    'handleHomeEndKeys',
    'id',
    'includeInputInList',
    'inputValue',
    'limitTags',
    'ListboxComponent',
    'ListboxProps',
    'loading',
    'loadingText',
    'multiple',
    'noOptionsText',
    'onChange',
    'onClose',
    'onHighlightChange',
    'onInputChange',
    'onOpen',
    'open',
    'openOnFocus',
    'openText',
    'options',
    'PaperComponent',
    'PopperComponent',
    'popupIcon',
    'readOnly',
    'renderGroup',
    'renderInput',
    'renderOption',
    'renderTags',
    'selectOnFocus',
    'size',
    'value',
  ],
  Yt = (e) => {
    const {
        classes: t,
        disablePortal: a,
        focused: f,
        fullWidth: m,
        hasClearIcon: C,
        hasPopupIcon: S,
        inputFocused: c,
        popupOpen: D,
        size: k,
      } = e,
      y = {
        root: [
          'root',
          f && 'focused',
          m && 'fullWidth',
          C && 'hasClearIcon',
          S && 'hasPopupIcon',
        ],
        inputRoot: ['inputRoot'],
        input: ['input', c && 'inputFocused'],
        tag: ['tag', `tagSize${ue(k)}`],
        endAdornment: ['endAdornment'],
        clearIndicator: ['clearIndicator'],
        popupIndicator: ['popupIndicator', D && 'popupIndicatorOpen'],
        popper: ['popper', a && 'popperDisablePortal'],
        paper: ['paper'],
        listbox: ['listbox'],
        loading: ['loading'],
        noOptions: ['noOptions'],
        option: ['option'],
        groupLabel: ['groupLabel'],
        groupUl: ['groupUl'],
      }
    return lt(y, Jt, t)
  },
  eo = P('div', {
    name: 'MuiAutocomplete',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const {ownerState: a} = e,
        {
          fullWidth: f,
          hasClearIcon: m,
          hasPopupIcon: C,
          inputFocused: S,
          size: c,
        } = a
      return [
        {[`& .${l.tag}`]: t.tag},
        {[`& .${l.tag}`]: t[`tagSize${ue(c)}`]},
        {[`& .${l.inputRoot}`]: t.inputRoot},
        {[`& .${l.input}`]: t.input},
        {[`& .${l.input}`]: S && t.inputFocused},
        t.root,
        f && t.fullWidth,
        C && t.hasPopupIcon,
        m && t.hasClearIcon,
      ]
    },
  })(({ownerState: e}) =>
    u(
      {
        [`&.${l.focused} .${l.clearIndicator}`]: {visibility: 'visible'},
        '@media (pointer: fine)': {
          [`&:hover .${l.clearIndicator}`]: {visibility: 'visible'},
        },
      },
      e.fullWidth && {width: '100%'},
      {
        [`& .${l.tag}`]: u(
          {margin: 3, maxWidth: 'calc(100% - 6px)'},
          e.size === 'small' && {margin: 2, maxWidth: 'calc(100% - 4px)'}
        ),
        [`& .${l.inputRoot}`]: {
          flexWrap: 'wrap',
          [`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]: {paddingRight: 26 + 4},
          [`.${l.hasPopupIcon}.${l.hasClearIcon}&`]: {paddingRight: 52 + 4},
          [`& .${l.input}`]: {width: 0, minWidth: 30},
        },
        [`& .${tt.root}`]: {
          paddingBottom: 1,
          '& .MuiInput-input': {padding: '4px 4px 4px 0px'},
        },
        [`& .${tt.root}.${Be.sizeSmall}`]: {
          [`& .${tt.input}`]: {padding: '2px 4px 3px 0'},
        },
        [`& .${ft.root}`]: {
          padding: 9,
          [`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9,
          },
          [`.${l.hasPopupIcon}.${l.hasClearIcon}&`]: {paddingRight: 52 + 4 + 9},
          [`& .${l.input}`]: {padding: '7.5px 4px 7.5px 6px'},
          [`& .${l.endAdornment}`]: {right: 9},
        },
        [`& .${ft.root}.${Be.sizeSmall}`]: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 6,
          [`& .${l.input}`]: {padding: '2.5px 4px 2.5px 6px'},
        },
        [`& .${Fe.root}`]: {
          paddingTop: 19,
          paddingLeft: 8,
          [`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9,
          },
          [`.${l.hasPopupIcon}.${l.hasClearIcon}&`]: {paddingRight: 52 + 4 + 9},
          [`& .${Fe.input}`]: {padding: '7px 4px'},
          [`& .${l.endAdornment}`]: {right: 9},
        },
        [`& .${Fe.root}.${Be.sizeSmall}`]: {
          paddingBottom: 1,
          [`& .${Fe.input}`]: {padding: '2.5px 4px'},
        },
        [`& .${Be.hiddenLabel}`]: {paddingTop: 8},
        [`& .${l.input}`]: u(
          {flexGrow: 1, textOverflow: 'ellipsis', opacity: 0},
          e.inputFocused && {opacity: 1}
        ),
      }
    )
  ),
  to = P('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment',
    overridesResolver: (e, t) => t.endAdornment,
  })({position: 'absolute', right: 0, top: 'calc(50% - 14px)'}),
  oo = P(vt, {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (e, t) => t.clearIndicator,
  })({marginRight: -2, padding: 4, visibility: 'hidden'}),
  no = P(vt, {
    name: 'MuiAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: ({ownerState: e}, t) =>
      u({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen),
  })(({ownerState: e}) =>
    u(
      {padding: 2, marginRight: -2},
      e.popupOpen && {transform: 'rotate(180deg)'}
    )
  ),
  ro = P(kt, {
    name: 'MuiAutocomplete',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const {ownerState: a} = e
      return [
        {[`& .${l.option}`]: t.option},
        t.popper,
        a.disablePortal && t.popperDisablePortal,
      ]
    },
  })(({theme: e, ownerState: t}) =>
    u(
      {zIndex: (e.vars || e).zIndex.modal},
      t.disablePortal && {position: 'absolute'}
    )
  ),
  ao = P($t, {
    name: 'MuiAutocomplete',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })(({theme: e}) => u({}, e.typography.body1, {overflow: 'auto'})),
  io = P('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading',
    overridesResolver: (e, t) => t.loading,
  })(({theme: e}) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  so = P('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (e, t) => t.noOptions,
  })(({theme: e}) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  lo = P('div', {
    name: 'MuiAutocomplete',
    slot: 'Listbox',
    overridesResolver: (e, t) => t.listbox,
  })(({theme: e}) => ({
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
    [`& .${l.option}`]: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up('sm')]: {minHeight: 'auto'},
      [`&.${l.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': {backgroundColor: 'transparent'},
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
      [`&.${l.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : et(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${l.focused}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : et(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: (e.vars || e).palette.action.selected,
          },
        },
        [`&.${l.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : et(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
    },
  })),
  co = P(Zt, {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel',
    overridesResolver: (e, t) => t.groupLabel,
  })(({theme: e}) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8,
  })),
  uo = P('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl',
    overridesResolver: (e, t) => t.groupUl,
  })({padding: 0, [`& .${l.option}`]: {paddingLeft: 24}}),
  po = O.forwardRef(function (t, a) {
    var f, m, C, S
    const c = rt({props: t, name: 'MuiAutocomplete'}),
      {
        autoComplete: D = !1,
        autoHighlight: k = !1,
        autoSelect: y = !1,
        blurOnSelect: E = !1,
        ChipProps: U,
        className: A,
        clearIcon: Q = bt || (bt = I(_t, {fontSize: 'small'})),
        clearOnBlur: oe = !c.freeSolo,
        clearOnEscape: q = !1,
        clearText: B = 'Clear',
        closeText: z = 'Close',
        componentsProps: L = {},
        defaultValue: he = c.multiple ? [] : null,
        disableClearable: d = !1,
        disableCloseOnSelect: g = !1,
        disabled: K = !1,
        disabledItemsFocusable: j = !1,
        disableListWrap: h = !1,
        disablePortal: X = !1,
        filterSelectedOptions: Ge = !1,
        forcePopupIcon: Oe = 'auto',
        freeSolo: Y = !1,
        fullWidth: we = !1,
        getLimitTagsText: Ue = (p) => `+${p}`,
        getOptionLabel: Te = (p) => {
          var N
          return (N = p.label) != null ? N : p
        },
        groupBy: qe,
        handleHomeEndKeys: Se = !c.freeSolo,
        includeInputInList: ct = !1,
        limitTags: $e = -1,
        ListboxComponent: V = 'ul',
        ListboxProps: ne,
        loading: be = !1,
        loadingText: ve = 'Loading…',
        multiple: R = !1,
        noOptionsText: F = 'No options',
        openOnFocus: Me = !1,
        openText: Pe = 'Open',
        PaperComponent: Z = $t,
        PopperComponent: ke = kt,
        popupIcon: De = mt || (mt = I(Dt, {})),
        readOnly: H = !1,
        renderGroup: s,
        renderInput: Ke,
        renderOption: x,
        renderTags: pe,
        selectOnFocus: Ae = !c.freeSolo,
        size: me = 'medium',
      } = c,
      xe = at(c, Xt),
      {
        getRootProps: Le,
        getInputProps: ie,
        getInputLabelProps: Ne,
        getPopupIndicatorProps: je,
        getClearProps: Ee,
        getTagProps: ze,
        getListboxProps: W,
        getOptionProps: w,
        value: de,
        dirty: Ie,
        id: Ze,
        popupOpen: J,
        focused: _,
        focusedTag: Re,
        anchorEl: Ce,
        setAnchorEl: re,
        inputValue: fe,
        groupedOptions: ee,
      } = Ft(u({}, c, {componentName: 'Autocomplete'})),
      se = !d && !K && Ie && !H,
      ae = (!Y || Oe === !0) && Oe !== !1,
      M = u({}, c, {
        disablePortal: X,
        focused: _,
        fullWidth: we,
        hasClearIcon: se,
        hasPopupIcon: ae,
        inputFocused: Re === -1,
        popupOpen: J,
        size: me,
      }),
      $ = Yt(M)
    let G
    if (R && de.length > 0) {
      const p = (N) => u({className: $.tag, disabled: K}, ze(N))
      pe
        ? (G = pe(de, p, M))
        : (G = de.map((N, le) =>
            I(zt, u({label: Te(N), size: me}, p({index: le}), U))
          ))
    }
    if ($e > -1 && Array.isArray(G)) {
      const p = G.length - $e
      !_ &&
        p > 0 &&
        ((G = G.splice(0, $e)),
        G.push(I('span', {className: $.tag, children: Ue(p)}, G.length)))
    }
    const Je =
        s ||
        ((p) =>
          ye(
            'li',
            {
              children: [
                I(co, {
                  className: $.groupLabel,
                  ownerState: M,
                  component: 'div',
                  children: p.group,
                }),
                I(uo, {
                  className: $.groupUl,
                  ownerState: M,
                  children: p.children,
                }),
              ],
            },
            p.key
          )),
      Xe = x || ((p, N) => I('li', u({}, p, {children: Te(N)}))),
      Ve = (p, N) => {
        const le = w({option: p, index: N})
        return Xe(u({}, le, {className: $.option}), p, {
          selected: le['aria-selected'],
          inputValue: fe,
        })
      }
    return ye(O.Fragment, {
      children: [
        I(
          eo,
          u({ref: a, className: ge($.root, A), ownerState: M}, Le(xe), {
            children: Ke({
              id: Ze,
              disabled: K,
              fullWidth: !0,
              size: me === 'small' ? 'small' : void 0,
              InputLabelProps: Ne(),
              InputProps: u(
                {ref: re, className: $.inputRoot, startAdornment: G},
                (se || ae) && {
                  endAdornment: ye(to, {
                    className: $.endAdornment,
                    ownerState: M,
                    children: [
                      se
                        ? I(
                            oo,
                            u(
                              {},
                              Ee(),
                              {'aria-label': B, title: B, ownerState: M},
                              L.clearIndicator,
                              {
                                className: ge(
                                  $.clearIndicator,
                                  (f = L.clearIndicator) == null
                                    ? void 0
                                    : f.className
                                ),
                                children: Q,
                              }
                            )
                          )
                        : null,
                      ae
                        ? I(
                            no,
                            u(
                              {},
                              je(),
                              {
                                disabled: K,
                                'aria-label': J ? z : Pe,
                                title: J ? z : Pe,
                                ownerState: M,
                              },
                              L.popupIndicator,
                              {
                                className: ge(
                                  $.popupIndicator,
                                  (m = L.popupIndicator) == null
                                    ? void 0
                                    : m.className
                                ),
                                children: De,
                              }
                            )
                          )
                        : null,
                    ],
                  }),
                }
              ),
              inputProps: u(
                {className: $.input, disabled: K, readOnly: H},
                ie()
              ),
            }),
          })
        ),
        Ce
          ? I(
              ro,
              u(
                {
                  as: ke,
                  disablePortal: X,
                  style: {width: Ce ? Ce.clientWidth : null},
                  ownerState: M,
                  role: 'presentation',
                  anchorEl: Ce,
                  open: J,
                },
                L.popper,
                {
                  className: ge(
                    $.popper,
                    (C = L.popper) == null ? void 0 : C.className
                  ),
                  children: ye(
                    ao,
                    u({ownerState: M, as: Z}, L.paper, {
                      className: ge(
                        $.paper,
                        (S = L.paper) == null ? void 0 : S.className
                      ),
                      children: [
                        be && ee.length === 0
                          ? I(io, {
                              className: $.loading,
                              ownerState: M,
                              children: ve,
                            })
                          : null,
                        ee.length === 0 && !Y && !be
                          ? I(so, {
                              className: $.noOptions,
                              ownerState: M,
                              role: 'presentation',
                              onMouseDown: (p) => {
                                p.preventDefault()
                              },
                              children: F,
                            })
                          : null,
                        ee.length > 0
                          ? I(
                              lo,
                              u(
                                {as: V, className: $.listbox, ownerState: M},
                                W(),
                                ne,
                                {
                                  children: ee.map((p, N) =>
                                    qe
                                      ? Je({
                                          key: p.key,
                                          group: p.group,
                                          children: p.options.map((le, He) =>
                                            Ve(le, p.index + He)
                                          ),
                                        })
                                      : Ve(p, N)
                                  ),
                                }
                              )
                            )
                          : null,
                      ],
                    })
                  ),
                }
              )
            )
          : null,
      ],
    })
  }),
  fo = po
function go(e) {
  return it('MuiCircularProgress', e)
}
st('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
])
const ho = [
  'className',
  'color',
  'disableShrink',
  'size',
  'style',
  'thickness',
  'value',
  'variant',
]
let _e = (e) => e,
  xt,
  It,
  Ct,
  yt
const ce = 44,
  bo = Ot(
    xt ||
      (xt = _e`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  mo = Ot(
    It ||
      (It = _e`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  xo = (e) => {
    const {classes: t, variant: a, color: f, disableShrink: m} = e,
      C = {
        root: ['root', a, `color${ue(f)}`],
        svg: ['svg'],
        circle: ['circle', `circle${ue(a)}`, m && 'circleDisableShrink'],
      }
    return lt(C, go, t)
  },
  Io = P('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const {ownerState: a} = e
      return [t.root, t[a.variant], t[`color${ue(a.color)}`]]
    },
  })(
    ({ownerState: e, theme: t}) =>
      u(
        {display: 'inline-block'},
        e.variant === 'determinate' && {
          transition: t.transitions.create('transform'),
        },
        e.color !== 'inherit' && {color: (t.vars || t).palette[e.color].main}
      ),
    ({ownerState: e}) =>
      e.variant === 'indeterminate' &&
      St(
        Ct ||
          (Ct = _e`
      animation: ${0} 1.4s linear infinite;
    `),
        bo
      )
  ),
  Co = P('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({display: 'block'}),
  yo = P('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const {ownerState: a} = e
      return [
        t.circle,
        t[`circle${ue(a.variant)}`],
        a.disableShrink && t.circleDisableShrink,
      ]
    },
  })(
    ({ownerState: e, theme: t}) =>
      u(
        {stroke: 'currentColor'},
        e.variant === 'determinate' && {
          transition: t.transitions.create('stroke-dashoffset'),
        },
        e.variant === 'indeterminate' && {
          strokeDasharray: '80px, 200px',
          strokeDashoffset: 0,
        }
      ),
    ({ownerState: e}) =>
      e.variant === 'indeterminate' &&
      !e.disableShrink &&
      St(
        yt ||
          (yt = _e`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        mo
      )
  ),
  Oo = O.forwardRef(function (t, a) {
    const f = rt({props: t, name: 'MuiCircularProgress'}),
      {
        className: m,
        color: C = 'primary',
        disableShrink: S = !1,
        size: c = 40,
        style: D,
        thickness: k = 3.6,
        value: y = 0,
        variant: E = 'indeterminate',
      } = f,
      U = at(f, ho),
      A = u({}, f, {
        color: C,
        disableShrink: S,
        size: c,
        thickness: k,
        value: y,
        variant: E,
      }),
      Q = xo(A),
      oe = {},
      q = {},
      B = {}
    if (E === 'determinate') {
      const z = 2 * Math.PI * ((ce - k) / 2)
      ;(oe.strokeDasharray = z.toFixed(3)),
        (B['aria-valuenow'] = Math.round(y)),
        (oe.strokeDashoffset = `${(((100 - y) / 100) * z).toFixed(3)}px`),
        (q.transform = 'rotate(-90deg)')
    }
    return I(
      Io,
      u(
        {
          className: ge(Q.root, m),
          style: u({width: c, height: c}, q, D),
          ownerState: A,
          ref: a,
          role: 'progressbar',
        },
        B,
        U,
        {
          children: I(Co, {
            className: Q.svg,
            ownerState: A,
            viewBox: `${ce / 2} ${ce / 2} ${ce} ${ce}`,
            children: I(yo, {
              className: Q.circle,
              style: oe,
              ownerState: A,
              cx: ce,
              cy: ce,
              r: (ce - k) / 2,
              fill: 'none',
              strokeWidth: k,
            }),
          }),
        }
      )
    )
  }),
  So = Oo
function zo({
  textFieldProps: e,
  autocompleteProps: t,
  name: a,
  control: f,
  options: m,
  loading: C,
  showCheckbox: S,
  rules: c,
  required: D,
  multiple: k,
  matchId: y,
  label: E,
  parseError: U,
}) {
  const A = Mt(),
    Q = U || A,
    oe = {
      ...c,
      ...(D && {
        required: (c == null ? void 0 : c.required) || 'This field is required',
      }),
    }
  return I(Pt, {
    name: a,
    control: f,
    rules: oe,
    render: ({
      field: {onChange: q, onBlur: B, value: z},
      fieldState: {error: L},
    }) => {
      let he = k ? z || [] : z ?? null
      return (
        y &&
          (he = k
            ? (z || []).map((d) => m.find((g) => (g.id ?? g) === d))
            : m.find((d) => (d.id ?? d) === z) ?? null),
        I(fo, {
          ...t,
          value: he,
          loading: C,
          multiple: k,
          options: m,
          disableCloseOnSelect:
            typeof (t == null ? void 0 : t.disableCloseOnSelect) == 'boolean'
              ? t.disableCloseOnSelect
              : !!k,
          isOptionEqualToValue:
            t != null && t.isOptionEqualToValue
              ? t.isOptionEqualToValue
              : (d, g) =>
                  g ? d.id === ((g == null ? void 0 : g.id) ?? g) : !1,
          getOptionLabel:
            t != null && t.getOptionLabel
              ? t.getOptionLabel
              : (d) => `${(d == null ? void 0 : d.label) ?? d}`,
          onChange: (d, g, K, j) => {
            let h = g
            y &&
              (h = Array.isArray(g)
                ? g.map((X) => (X == null ? void 0 : X.id) ?? X)
                : (g == null ? void 0 : g.id) ?? g),
              q(h),
              t != null && t.onChange && t.onChange(d, g, K, j)
          },
          renderOption:
            (t == null ? void 0 : t.renderOption) ??
            (S
              ? (d, g, {selected: K}) => {
                  var j
                  return ye('li', {
                    ...d,
                    children: [
                      I(Vt, {sx: {marginRight: 1}, checked: K}),
                      ((j = t == null ? void 0 : t.getOptionLabel) == null
                        ? void 0
                        : j.call(t, g)) ||
                        g.label ||
                        g,
                    ],
                  })
                }
              : void 0),
          onBlur: (d) => {
            B(),
              typeof (t == null ? void 0 : t.onBlur) == 'function' &&
                t.onBlur(d)
          },
          renderInput: (d) =>
            I(Ht, {
              name: a,
              required: c != null && c.required ? !0 : D,
              label: E,
              ...e,
              ...d,
              error: !!L,
              InputLabelProps: {
                ...d.InputLabelProps,
                ...(e == null ? void 0 : e.InputLabelProps),
              },
              InputProps: {
                ...d.InputProps,
                endAdornment: ye(wt, {
                  children: [
                    C ? I(So, {color: 'inherit', size: 20}) : null,
                    d.InputProps.endAdornment,
                  ],
                }),
                ...(e == null ? void 0 : e.InputProps),
              },
              inputProps: {
                ...d.inputProps,
                ...(e == null ? void 0 : e.inputProps),
              },
              helperText: L
                ? typeof Q == 'function'
                  ? Q(L)
                  : L.message
                : e == null
                ? void 0
                : e.helperText,
            }),
        })
      )
    },
  })
}
export {zo as A}
//# sourceMappingURL=AutocompleteElement-eb924e8a.js.map
