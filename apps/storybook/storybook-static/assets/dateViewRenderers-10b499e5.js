import {R as Ke, r as h} from './index-ebeaab24.js'
import {
  _ as pt,
  u as ie,
  j as y,
  b as Ce,
  e as ye,
  f as ze,
} from './useThemeProps-3be52b90.js'
import {a as x, _ as oe} from './LocalizationProvider-49a0baf7.js'
import {p as T, T as qe, c as re} from './Button-934b6c03.js'
import {
  c as me,
  v as mt,
  g as le,
  e as ce,
  h as de,
  A as gt,
  f as Je,
  a as ne,
  w as Dt,
  x as bt,
  y as Ct,
  z as Ee,
  B as Pe,
  E as Xe,
  F as Ze,
  G as Fe,
  H as ve,
  _ as ke,
  I as xe,
  J as yt,
  K as G,
  b as Le,
  L as vt,
  M as wt,
  N as Mt,
} from './useMobilePicker-2ac4f9db.js'
import {c as kt, T as xt, F as Qe} from './Select-c55867f3.js'
import {B as Pt} from './ButtonBase-4a75c9e0.js'
import {_ as Ft} from './extends-98964cd2.js'
import {_ as Nt} from './assertThisInitialized-5649ae8b.js'
import {T as _e} from './Typography-eebf5bae.js'
import {u as St} from './useTheme-ccc2f4e9.js'
import {u as Ie} from './useSlotProps-692f4a62.js'
import {I as At} from './IconButton-ab13b570.js'
function Rt(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' '
      ) !== -1
}
function Et(e, t) {
  e.classList
    ? e.classList.add(t)
    : Rt(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t
          ))
}
function je(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
function Vt(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = je(e.className, t))
    : e.setAttribute('class', je((e.className && e.className.baseVal) || '', t))
}
var Ot = function (t, a) {
    return (
      t &&
      a &&
      a.split(' ').forEach(function (s) {
        return Et(t, s)
      })
    )
  },
  Be = function (t, a) {
    return (
      t &&
      a &&
      a.split(' ').forEach(function (s) {
        return Vt(t, s)
      })
    )
  },
  We = (function (e) {
    Nt(t, e)
    function t() {
      for (var s, o = arguments.length, n = new Array(o), c = 0; c < o; c++)
        n[c] = arguments[c]
      return (
        (s = e.call.apply(e, [this].concat(n)) || this),
        (s.appliedClasses = {appear: {}, enter: {}, exit: {}}),
        (s.onEnter = function (r, i) {
          var l = s.resolveArguments(r, i),
            p = l[0],
            m = l[1]
          s.removeClasses(p, 'exit'),
            s.addClass(p, m ? 'appear' : 'enter', 'base'),
            s.props.onEnter && s.props.onEnter(r, i)
        }),
        (s.onEntering = function (r, i) {
          var l = s.resolveArguments(r, i),
            p = l[0],
            m = l[1],
            d = m ? 'appear' : 'enter'
          s.addClass(p, d, 'active'),
            s.props.onEntering && s.props.onEntering(r, i)
        }),
        (s.onEntered = function (r, i) {
          var l = s.resolveArguments(r, i),
            p = l[0],
            m = l[1],
            d = m ? 'appear' : 'enter'
          s.removeClasses(p, d),
            s.addClass(p, d, 'done'),
            s.props.onEntered && s.props.onEntered(r, i)
        }),
        (s.onExit = function (r) {
          var i = s.resolveArguments(r),
            l = i[0]
          s.removeClasses(l, 'appear'),
            s.removeClasses(l, 'enter'),
            s.addClass(l, 'exit', 'base'),
            s.props.onExit && s.props.onExit(r)
        }),
        (s.onExiting = function (r) {
          var i = s.resolveArguments(r),
            l = i[0]
          s.addClass(l, 'exit', 'active'),
            s.props.onExiting && s.props.onExiting(r)
        }),
        (s.onExited = function (r) {
          var i = s.resolveArguments(r),
            l = i[0]
          s.removeClasses(l, 'exit'),
            s.addClass(l, 'exit', 'done'),
            s.props.onExited && s.props.onExited(r)
        }),
        (s.resolveArguments = function (r, i) {
          return s.props.nodeRef ? [s.props.nodeRef.current, r] : [r, i]
        }),
        (s.getClassNames = function (r) {
          var i = s.props.classNames,
            l = typeof i == 'string',
            p = l && i ? i + '-' : '',
            m = l ? '' + p + r : i[r],
            d = l ? m + '-active' : i[r + 'Active'],
            F = l ? m + '-done' : i[r + 'Done']
          return {baseClassName: m, activeClassName: d, doneClassName: F}
        }),
        s
      )
    }
    var a = t.prototype
    return (
      (a.addClass = function (o, n, c) {
        var r = this.getClassNames(n)[c + 'ClassName'],
          i = this.getClassNames('enter'),
          l = i.doneClassName
        n === 'appear' && c === 'done' && l && (r += ' ' + l),
          c === 'active' && o && kt(o),
          r && ((this.appliedClasses[n][c] = r), Ot(o, r))
      }),
      (a.removeClasses = function (o, n) {
        var c = this.appliedClasses[n],
          r = c.base,
          i = c.active,
          l = c.done
        ;(this.appliedClasses[n] = {}),
          r && Be(o, r),
          i && Be(o, i),
          l && Be(o, l)
      }),
      (a.render = function () {
        var o = this.props
        o.classNames
        var n = pt(o, ['classNames'])
        return Ke.createElement(
          xt,
          Ft({}, n, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        )
      }),
      t
    )
  })(Ke.Component)
We.defaultProps = {classNames: ''}
We.propTypes = {}
const Tt = We,
  $t = ({props: e, value: t, adapter: a}) => {
    if (t === null) return null
    const s = a.utils.date(),
      o = me(a.utils, e.minDate, a.defaultDates.minDate),
      n = me(a.utils, e.maxDate, a.defaultDates.maxDate)
    switch (!0) {
      case !a.utils.isValid(t):
        return 'invalidDate'
      case !!(e.shouldDisableDate && e.shouldDisableDate(t)):
        return 'shouldDisableDate'
      case !!(e.shouldDisableMonth && e.shouldDisableMonth(t)):
        return 'shouldDisableMonth'
      case !!(e.shouldDisableYear && e.shouldDisableYear(t)):
        return 'shouldDisableYear'
      case !!(e.disableFuture && a.utils.isAfterDay(t, s)):
        return 'disableFuture'
      case !!(e.disablePast && a.utils.isBeforeDay(t, s)):
        return 'disablePast'
      case !!(o && a.utils.isBeforeDay(t, o)):
        return 'minDate'
      case !!(n && a.utils.isAfterDay(t, n)):
        return 'maxDate'
      default:
        return null
    }
  },
  et = ({
    shouldDisableDate: e,
    shouldDisableMonth: t,
    shouldDisableYear: a,
    minDate: s,
    maxDate: o,
    disableFuture: n,
    disablePast: c,
  }) => {
    const r = mt()
    return h.useCallback(
      (i) =>
        $t({
          adapter: r,
          value: i,
          props: {
            shouldDisableDate: e,
            shouldDisableMonth: t,
            shouldDisableYear: a,
            minDate: s,
            maxDate: o,
            disableFuture: n,
            disablePast: c,
          },
        }) !== null,
      [r, e, t, a, s, o, n, c]
    )
  },
  Yt = typeof navigator < 'u' && /(android)/i.test(navigator.userAgent),
  Bt = (e) => le('MuiPickersFadeTransitionGroup', e)
ce('MuiPickersFadeTransitionGroup', ['root'])
const It = (e) => {
    const {classes: t} = e
    return de({root: ['root']}, Bt, t)
  },
  Ge = 500,
  Lt = T(qe, {
    name: 'MuiPickersFadeTransitionGroup',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({display: 'block', position: 'relative'})
function tt(e) {
  const t = ie({props: e, name: 'MuiPickersFadeTransitionGroup'}),
    {children: a, className: s, reduceAnimations: o, transKey: n} = t,
    c = It(t)
  return o
    ? a
    : y(Lt, {
        className: re(c.root, s),
        children: y(
          Qe,
          {
            appear: !1,
            mountOnEnter: !0,
            unmountOnExit: !0,
            timeout: {appear: Ge, enter: Ge / 2, exit: 0},
            children: a,
          },
          n
        ),
      })
}
const _t = (e) => le('MuiPickersCalendarHeader', e),
  Wt = ce('MuiPickersCalendarHeader', [
    'root',
    'labelContainer',
    'label',
    'switchViewButton',
    'switchViewIcon',
  ]),
  Ht = ['ownerState'],
  Ut = (e) => {
    const {classes: t} = e
    return de(
      {
        root: ['root'],
        labelContainer: ['labelContainer'],
        label: ['label'],
        switchViewButton: ['switchViewButton'],
        switchViewIcon: ['switchViewIcon'],
      },
      _t,
      t
    )
  },
  Kt = T('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 24,
    paddingRight: 12,
    maxHeight: 30,
    minHeight: 30,
  }),
  jt = T('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'LabelContainer',
    overridesResolver: (e, t) => t.labelContainer,
  })(({theme: e}) =>
    x(
      {
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: 'auto',
      },
      e.typography.body1,
      {fontWeight: e.typography.fontWeightMedium}
    )
  ),
  Gt = T('div', {
    name: 'MuiPickersCalendarHeader',
    slot: 'Label',
    overridesResolver: (e, t) => t.label,
  })({marginRight: 6}),
  zt = T(At, {
    name: 'MuiPickersCalendarHeader',
    slot: 'SwitchViewButton',
    overridesResolver: (e, t) => t.switchViewButton,
  })(({ownerState: e}) =>
    x(
      {marginRight: 'auto'},
      e.view === 'year' && {
        [`.${Wt.switchViewIcon}`]: {transform: 'rotate(180deg)'},
      }
    )
  ),
  qt = T(gt, {
    name: 'MuiPickersCalendarHeader',
    slot: 'SwitchViewIcon',
    overridesResolver: (e, t) => t.switchViewIcon,
  })(({theme: e}) => ({
    willChange: 'transform',
    transition: e.transitions.create('transform'),
    transform: 'rotate(0deg)',
  }))
function Jt(e) {
  var t, a, s, o, n, c
  const r = Je(),
    i = ne(),
    l = ie({props: e, name: 'MuiPickersCalendarHeader'}),
    {
      components: p,
      componentsProps: m,
      slots: d,
      slotProps: F,
      currentMonth: w,
      disabled: k,
      disableFuture: D,
      disablePast: P,
      maxDate: E,
      minDate: $,
      onMonthChange: Y,
      onViewChange: S,
      view: R,
      reduceAnimations: L,
      views: N,
      labelId: W,
    } = l,
    O = l,
    v = Ut(l),
    K =
      (t =
        (a = d == null ? void 0 : d.switchViewButton) != null
          ? a
          : p == null
          ? void 0
          : p.SwitchViewButton) != null
        ? t
        : zt,
    z = Ie({
      elementType: K,
      externalSlotProps:
        (s = F == null ? void 0 : F.switchViewButton) != null
          ? s
          : m == null
          ? void 0
          : m.switchViewButton,
      additionalProps: {
        size: 'small',
        'aria-label': r.calendarViewSwitchingButtonAriaLabel(R),
      },
      ownerState: O,
      className: v.switchViewButton,
    }),
    H =
      (o =
        (n = d == null ? void 0 : d.switchViewIcon) != null
          ? n
          : p == null
          ? void 0
          : p.SwitchViewIcon) != null
        ? o
        : qt,
    g = Ie({
      elementType: H,
      externalSlotProps:
        (c = F == null ? void 0 : F.switchViewIcon) != null
          ? c
          : m == null
          ? void 0
          : m.switchViewIcon,
      ownerState: void 0,
      className: v.switchViewIcon,
    }),
    B = oe(g, Ht),
    j = () => Y(i.getNextMonth(w), 'left'),
    q = () => Y(i.getPreviousMonth(w), 'right'),
    Q = Dt(w, {disableFuture: D, maxDate: E}),
    Z = bt(w, {disablePast: P, minDate: $}),
    U = () => {
      if (!(N.length === 1 || !S || k))
        if (N.length === 2) S(N.find((ae) => ae !== R) || N[0])
        else {
          const ae = N.indexOf(R) !== 0 ? 0 : 1
          S(N[ae])
        }
    }
  return N.length === 1 && N[0] === 'year'
    ? null
    : Ce(Kt, {
        ownerState: O,
        className: v.root,
        children: [
          Ce(jt, {
            role: 'presentation',
            onClick: U,
            ownerState: O,
            'aria-live': 'polite',
            className: v.labelContainer,
            children: [
              y(tt, {
                reduceAnimations: L,
                transKey: i.format(w, 'monthAndYear'),
                children: y(Gt, {
                  id: W,
                  ownerState: O,
                  className: v.label,
                  children: i.format(w, 'monthAndYear'),
                }),
              }),
              N.length > 1 && !k && y(K, x({}, z, {children: y(H, x({}, B))})),
            ],
          }),
          y(Qe, {
            in: R === 'day',
            children: y(Ct, {
              components: p,
              componentsProps: m,
              slots: d,
              slotProps: F,
              onGoToPrevious: q,
              isPreviousDisabled: Z,
              previousLabel: r.previousMonth,
              onGoToNext: j,
              isNextDisabled: Q,
              nextLabel: r.nextMonth,
            }),
          }),
        ],
      })
}
function Xt(e) {
  return le('MuiPickersDay', e)
}
const Se = ce('MuiPickersDay', [
    'root',
    'dayWithMargin',
    'dayOutsideMonth',
    'hiddenDaySpacingFiller',
    'today',
    'selected',
    'disabled',
  ]),
  Zt = [
    'autoFocus',
    'className',
    'day',
    'disabled',
    'disableHighlightToday',
    'disableMargin',
    'hidden',
    'isAnimating',
    'onClick',
    'onDaySelect',
    'onFocus',
    'onBlur',
    'onKeyDown',
    'onMouseDown',
    'onMouseEnter',
    'outsideCurrentMonth',
    'selected',
    'showDaysOutsideCurrentMonth',
    'children',
    'today',
    'isFirstVisibleCell',
    'isLastVisibleCell',
  ],
  Qt = (e) => {
    const {
      selected: t,
      disableMargin: a,
      disableHighlightToday: s,
      today: o,
      disabled: n,
      outsideCurrentMonth: c,
      showDaysOutsideCurrentMonth: r,
      classes: i,
    } = e
    return de(
      {
        root: [
          'root',
          t && 'selected',
          n && 'disabled',
          !a && 'dayWithMargin',
          !s && o && 'today',
          c && r && 'dayOutsideMonth',
          c && !r && 'hiddenDaySpacingFiller',
        ],
        hiddenDaySpacingFiller: ['hiddenDaySpacingFiller'],
      },
      Xt,
      i
    )
  },
  st = ({theme: e, ownerState: t}) =>
    x(
      {},
      e.typography.caption,
      {
        width: Pe,
        height: Pe,
        borderRadius: '50%',
        padding: 0,
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.text.primary,
        '@media (pointer: fine)': {
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
              : ye(e.palette.primary.main, e.palette.action.hoverOpacity),
          },
        },
        '&:focus': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})`
            : ye(e.palette.primary.main, e.palette.action.focusOpacity),
          [`&.${Se.selected}`]: {
            willChange: 'background-color',
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
        },
        [`&.${Se.selected}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.main,
          fontWeight: e.typography.fontWeightMedium,
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.short,
          }),
          '&:hover': {
            willChange: 'background-color',
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
        },
        [`&.${Se.disabled}`]: {color: (e.vars || e).palette.text.disabled},
      },
      !t.disableMargin && {margin: `0 ${Ee}px`},
      t.outsideCurrentMonth &&
        t.showDaysOutsideCurrentMonth && {
          color: (e.vars || e).palette.text.secondary,
        },
      !t.disableHighlightToday &&
        t.today && {
          [`&:not(.${Se.selected})`]: {
            border: `1px solid ${(e.vars || e).palette.text.secondary}`,
          },
        }
    ),
  at = (e, t) => {
    const {ownerState: a} = e
    return [
      t.root,
      !a.disableMargin && t.dayWithMargin,
      !a.disableHighlightToday && a.today && t.today,
      !a.outsideCurrentMonth &&
        a.showDaysOutsideCurrentMonth &&
        t.dayOutsideMonth,
      a.outsideCurrentMonth &&
        !a.showDaysOutsideCurrentMonth &&
        t.hiddenDaySpacingFiller,
    ]
  },
  es = T(Pt, {name: 'MuiPickersDay', slot: 'Root', overridesResolver: at})(st),
  ts = T('div', {name: 'MuiPickersDay', slot: 'Root', overridesResolver: at})(
    ({theme: e, ownerState: t}) =>
      x({}, st({theme: e, ownerState: t}), {opacity: 0, pointerEvents: 'none'})
  ),
  Me = () => {},
  ss = h.forwardRef(function (t, a) {
    const s = ie({props: t, name: 'MuiPickersDay'}),
      {
        autoFocus: o = !1,
        className: n,
        day: c,
        disabled: r = !1,
        disableHighlightToday: i = !1,
        disableMargin: l = !1,
        isAnimating: p,
        onClick: m,
        onDaySelect: d,
        onFocus: F = Me,
        onBlur: w = Me,
        onKeyDown: k = Me,
        onMouseDown: D = Me,
        onMouseEnter: P = Me,
        outsideCurrentMonth: E,
        selected: $ = !1,
        showDaysOutsideCurrentMonth: Y = !1,
        children: S,
        today: R = !1,
      } = s,
      L = oe(s, Zt),
      N = x({}, s, {
        autoFocus: o,
        disabled: r,
        disableHighlightToday: i,
        disableMargin: l,
        selected: $,
        showDaysOutsideCurrentMonth: Y,
        today: R,
      }),
      W = Qt(N),
      O = ne(),
      v = h.useRef(null),
      K = Xe(v, a)
    Ze(() => {
      o && !r && !p && !E && v.current.focus()
    }, [o, r, p, E])
    const z = (g) => {
        D(g), E && g.preventDefault()
      },
      H = (g) => {
        r || d(c), E && g.currentTarget.focus(), m && m(g)
      }
    return E && !Y
      ? y(ts, {
          className: re(W.root, W.hiddenDaySpacingFiller, n),
          ownerState: N,
          role: L.role,
        })
      : y(
          es,
          x(
            {
              className: re(W.root, n),
              ref: K,
              centerRipple: !0,
              disabled: r,
              tabIndex: $ ? 0 : -1,
              onKeyDown: (g) => k(g, c),
              onFocus: (g) => F(g, c),
              onBlur: (g) => w(g, c),
              onMouseEnter: (g) => P(g, c),
              onClick: H,
              onMouseDown: z,
            },
            L,
            {ownerState: N, children: S || O.format(c, 'dayOfMonth')}
          )
        )
  }),
  as = h.memo(ss),
  ns = (e) => le('MuiPickersSlideTransition', e),
  se = ce('MuiPickersSlideTransition', [
    'root',
    'slideEnter-left',
    'slideEnter-right',
    'slideEnterActive',
    'slideExit',
    'slideExitActiveLeft-left',
    'slideExitActiveLeft-right',
  ]),
  os = [
    'children',
    'className',
    'reduceAnimations',
    'slideDirection',
    'transKey',
    'classes',
  ],
  rs = (e) => {
    const {classes: t, slideDirection: a} = e,
      s = {
        root: ['root'],
        exit: ['slideExit'],
        enterActive: ['slideEnterActive'],
        enter: [`slideEnter-${a}`],
        exitActive: [`slideExitActiveLeft-${a}`],
      }
    return de(s, ns, t)
  },
  nt = 350,
  is = T(qe, {
    name: 'MuiPickersSlideTransition',
    slot: 'Root',
    overridesResolver: (e, t) => [
      t.root,
      {[`.${se['slideEnter-left']}`]: t['slideEnter-left']},
      {[`.${se['slideEnter-right']}`]: t['slideEnter-right']},
      {[`.${se.slideEnterActive}`]: t.slideEnterActive},
      {[`.${se.slideExit}`]: t.slideExit},
      {[`.${se['slideExitActiveLeft-left']}`]: t['slideExitActiveLeft-left']},
      {[`.${se['slideExitActiveLeft-right']}`]: t['slideExitActiveLeft-right']},
    ],
  })(({theme: e}) => {
    const t = e.transitions.create('transform', {
      duration: nt,
      easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)',
    })
    return {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {position: 'absolute', top: 0, right: 0, left: 0},
      [`& .${se['slideEnter-left']}`]: {
        willChange: 'transform',
        transform: 'translate(100%)',
        zIndex: 1,
      },
      [`& .${se['slideEnter-right']}`]: {
        willChange: 'transform',
        transform: 'translate(-100%)',
        zIndex: 1,
      },
      [`& .${se.slideEnterActive}`]: {
        transform: 'translate(0%)',
        transition: t,
      },
      [`& .${se.slideExit}`]: {transform: 'translate(0%)'},
      [`& .${se['slideExitActiveLeft-left']}`]: {
        willChange: 'transform',
        transform: 'translate(-100%)',
        transition: t,
        zIndex: 0,
      },
      [`& .${se['slideExitActiveLeft-right']}`]: {
        willChange: 'transform',
        transform: 'translate(100%)',
        transition: t,
        zIndex: 0,
      },
    }
  })
function ls(e) {
  const t = ie({props: e, name: 'MuiPickersSlideTransition'}),
    {children: a, className: s, reduceAnimations: o, transKey: n} = t,
    c = oe(t, os),
    r = rs(t)
  if (o) return y('div', {className: re(r.root, s), children: a})
  const i = {
    exit: r.exit,
    enterActive: r.enterActive,
    enter: r.enter,
    exitActive: r.exitActive,
  }
  return y(is, {
    className: re(r.root, s),
    childFactory: (l) => h.cloneElement(l, {classNames: i}),
    role: 'presentation',
    children: y(
      Tt,
      x({mountOnEnter: !0, unmountOnExit: !0, timeout: nt, classNames: i}, c, {
        children: a,
      }),
      n
    ),
  })
}
const cs = (e) => le('MuiDayCalendar', e)
ce('MuiDayCalendar', [
  'header',
  'weekDayLabel',
  'loadingContainer',
  'slideTransition',
  'monthContainer',
  'weekContainer',
  'weekNumberLabel',
  'weekNumber',
])
const ds = [
    'parentProps',
    'day',
    'focusableDay',
    'selectedDays',
    'isDateDisabled',
    'currentMonthNumber',
    'isViewFocused',
  ],
  us = ['ownerState'],
  hs = (e) => {
    const {classes: t} = e
    return de(
      {
        header: ['header'],
        weekDayLabel: ['weekDayLabel'],
        loadingContainer: ['loadingContainer'],
        slideTransition: ['slideTransition'],
        monthContainer: ['monthContainer'],
        weekContainer: ['weekContainer'],
        weekNumberLabel: ['weekNumberLabel'],
        weekNumber: ['weekNumber'],
      },
      cs,
      t
    )
  },
  fs = (e) => e.charAt(0).toUpperCase(),
  ot = (Pe + Ee * 2) * 6,
  ps = T('div', {
    name: 'MuiDayCalendar',
    slot: 'Header',
    overridesResolver: (e, t) => t.header,
  })({display: 'flex', justifyContent: 'center', alignItems: 'center'}),
  ms = T(_e, {
    name: 'MuiDayCalendar',
    slot: 'WeekDayLabel',
    overridesResolver: (e, t) => t.weekDayLabel,
  })(({theme: e}) => ({
    width: 36,
    height: 40,
    margin: '0 2px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: (e.vars || e).palette.text.secondary,
  })),
  gs = T(_e, {
    name: 'MuiDayPicker',
    slot: 'WeekNumberLabel',
    overridesResolver: (e, t) => t.weekNumberLabel,
  })(({theme: e}) => ({
    width: 36,
    height: 40,
    margin: '0 2px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: e.palette.text.disabled,
  })),
  Ds = T(_e, {
    name: 'MuiDayPicker',
    slot: 'WeekNumber',
    overridesResolver: (e, t) => t.weekNumber,
  })(({theme: e}) =>
    x({}, e.typography.caption, {
      width: Pe,
      height: Pe,
      padding: 0,
      margin: `0 ${Ee}px`,
      color: e.palette.text.disabled,
      fontSize: '0.75rem',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'inline-flex',
    })
  ),
  bs = T('div', {
    name: 'MuiDayCalendar',
    slot: 'LoadingContainer',
    overridesResolver: (e, t) => t.loadingContainer,
  })({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: ot,
  }),
  Cs = T(ls, {
    name: 'MuiDayCalendar',
    slot: 'SlideTransition',
    overridesResolver: (e, t) => t.slideTransition,
  })({minHeight: ot}),
  ys = T('div', {
    name: 'MuiDayCalendar',
    slot: 'MonthContainer',
    overridesResolver: (e, t) => t.monthContainer,
  })({overflow: 'hidden'}),
  vs = T('div', {
    name: 'MuiDayCalendar',
    slot: 'WeekContainer',
    overridesResolver: (e, t) => t.weekContainer,
  })({margin: `${Ee}px 0`, display: 'flex', justifyContent: 'center'})
function ws(e) {
  var t, a, s
  let {
      parentProps: o,
      day: n,
      focusableDay: c,
      selectedDays: r,
      isDateDisabled: i,
      currentMonthNumber: l,
      isViewFocused: p,
    } = e,
    m = oe(e, ds)
  const d = ne(),
    F = Fe(),
    {
      disabled: w,
      disableHighlightToday: k,
      isMonthSwitchingAnimating: D,
      showDaysOutsideCurrentMonth: P,
      components: E,
      componentsProps: $,
      slots: Y,
      slotProps: S,
    } = o,
    R = c !== null && d.isSameDay(n, c),
    L = r.some((B) => d.isSameDay(B, n)),
    N = d.isSameDay(n, F),
    W =
      (t =
        (a = Y == null ? void 0 : Y.day) != null
          ? a
          : E == null
          ? void 0
          : E.Day) != null
        ? t
        : as,
    O = Ie({
      elementType: W,
      externalSlotProps:
        (s = S == null ? void 0 : S.day) != null
          ? s
          : $ == null
          ? void 0
          : $.day,
      additionalProps: x(
        {
          disableHighlightToday: k,
          showDaysOutsideCurrentMonth: P,
          role: 'gridcell',
          isAnimating: D,
          'data-timestamp': d.toJsDate(n).valueOf(),
        },
        m
      ),
      ownerState: x({}, o, {day: n, selected: L}),
    }),
    v = oe(O, us),
    K = h.useMemo(() => w || i(n), [w, i, n]),
    z = h.useMemo(() => d.getMonth(n) !== l, [d, n, l]),
    H = h.useMemo(() => {
      const B = d.startOfMonth(d.setMonth(n, l))
      return P ? d.isSameDay(n, d.startOfWeek(B)) : d.isSameDay(n, B)
    }, [l, n, P, d]),
    g = h.useMemo(() => {
      const B = d.endOfMonth(d.setMonth(n, l))
      return P ? d.isSameDay(n, d.endOfWeek(B)) : d.isSameDay(n, B)
    }, [l, n, P, d])
  return y(
    W,
    x({}, v, {
      day: n,
      disabled: K,
      autoFocus: p && R,
      today: N,
      outsideCurrentMonth: z,
      isFirstVisibleCell: H,
      isLastVisibleCell: g,
      selected: L,
      tabIndex: R ? 0 : -1,
      'aria-selected': L,
      'aria-current': N ? 'date' : void 0,
    })
  )
}
function Ms(e) {
  const t = Fe(),
    a = ne(),
    s = ie({props: e, name: 'MuiDayCalendar'}),
    o = hs(s),
    n = St(),
    {
      onFocusedDayChange: c,
      className: r,
      currentMonth: i,
      selectedDays: l,
      focusedDay: p,
      loading: m,
      onSelectedDaysChange: d,
      onMonthSwitchingAnimationEnd: F,
      readOnly: w,
      reduceAnimations: k,
      renderLoading: D = () => y('span', {children: '...'}),
      slideDirection: P,
      TransitionProps: E,
      disablePast: $,
      disableFuture: Y,
      minDate: S,
      maxDate: R,
      shouldDisableDate: L,
      shouldDisableMonth: N,
      shouldDisableYear: W,
      dayOfWeekFormatter: O = fs,
      hasFocus: v,
      onFocusedViewChange: K,
      gridLabelId: z,
      displayWeekNumber: H,
      fixedWeekNumber: g,
      autoFocus: B,
    } = s,
    j = et({
      shouldDisableDate: L,
      shouldDisableMonth: N,
      shouldDisableYear: W,
      minDate: S,
      maxDate: R,
      disablePast: $,
      disableFuture: Y,
    }),
    q = Je(),
    [Q, Z] = ve({
      name: 'DayCalendar',
      state: 'hasFocus',
      controlled: v,
      default: B ?? !1,
    }),
    [U, ae] = h.useState(() => p || t),
    J = ke((f) => {
      w || d(f)
    }),
    X = (f) => {
      j(f) || (c(f), ae(f), K == null || K(!0), Z(!0))
    },
    ge = ke((f, M) => {
      switch (f.key) {
        case 'ArrowUp':
          X(a.addDays(M, -7)), f.preventDefault()
          break
        case 'ArrowDown':
          X(a.addDays(M, 7)), f.preventDefault()
          break
        case 'ArrowLeft': {
          const _ = a.addDays(M, n.direction === 'ltr' ? -1 : 1),
            ee =
              n.direction === 'ltr' ? a.getPreviousMonth(M) : a.getNextMonth(M),
            he = xe({
              utils: a,
              date: _,
              minDate: n.direction === 'ltr' ? a.startOfMonth(ee) : _,
              maxDate: n.direction === 'ltr' ? _ : a.endOfMonth(ee),
              isDateDisabled: j,
            })
          X(he || _), f.preventDefault()
          break
        }
        case 'ArrowRight': {
          const _ = a.addDays(M, n.direction === 'ltr' ? 1 : -1),
            ee =
              n.direction === 'ltr' ? a.getNextMonth(M) : a.getPreviousMonth(M),
            he = xe({
              utils: a,
              date: _,
              minDate: n.direction === 'ltr' ? _ : a.startOfMonth(ee),
              maxDate: n.direction === 'ltr' ? a.endOfMonth(ee) : _,
              isDateDisabled: j,
            })
          X(he || _), f.preventDefault()
          break
        }
        case 'Home':
          X(a.startOfWeek(M)), f.preventDefault()
          break
        case 'End':
          X(a.endOfWeek(M)), f.preventDefault()
          break
        case 'PageUp':
          X(a.getNextMonth(M)), f.preventDefault()
          break
        case 'PageDown':
          X(a.getPreviousMonth(M)), f.preventDefault()
          break
      }
    }),
    De = ke((f, M) => X(M)),
    b = ke((f, M) => {
      Q && a.isSameDay(U, M) && (K == null || K(!1))
    }),
    C = a.getMonth(i),
    u = h.useMemo(
      () => l.filter((f) => !!f).map((f) => a.startOfDay(f)),
      [a, l]
    ),
    A = C,
    I = h.useMemo(() => h.createRef(), [A]),
    fe = a.startOfWeek(t),
    be = h.useMemo(() => {
      const f = a.startOfMonth(i),
        M = a.endOfMonth(i)
      return j(U) || a.isAfterDay(U, M) || a.isBeforeDay(U, f)
        ? xe({
            utils: a,
            date: U,
            minDate: f,
            maxDate: M,
            disablePast: $,
            disableFuture: Y,
            isDateDisabled: j,
          })
        : U
    }, [i, Y, $, U, j, a]),
    ue = h.useMemo(() => {
      const f = a.getWeekArray(i)
      let M = a.addMonths(i, 1)
      for (; g && f.length < g; ) {
        const _ = a.getWeekArray(M),
          ee = a.isSameDay(f[f.length - 1][0], _[0][0])
        _.slice(ee ? 1 : 0).forEach((he) => {
          f.length < g && f.push(he)
        }),
          (M = a.addMonths(M, 1))
      }
      return f
    }, [i, g, a])
  return Ce('div', {
    role: 'grid',
    'aria-labelledby': z,
    children: [
      Ce(ps, {
        role: 'row',
        className: o.header,
        children: [
          H &&
            y(gs, {
              variant: 'caption',
              role: 'columnheader',
              'aria-label': q.calendarWeekNumberHeaderLabel,
              className: o.weekNumberLabel,
              children: q.calendarWeekNumberHeaderText,
            }),
          a.getWeekdays().map((f, M) => {
            var _
            return y(
              ms,
              {
                variant: 'caption',
                role: 'columnheader',
                'aria-label': a.format(a.addDays(fe, M), 'weekday'),
                className: o.weekDayLabel,
                children: (_ = O == null ? void 0 : O(f)) != null ? _ : f,
              },
              f + M.toString()
            )
          }),
        ],
      }),
      m
        ? y(bs, {className: o.loadingContainer, children: D()})
        : y(
            Cs,
            x(
              {
                transKey: A,
                onExited: F,
                reduceAnimations: k,
                slideDirection: P,
                className: re(r, o.slideTransition),
              },
              E,
              {
                nodeRef: I,
                children: y(ys, {
                  ref: I,
                  role: 'rowgroup',
                  className: o.monthContainer,
                  children: ue.map((f, M) =>
                    Ce(
                      vs,
                      {
                        role: 'row',
                        className: o.weekContainer,
                        'aria-rowindex': M + 1,
                        children: [
                          H &&
                            y(Ds, {
                              className: o.weekNumber,
                              role: 'rowheader',
                              'aria-label': q.calendarWeekNumberAriaLabelText(
                                a.getWeekNumber(f[0])
                              ),
                              children: q.calendarWeekNumberText(
                                a.getWeekNumber(f[0])
                              ),
                            }),
                          f.map((_, ee) =>
                            y(
                              ws,
                              {
                                parentProps: s,
                                day: _,
                                selectedDays: u,
                                focusableDay: be,
                                onKeyDown: ge,
                                onFocus: De,
                                onBlur: b,
                                onDaySelect: J,
                                isDateDisabled: j,
                                currentMonthNumber: C,
                                isViewFocused: Q,
                                'aria-colindex': ee + 1,
                              },
                              _.toString()
                            )
                          ),
                        ],
                      },
                      `week-${f[0]}`
                    )
                  ),
                }),
              }
            )
          ),
    ],
  })
}
const ks = (e, t, a) => (s, o) => {
    switch (o.type) {
      case 'changeMonth':
        return x({}, s, {
          slideDirection: o.direction,
          currentMonth: o.newMonth,
          isMonthSwitchingAnimating: !e,
        })
      case 'finishMonthSwitchingAnimation':
        return x({}, s, {isMonthSwitchingAnimating: !1})
      case 'changeFocusedDay': {
        if (
          s.focusedDay != null &&
          o.focusedDay != null &&
          a.isSameDay(o.focusedDay, s.focusedDay)
        )
          return s
        const n =
          o.focusedDay != null &&
          !t &&
          !a.isSameMonth(s.currentMonth, o.focusedDay)
        return x({}, s, {
          focusedDay: o.focusedDay,
          isMonthSwitchingAnimating:
            n && !e && !o.withoutMonthSwitchingAnimation,
          currentMonth: n ? a.startOfMonth(o.focusedDay) : s.currentMonth,
          slideDirection:
            o.focusedDay != null && a.isAfterDay(o.focusedDay, s.currentMonth)
              ? 'left'
              : 'right',
        })
      }
      default:
        throw new Error('missing support')
    }
  },
  xs = ({
    value: e,
    defaultCalendarMonth: t,
    disableFuture: a,
    disablePast: s,
    disableSwitchToMonthOnDayFocus: o = !1,
    maxDate: n,
    minDate: c,
    onMonthChange: r,
    reduceAnimations: i,
    shouldDisableDate: l,
  }) => {
    var p
    const m = Fe(),
      d = ne(),
      F = h.useRef(ks(!!i, o, d)).current,
      [w, k] = h.useReducer(F, {
        isMonthSwitchingAnimating: !1,
        focusedDay: e || m,
        currentMonth: d.startOfMonth((p = e ?? t) != null ? p : yt(d, m, c, n)),
        slideDirection: 'left',
      }),
      D = h.useCallback(
        (S) => {
          k(x({type: 'changeMonth'}, S)), r && r(S.newMonth)
        },
        [r]
      ),
      P = h.useCallback(
        (S) => {
          const R = S
          d.isSameMonth(R, w.currentMonth) ||
            D({
              newMonth: d.startOfMonth(R),
              direction: d.isAfterDay(R, w.currentMonth) ? 'left' : 'right',
            })
        },
        [w.currentMonth, D, d]
      ),
      E = et({
        shouldDisableDate: l,
        minDate: c,
        maxDate: n,
        disableFuture: a,
        disablePast: s,
      }),
      $ = h.useCallback(() => {
        k({type: 'finishMonthSwitchingAnimation'})
      }, []),
      Y = ke((S, R) => {
        E(S) ||
          k({
            type: 'changeFocusedDay',
            focusedDay: S,
            withoutMonthSwitchingAnimation: R,
          })
      })
    return {
      calendarState: w,
      changeMonth: P,
      changeFocusedDay: Y,
      isDateDisabled: E,
      onMonthSwitchingAnimationEnd: $,
      handleChangeMonth: D,
    }
  }
function Ps(e) {
  return le('MuiPickersMonth', e)
}
const Ae = ce('MuiPickersMonth', [
    'root',
    'monthButton',
    'disabled',
    'selected',
  ]),
  Fs = [
    'autoFocus',
    'children',
    'disabled',
    'selected',
    'value',
    'tabIndex',
    'onClick',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'aria-current',
    'monthsPerRow',
  ],
  Ns = (e) => {
    const {disabled: t, selected: a, classes: s} = e
    return de(
      {
        root: ['root'],
        monthButton: ['monthButton', t && 'disabled', a && 'selected'],
      },
      Ps,
      s
    )
  },
  Ss = T('div', {
    name: 'MuiPickersMonth',
    slot: 'Root',
    overridesResolver: (e, t) => [t.root],
  })(({ownerState: e}) => ({
    flexBasis: e.monthsPerRow === 3 ? '33.3%' : '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })),
  As = T('button', {
    name: 'MuiPickersMonth',
    slot: 'MonthButton',
    overridesResolver: (e, t) => [
      t.monthButton,
      {[`&.${Ae.disabled}`]: t.disabled},
      {[`&.${Ae.selected}`]: t.selected},
    ],
  })(({theme: e}) =>
    x(
      {color: 'unset', backgroundColor: 'transparent', border: 0, outline: 0},
      e.typography.subtitle1,
      {
        margin: '8px 0',
        height: 36,
        width: 72,
        borderRadius: 18,
        cursor: 'pointer',
        '&:focus': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
            : ye(e.palette.action.active, e.palette.action.hoverOpacity),
        },
        '&:hover': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
            : ye(e.palette.action.active, e.palette.action.hoverOpacity),
        },
        '&:disabled': {cursor: 'auto', pointerEvents: 'none'},
        [`&.${Ae.disabled}`]: {color: (e.vars || e).palette.text.secondary},
        [`&.${Ae.selected}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.main,
          '&:focus, &:hover': {
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
        },
      }
    )
  ),
  Rs = h.memo(function (t) {
    const a = ie({props: t, name: 'MuiPickersMonth'}),
      {
        autoFocus: s,
        children: o,
        disabled: n,
        value: c,
        tabIndex: r,
        onClick: i,
        onKeyDown: l,
        onFocus: p,
        onBlur: m,
        'aria-current': d,
      } = a,
      F = oe(a, Fs),
      w = h.useRef(null),
      k = Ns(a)
    return (
      Ze(() => {
        if (s) {
          var D
          ;(D = w.current) == null || D.focus()
        }
      }, [s]),
      y(
        Ss,
        x({className: k.root, ownerState: a}, F, {
          children: y(As, {
            ref: w,
            disabled: n,
            type: 'button',
            tabIndex: n ? -1 : r,
            'aria-current': d,
            onClick: (D) => i(D, c),
            onKeyDown: (D) => l(D, c),
            onFocus: (D) => p(D, c),
            onBlur: (D) => m(D, c),
            className: k.monthButton,
            ownerState: a,
            children: o,
          }),
        })
      )
    )
  })
function Es(e) {
  return le('MuiMonthCalendar', e)
}
ce('MuiMonthCalendar', ['root'])
const Vs = [
    'className',
    'value',
    'defaultValue',
    'disabled',
    'disableFuture',
    'disablePast',
    'maxDate',
    'minDate',
    'onChange',
    'shouldDisableMonth',
    'readOnly',
    'disableHighlightToday',
    'autoFocus',
    'onMonthFocus',
    'hasFocus',
    'onFocusedViewChange',
    'monthsPerRow',
  ],
  Os = (e) => {
    const {classes: t} = e
    return de({root: ['root']}, Es, t)
  }
function Ts(e, t) {
  const a = ne(),
    s = Le(),
    o = ie({props: e, name: t})
  return x({disableFuture: !1, disablePast: !1}, o, {
    minDate: me(a, o.minDate, s.minDate),
    maxDate: me(a, o.maxDate, s.maxDate),
  })
}
const $s = T('div', {
    name: 'MuiMonthCalendar',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    padding: '0 4px',
    width: 320,
  }),
  Ys = h.forwardRef(function (t, a) {
    const s = Fe(),
      o = ze(),
      n = ne(),
      c = Ts(t, 'MuiMonthCalendar'),
      {
        className: r,
        value: i,
        defaultValue: l,
        disabled: p,
        disableFuture: m,
        disablePast: d,
        maxDate: F,
        minDate: w,
        onChange: k,
        shouldDisableMonth: D,
        readOnly: P,
        disableHighlightToday: E,
        autoFocus: $ = !1,
        onMonthFocus: Y,
        hasFocus: S,
        onFocusedViewChange: R,
        monthsPerRow: L = 3,
      } = c,
      N = oe(c, Vs),
      W = c,
      O = Os(W),
      [v, K] = ve({
        name: 'MonthCalendar',
        state: 'value',
        controlled: i,
        default: l ?? null,
      }),
      z = h.useMemo(() => n.getMonth(s), [n, s]),
      H = h.useMemo(() => v ?? n.startOfMonth(s), [s, n, v]),
      g = h.useMemo(
        () => (v != null ? n.getMonth(v) : E ? null : n.getMonth(s)),
        [s, v, n, E]
      ),
      [B, j] = h.useState(() => g || z),
      [q, Q] = ve({
        name: 'MonthCalendar',
        state: 'hasFocus',
        controlled: S,
        default: $ ?? !1,
      }),
      Z = G((b) => {
        Q(b), R && R(b)
      }),
      U = G((b) => {
        const C = n.startOfMonth(d && n.isAfter(s, w) ? s : w),
          u = n.startOfMonth(m && n.isBefore(s, F) ? s : F)
        return n.isBefore(b, C) || n.isAfter(b, u) ? !0 : D ? D(b) : !1
      }),
      ae = G((b, C) => {
        if (P) return
        const u = n.setMonth(H, C)
        K(u), k == null || k(u)
      }),
      J = G((b) => {
        U(n.setMonth(H, b)) || (j(b), Z(!0), Y && Y(b))
      })
    h.useEffect(() => {
      j((b) => (g !== null && b !== g ? g : b))
    }, [g])
    const X = G((b, C) => {
        switch (b.key) {
          case 'ArrowUp':
            J((12 + C - 3) % 12), b.preventDefault()
            break
          case 'ArrowDown':
            J((12 + C + 3) % 12), b.preventDefault()
            break
          case 'ArrowLeft':
            J((12 + C + (o.direction === 'ltr' ? -1 : 1)) % 12),
              b.preventDefault()
            break
          case 'ArrowRight':
            J((12 + C + (o.direction === 'ltr' ? 1 : -1)) % 12),
              b.preventDefault()
            break
        }
      }),
      ge = G((b, C) => {
        J(C)
      }),
      De = G((b, C) => {
        B === C && Z(!1)
      })
    return y(
      $s,
      x({ref: a, className: re(O.root, r), ownerState: W}, N, {
        children: n.getMonthArray(H).map((b) => {
          const C = n.getMonth(b),
            u = n.format(b, 'monthShort'),
            A = C === g,
            I = p || U(b)
          return y(
            Rs,
            {
              selected: A,
              value: C,
              onClick: ae,
              onKeyDown: X,
              autoFocus: q && C === B,
              disabled: I,
              tabIndex: C === B ? 0 : -1,
              onFocus: ge,
              onBlur: De,
              'aria-current': z === C ? 'date' : void 0,
              monthsPerRow: L,
              children: u,
            },
            u
          )
        }),
      })
    )
  })
function Bs(e) {
  return le('MuiPickersYear', e)
}
const Re = ce('MuiPickersYear', ['root', 'yearButton', 'selected', 'disabled']),
  Is = [
    'autoFocus',
    'className',
    'children',
    'disabled',
    'selected',
    'value',
    'tabIndex',
    'onClick',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'aria-current',
    'yearsPerRow',
  ],
  Ls = (e) => {
    const {disabled: t, selected: a, classes: s} = e
    return de(
      {
        root: ['root'],
        yearButton: ['yearButton', t && 'disabled', a && 'selected'],
      },
      Bs,
      s
    )
  },
  _s = T('div', {
    name: 'MuiPickersYear',
    slot: 'Root',
    overridesResolver: (e, t) => [t.root],
  })(({ownerState: e}) => ({
    flexBasis: e.yearsPerRow === 3 ? '33.3%' : '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })),
  Ws = T('button', {
    name: 'MuiPickersYear',
    slot: 'YearButton',
    overridesResolver: (e, t) => [
      t.yearButton,
      {[`&.${Re.disabled}`]: t.disabled},
      {[`&.${Re.selected}`]: t.selected},
    ],
  })(({theme: e}) =>
    x(
      {color: 'unset', backgroundColor: 'transparent', border: 0, outline: 0},
      e.typography.subtitle1,
      {
        margin: '8px 0',
        height: 36,
        width: 72,
        borderRadius: 18,
        cursor: 'pointer',
        '&:focus': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})`
            : ye(e.palette.action.active, e.palette.action.focusOpacity),
        },
        '&:hover': {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
            : ye(e.palette.action.active, e.palette.action.hoverOpacity),
        },
        '&:disabled': {cursor: 'auto', pointerEvents: 'none'},
        [`&.${Re.disabled}`]: {color: (e.vars || e).palette.text.secondary},
        [`&.${Re.selected}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.main,
          '&:focus, &:hover': {
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
        },
      }
    )
  ),
  Hs = h.memo(function (t) {
    const a = ie({props: t, name: 'MuiPickersYear'}),
      {
        autoFocus: s,
        className: o,
        children: n,
        disabled: c,
        value: r,
        tabIndex: i,
        onClick: l,
        onKeyDown: p,
        onFocus: m,
        onBlur: d,
        'aria-current': F,
      } = a,
      w = oe(a, Is),
      k = h.useRef(null),
      D = Ls(a)
    return (
      h.useEffect(() => {
        s && k.current.focus()
      }, [s]),
      y(
        _s,
        x({className: re(D.root, o), ownerState: a}, w, {
          children: y(Ws, {
            ref: k,
            disabled: c,
            type: 'button',
            tabIndex: c ? -1 : i,
            'aria-current': F,
            onClick: (P) => l(P, r),
            onKeyDown: (P) => p(P, r),
            onFocus: (P) => m(P, r),
            onBlur: (P) => d(P, r),
            className: D.yearButton,
            ownerState: a,
            children: n,
          }),
        })
      )
    )
  })
function Us(e) {
  return le('MuiYearCalendar', e)
}
ce('MuiYearCalendar', ['root'])
const Ks = [
    'autoFocus',
    'className',
    'value',
    'defaultValue',
    'disabled',
    'disableFuture',
    'disablePast',
    'maxDate',
    'minDate',
    'onChange',
    'readOnly',
    'shouldDisableYear',
    'disableHighlightToday',
    'onYearFocus',
    'hasFocus',
    'onFocusedViewChange',
    'yearsPerRow',
  ],
  js = (e) => {
    const {classes: t} = e
    return de({root: ['root']}, Us, t)
  }
function Gs(e, t) {
  const a = ne(),
    s = Le(),
    o = ie({props: e, name: t})
  return x({disablePast: !1, disableFuture: !1}, o, {
    minDate: me(a, o.minDate, s.minDate),
    maxDate: me(a, o.maxDate, s.maxDate),
  })
}
const zs = T('div', {
    name: 'MuiYearCalendar',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    padding: '0 4px',
    width: 320,
    maxHeight: 304,
  }),
  qs = h.forwardRef(function (t, a) {
    const s = Fe(),
      o = ze(),
      n = ne(),
      c = Gs(t, 'MuiYearCalendar'),
      {
        autoFocus: r,
        className: i,
        value: l,
        defaultValue: p,
        disabled: m,
        disableFuture: d,
        disablePast: F,
        maxDate: w,
        minDate: k,
        onChange: D,
        readOnly: P,
        shouldDisableYear: E,
        disableHighlightToday: $,
        onYearFocus: Y,
        hasFocus: S,
        onFocusedViewChange: R,
        yearsPerRow: L = 3,
      } = c,
      N = oe(c, Ks),
      W = c,
      O = js(W),
      [v, K] = ve({
        name: 'YearCalendar',
        state: 'value',
        controlled: l,
        default: p ?? null,
      }),
      z = h.useMemo(() => v ?? n.startOfYear(s), [s, n, v]),
      H = h.useMemo(() => n.getYear(s), [n, s]),
      g = h.useMemo(
        () => (v != null ? n.getYear(v) : $ ? null : n.getYear(s)),
        [s, v, n, $]
      ),
      [B, j] = h.useState(() => g || H),
      [q, Q] = ve({
        name: 'YearCalendar',
        state: 'hasFocus',
        controlled: S,
        default: r ?? !1,
      }),
      Z = G((u) => {
        Q(u), R && R(u)
      }),
      U = G(
        (u) =>
          !!(
            (F && n.isBeforeYear(u, s)) ||
            (d && n.isAfterYear(u, s)) ||
            (k && n.isBeforeYear(u, k)) ||
            (w && n.isAfterYear(u, w)) ||
            (E && E(u))
          )
      ),
      ae = G((u, A) => {
        if (P) return
        const I = n.setYear(z, A)
        K(I), D == null || D(I)
      }),
      J = G((u) => {
        U(n.setYear(z, u)) || (j(u), Z(!0), Y == null || Y(u))
      })
    h.useEffect(() => {
      j((u) => (g !== null && u !== g ? g : u))
    }, [g])
    const X = G((u, A) => {
        switch (u.key) {
          case 'ArrowUp':
            J(A - L), u.preventDefault()
            break
          case 'ArrowDown':
            J(A + L), u.preventDefault()
            break
          case 'ArrowLeft':
            J(A + (o.direction === 'ltr' ? -1 : 1)), u.preventDefault()
            break
          case 'ArrowRight':
            J(A + (o.direction === 'ltr' ? 1 : -1)), u.preventDefault()
            break
        }
      }),
      ge = G((u, A) => {
        J(A)
      }),
      De = G((u, A) => {
        B === A && Z(!1)
      }),
      b = h.useRef(null),
      C = Xe(a, b)
    return (
      h.useEffect(() => {
        if (r || b.current === null) return
        const u = b.current.querySelector('[tabindex="0"]')
        if (!u) return
        const A = u.offsetHeight,
          I = u.offsetTop,
          fe = b.current.clientHeight,
          be = b.current.scrollTop,
          ue = I + A
        A > fe || I < be || (b.current.scrollTop = ue - fe / 2 - A / 2)
      }, [r]),
      y(
        zs,
        x({ref: C, className: re(O.root, i), ownerState: W}, N, {
          children: n.getYearRange(k, w).map((u) => {
            const A = n.getYear(u),
              I = A === g,
              fe = m || U(u)
            return y(
              Hs,
              {
                selected: I,
                value: A,
                onClick: ae,
                onKeyDown: X,
                autoFocus: q && A === B,
                disabled: fe,
                tabIndex: A === B ? 0 : -1,
                onFocus: ge,
                onBlur: De,
                'aria-current': H === A ? 'date' : void 0,
                yearsPerRow: L,
                children: n.format(u, 'year'),
              },
              n.format(u, 'year')
            )
          }),
        })
      )
    )
  }),
  Js = (e) => le('MuiDateCalendar', e)
ce('MuiDateCalendar', ['root', 'viewTransitionContainer'])
const Xs = [
    'autoFocus',
    'onViewChange',
    'value',
    'defaultValue',
    'disableFuture',
    'disablePast',
    'defaultCalendarMonth',
    'onChange',
    'onYearChange',
    'onMonthChange',
    'reduceAnimations',
    'shouldDisableDate',
    'shouldDisableMonth',
    'shouldDisableYear',
    'view',
    'views',
    'openTo',
    'className',
    'disabled',
    'readOnly',
    'minDate',
    'maxDate',
    'disableHighlightToday',
    'focusedView',
    'onFocusedViewChange',
    'showDaysOutsideCurrentMonth',
    'fixedWeekNumber',
    'dayOfWeekFormatter',
    'components',
    'componentsProps',
    'slots',
    'slotProps',
    'loading',
    'renderLoading',
    'displayWeekNumber',
    'yearsPerRow',
    'monthsPerRow',
  ],
  Zs = (e) => {
    const {classes: t} = e
    return de(
      {root: ['root'], viewTransitionContainer: ['viewTransitionContainer']},
      Js,
      t
    )
  }
function Qs(e, t) {
  const a = ne(),
    s = Le(),
    o = ie({props: e, name: t})
  return x(
    {
      loading: !1,
      disablePast: !1,
      disableFuture: !1,
      openTo: 'day',
      views: ['year', 'day'],
      reduceAnimations: Yt,
      renderLoading: () => y('span', {children: '...'}),
    },
    o,
    {minDate: me(a, o.minDate, s.minDate), maxDate: me(a, o.maxDate, s.maxDate)}
  )
}
const ea = T(vt, {
    name: 'MuiDateCalendar',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({display: 'flex', flexDirection: 'column'}),
  ta = T(tt, {
    name: 'MuiDateCalendar',
    slot: 'ViewTransitionContainer',
    overridesResolver: (e, t) => t.viewTransitionContainer,
  })({}),
  sa = h.forwardRef(function (t, a) {
    const s = ne(),
      o = wt(),
      n = Qs(t, 'MuiDateCalendar'),
      {
        autoFocus: c,
        onViewChange: r,
        value: i,
        defaultValue: l,
        disableFuture: p,
        disablePast: m,
        defaultCalendarMonth: d,
        onChange: F,
        onYearChange: w,
        onMonthChange: k,
        reduceAnimations: D,
        shouldDisableDate: P,
        shouldDisableMonth: E,
        shouldDisableYear: $,
        view: Y,
        views: S,
        openTo: R,
        className: L,
        disabled: N,
        readOnly: W,
        minDate: O,
        maxDate: v,
        disableHighlightToday: K,
        focusedView: z,
        onFocusedViewChange: H,
        showDaysOutsideCurrentMonth: g,
        fixedWeekNumber: B,
        dayOfWeekFormatter: j,
        components: q,
        componentsProps: Q,
        slots: Z,
        slotProps: U,
        loading: ae,
        renderLoading: J,
        displayWeekNumber: X,
        yearsPerRow: ge,
        monthsPerRow: De,
      } = n,
      b = oe(n, Xs),
      [C, u] = ve({
        name: 'DateCalendar',
        state: 'value',
        controlled: i,
        default: l ?? null,
      }),
      A = G((V, te) => {
        u(V), F == null || F(V, te)
      }),
      {
        view: I,
        setView: fe,
        focusedView: be,
        setFocusedView: ue,
        goToNextView: f,
        setValueAndGoToNextView: M,
      } = Mt({
        view: Y,
        views: S,
        openTo: R,
        onChange: A,
        onViewChange: r,
        autoFocus: c,
        focusedView: z,
        onFocusedViewChange: H,
      }),
      {
        calendarState: _,
        changeFocusedDay: ee,
        changeMonth: he,
        handleChangeMonth: rt,
        isDateDisabled: Ne,
        onMonthSwitchingAnimationEnd: it,
      } = xs({
        value: C,
        defaultCalendarMonth: d,
        reduceAnimations: D,
        onMonthChange: k,
        minDate: O,
        maxDate: v,
        shouldDisableDate: P,
        disablePast: m,
        disableFuture: p,
      }),
      lt = G((V) => {
        const te = s.startOfMonth(V),
          we = s.endOfMonth(V),
          pe = Ne(V)
            ? xe({
                utils: s,
                date: V,
                minDate: s.isBefore(O, te) ? te : O,
                maxDate: s.isAfter(v, we) ? we : v,
                disablePast: m,
                disableFuture: p,
                isDateDisabled: Ne,
              })
            : V
        pe ? (M(pe, 'finish'), k == null || k(te)) : (f(), he(te)), ee(pe, !0)
      }),
      ct = G((V) => {
        const te = s.startOfYear(V),
          we = s.endOfYear(V),
          pe = Ne(V)
            ? xe({
                utils: s,
                date: V,
                minDate: s.isBefore(O, te) ? te : O,
                maxDate: s.isAfter(v, we) ? we : v,
                disablePast: m,
                disableFuture: p,
                isDateDisabled: Ne,
              })
            : V
        pe ? (M(pe, 'finish'), w == null || w(pe)) : (f(), he(te)), ee(pe, !0)
      }),
      dt = G((V) => M(C && V ? s.mergeDateAndTime(V, C) : V, 'finish'))
    h.useEffect(() => {
      C != null && s.isValid(C) && he(C)
    }, [C])
    const Ve = n,
      He = Zs(Ve),
      Oe = {disablePast: m, disableFuture: p, maxDate: v, minDate: O},
      ut = (N && C) || O,
      ht = (N && C) || v,
      Te = {disableHighlightToday: K, readOnly: W, disabled: N},
      Ue = `${o}-grid-label`,
      $e = be !== null,
      Ye = h.useRef(I)
    h.useEffect(() => {
      Ye.current !== I && (be === Ye.current && ue(I, !0), (Ye.current = I))
    }, [be, ue, I])
    const ft = h.useMemo(() => [C], [C])
    return Ce(
      ea,
      x({ref: a, className: re(He.root, L), ownerState: Ve}, b, {
        children: [
          y(Jt, {
            views: S,
            view: I,
            currentMonth: _.currentMonth,
            onViewChange: fe,
            onMonthChange: (V, te) => rt({newMonth: V, direction: te}),
            minDate: ut,
            maxDate: ht,
            disabled: N,
            disablePast: m,
            disableFuture: p,
            reduceAnimations: D,
            labelId: Ue,
            components: q,
            componentsProps: Q,
            slots: Z,
            slotProps: U,
          }),
          y(ta, {
            reduceAnimations: D,
            className: He.viewTransitionContainer,
            transKey: I,
            ownerState: Ve,
            children: Ce('div', {
              children: [
                I === 'year' &&
                  y(
                    qs,
                    x({}, Oe, Te, {
                      value: C,
                      onChange: ct,
                      shouldDisableYear: $,
                      hasFocus: $e,
                      onFocusedViewChange: (V) => ue('year', V),
                      yearsPerRow: ge,
                    })
                  ),
                I === 'month' &&
                  y(
                    Ys,
                    x({}, Oe, Te, {
                      hasFocus: $e,
                      className: L,
                      value: C,
                      onChange: lt,
                      shouldDisableMonth: E,
                      onFocusedViewChange: (V) => ue('month', V),
                      monthsPerRow: De,
                    })
                  ),
                I === 'day' &&
                  y(
                    Ms,
                    x({}, _, Oe, Te, {
                      onMonthSwitchingAnimationEnd: it,
                      onFocusedDayChange: ee,
                      reduceAnimations: D,
                      selectedDays: ft,
                      onSelectedDaysChange: dt,
                      shouldDisableDate: P,
                      shouldDisableMonth: E,
                      shouldDisableYear: $,
                      hasFocus: $e,
                      onFocusedViewChange: (V) => ue('day', V),
                      gridLabelId: Ue,
                      showDaysOutsideCurrentMonth: g,
                      fixedWeekNumber: B,
                      dayOfWeekFormatter: j,
                      displayWeekNumber: X,
                      components: q,
                      componentsProps: Q,
                      slots: Z,
                      slotProps: U,
                      loading: ae,
                      renderLoading: J,
                    })
                  ),
              ],
            }),
          }),
        ],
      })
    )
  }),
  aa = (e) => e === 'year' || e === 'month' || e === 'day',
  Da = ({
    view: e,
    onViewChange: t,
    views: a,
    focusedView: s,
    onFocusedViewChange: o,
    value: n,
    defaultValue: c,
    onChange: r,
    className: i,
    classes: l,
    disableFuture: p,
    disablePast: m,
    minDate: d,
    maxDate: F,
    shouldDisableDate: w,
    shouldDisableMonth: k,
    shouldDisableYear: D,
    reduceAnimations: P,
    onMonthChange: E,
    monthsPerRow: $,
    onYearChange: Y,
    yearsPerRow: S,
    defaultCalendarMonth: R,
    components: L,
    componentsProps: N,
    slots: W,
    slotProps: O,
    loading: v,
    renderLoading: K,
    disableHighlightToday: z,
    readOnly: H,
    disabled: g,
    showDaysOutsideCurrentMonth: B,
    dayOfWeekFormatter: j,
    sx: q,
    autoFocus: Q,
    fixedWeekNumber: Z,
    displayWeekNumber: U,
  }) =>
    y(sa, {
      view: e,
      onViewChange: t,
      views: a.filter(aa),
      focusedView: s,
      onFocusedViewChange: o,
      value: n,
      defaultValue: c,
      onChange: r,
      className: i,
      classes: l,
      disableFuture: p,
      disablePast: m,
      minDate: d,
      maxDate: F,
      shouldDisableDate: w,
      shouldDisableMonth: k,
      shouldDisableYear: D,
      reduceAnimations: P,
      onMonthChange: E,
      monthsPerRow: $,
      onYearChange: Y,
      yearsPerRow: S,
      defaultCalendarMonth: R,
      components: L,
      componentsProps: N,
      slots: W,
      slotProps: O,
      loading: v,
      renderLoading: K,
      disableHighlightToday: z,
      readOnly: H,
      disabled: g,
      showDaysOutsideCurrentMonth: B,
      dayOfWeekFormatter: j,
      sx: q,
      autoFocus: Q,
      fixedWeekNumber: Z,
      displayWeekNumber: U,
    })
export {Da as r, $t as v}
//# sourceMappingURL=dateViewRenderers-10b499e5.js.map
