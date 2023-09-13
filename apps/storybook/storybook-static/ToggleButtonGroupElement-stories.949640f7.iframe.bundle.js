;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [183],
    {
      './node_modules/@babel/runtime/helpers/interopRequireDefault.js': (
        module
      ) => {
        ;(module.exports = function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj}
        }),
          (module.exports.__esModule = !0),
          (module.exports.default = module.exports)
      },
      './node_modules/@mui/icons-material/FormatAlignCenter.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var _interopRequireDefault = __webpack_require__(
          './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )
        exports.Z = void 0
        var _createSvgIcon = _interopRequireDefault(
            __webpack_require__(
              './node_modules/@mui/icons-material/utils/createSvgIcon.js'
            )
          ),
          _jsxRuntime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          ),
          _default = (0, _createSvgIcon.default)(
            (0, _jsxRuntime.jsx)('path', {
              d: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
            }),
            'FormatAlignCenter'
          )
        exports.Z = _default
      },
      './node_modules/@mui/icons-material/FormatAlignJustify.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var _interopRequireDefault = __webpack_require__(
          './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )
        exports.Z = void 0
        var _createSvgIcon = _interopRequireDefault(
            __webpack_require__(
              './node_modules/@mui/icons-material/utils/createSvgIcon.js'
            )
          ),
          _jsxRuntime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          ),
          _default = (0, _createSvgIcon.default)(
            (0, _jsxRuntime.jsx)('path', {
              d: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
            }),
            'FormatAlignJustify'
          )
        exports.Z = _default
      },
      './node_modules/@mui/icons-material/FormatAlignLeft.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var _interopRequireDefault = __webpack_require__(
          './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )
        exports.Z = void 0
        var _createSvgIcon = _interopRequireDefault(
            __webpack_require__(
              './node_modules/@mui/icons-material/utils/createSvgIcon.js'
            )
          ),
          _jsxRuntime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          ),
          _default = (0, _createSvgIcon.default)(
            (0, _jsxRuntime.jsx)('path', {
              d: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
            }),
            'FormatAlignLeft'
          )
        exports.Z = _default
      },
      './node_modules/@mui/icons-material/FormatAlignRight.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var _interopRequireDefault = __webpack_require__(
          './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
        )
        exports.Z = void 0
        var _createSvgIcon = _interopRequireDefault(
            __webpack_require__(
              './node_modules/@mui/icons-material/utils/createSvgIcon.js'
            )
          ),
          _jsxRuntime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          ),
          _default = (0, _createSvgIcon.default)(
            (0, _jsxRuntime.jsx)('path', {
              d: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
            }),
            'FormatAlignRight'
          )
        exports.Z = _default
      },
      './node_modules/@mui/icons-material/utils/createSvgIcon.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        Object.defineProperty(exports, '__esModule', {value: !0}),
          Object.defineProperty(exports, 'default', {
            enumerable: !0,
            get: function () {
              return _utils.createSvgIcon
            },
          })
        var _utils = __webpack_require__(
          '../../node_modules/@mui/material/utils/index.js'
        )
      },
      '../../node_modules/@mui/material/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {Z: () => Box_Box})
        var esm_extends = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js'
          ),
          objectWithoutPropertiesLoose = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
          ),
          react = __webpack_require__('../../node_modules/react/index.js'),
          clsx = __webpack_require__('../../node_modules/clsx/dist/clsx.mjs'),
          styled_engine = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@mui/styled-engine/index.js'
          ),
          styleFunctionSx = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js'
          ),
          extendSxProp = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          useTheme = __webpack_require__(
            '../../node_modules/@mui/material/node_modules/@mui/system/esm/useTheme.js'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        const _excluded = ['className', 'component']
        var ClassNameGenerator = __webpack_require__(
            '../../node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js'
          ),
          createTheme = __webpack_require__(
            '../../node_modules/@mui/material/styles/createTheme.js'
          ),
          identifier = __webpack_require__(
            '../../node_modules/@mui/material/styles/identifier.js'
          )
        const defaultTheme = (0, createTheme.Z)(),
          Box = (function createBox(options = {}) {
            const {
                themeId,
                defaultTheme,
                defaultClassName = 'MuiBox-root',
                generateClassName,
              } = options,
              BoxRoot = (0, styled_engine.ZP)('div', {
                shouldForwardProp: (prop) =>
                  'theme' !== prop && 'sx' !== prop && 'as' !== prop,
              })(styleFunctionSx.Z)
            return react.forwardRef(function Box(inProps, ref) {
              const theme = (0, useTheme.Z)(defaultTheme),
                _extendSxProp = (0, extendSxProp.Z)(inProps),
                {className, component = 'div'} = _extendSxProp,
                other = (0, objectWithoutPropertiesLoose.Z)(
                  _extendSxProp,
                  _excluded
                )
              return (0,
              jsx_runtime.jsx)(BoxRoot, (0, esm_extends.Z)({as: component, ref, className: (0, clsx.Z)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName), theme: (themeId && theme[themeId]) || theme}, other))
            })
          })({
            themeId: identifier.Z,
            defaultTheme,
            defaultClassName: 'MuiBox-root',
            generateClassName: ClassNameGenerator.Z.generate,
          }),
          Box_Box = Box
      },
      './src/Shared.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {M: () => SubmitButton})
        var react = __webpack_require__('../../node_modules/react/index.js'),
          Box = __webpack_require__(
            '../../node_modules/@mui/material/Box/Box.js'
          ),
          Stack = __webpack_require__(
            '../../node_modules/@mui/material/Stack/Stack.js'
          ),
          Button = __webpack_require__(
            '../../node_modules/@mui/material/Button/Button.js'
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
      './stories/ToggleButtonGroupElement.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            EnforceOne: () => EnforceOne,
            Exclusive: () => Exclusive,
            FullWidth: () => FullWidth,
            WithCustomHelperText: () => WithCustomHelperText,
            WithIcons: () => WithIcons,
            WithLabel: () => WithLabel,
            WithLabelRequired: () => WithLabelRequired,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _Basic$parameters,
          _Basic$parameters2,
          _Exclusive$parameters,
          _Exclusive$parameters2,
          _EnforceOne$parameter,
          _EnforceOne$parameter2,
          _WithIcons$parameters,
          _WithIcons$parameters2,
          _WithLabel$parameters,
          _WithLabel$parameters2,
          _WithLabelRequired$pa,
          _WithLabelRequired$pa2,
          _WithCustomHelperText,
          _WithCustomHelperText2,
          _FullWidth$parameters,
          _FullWidth$parameters2,
          _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/defineProperty.js'
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
          _mui_icons_material_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/FormatAlignLeft.js'
            ),
          _mui_icons_material_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/FormatAlignCenter.js'
            ),
          _mui_icons_material_FormatAlignRight__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/FormatAlignRight.js'
            ),
          _mui_icons_material_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/FormatAlignJustify.js'
            ),
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
                  _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target, key, source[key])
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
          title: 'ToggleButtonGroupElement',
          component: react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.qN,
          decorators: [Decorator],
        }
        function Decorator(Story) {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.Yb,
            {
              defaultValues: {},
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.aD)(
                'submit'
              ),
            },
            __jsx(Story, null),
            __jsx('br', null),
            __jsx(_src_Shared__WEBPACK_IMPORTED_MODULE_4__.M, null)
          )
        }
        Decorator.displayName = 'Decorator'
        var options = [
            {id: 'first', label: 'First'},
            {id: 'second', label: 'Second'},
            {id: 'third', label: 'Third'},
          ],
          optionIcons = [
            {
              id: 'left',
              label: __jsx(
                _mui_icons_material_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_5__.Z,
                null
              ),
            },
            {
              id: 'center',
              label: __jsx(
                _mui_icons_material_FormatAlignCenter__WEBPACK_IMPORTED_MODULE_6__.Z,
                null
              ),
            },
            {
              id: 'right',
              label: __jsx(
                _mui_icons_material_FormatAlignRight__WEBPACK_IMPORTED_MODULE_7__.Z,
                null
              ),
            },
            {
              id: 'justify',
              label: __jsx(
                _mui_icons_material_FormatAlignJustify__WEBPACK_IMPORTED_MODULE_8__.Z,
                null
              ),
            },
          ],
          Basic = {args: {name: 'basic', options}},
          Exclusive = {args: {name: 'exclusive', options, exclusive: !0}},
          EnforceOne = {
            args: {
              name: 'exclusive',
              options,
              exclusive: !0,
              enforceAtLeastOneSelected: !0,
            },
          },
          WithIcons = {args: {name: 'exclusive', options: optionIcons}},
          WithLabel = {
            args: {
              name: 'exclusive',
              options: optionIcons,
              label: 'Please Select',
            },
          },
          WithLabelRequired = {
            args: {
              name: 'exclusive',
              options: optionIcons,
              label: 'Please Select',
              required: !0,
            },
          },
          WithCustomHelperText = {
            args: {
              name: 'exclusive',
              options: optionIcons,
              label: 'Please Select',
              required: !0,
              helperText: 'Some helper text',
            },
          },
          FullWidth = {
            args: {
              options,
              name: 'fullWidth',
              label: 'Full Width',
              fullWidth: !0,
            },
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
                      "{\n  args: {\n    name: 'basic',\n    options\n  }\n}",
                  },
                  null === (_Basic$parameters2 = Basic.parameters) ||
                    void 0 === _Basic$parameters2 ||
                    null === (_Basic$parameters2 = _Basic$parameters2.docs) ||
                    void 0 === _Basic$parameters2
                    ? void 0
                    : _Basic$parameters2.source
                ),
              }
            ),
          }
        )),
          (Exclusive.parameters = _objectSpread(
            _objectSpread({}, Exclusive.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Exclusive$parameters = Exclusive.parameters) ||
                    void 0 === _Exclusive$parameters
                    ? void 0
                    : _Exclusive$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options,\n    exclusive: true\n  }\n}",
                    },
                    null === (_Exclusive$parameters2 = Exclusive.parameters) ||
                      void 0 === _Exclusive$parameters2 ||
                      null ===
                        (_Exclusive$parameters2 =
                          _Exclusive$parameters2.docs) ||
                      void 0 === _Exclusive$parameters2
                      ? void 0
                      : _Exclusive$parameters2.source
                  ),
                }
              ),
            }
          )),
          (EnforceOne.parameters = _objectSpread(
            _objectSpread({}, EnforceOne.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_EnforceOne$parameter = EnforceOne.parameters) ||
                    void 0 === _EnforceOne$parameter
                    ? void 0
                    : _EnforceOne$parameter.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options,\n    exclusive: true,\n    enforceAtLeastOneSelected: true\n  }\n}",
                    },
                    null === (_EnforceOne$parameter2 = EnforceOne.parameters) ||
                      void 0 === _EnforceOne$parameter2 ||
                      null ===
                        (_EnforceOne$parameter2 =
                          _EnforceOne$parameter2.docs) ||
                      void 0 === _EnforceOne$parameter2
                      ? void 0
                      : _EnforceOne$parameter2.source
                  ),
                }
              ),
            }
          )),
          (WithIcons.parameters = _objectSpread(
            _objectSpread({}, WithIcons.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_WithIcons$parameters = WithIcons.parameters) ||
                    void 0 === _WithIcons$parameters
                    ? void 0
                    : _WithIcons$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options: optionIcons\n  }\n}",
                    },
                    null === (_WithIcons$parameters2 = WithIcons.parameters) ||
                      void 0 === _WithIcons$parameters2 ||
                      null ===
                        (_WithIcons$parameters2 =
                          _WithIcons$parameters2.docs) ||
                      void 0 === _WithIcons$parameters2
                      ? void 0
                      : _WithIcons$parameters2.source
                  ),
                }
              ),
            }
          )),
          (WithLabel.parameters = _objectSpread(
            _objectSpread({}, WithLabel.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_WithLabel$parameters = WithLabel.parameters) ||
                    void 0 === _WithLabel$parameters
                    ? void 0
                    : _WithLabel$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options: optionIcons,\n    label: 'Please Select'\n  }\n}",
                    },
                    null === (_WithLabel$parameters2 = WithLabel.parameters) ||
                      void 0 === _WithLabel$parameters2 ||
                      null ===
                        (_WithLabel$parameters2 =
                          _WithLabel$parameters2.docs) ||
                      void 0 === _WithLabel$parameters2
                      ? void 0
                      : _WithLabel$parameters2.source
                  ),
                }
              ),
            }
          )),
          (WithLabelRequired.parameters = _objectSpread(
            _objectSpread({}, WithLabelRequired.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithLabelRequired$pa = WithLabelRequired.parameters) ||
                    void 0 === _WithLabelRequired$pa
                    ? void 0
                    : _WithLabelRequired$pa.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options: optionIcons,\n    label: 'Please Select',\n    required: true\n  }\n}",
                    },
                    null ===
                      (_WithLabelRequired$pa2 = WithLabelRequired.parameters) ||
                      void 0 === _WithLabelRequired$pa2 ||
                      null ===
                        (_WithLabelRequired$pa2 =
                          _WithLabelRequired$pa2.docs) ||
                      void 0 === _WithLabelRequired$pa2
                      ? void 0
                      : _WithLabelRequired$pa2.source
                  ),
                }
              ),
            }
          )),
          (WithCustomHelperText.parameters = _objectSpread(
            _objectSpread({}, WithCustomHelperText.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithCustomHelperText = WithCustomHelperText.parameters) ||
                    void 0 === _WithCustomHelperText
                    ? void 0
                    : _WithCustomHelperText.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'exclusive',\n    options: optionIcons,\n    label: 'Please Select',\n    required: true,\n    helperText: 'Some helper text'\n  }\n}",
                    },
                    null ===
                      (_WithCustomHelperText2 =
                        WithCustomHelperText.parameters) ||
                      void 0 === _WithCustomHelperText2 ||
                      null ===
                        (_WithCustomHelperText2 =
                          _WithCustomHelperText2.docs) ||
                      void 0 === _WithCustomHelperText2
                      ? void 0
                      : _WithCustomHelperText2.source
                  ),
                }
              ),
            }
          )),
          (FullWidth.parameters = _objectSpread(
            _objectSpread({}, FullWidth.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_FullWidth$parameters = FullWidth.parameters) ||
                    void 0 === _FullWidth$parameters
                    ? void 0
                    : _FullWidth$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    options: options,\n    name: 'fullWidth',\n    label: 'Full Width',\n    fullWidth: true\n  }\n}",
                    },
                    null === (_FullWidth$parameters2 = FullWidth.parameters) ||
                      void 0 === _FullWidth$parameters2 ||
                      null ===
                        (_FullWidth$parameters2 =
                          _FullWidth$parameters2.docs) ||
                      void 0 === _FullWidth$parameters2
                      ? void 0
                      : _FullWidth$parameters2.source
                  ),
                }
              ),
            }
          ))
      },
    },
  ]
)
