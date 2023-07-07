'use strict'
;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [167],
    {
      './node_modules/@mui/material/esm/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {Z: () => Box_Box})
        var esm_extends = __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/extends.js'
          ),
          objectWithoutPropertiesLoose = __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          react = __webpack_require__('../../node_modules/react/index.js'),
          clsx_m = __webpack_require__(
            '../../node_modules/clsx/dist/clsx.m.js'
          ),
          styled_engine = __webpack_require__(
            './node_modules/@mui/styled-engine/index.js'
          ),
          styleFunctionSx_styleFunctionSx = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js'
          ),
          extendSxProp = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          useTheme = __webpack_require__(
            './node_modules/@mui/system/esm/useTheme.js'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        const _excluded = ['className', 'component']
        var ClassNameGenerator = __webpack_require__(
          './node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js'
        )
        const Box = (function createBox(options = {}) {
            const {
                defaultTheme,
                defaultClassName = 'MuiBox-root',
                generateClassName,
                styleFunctionSx = styleFunctionSx_styleFunctionSx.Z,
              } = options,
              BoxRoot = (0, styled_engine.ZP)('div', {
                shouldForwardProp: (prop) =>
                  'theme' !== prop && 'sx' !== prop && 'as' !== prop,
              })(styleFunctionSx)
            return react.forwardRef(function Box(inProps, ref) {
              const theme = (0, useTheme.Z)(defaultTheme),
                _extendSxProp = (0, extendSxProp.Z)(inProps),
                {className, component = 'div'} = _extendSxProp,
                other = (0, objectWithoutPropertiesLoose.Z)(
                  _extendSxProp,
                  _excluded
                )
              return (0,
              jsx_runtime.jsx)(BoxRoot, (0, esm_extends.Z)({as: component, ref, className: (0, clsx_m.Z)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName), theme}, other))
            })
          })({
            defaultTheme: (0,
            __webpack_require__(
              './node_modules/@mui/material/esm/styles/createTheme.js'
            ).Z)(),
            defaultClassName: 'MuiBox-root',
            generateClassName: ClassNameGenerator.Z.generate,
          }),
          Box_Box = Box
      },
      './node_modules/@mui/material/esm/Stack/Stack.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
            ),
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@babel/runtime/helpers/esm/extends.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/@mui/system/esm/breakpoints.js'
          ),
          _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './node_modules/@mui/system/esm/spacing.js'
          ),
          _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/utils/esm/deepmerge.js'
          ),
          _styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './node_modules/@mui/material/esm/styles/styled.js'
          ),
          _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/esm/styles/useThemeProps.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        const _excluded = [
          'component',
          'direction',
          'spacing',
          'divider',
          'children',
        ]
        function joinChildren(children, separator) {
          const childrenArray =
            react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(
              children
            ).filter(Boolean)
          return childrenArray.reduce(
            (output, child, index) => (
              output.push(child),
              index < childrenArray.length - 1 &&
                output.push(
                  react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(separator, {
                    key: `separator-${index}`,
                  })
                ),
              output
            ),
            []
          )
        }
        const StackRoot = (0, _styles_styled__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            'div',
            {
              name: 'MuiStack',
              slot: 'Root',
              overridesResolver: (props, styles) => [styles.root],
            }
          )(({ownerState, theme}) => {
            let styles = (0,
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {display: 'flex', flexDirection: 'column'},
              (0, _mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)(
                {theme},
                (0, _mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({
                  values: ownerState.direction,
                  breakpoints: theme.breakpoints.values,
                }),
                (propValue) => ({flexDirection: propValue})
              )
            )
            if (ownerState.spacing) {
              const transformer = (0,
                _mui_system__WEBPACK_IMPORTED_MODULE_4__.hB)(theme),
                base = Object.keys(theme.breakpoints.values).reduce(
                  (acc, breakpoint) => (
                    (('object' == typeof ownerState.spacing &&
                      null != ownerState.spacing[breakpoint]) ||
                      ('object' == typeof ownerState.direction &&
                        null != ownerState.direction[breakpoint])) &&
                      (acc[breakpoint] = !0),
                    acc
                  ),
                  {}
                ),
                directionValues = (0,
                _mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({
                  values: ownerState.direction,
                  base,
                }),
                spacingValues = (0,
                _mui_system__WEBPACK_IMPORTED_MODULE_3__.P$)({
                  values: ownerState.spacing,
                  base,
                })
              'object' == typeof directionValues &&
                Object.keys(directionValues).forEach(
                  (breakpoint, index, breakpoints) => {
                    if (!directionValues[breakpoint]) {
                      const previousDirectionValue =
                        index > 0
                          ? directionValues[breakpoints[index - 1]]
                          : 'column'
                      directionValues[breakpoint] = previousDirectionValue
                    }
                  }
                )
              const styleFromPropValue = (propValue, breakpoint) => {
                return {
                  '& > :not(style) + :not(style)': {
                    margin: 0,
                    [`margin${
                      ((direction = breakpoint
                        ? directionValues[breakpoint]
                        : ownerState.direction),
                      {
                        row: 'Left',
                        'row-reverse': 'Right',
                        column: 'Top',
                        'column-reverse': 'Bottom',
                      }[direction])
                    }`]: (0, _mui_system__WEBPACK_IMPORTED_MODULE_4__.NA)(
                      transformer,
                      propValue
                    ),
                  },
                }
                var direction
              }
              styles = (0, _mui_utils__WEBPACK_IMPORTED_MODULE_5__.Z)(
                styles,
                (0, _mui_system__WEBPACK_IMPORTED_MODULE_3__.k9)(
                  {theme},
                  spacingValues,
                  styleFromPropValue
                )
              )
            }
            return (
              (styles = (0, _mui_system__WEBPACK_IMPORTED_MODULE_3__.dt)(
                theme.breakpoints,
                styles
              )),
              styles
            )
          }),
          __WEBPACK_DEFAULT_EXPORT__ =
            react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Stack(
              inProps,
              ref
            ) {
              const themeProps = (0,
                _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({
                  props: inProps,
                  name: 'MuiStack',
                }),
                props = (0, _mui_system__WEBPACK_IMPORTED_MODULE_8__.Z)(
                  themeProps
                ),
                {
                  component = 'div',
                  direction = 'column',
                  spacing = 0,
                  divider,
                  children,
                } = props,
                other = (0,
                _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(
                  props,
                  _excluded
                ),
                ownerState = {direction, spacing}
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                StackRoot,
                (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)(
                  {as: component, ownerState, ref},
                  other,
                  {
                    children: divider
                      ? joinChildren(children, divider)
                      : children,
                  }
                )
              )
            })
      },
      './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {Z: () => extendSxProp})
        var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@babel/runtime/helpers/esm/extends.js'
            ),
          _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
            ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@mui/utils/esm/deepmerge.js'
          ),
          _getThemeValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@mui/system/esm/getThemeValue.js'
          )
        const _excluded = ['sx'],
          splitProps = (props) => {
            const result = {systemProps: {}, otherProps: {}}
            return (
              Object.keys(props).forEach((prop) => {
                _getThemeValue__WEBPACK_IMPORTED_MODULE_0__.Gc[prop]
                  ? (result.systemProps[prop] = props[prop])
                  : (result.otherProps[prop] = props[prop])
              }),
              result
            )
          }
        function extendSxProp(props) {
          const {sx: inSx} = props,
            other = (0,
            _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(
              props,
              _excluded
            ),
            {systemProps, otherProps} = splitProps(other)
          let finalSx
          return (
            (finalSx = Array.isArray(inSx)
              ? [systemProps, ...inSx]
              : 'function' == typeof inSx
              ? (...args) => {
                  const result = inSx(...args)
                  return (0, _mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)
                    ? (0,
                      _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                        {},
                        systemProps,
                        result
                      )
                    : systemProps
                }
              : (0,
                _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  systemProps,
                  inSx
                )),
            (0,
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              otherProps,
              {sx: finalSx}
            )
          )
        }
      },
      './src/Shared.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {M: () => SubmitButton})
        var react = __webpack_require__('../../node_modules/react/index.js'),
          Box = __webpack_require__(
            './node_modules/@mui/material/esm/Box/Box.js'
          ),
          Stack = __webpack_require__(
            './node_modules/@mui/material/esm/Stack/Stack.js'
          ),
          Button = __webpack_require__(
            './node_modules/@mui/material/esm/Button/Button.js'
          ),
          index_esm = __webpack_require__(
            '../../node_modules/react-hook-form/dist/index.esm.mjs'
          ),
          __jsx = react.createElement
        function ResetFormButton() {
          var reset = (0, index_esm.Gc)().reset
          return __jsx(
            Button.Z,
            {
              onClick: function onClick() {
                reset({})
              },
            },
            'Reset'
          )
        }
        ;(ResetFormButton.displayName = 'ResetFormButton'),
          (ResetFormButton.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'ResetFormButton',
          })
        var Shared_jsx = react.createElement,
          BoxMargin = function BoxMargin(_ref) {
            var children = _ref.children
            return Shared_jsx(Box.Z, {sx: {marginY: 2}}, children)
          }
        BoxMargin.displayName = 'BoxMargin'
        var SubmitButton = function SubmitButton() {
          return Shared_jsx(
            Stack.Z,
            {direction: 'row', spacing: 2},
            Shared_jsx(ResetFormButton, null),
            Shared_jsx(
              Button.Z,
              {type: 'submit', color: 'primary'},
              ' ',
              'Submit'
            )
          )
        }
        ;(SubmitButton.displayName = 'SubmitButton'),
          (BoxMargin.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'BoxMargin',
          }),
          (SubmitButton.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'SubmitButton',
          })
        try {
          ;(BoxMargin.displayName = 'BoxMargin'),
            (BoxMargin.__docgenInfo = {
              description: '',
              displayName: 'BoxMargin',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES['src/Shared.tsx#BoxMargin'] = {
                docgenInfo: BoxMargin.__docgenInfo,
                name: 'BoxMargin',
                path: 'src/Shared.tsx#BoxMargin',
              })
        } catch (__react_docgen_typescript_loader_error) {}
        try {
          ;(SubmitButton.displayName = 'SubmitButton'),
            (SubmitButton.__docgenInfo = {
              description: '',
              displayName: 'SubmitButton',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES['src/Shared.tsx#SubmitButton'] = {
                docgenInfo: SubmitButton.__docgenInfo,
                name: 'SubmitButton',
                path: 'src/Shared.tsx#SubmitButton',
              })
        } catch (__react_docgen_typescript_loader_error) {}
      },
      './stories/TextFieldElement.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Core: () => Core,
            PreDefined: () => PreDefined,
            PreDefinedNested: () => PreDefinedNested,
            WithFormContext: () => WithFormContext,
            WithFormErrorProvider: () => WithFormErrorProvider,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _Core$parameters,
          _Core$parameters2,
          _Core$parameters2$doc,
          _Basic$parameters,
          _Basic$parameters2,
          _Basic$parameters2$do,
          _PreDefined$parameter,
          _PreDefined$parameter2,
          _PreDefined$parameter3,
          _PreDefinedNested$par,
          _PreDefinedNested$par2,
          _PreDefinedNested$par3,
          _WithFormContext$para,
          _WithFormContext$para2,
          _WithFormContext$para3,
          _WithFormErrorProvide,
          _WithFormErrorProvide2,
          _WithFormErrorProvide3,
          _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              '../../node_modules/@storybook/addon-actions/dist/index.mjs'
            ),
          _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/material/esm/Button/Button.js'
          ),
          _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            './node_modules/@mui/material/esm/Stack/Stack.js'
          ),
          react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            '../../node_modules/react-hook-form/dist/index.esm.mjs'
          ),
          react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('../../packages/rhf-mui/src/index.ts'),
          _src_Shared__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./src/Shared.tsx'),
          __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object)
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object)
            enumerableOnly &&
              (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable
              })),
              keys.push.apply(keys, symbols)
          }
          return keys
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {}
            i % 2
              ? ownKeys(Object(source), !0).forEach(function (key) {
                  ;(0,
                  _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target, key, source[key])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  )
                })
          }
          return target
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'TextFieldElement',
          component: react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF,
        }
        var Template = function Template(args) {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
            {
              defaultValues: {},
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                'submit'
              ),
            },
            __jsx(
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF,
              args
            ),
            __jsx('br', null),
            __jsx(_src_Shared__WEBPACK_IMPORTED_MODULE_4__.M, null)
          )
        }
        Template.displayName = 'Template'
        var Core = {render: Template, args: {name: 'core', label: 'Label'}},
          parseError = function parseError(error) {
            return 'pattern' === error.type
              ? 'Enter an email'
              : 'This field is required'
          },
          Basic = function Basic() {
            return __jsx(
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
              {
                defaultValues: {agree: !1},
                onSuccess: (0,
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                  'submit'
                ),
                FormProps: {
                  'aria-autocomplete': 'none',
                  autoComplete: 'new-password',
                },
              },
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                required: !0,
                autoComplete: 'new-password',
                margin: 'dense',
                label: 'Name',
                name: 'default-text-field',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                required: !0,
                type: 'email',
                margin: 'dense',
                label: 'Email',
                name: 'default-email-field',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                required: !0,
                parseError,
                type: 'email',
                margin: 'dense',
                label: 'Email with ParseError',
                name: 'default-email-field-with-parsed',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                margin: 'dense',
                label: 'Number',
                name: 'number-text-field',
                required: !0,
                type: 'number',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.OZ, {
                margin: 'dense',
                label: 'Password',
                required: !0,
                name: 'password',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Iv, {
                passwordFieldName: 'password',
                name: 'password-repeat',
                margin: 'dense',
                label: 'Repeat Password',
                required: !0,
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                name: 'textarea',
                multiline: !0,
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Zo, {
                name: 'agree',
                label: 'Agree',
                required: !0,
                onChange: function onChange(ev, checked) {
                  return console.log(ev, checked)
                },
              }),
              __jsx('br', null),
              __jsx(
                _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
                {type: 'submit', color: 'primary', variant: 'contained'},
                'Submit'
              )
            )
          }
        Basic.displayName = 'Basic'
        var PreDefined = function PreDefined() {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
            {
              defaultValues: {
                'default-text-field': 'Test Data',
                'default-email-field': 'info@nextjs.com',
                'number-text-field': 6,
              },
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                'submit'
              ),
            },
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              required: !0,
              margin: 'dense',
              label: 'Name',
              name: 'default-text-field',
            }),
            __jsx('br', null),
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              required: !0,
              parseError,
              type: 'email',
              margin: 'dense',
              label: 'Email',
              name: 'default-email-field',
            }),
            __jsx('br', null),
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              margin: 'dense',
              label: 'Number',
              name: 'number-text-field',
              required: !0,
              type: 'number',
            }),
            __jsx('br', null),
            __jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
              {type: 'submit', color: 'primary', variant: 'contained'},
              'Submit'
            )
          )
        }
        PreDefined.displayName = 'PreDefined'
        var PreDefinedNested = function PreDefinedNested() {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
            {
              defaultValues: {
                a: {'default-text-field': 'Test Data'},
                b: {
                  'default-email-field': 'info@nextjs.com',
                  'number-text-field': 6,
                },
              },
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                'submit'
              ),
            },
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              required: !0,
              margin: 'dense',
              label: 'Name',
              name: 'a.default-text-field',
            }),
            __jsx('br', null),
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              required: !0,
              parseError,
              type: 'email',
              margin: 'dense',
              label: 'Email',
              name: 'b.default-email-field',
            }),
            __jsx('br', null),
            __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
              margin: 'dense',
              label: 'Number',
              name: 'b.number-text-field',
              required: !0,
              type: 'number',
            }),
            __jsx('br', null),
            __jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
              {type: 'submit', color: 'primary', variant: 'contained'},
              'Submit'
            )
          )
        }
        PreDefinedNested.displayName = 'PreDefinedNested'
        var WithFormContext = function WithFormContext() {
          var formContext = (0,
            react_hook_form__WEBPACK_IMPORTED_MODULE_6__.cI)({
              defaultValues: {email: '', name: ''},
            }),
            emailValue = (0, formContext.watch)('email')
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                console.log('email changed', emailValue)
              },
              [emailValue]
            ),
            __jsx(
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
              {
                onSuccess: (0,
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                  'submit'
                ),
                formContext,
              },
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                name: 'name',
                label: 'Name',
                parseError,
                required: !0,
                variant: 'outlined',
                margin: 'dense',
              }),
              __jsx('br', null),
              __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                name: 'email',
                type: 'email',
                label: 'Email',
                required: !0,
                parseError,
                variant: 'outlined',
                margin: 'dense',
              }),
              __jsx('br', null),
              __jsx('br', null),
              __jsx(
                _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
                {type: 'submit', color: 'primary', variant: 'contained'},
                'Submit'
              )
            )
          )
        }
        WithFormContext.displayName = 'WithFormContext'
        var WithFormErrorProvider = function WithFormErrorProvider() {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.mE,
            {
              onError: function onError(error) {
                return (
                  console.log('you can hook your own error message', error),
                  'required' === error.type
                    ? 'Overwritten Error Message'
                    : null == error
                    ? void 0
                    : error.message
                )
              },
            },
            __jsx(
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.Yb,
              {
                onSuccess: (0,
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)(
                  'submit'
                ),
              },
              __jsx(
                _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,
                {spacing: 3},
                __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                  name: 'name',
                  label: 'Name',
                  required: !0,
                  variant: 'outlined',
                  margin: 'dense',
                }),
                __jsx(react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_3__.SF, {
                  name: 'email',
                  type: 'email',
                  label: 'Email',
                  required: !0,
                  variant: 'outlined',
                  margin: 'dense',
                }),
                __jsx(
                  _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
                  {type: 'submit', color: 'primary', variant: 'contained'},
                  'Submit'
                )
              )
            )
          )
        }
        ;(WithFormErrorProvider.displayName = 'WithFormErrorProvider'),
          (Core.parameters = _objectSpread(
            _objectSpread({}, Core.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Core$parameters = Core.parameters) ||
                    void 0 === _Core$parameters
                    ? void 0
                    : _Core$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'core',\n    label: 'Label'\n  }\n}",
                    },
                    null === (_Core$parameters2 = Core.parameters) ||
                      void 0 === _Core$parameters2 ||
                      null ===
                        (_Core$parameters2$doc = _Core$parameters2.docs) ||
                      void 0 === _Core$parameters2$doc
                      ? void 0
                      : _Core$parameters2$doc.source
                  ),
                }
              ),
            }
          )),
          (Basic.parameters = _objectSpread(
            _objectSpread({}, Basic.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Basic$parameters = Basic.parameters) ||
                    void 0 === _Basic$parameters
                    ? void 0
                    : _Basic$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => {\n  const form = {\n    agree: false\n  };\n  return <FormContainer defaultValues={form} onSuccess={action('submit')} FormProps={{\n    'aria-autocomplete': 'none',\n    autoComplete: 'new-password'\n  }}>\n      <TextFieldElement required autoComplete={'new-password'} margin={'dense'} label={'Name'} name={'default-text-field'} />\n      <br />\n      <TextFieldElement required type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />\n      <br />\n      <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email with ParseError'} name={'default-email-field-with-parsed'} />\n      <br />\n      <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />\n      <br />\n      <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />\n      <br />\n      <PasswordRepeatElement passwordFieldName={'password'} name={'password-repeat'} margin={'dense'} label={'Repeat Password'} required />\n      <br />\n      <TextFieldElement name={'textarea'} multiline />\n      <br />\n      <CheckboxElement name={'agree'} label={'Agree'} required onChange={(ev, checked) => console.log(ev, checked)} />\n      <br />\n      <Button type={'submit'} color={'primary'} variant={'contained'}>\n        Submit\n      </Button>\n    </FormContainer>;\n}",
                    },
                    null === (_Basic$parameters2 = Basic.parameters) ||
                      void 0 === _Basic$parameters2 ||
                      null ===
                        (_Basic$parameters2$do = _Basic$parameters2.docs) ||
                      void 0 === _Basic$parameters2$do
                      ? void 0
                      : _Basic$parameters2$do.source
                  ),
                }
              ),
            }
          )),
          (PreDefined.parameters = _objectSpread(
            _objectSpread({}, PreDefined.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_PreDefined$parameter = PreDefined.parameters) ||
                    void 0 === _PreDefined$parameter
                    ? void 0
                    : _PreDefined$parameter.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => <FormContainer defaultValues={{\n  'default-text-field': 'Test Data',\n  'default-email-field': 'info@nextjs.com',\n  'number-text-field': 6\n}} onSuccess={action('submit')}>\n    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />\n    <br />\n    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />\n    <br />\n    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />\n    <br />\n    <Button type={'submit'} color={'primary'} variant={'contained'}>\n      Submit\n    </Button>\n  </FormContainer>",
                    },
                    null === (_PreDefined$parameter2 = PreDefined.parameters) ||
                      void 0 === _PreDefined$parameter2 ||
                      null ===
                        (_PreDefined$parameter3 =
                          _PreDefined$parameter2.docs) ||
                      void 0 === _PreDefined$parameter3
                      ? void 0
                      : _PreDefined$parameter3.source
                  ),
                }
              ),
            }
          )),
          (PreDefinedNested.parameters = _objectSpread(
            _objectSpread({}, PreDefinedNested.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_PreDefinedNested$par = PreDefinedNested.parameters) ||
                    void 0 === _PreDefinedNested$par
                    ? void 0
                    : _PreDefinedNested$par.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => <FormContainer defaultValues={{\n  a: {\n    'default-text-field': 'Test Data'\n  },\n  b: {\n    'default-email-field': 'info@nextjs.com',\n    'number-text-field': 6\n  }\n}} onSuccess={action('submit')}>\n    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />\n    <br />\n    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />\n    <br />\n    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />\n    <br />\n    <Button type={'submit'} color={'primary'} variant={'contained'}>\n      Submit\n    </Button>\n  </FormContainer>",
                    },
                    null ===
                      (_PreDefinedNested$par2 = PreDefinedNested.parameters) ||
                      void 0 === _PreDefinedNested$par2 ||
                      null ===
                        (_PreDefinedNested$par3 =
                          _PreDefinedNested$par2.docs) ||
                      void 0 === _PreDefinedNested$par3
                      ? void 0
                      : _PreDefinedNested$par3.source
                  ),
                }
              ),
            }
          )),
          (WithFormContext.parameters = _objectSpread(
            _objectSpread({}, WithFormContext.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithFormContext$para = WithFormContext.parameters) ||
                    void 0 === _WithFormContext$para
                    ? void 0
                    : _WithFormContext$para.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => {\n  const formContext = useForm<{\n    email: string;\n    name: string;\n  }>({\n    defaultValues: {\n      email: '',\n      name: ''\n    }\n  });\n  const {\n    watch\n  } = formContext;\n  const emailValue = watch('email');\n  useEffect(() => {\n    console.log('email changed', emailValue);\n  }, [emailValue]);\n  return <FormContainer onSuccess={action('submit')} formContext={formContext}>\n      <TextFieldElement name={'name'} label={'Name'} parseError={parseError} required variant={'outlined'} margin={'dense'} />\n      <br />\n      <TextFieldElement name={'email'} type=\"email\" label={'Email'} required parseError={parseError} variant={'outlined'} margin={'dense'} />\n      <br />\n      <br />\n      <Button type={'submit'} color={'primary'} variant={'contained'}>\n        Submit\n      </Button>\n    </FormContainer>;\n}",
                    },
                    null ===
                      (_WithFormContext$para2 = WithFormContext.parameters) ||
                      void 0 === _WithFormContext$para2 ||
                      null ===
                        (_WithFormContext$para3 =
                          _WithFormContext$para2.docs) ||
                      void 0 === _WithFormContext$para3
                      ? void 0
                      : _WithFormContext$para3.source
                  ),
                }
              ),
            }
          )),
          (WithFormErrorProvider.parameters = _objectSpread(
            _objectSpread({}, WithFormErrorProvider.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithFormErrorProvide =
                      WithFormErrorProvider.parameters) ||
                    void 0 === _WithFormErrorProvide
                    ? void 0
                    : _WithFormErrorProvide.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => <FormErrorProvider onError={error => {\n  console.log('you can hook your own error message', error);\n  if (error.type === 'required') {\n    return 'Overwritten Error Message';\n  }\n  return error?.message;\n}}>\n    <FormContainer onSuccess={action('submit')}>\n      <Stack spacing={3}>\n        <TextFieldElement name={'name'} label={'Name'} required variant={'outlined'} margin={'dense'} />\n        <TextFieldElement name={'email'} type=\"email\" label={'Email'} required variant={'outlined'} margin={'dense'} />\n        <Button type={'submit'} color={'primary'} variant={'contained'}>\n          Submit\n        </Button>\n      </Stack>\n    </FormContainer>\n  </FormErrorProvider>",
                    },
                    null ===
                      (_WithFormErrorProvide2 =
                        WithFormErrorProvider.parameters) ||
                      void 0 === _WithFormErrorProvide2 ||
                      null ===
                        (_WithFormErrorProvide3 =
                          _WithFormErrorProvide2.docs) ||
                      void 0 === _WithFormErrorProvide3
                      ? void 0
                      : _WithFormErrorProvide3.source
                  ),
                }
              ),
            }
          )),
          (Basic.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Basic',
          }),
          (PreDefined.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'PreDefined',
          }),
          (PreDefinedNested.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'PreDefinedNested',
          }),
          (WithFormContext.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'WithFormContext',
          }),
          (WithFormErrorProvider.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'WithFormErrorProvider',
          })
      },
    },
  ]
)
