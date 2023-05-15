import {u as v, j as P} from './useThemeProps-3be52b90.js'
import {p as j, t as Q, C as B} from './Button-934b6c03.js'
import {a as d, _ as y} from './LocalizationProvider-49a0baf7.js'
import {r as h} from './index-ebeaab24.js'
import {
  g as H,
  e as K,
  P as G,
  a as x,
  f as C,
  r as $,
  t as V,
  h as J,
  b as E,
  j as X,
  c as k,
  k as Z,
  u as ee,
  s as R,
  d as oe,
  C as te,
  l as z,
  m as ae,
  n as ne,
  o as se,
  q as re,
} from './useMobilePicker-2ac4f9db.js'
import {P as e} from './index-aff217c3.js'
import {T as le} from './Typography-eebf5bae.js'
import {v as _, r as T} from './dateViewRenderers-10b499e5.js'
import {T as ie} from './TextField-4354f47c.js'
import {u as ue, r as q} from './useSlotProps-692f4a62.js'
function ce(a) {
  return H('MuiDatePickerToolbar', a)
}
K('MuiDatePickerToolbar', ['root', 'title'])
const de = [
    'value',
    'isLandscape',
    'onChange',
    'toolbarFormat',
    'toolbarPlaceholder',
    'views',
  ],
  fe = (a) => {
    const {classes: s} = a
    return J({root: ['root'], title: ['title']}, ce, s)
  },
  pe = j(G, {
    name: 'MuiDatePickerToolbar',
    slot: 'Root',
    overridesResolver: (a, s) => s.root,
  })({}),
  me = j(le, {
    name: 'MuiDatePickerToolbar',
    slot: 'Title',
    overridesResolver: (a, s) => s.title,
  })(({ownerState: a}) =>
    d({}, a.isLandscape && {margin: 'auto 16px auto auto'})
  ),
  be = h.forwardRef(function (s, r) {
    const n = v({props: s, name: 'MuiDatePickerToolbar'}),
      {
        value: t,
        isLandscape: c,
        toolbarFormat: l,
        toolbarPlaceholder: u = '––',
        views: o,
      } = n,
      m = y(n, de),
      f = x(),
      i = C(),
      b = fe(n),
      p = h.useMemo(
        () =>
          t
            ? l
              ? f.formatByString(t, l)
              : $(o)
              ? f.format(t, 'year')
              : V(o)
              ? f.format(t, 'month')
              : /en/.test(f.getCurrentLocaleCode())
              ? f.format(t, 'normalDateWithWeekday')
              : f.format(t, 'normalDate')
            : u,
        [t, l, u, f, o]
      ),
      D = n
    return P(
      pe,
      d(
        {
          ref: r,
          toolbarTitle: i.datePickerToolbarTitle,
          isLandscape: c,
          className: b.root,
        },
        m,
        {
          children: P(me, {
            variant: 'h4',
            align: c ? 'left' : 'center',
            ownerState: D,
            className: b.title,
            children: p,
          }),
        }
      )
    )
  }),
  A = (a, {format: s, views: r}) => {
    if (s != null) return s
    if ($(r)) return a.formats.year
    if (V(r)) return a.formats.monthAndYear
  }
function L(a, s) {
  var r, n, t, c
  const l = x(),
    u = E(),
    o = v({props: a, name: s}),
    m = h.useMemo(() => {
      var i
      return ((i = o.localeText) == null ? void 0 : i.toolbarTitle) == null
        ? o.localeText
        : d({}, o.localeText, {
            datePickerToolbarTitle: o.localeText.toolbarTitle,
          })
    }, [o.localeText]),
    f = (r = o.slots) != null ? r : X(o.components)
  return d(
    {},
    o,
    {localeText: m},
    Z({
      views: o.views,
      openTo: o.openTo,
      defaultViews: ['year', 'day'],
      defaultOpenTo: 'day',
    }),
    {
      disableFuture: (n = o.disableFuture) != null ? n : !1,
      disablePast: (t = o.disablePast) != null ? t : !1,
      minDate: k(l, o.minDate, u.minDate),
      maxDate: k(l, o.maxDate, u.maxDate),
      slots: d({toolbar: be}, f),
      slotProps: (c = o.slotProps) != null ? c : o.componentsProps,
    }
  )
}
const De = [
    'value',
    'defaultValue',
    'format',
    'onChange',
    'readOnly',
    'onError',
    'shouldDisableDate',
    'shouldDisableMonth',
    'shouldDisableYear',
    'minDate',
    'maxDate',
    'disableFuture',
    'disablePast',
    'selectedSections',
    'onSelectedSectionsChange',
    'unstableFieldRef',
  ],
  Pe = (a) => {
    var s, r, n
    const t = x(),
      c = E()
    return d({}, a, {
      disablePast: (s = a.disablePast) != null ? s : !1,
      disableFuture: (r = a.disableFuture) != null ? r : !1,
      format: (n = a.format) != null ? n : t.formats.keyboardDate,
      minDate: k(t, a.minDate, c.minDate),
      maxDate: k(t, a.maxDate, c.maxDate),
    })
  },
  he = ({props: a, inputRef: s}) => {
    const r = Pe(a),
      {
        value: n,
        defaultValue: t,
        format: c,
        onChange: l,
        readOnly: u,
        onError: o,
        shouldDisableDate: m,
        shouldDisableMonth: f,
        shouldDisableYear: i,
        minDate: b,
        maxDate: p,
        disableFuture: D,
        disablePast: O,
        selectedSections: F,
        onSelectedSectionsChange: g,
        unstableFieldRef: M,
      } = r,
      w = y(r, De)
    return ee({
      inputRef: s,
      forwardedProps: w,
      internalProps: {
        value: n,
        defaultValue: t,
        format: c,
        onChange: l,
        readOnly: u,
        onError: o,
        shouldDisableDate: m,
        shouldDisableMonth: f,
        shouldDisableYear: i,
        minDate: b,
        maxDate: p,
        disableFuture: D,
        disablePast: O,
        selectedSections: F,
        onSelectedSectionsChange: g,
        unstableFieldRef: M,
      },
      valueManager: R,
      fieldValueManager: oe,
      validator: _,
      valueType: 'date',
    })
  },
  ye = ['components', 'componentsProps', 'slots', 'slotProps'],
  Te = ['inputRef'],
  xe = ['ref', 'onPaste', 'inputMode', 'readOnly'],
  Y = h.forwardRef(function (s, r) {
    var n, t, c
    const l = v({props: s, name: 'MuiDateField'}),
      {components: u, componentsProps: o, slots: m, slotProps: f} = l,
      i = y(l, ye),
      b = l,
      p =
        (n =
          (t = m == null ? void 0 : m.textField) != null
            ? t
            : u == null
            ? void 0
            : u.TextField) != null
          ? n
          : ie,
      D = ue({
        elementType: p,
        externalSlotProps:
          (c = f == null ? void 0 : f.textField) != null
            ? c
            : o == null
            ? void 0
            : o.textField,
        externalForwardedProps: i,
        ownerState: b,
      }),
      {inputRef: O} = D,
      F = y(D, Te),
      g = he({props: F, inputRef: O}),
      {ref: M, onPaste: w, inputMode: N, readOnly: U} = g,
      S = y(g, xe)
    return P(
      p,
      d({ref: r}, S, {
        inputProps: d({}, S.inputProps, {
          ref: M,
          onPaste: w,
          inputMode: N,
          readOnly: U,
        }),
      })
    )
  }),
  W = h.forwardRef(function (s, r) {
    var n, t
    const c = C(),
      l = x(),
      u = L(s, 'MuiDesktopDatePicker'),
      o = d({day: T, month: T, year: T}, u.viewRenderers),
      m = d({}, u, {
        viewRenderers: o,
        format: A(l, u),
        yearsPerRow: (n = u.yearsPerRow) != null ? n : 4,
        slots: d({openPickerIcon: te, field: Y}, u.slots),
        slotProps: d({}, u.slotProps, {
          field: (i) => {
            var b
            return d(
              {},
              q((b = u.slotProps) == null ? void 0 : b.field, i),
              z(u),
              {ref: r}
            )
          },
          toolbar: d(
            {hidden: !0},
            (t = u.slotProps) == null ? void 0 : t.toolbar
          ),
        }),
      }),
      {renderPicker: f} = ae({
        props: m,
        valueManager: R,
        getOpenDialogAriaText: c.openDatePickerDialogue,
        validator: _,
      })
    return f()
  })
W.propTypes = {
  autoFocus: e.bool,
  className: e.string,
  closeOnSelect: e.bool,
  components: e.object,
  componentsProps: e.object,
  dayOfWeekFormatter: e.func,
  defaultCalendarMonth: e.any,
  defaultValue: e.any,
  disabled: e.bool,
  disableFuture: e.bool,
  disableHighlightToday: e.bool,
  disableOpenPicker: e.bool,
  disablePast: e.bool,
  displayWeekNumber: e.bool,
  fixedWeekNumber: e.number,
  format: e.string,
  inputRef: e.oneOfType([e.func, e.shape({current: e.object})]),
  label: e.node,
  loading: e.bool,
  localeText: e.object,
  maxDate: e.any,
  minDate: e.any,
  monthsPerRow: e.oneOf([3, 4]),
  onAccept: e.func,
  onChange: e.func,
  onClose: e.func,
  onError: e.func,
  onMonthChange: e.func,
  onOpen: e.func,
  onSelectedSectionsChange: e.func,
  onViewChange: e.func,
  onYearChange: e.func,
  open: e.bool,
  openTo: e.oneOf(['day', 'month', 'year']),
  orientation: e.oneOf(['landscape', 'portrait']),
  readOnly: e.bool,
  reduceAnimations: e.bool,
  renderLoading: e.func,
  selectedSections: e.oneOfType([
    e.oneOf([
      'all',
      'day',
      'hours',
      'meridiem',
      'minutes',
      'month',
      'seconds',
      'weekDay',
      'year',
    ]),
    e.number,
    e.shape({endIndex: e.number.isRequired, startIndex: e.number.isRequired}),
  ]),
  shouldDisableDate: e.func,
  shouldDisableMonth: e.func,
  shouldDisableYear: e.func,
  showDaysOutsideCurrentMonth: e.bool,
  slotProps: e.object,
  slots: e.object,
  sx: e.oneOfType([
    e.arrayOf(e.oneOfType([e.func, e.object, e.bool])),
    e.func,
    e.object,
  ]),
  value: e.any,
  view: e.oneOf(['day', 'month', 'year']),
  viewRenderers: e.shape({day: e.func, month: e.func, year: e.func}),
  views: e.arrayOf(e.oneOf(['day', 'month', 'year']).isRequired),
  yearsPerRow: e.oneOf([3, 4]),
}
const I = h.forwardRef(function (s, r) {
  var n
  const t = C(),
    c = x(),
    l = L(s, 'MuiMobileDatePicker'),
    u = d({day: T, month: T, year: T}, l.viewRenderers),
    o = d({}, l, {
      viewRenderers: u,
      format: A(c, l),
      slots: d({field: Y}, l.slots),
      slotProps: d({}, l.slotProps, {
        field: (f) => {
          var i
          return d(
            {},
            q((i = l.slotProps) == null ? void 0 : i.field, f),
            z(l),
            {ref: r}
          )
        },
        toolbar: d(
          {hidden: !1},
          (n = l.slotProps) == null ? void 0 : n.toolbar
        ),
      }),
    }),
    {renderPicker: m} = ne({
      props: o,
      valueManager: R,
      getOpenDialogAriaText: t.openDatePickerDialogue,
      validator: _,
    })
  return m()
})
I.propTypes = {
  autoFocus: e.bool,
  className: e.string,
  closeOnSelect: e.bool,
  components: e.object,
  componentsProps: e.object,
  dayOfWeekFormatter: e.func,
  defaultCalendarMonth: e.any,
  defaultValue: e.any,
  disabled: e.bool,
  disableFuture: e.bool,
  disableHighlightToday: e.bool,
  disableOpenPicker: e.bool,
  disablePast: e.bool,
  displayWeekNumber: e.bool,
  fixedWeekNumber: e.number,
  format: e.string,
  inputRef: e.oneOfType([e.func, e.shape({current: e.object})]),
  label: e.node,
  loading: e.bool,
  localeText: e.object,
  maxDate: e.any,
  minDate: e.any,
  monthsPerRow: e.oneOf([3, 4]),
  onAccept: e.func,
  onChange: e.func,
  onClose: e.func,
  onError: e.func,
  onMonthChange: e.func,
  onOpen: e.func,
  onSelectedSectionsChange: e.func,
  onViewChange: e.func,
  onYearChange: e.func,
  open: e.bool,
  openTo: e.oneOf(['day', 'month', 'year']),
  orientation: e.oneOf(['landscape', 'portrait']),
  readOnly: e.bool,
  reduceAnimations: e.bool,
  renderLoading: e.func,
  selectedSections: e.oneOfType([
    e.oneOf([
      'all',
      'day',
      'hours',
      'meridiem',
      'minutes',
      'month',
      'seconds',
      'weekDay',
      'year',
    ]),
    e.number,
    e.shape({endIndex: e.number.isRequired, startIndex: e.number.isRequired}),
  ]),
  shouldDisableDate: e.func,
  shouldDisableMonth: e.func,
  shouldDisableYear: e.func,
  showDaysOutsideCurrentMonth: e.bool,
  slotProps: e.object,
  slots: e.object,
  sx: e.oneOfType([
    e.arrayOf(e.oneOfType([e.func, e.object, e.bool])),
    e.func,
    e.object,
  ]),
  value: e.any,
  view: e.oneOf(['day', 'month', 'year']),
  viewRenderers: e.shape({day: e.func, month: e.func, year: e.func}),
  views: e.arrayOf(e.oneOf(['day', 'month', 'year']).isRequired),
  yearsPerRow: e.oneOf([3, 4]),
}
const ge = ['desktopModeMediaQuery'],
  ke = h.forwardRef(function (s, r) {
    const n = v({props: s, name: 'MuiDatePicker'}),
      {desktopModeMediaQuery: t = re} = n,
      c = y(n, ge)
    return se(t, {defaultMatches: !0})
      ? P(W, d({ref: r}, c))
      : P(I, d({ref: r}, c))
  })
function $e({
  parseError: a,
  name: s,
  required: r,
  validation: n = {},
  inputProps: t,
  control: c,
  textReadOnly: l,
  slotProps: u,
  ...o
}) {
  const m = Q(),
    f = a || m
  return (
    r && !n.required && (n.required = 'This field is required'),
    P(B, {
      name: s,
      rules: n,
      control: c,
      defaultValue: null,
      render: ({field: i, fieldState: {error: b}}) => (
        i != null &&
          i.value &&
          typeof (i == null ? void 0 : i.value) == 'string' &&
          (i.value = new Date(i.value)),
        P(ke, {
          ...o,
          ...i,
          ref: (p) => {
            i.ref(p == null ? void 0 : p.querySelector('input'))
          },
          onClose: (...p) => {
            i.onBlur(), o.onClose && o.onClose(...p)
          },
          onChange: (p, D) => {
            i.onChange(p, D),
              typeof o.onChange == 'function' && o.onChange(p, D)
          },
          slotProps: {
            ...u,
            textField: {
              ...t,
              required: r,
              error: !!b,
              helperText: b
                ? typeof f == 'function'
                  ? f(b)
                  : b.message
                : (t == null ? void 0 : t.helperText) || o.helperText,
              inputProps: {
                ...(t == null ? void 0 : t.inputProps),
                ...(l && {readonly: !0}),
              },
            },
          },
        })
      ),
    })
  )
}
export {$e as D}
//# sourceMappingURL=DatePickerElement-3c97afa3.js.map
