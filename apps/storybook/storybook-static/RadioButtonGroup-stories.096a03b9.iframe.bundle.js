'use strict'
;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [282],
    {
      './node_modules/@mui/material/esm/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {Z: () => Box_Box})
        var esm_extends = __webpack_require__(
            './node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js'
          ),
          objectWithoutPropertiesLoose = __webpack_require__(
            './node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
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
          './node_modules/@mui/material/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js'
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
              './node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
            ),
          _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js'
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
            './node_modules/@mui/material/node_modules/@mui/utils/esm/deepmerge.js'
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
              './node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/extends.js'
            ),
          _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/system/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
            ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@mui/system/node_modules/@mui/utils/esm/deepmerge.js'
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
      './stories/RadioButtonGroup.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Disabled: () => Disabled,
            Inline: () => Inline,
            Required: () => Required,
            ValueAsNumber: () => ValueAsNumber,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _Basic$parameters,
          _Basic$parameters2,
          _Basic$parameters2$do,
          _Inline$parameters,
          _Inline$parameters2,
          _Inline$parameters2$d,
          _Required$parameters,
          _Required$parameters2,
          _Required$parameters3,
          _ValueAsNumber$parame,
          _ValueAsNumber$parame2,
          _ValueAsNumber$parame3,
          _Disabled$parameters,
          _Disabled$parameters2,
          _Disabled$parameters3,
          _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('../../packages/rhf-mui/src/index.ts'),
          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/@storybook/addon-actions/dist/index.mjs'
            ),
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
          title: 'RadioButtonGroup',
          component: react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.SY,
        }
        var Template = function Template(args) {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.Yb,
            {
              defaultValues: {},
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.aD)(
                'submit'
              ),
            },
            __jsx(
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.SY,
              args
            ),
            __jsx('br', null),
            __jsx(_src_Shared__WEBPACK_IMPORTED_MODULE_4__.M, null)
          )
        }
        Template.displayName = 'Template'
        var options = [
            {id: '1', label: 'Label 1'},
            {id: '2', label: 'label 2'},
          ],
          Basic = {
            render: Template,
            args: {label: 'Basic', name: 'basic', options},
          },
          Inline = {
            render: Template,
            args: {label: 'Inline', name: 'inline', row: !0, options},
          },
          Required = {
            render: Template,
            args: {label: 'Required', name: 'inline', required: !0, options},
          },
          ValueAsNumber = {
            render: Template,
            args: {
              label: 'Required',
              name: 'number_value',
              required: !0,
              type: 'number',
              options: options.map(function (i) {
                return {id: Number(i.id), label: i.label}
              }),
            },
          },
          Disabled = {
            render: Template,
            args: {label: 'Disabled', name: 'disabled', options, disabled: !0},
          }
        ;(Basic.parameters = _objectSpread(
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
                      "{\n  render: Template,\n  args: {\n    label: 'Basic',\n    name: 'basic',\n    options\n  }\n}",
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
          (Inline.parameters = _objectSpread(
            _objectSpread({}, Inline.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Inline$parameters = Inline.parameters) ||
                    void 0 === _Inline$parameters
                    ? void 0
                    : _Inline$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    label: 'Inline',\n    name: 'inline',\n    row: true,\n    options\n  }\n}",
                    },
                    null === (_Inline$parameters2 = Inline.parameters) ||
                      void 0 === _Inline$parameters2 ||
                      null ===
                        (_Inline$parameters2$d = _Inline$parameters2.docs) ||
                      void 0 === _Inline$parameters2$d
                      ? void 0
                      : _Inline$parameters2$d.source
                  ),
                }
              ),
            }
          )),
          (Required.parameters = _objectSpread(
            _objectSpread({}, Required.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Required$parameters = Required.parameters) ||
                    void 0 === _Required$parameters
                    ? void 0
                    : _Required$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    label: 'Required',\n    name: 'inline',\n    required: true,\n    options\n  }\n}",
                    },
                    null === (_Required$parameters2 = Required.parameters) ||
                      void 0 === _Required$parameters2 ||
                      null ===
                        (_Required$parameters3 = _Required$parameters2.docs) ||
                      void 0 === _Required$parameters3
                      ? void 0
                      : _Required$parameters3.source
                  ),
                }
              ),
            }
          )),
          (ValueAsNumber.parameters = _objectSpread(
            _objectSpread({}, ValueAsNumber.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_ValueAsNumber$parame = ValueAsNumber.parameters) ||
                    void 0 === _ValueAsNumber$parame
                    ? void 0
                    : _ValueAsNumber$parame.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    label: 'Required',\n    name: 'number_value',\n    required: true,\n    type: 'number',\n    options: options.map(i => ({\n      id: Number(i.id),\n      label: i.label\n    }))\n  }\n}",
                    },
                    null ===
                      (_ValueAsNumber$parame2 = ValueAsNumber.parameters) ||
                      void 0 === _ValueAsNumber$parame2 ||
                      null ===
                        (_ValueAsNumber$parame3 =
                          _ValueAsNumber$parame2.docs) ||
                      void 0 === _ValueAsNumber$parame3
                      ? void 0
                      : _ValueAsNumber$parame3.source
                  ),
                }
              ),
            }
          )),
          (Disabled.parameters = _objectSpread(
            _objectSpread({}, Disabled.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Disabled$parameters = Disabled.parameters) ||
                    void 0 === _Disabled$parameters
                    ? void 0
                    : _Disabled$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    label: 'Disabled',\n    name: 'disabled',\n    options,\n    disabled: true\n  }\n}",
                    },
                    null === (_Disabled$parameters2 = Disabled.parameters) ||
                      void 0 === _Disabled$parameters2 ||
                      null ===
                        (_Disabled$parameters3 = _Disabled$parameters2.docs) ||
                      void 0 === _Disabled$parameters3
                      ? void 0
                      : _Disabled$parameters3.source
                  ),
                }
              ),
            }
          ))
      },
    },
  ]
)
