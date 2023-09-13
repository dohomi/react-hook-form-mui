'use strict'
;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [167],
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
            WithFormErrorProvider: () => WithFormErrorProvider,
            default: () => TextFieldElement_stories,
          })
        var defineProperty = __webpack_require__(
            '../../node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          ),
          react = __webpack_require__('../../node_modules/react/index.js'),
          dist = __webpack_require__(
            '../../node_modules/@storybook/addon-actions/dist/index.mjs'
          ),
          InputAdornment = __webpack_require__(
            '../../node_modules/@mui/material/InputAdornment/InputAdornment.js'
          ),
          Stack = __webpack_require__(
            '../../node_modules/@mui/material/Stack/Stack.js'
          ),
          src = __webpack_require__('../../packages/rhf-mui/src/index.ts'),
          Shared = __webpack_require__('./src/Shared.tsx'),
          createSvgIcon = __webpack_require__(
            '../../node_modules/@mui/material/utils/createSvgIcon.js'
          ),
          jsx_runtime = __webpack_require__(
            '../../node_modules/react/jsx-runtime.js'
          )
        const AccountCircle = (0, createSvgIcon.Z)(
          (0, jsx_runtime.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
          }),
          'AccountCircle'
        )
        var _Core$parameters,
          _Core$parameters2,
          _Basic$parameters,
          _Basic$parameters2,
          _PreDefined$parameter,
          _PreDefined$parameter2,
          _PreDefinedNested$par,
          _PreDefinedNested$par2,
          _WithFormErrorProvide,
          _WithFormErrorProvide2,
          console = __webpack_require__(
            '../../node_modules/console-browserify/index.js'
          ),
          __jsx = react.createElement
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
                  ;(0, defineProperty.Z)(target, key, source[key])
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
        const TextFieldElement_stories = {
          title: 'TextFieldElement',
          component: src.SF,
          decorators: [FormWrap],
        }
        function FormWrap(Story) {
          return __jsx(
            src.Yb,
            {
              defaultValues: {
                'default-text-field': 'Test Data',
                'default-email-field': 'info@nextjs.com',
                'number-text-field': 6,
                a: {'default-text-field': 'Test Data'},
                b: {
                  'default-email-field': 'info@nextjs.com',
                  'number-text-field': 6,
                },
              },
              onSuccess: (0, dist.aD)('submit'),
              FormProps: {
                'aria-autocomplete': 'none',
                autoComplete: 'new-password',
              },
            },
            __jsx(Story, null),
            __jsx('br', null),
            __jsx(Shared.M, null)
          )
        }
        FormWrap.displayName = 'FormWrap'
        var Core = {args: {name: 'core', label: 'Label'}},
          parseError = function parseError(error) {
            return 'pattern' === error.type
              ? 'Enter an email'
              : 'This field is required'
          },
          Basic = function Basic() {
            return __jsx(
              'div',
              null,
              __jsx(src.SF, {
                required: !0,
                autoComplete: 'new-password',
                margin: 'dense',
                label: 'Name',
                name: 'default-text',
              }),
              __jsx('br', null),
              __jsx(src.SF, {
                required: !0,
                type: 'email',
                margin: 'dense',
                label: 'Email',
                InputProps: {
                  startAdornment: __jsx(
                    InputAdornment.Z,
                    {position: 'start'},
                    __jsx(AccountCircle, null)
                  ),
                },
                name: 'default-email',
              }),
              __jsx('br', null),
              __jsx(src.SF, {
                required: !0,
                parseError,
                type: 'email',
                margin: 'dense',
                label: 'Email with ParseError',
                name: 'default-email-field-with-parsed',
              }),
              __jsx('br', null),
              __jsx(src.SF, {
                margin: 'dense',
                label: 'Number',
                name: 'number-text',
                required: !0,
                type: 'number',
              }),
              __jsx('br', null),
              __jsx(src.OZ, {
                margin: 'dense',
                label: 'Password',
                required: !0,
                name: 'password',
              }),
              __jsx('br', null),
              __jsx(src.Iv, {
                passwordFieldName: 'password',
                name: 'password-repeat',
                margin: 'dense',
                label: 'Repeat Password',
                required: !0,
              }),
              __jsx('br', null),
              __jsx(src.SF, {name: 'textarea', multiline: !0}),
              __jsx('br', null),
              __jsx(src.Zo, {
                name: 'agree',
                label: 'Agree',
                required: !0,
                onChange: function onChange(ev, checked) {
                  return console.log(ev, checked)
                },
              })
            )
          }
        Basic.displayName = 'Basic'
        var PreDefined = function PreDefined() {
          return __jsx(
            'div',
            null,
            __jsx(src.SF, {
              required: !0,
              margin: 'dense',
              label: 'Name',
              name: 'default-text-field',
            }),
            __jsx('br', null),
            __jsx(src.SF, {
              required: !0,
              parseError,
              type: 'email',
              margin: 'dense',
              label: 'Email',
              name: 'default-email-field',
            }),
            __jsx('br', null),
            __jsx(src.SF, {
              margin: 'dense',
              label: 'Number',
              name: 'number-text-field',
              required: !0,
              type: 'number',
            })
          )
        }
        PreDefined.displayName = 'PreDefined'
        var PreDefinedNested = function PreDefinedNested() {
          return __jsx(
            'div',
            null,
            __jsx(src.SF, {
              required: !0,
              margin: 'dense',
              label: 'Name',
              name: 'a.default-text-field',
            }),
            __jsx('br', null),
            __jsx(src.SF, {
              required: !0,
              parseError,
              type: 'email',
              margin: 'dense',
              label: 'Email',
              name: 'b.default-email-field',
            }),
            __jsx('br', null),
            __jsx(src.SF, {
              margin: 'dense',
              label: 'Number',
              name: 'b.number-text-field',
              required: !0,
              type: 'number',
            })
          )
        }
        PreDefinedNested.displayName = 'PreDefinedNested'
        var WithFormErrorProvider = function WithFormErrorProvider() {
          return __jsx(
            src.mE,
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
              Stack.Z,
              {spacing: 3},
              __jsx(src.SF, {
                name: 'name',
                label: 'Name',
                required: !0,
                variant: 'outlined',
                margin: 'dense',
              }),
              __jsx(src.SF, {
                name: 'email',
                type: 'email',
                label: 'Email',
                required: !0,
                variant: 'outlined',
                margin: 'dense',
              })
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
                        "{\n  args: {\n    name: 'core',\n    label: 'Label'\n  }\n}",
                    },
                    null === (_Core$parameters2 = Core.parameters) ||
                      void 0 === _Core$parameters2 ||
                      null === (_Core$parameters2 = _Core$parameters2.docs) ||
                      void 0 === _Core$parameters2
                      ? void 0
                      : _Core$parameters2.source
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
                        "() => {\n  return <div>\n      <TextFieldElement required autoComplete={'new-password'} margin={'dense'} label={'Name'} name={'default-text'} />\n      <br />\n      <TextFieldElement required type={'email'} margin={'dense'} label={'Email'} InputProps={{\n      startAdornment: <InputAdornment position=\"start\">\n              <AccountCircle />\n            </InputAdornment>\n    }} name={'default-email'} />\n      <br />\n      <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email with ParseError'} name={'default-email-field-with-parsed'} />\n      <br />\n      <TextFieldElement margin={'dense'} label={'Number'} name={'number-text'} required type={'number'} />\n      <br />\n      <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />\n      <br />\n      <PasswordRepeatElement passwordFieldName={'password'} name={'password-repeat'} margin={'dense'} label={'Repeat Password'} required />\n      <br />\n      <TextFieldElement name={'textarea'} multiline />\n      <br />\n      <CheckboxElement name={'agree'} label={'Agree'} required onChange={(ev, checked) => console.log(ev, checked)} />\n    </div>;\n}",
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
                        "() => <div>\n    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />\n    <br />\n    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />\n    <br />\n    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />\n  </div>",
                    },
                    null === (_PreDefined$parameter2 = PreDefined.parameters) ||
                      void 0 === _PreDefined$parameter2 ||
                      null ===
                        (_PreDefined$parameter2 =
                          _PreDefined$parameter2.docs) ||
                      void 0 === _PreDefined$parameter2
                      ? void 0
                      : _PreDefined$parameter2.source
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
                        "() => <div>\n    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />\n    <br />\n    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />\n    <br />\n    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />\n  </div>",
                    },
                    null ===
                      (_PreDefinedNested$par2 = PreDefinedNested.parameters) ||
                      void 0 === _PreDefinedNested$par2 ||
                      null ===
                        (_PreDefinedNested$par2 =
                          _PreDefinedNested$par2.docs) ||
                      void 0 === _PreDefinedNested$par2
                      ? void 0
                      : _PreDefinedNested$par2.source
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
                        "() => <FormErrorProvider onError={error => {\n  console.log('you can hook your own error message', error);\n  if (error.type === 'required') {\n    return 'Overwritten Error Message';\n  }\n  return error?.message;\n}}>\n    <Stack spacing={3}>\n      <TextFieldElement name={'name'} label={'Name'} required variant={'outlined'} margin={'dense'} />\n      <TextFieldElement name={'email'} type=\"email\" label={'Email'} required variant={'outlined'} margin={'dense'} />\n    </Stack>\n  </FormErrorProvider>",
                    },
                    null ===
                      (_WithFormErrorProvide2 =
                        WithFormErrorProvider.parameters) ||
                      void 0 === _WithFormErrorProvide2 ||
                      null ===
                        (_WithFormErrorProvide2 =
                          _WithFormErrorProvide2.docs) ||
                      void 0 === _WithFormErrorProvide2
                      ? void 0
                      : _WithFormErrorProvide2.source
                  ),
                }
              ),
            }
          ))
      },
    },
  ]
)
