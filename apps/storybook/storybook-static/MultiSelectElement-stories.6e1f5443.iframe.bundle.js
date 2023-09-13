'use strict'
;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [763],
    {
      '../../node_modules/@mui/material/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
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
      './stories/MultiSelectElement.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Filled: () => Filled,
            MonthPicker: () => MonthPicker,
            MonthPickerSmall: () => MonthPickerSmall,
            OverwriteRenderValue: () => OverwriteRenderValue,
            Required: () => Required,
            WithCheckbox: () => WithCheckbox,
            WithChips: () => WithChips,
            WithChipsPreserveOrder: () => WithChipsPreserveOrder,
            WithLabel: () => WithLabel,
            WithLabelSmall: () => WithLabelSmall,
            WithObjectArray: () => WithObjectArray,
            WithObjectArrayChips: () => WithObjectArrayChips,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _Basic$parameters,
          _Basic$parameters2,
          _Filled$parameters,
          _Filled$parameters2,
          _WithLabel$parameters,
          _WithLabel$parameters2,
          _WithLabelSmall$param,
          _WithLabelSmall$param2,
          _Required$parameters,
          _Required$parameters2,
          _WithChips$parameters,
          _WithChips$parameters2,
          _WithChipsPreserveOrd,
          _WithChipsPreserveOrd2,
          _WithCheckbox$paramet,
          _WithCheckbox$paramet2,
          _WithObjectArray$para,
          _WithObjectArray$para2,
          _WithObjectArrayChips,
          _WithObjectArrayChips2,
          _OverwriteRenderValue,
          _OverwriteRenderValue2,
          _MonthPicker$paramete,
          _MonthPicker$paramete2,
          _MonthPickerSmall$par,
          _MonthPickerSmall$par2,
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
          title: 'MultiSelectElement',
          component: react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.Q5,
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
              react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.Q5,
              args
            ),
            __jsx('br', null),
            __jsx(_src_Shared__WEBPACK_IMPORTED_MODULE_4__.M, null)
          )
        }
        Template.displayName = 'Template'
        var names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ],
          months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          Basic = {render: Template, args: {name: 'basic', options: names}},
          Filled = {
            render: Template,
            args: {name: 'filled', options: names, variant: 'filled'},
          },
          WithLabel = {
            render: Template,
            args: {name: 'basic', label: 'Select Field', options: names},
          },
          WithLabelSmall = {
            render: Template,
            args: {
              name: 'basic_small',
              size: 'small',
              label: 'Select Field',
              options: names,
            },
          },
          Required = {
            render: Template,
            args: {
              name: 'required',
              label: 'Required Field',
              options: names,
              required: !0,
            },
          },
          WithChips = {
            render: Template,
            args: {
              name: 'chips',
              label: 'Required Field',
              options: names,
              showChips: !0,
            },
          },
          WithChipsPreserveOrder = {
            render: Template,
            args: {
              name: 'chips',
              label: 'Required Field',
              options: names,
              showChips: !0,
              preserveOrder: !0,
            },
          },
          WithCheckbox = {
            render: Template,
            args: {
              name: 'checkbox',
              label: 'Checkbox Field',
              options: names,
              showCheckbox: !0,
            },
          },
          objectVals = [
            {id: 1, name: 'Alpha'},
            {id: 2, name: 'Beta'},
            {id: 3, name: 'Celsius'},
            {id: 4, name: 'Delta'},
          ],
          WithObjectArray = {
            render: Template,
            args: {
              name: 'object',
              label: 'Object Field',
              options: objectVals,
              itemKey: 'id',
              itemLabel: 'name',
            },
          },
          WithObjectArrayChips = {
            render: Template,
            args: {
              name: 'object',
              label: 'Object Field',
              options: objectVals,
              itemKey: 'id',
              itemLabel: 'name',
              showChips: !0,
            },
          },
          OverwriteRenderValue = {
            render: Template,
            args: {
              name: 'object',
              label: 'Object Field',
              options: objectVals,
              itemKey: 'id',
              itemLabel: 'name',
              renderValue: function renderValue(selected) {
                var _ref
                return 'You selected: '.concat(
                  null === (_ref = selected || []) || void 0 === _ref
                    ? void 0
                    : _ref.length
                )
              },
            },
          },
          MonthPicker = {
            render: Template,
            args: {
              name: 'month',
              options: months,
              label: 'Months',
              MenuProps: {
                PaperProps: {
                  sx: {
                    '& .MuiList-root': {
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '4px',
                    },
                  },
                },
              },
            },
          },
          MonthPickerSmall = {
            render: Template,
            args: {
              name: 'months_small',
              options: months,
              label: 'Months',
              size: 'small',
              MenuProps: {
                PaperProps: {
                  sx: {
                    '& .MuiList-root': {
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '4px',
                    },
                  },
                },
              },
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
                      "{\n  render: Template,\n  args: {\n    name: 'basic',\n    options: names\n  }\n}",
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
          (Filled.parameters = _objectSpread(
            _objectSpread({}, Filled.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Filled$parameters = Filled.parameters) ||
                    void 0 === _Filled$parameters
                    ? void 0
                    : _Filled$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'filled',\n    options: names,\n    variant: 'filled'\n  }\n}",
                    },
                    null === (_Filled$parameters2 = Filled.parameters) ||
                      void 0 === _Filled$parameters2 ||
                      null ===
                        (_Filled$parameters2 = _Filled$parameters2.docs) ||
                      void 0 === _Filled$parameters2
                      ? void 0
                      : _Filled$parameters2.source
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
                        "{\n  render: Template,\n  args: {\n    name: 'basic',\n    label: 'Select Field',\n    options: names\n  }\n}",
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
          (WithLabelSmall.parameters = _objectSpread(
            _objectSpread({}, WithLabelSmall.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithLabelSmall$param = WithLabelSmall.parameters) ||
                    void 0 === _WithLabelSmall$param
                    ? void 0
                    : _WithLabelSmall$param.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'basic_small',\n    size: 'small',\n    label: 'Select Field',\n    options: names\n  }\n}",
                    },
                    null ===
                      (_WithLabelSmall$param2 = WithLabelSmall.parameters) ||
                      void 0 === _WithLabelSmall$param2 ||
                      null ===
                        (_WithLabelSmall$param2 =
                          _WithLabelSmall$param2.docs) ||
                      void 0 === _WithLabelSmall$param2
                      ? void 0
                      : _WithLabelSmall$param2.source
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
                        "{\n  render: Template,\n  args: {\n    name: 'required',\n    label: 'Required Field',\n    options: names,\n    required: true\n  }\n}",
                    },
                    null === (_Required$parameters2 = Required.parameters) ||
                      void 0 === _Required$parameters2 ||
                      null ===
                        (_Required$parameters2 = _Required$parameters2.docs) ||
                      void 0 === _Required$parameters2
                      ? void 0
                      : _Required$parameters2.source
                  ),
                }
              ),
            }
          )),
          (WithChips.parameters = _objectSpread(
            _objectSpread({}, WithChips.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_WithChips$parameters = WithChips.parameters) ||
                    void 0 === _WithChips$parameters
                    ? void 0
                    : _WithChips$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'chips',\n    label: 'Required Field',\n    options: names,\n    showChips: true\n  }\n}",
                    },
                    null === (_WithChips$parameters2 = WithChips.parameters) ||
                      void 0 === _WithChips$parameters2 ||
                      null ===
                        (_WithChips$parameters2 =
                          _WithChips$parameters2.docs) ||
                      void 0 === _WithChips$parameters2
                      ? void 0
                      : _WithChips$parameters2.source
                  ),
                }
              ),
            }
          )),
          (WithChipsPreserveOrder.parameters = _objectSpread(
            _objectSpread({}, WithChipsPreserveOrder.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithChipsPreserveOrd =
                      WithChipsPreserveOrder.parameters) ||
                    void 0 === _WithChipsPreserveOrd
                    ? void 0
                    : _WithChipsPreserveOrd.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'chips',\n    label: 'Required Field',\n    options: names,\n    showChips: true,\n    preserveOrder: true\n  }\n}",
                    },
                    null ===
                      (_WithChipsPreserveOrd2 =
                        WithChipsPreserveOrder.parameters) ||
                      void 0 === _WithChipsPreserveOrd2 ||
                      null ===
                        (_WithChipsPreserveOrd2 =
                          _WithChipsPreserveOrd2.docs) ||
                      void 0 === _WithChipsPreserveOrd2
                      ? void 0
                      : _WithChipsPreserveOrd2.source
                  ),
                }
              ),
            }
          )),
          (WithCheckbox.parameters = _objectSpread(
            _objectSpread({}, WithCheckbox.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_WithCheckbox$paramet = WithCheckbox.parameters) ||
                    void 0 === _WithCheckbox$paramet
                    ? void 0
                    : _WithCheckbox$paramet.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'checkbox',\n    label: 'Checkbox Field',\n    options: names,\n    showCheckbox: true\n  }\n}",
                    },
                    null ===
                      (_WithCheckbox$paramet2 = WithCheckbox.parameters) ||
                      void 0 === _WithCheckbox$paramet2 ||
                      null ===
                        (_WithCheckbox$paramet2 =
                          _WithCheckbox$paramet2.docs) ||
                      void 0 === _WithCheckbox$paramet2
                      ? void 0
                      : _WithCheckbox$paramet2.source
                  ),
                }
              ),
            }
          )),
          (WithObjectArray.parameters = _objectSpread(
            _objectSpread({}, WithObjectArray.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithObjectArray$para = WithObjectArray.parameters) ||
                    void 0 === _WithObjectArray$para
                    ? void 0
                    : _WithObjectArray$para.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'object',\n    label: 'Object Field',\n    options: objectVals,\n    itemKey: 'id',\n    itemLabel: 'name'\n  }\n}",
                    },
                    null ===
                      (_WithObjectArray$para2 = WithObjectArray.parameters) ||
                      void 0 === _WithObjectArray$para2 ||
                      null ===
                        (_WithObjectArray$para2 =
                          _WithObjectArray$para2.docs) ||
                      void 0 === _WithObjectArray$para2
                      ? void 0
                      : _WithObjectArray$para2.source
                  ),
                }
              ),
            }
          )),
          (WithObjectArrayChips.parameters = _objectSpread(
            _objectSpread({}, WithObjectArrayChips.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithObjectArrayChips = WithObjectArrayChips.parameters) ||
                    void 0 === _WithObjectArrayChips
                    ? void 0
                    : _WithObjectArrayChips.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'object',\n    label: 'Object Field',\n    options: objectVals,\n    itemKey: 'id',\n    itemLabel: 'name',\n    showChips: true\n  }\n}",
                    },
                    null ===
                      (_WithObjectArrayChips2 =
                        WithObjectArrayChips.parameters) ||
                      void 0 === _WithObjectArrayChips2 ||
                      null ===
                        (_WithObjectArrayChips2 =
                          _WithObjectArrayChips2.docs) ||
                      void 0 === _WithObjectArrayChips2
                      ? void 0
                      : _WithObjectArrayChips2.source
                  ),
                }
              ),
            }
          )),
          (OverwriteRenderValue.parameters = _objectSpread(
            _objectSpread({}, OverwriteRenderValue.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_OverwriteRenderValue = OverwriteRenderValue.parameters) ||
                    void 0 === _OverwriteRenderValue
                    ? void 0
                    : _OverwriteRenderValue.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'object',\n    label: 'Object Field',\n    options: objectVals,\n    itemKey: 'id',\n    itemLabel: 'name',\n    renderValue: (selected: any) => `You selected: ${(selected || [])?.length}`\n  }\n}",
                    },
                    null ===
                      (_OverwriteRenderValue2 =
                        OverwriteRenderValue.parameters) ||
                      void 0 === _OverwriteRenderValue2 ||
                      null ===
                        (_OverwriteRenderValue2 =
                          _OverwriteRenderValue2.docs) ||
                      void 0 === _OverwriteRenderValue2
                      ? void 0
                      : _OverwriteRenderValue2.source
                  ),
                }
              ),
            }
          )),
          (MonthPicker.parameters = _objectSpread(
            _objectSpread({}, MonthPicker.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_MonthPicker$paramete = MonthPicker.parameters) ||
                    void 0 === _MonthPicker$paramete
                    ? void 0
                    : _MonthPicker$paramete.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'month',\n    options: months,\n    label: 'Months',\n    MenuProps: {\n      PaperProps: {\n        sx: {\n          '& .MuiList-root': {\n            display: 'grid',\n            gridTemplateColumns: 'repeat(3, 1fr)',\n            gap: '4px'\n          }\n        }\n      }\n    }\n  }\n}",
                    },
                    null ===
                      (_MonthPicker$paramete2 = MonthPicker.parameters) ||
                      void 0 === _MonthPicker$paramete2 ||
                      null ===
                        (_MonthPicker$paramete2 =
                          _MonthPicker$paramete2.docs) ||
                      void 0 === _MonthPicker$paramete2
                      ? void 0
                      : _MonthPicker$paramete2.source
                  ),
                }
              ),
            }
          )),
          (MonthPickerSmall.parameters = _objectSpread(
            _objectSpread({}, MonthPickerSmall.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_MonthPickerSmall$par = MonthPickerSmall.parameters) ||
                    void 0 === _MonthPickerSmall$par
                    ? void 0
                    : _MonthPickerSmall$par.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  render: Template,\n  args: {\n    name: 'months_small',\n    options: months,\n    label: 'Months',\n    size: 'small',\n    MenuProps: {\n      PaperProps: {\n        sx: {\n          '& .MuiList-root': {\n            display: 'grid',\n            gridTemplateColumns: 'repeat(3, 1fr)',\n            gap: '4px'\n          }\n        }\n      }\n    }\n  }\n}",
                    },
                    null ===
                      (_MonthPickerSmall$par2 = MonthPickerSmall.parameters) ||
                      void 0 === _MonthPickerSmall$par2 ||
                      null ===
                        (_MonthPickerSmall$par2 =
                          _MonthPickerSmall$par2.docs) ||
                      void 0 === _MonthPickerSmall$par2
                      ? void 0
                      : _MonthPickerSmall$par2.source
                  ),
                }
              ),
            }
          ))
      },
    },
  ]
)
