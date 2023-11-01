'use strict'
;(self.webpackChunkrhfm_storybook = self.webpackChunkrhfm_storybook || []).push(
  [
    [695],
    {
      './stories/AutocompleteElement.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            BasicPreSelect: () => BasicPreSelect,
            CustomInput: () => CustomInput,
            Loading: () => Loading,
            MatchId: () => MatchId,
            MatchIdMulti: () => MatchIdMulti,
            MultiSelect: () => MultiSelect,
            MultiSelectCheckbox: () => MultiSelectCheckbox,
            MultiSelectPredefined: () => MultiSelectPredefined,
            MultiSelectRequired: () => MultiSelectRequired,
            MultiSelectRequiredCustom: () => MultiSelectRequiredCustom,
            WithCustomLoading: () => WithCustomLoading,
            WithTooltip: () => WithTooltip,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _Basic$parameters,
          _Basic$parameters2,
          _BasicPreSelect$param,
          _BasicPreSelect$param2,
          _MultiSelect$paramete,
          _MultiSelect$paramete2,
          _MultiSelectRequired$,
          _MultiSelectRequired$2,
          _MultiSelectRequiredC,
          _MultiSelectRequiredC2,
          _MultiSelectPredefine,
          _MultiSelectPredefine2,
          _MultiSelectCheckbox$,
          _MultiSelectCheckbox$2,
          _Loading$parameters,
          _Loading$parameters2,
          _WithCustomLoading$pa,
          _WithCustomLoading$pa2,
          _MatchId$parameters,
          _MatchId$parameters2,
          _MatchIdMulti$paramet,
          _MatchIdMulti$paramet2,
          _CustomInput$paramete,
          _CustomInput$paramete2,
          _WithTooltip$paramete,
          _WithTooltip$paramete2,
          _Users_dominicgarms_Documents_Coding_react_react_hook_form_mui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              '../../node_modules/@babel/runtime/helpers/esm/defineProperty.js'
            ),
          react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('../../packages/rhf-mui/src/index.ts'),
          react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/react/index.js'
          ),
          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              '../../node_modules/@storybook/addon-actions/dist/index.mjs'
            ),
          _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            '../../node_modules/@mui/material/Box/Box.js'
          ),
          _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            '../../node_modules/@mui/material/Button/Button.js'
          ),
          _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            '../../node_modules/@mui/material/Tooltip/Tooltip.js'
          ),
          _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/LocationOn.js'
            ),
          _mui_icons_material_AutoMode__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/AutoMode.js'
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
          title: 'Autocomplete',
          component: react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.OC,
          decorators: [FormWrap],
        }
        function FormWrap(Story) {
          return __jsx(
            react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.Yb,
            {
              onSuccess: (0,
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.aD)(
                'form-submit'
              ),
              defaultValues: {
                preselect: {id: 2, label: 'Second'},
                'multi-preselect': [{id: 2, label: 'Second'}],
                'match-id': 2,
                'match-id-multi': [2, 3],
              },
            },
            __jsx(Story, null),
            __jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,
              {marginTop: 2},
              __jsx(
                _mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
                {type: 'submit'},
                'Submit'
              )
            )
          )
        }
        FormWrap.displayName = 'FormWrap'
        var options = [
            {label: 'First', id: 1},
            {label: 'Second', id: 2},
            {label: 'Third', id: 3},
            {label: 'Four', id: 4},
          ],
          Basic = {args: {name: 'basic', options}},
          BasicPreSelect = {args: {name: 'preselect', options}},
          MultiSelect = {args: {name: 'multi', options, multiple: !0}},
          MultiSelectRequired = {
            args: {
              label: 'Multiple Required',
              name: 'multi-required',
              options,
              multiple: !0,
              required: !0,
            },
          },
          MultiSelectRequiredCustom = {
            args: {
              label: 'Multiple Required Custom',
              name: 'multi-required-custom',
              options,
              multiple: !0,
              rules: {required: 'Please fill out.'},
            },
          },
          MultiSelectPredefined = {
            args: {name: 'multi-preselect', options, multiple: !0},
          },
          MultiSelectCheckbox = {
            args: {name: 'multicheck', options, multiple: !0, showCheckbox: !0},
          },
          Loading = {
            args: {
              label: 'Loading State',
              name: 'loading',
              options: [],
              multiple: !0,
              showCheckbox: !0,
              loading: !0,
            },
          },
          WithCustomLoading = {
            args: {
              label: 'Loading State',
              name: 'loading',
              options: [],
              multiple: !0,
              showCheckbox: !0,
              loading: !0,
              loadingIndicator: __jsx(
                _mui_icons_material_AutoMode__WEBPACK_IMPORTED_MODULE_6__.Z,
                null
              ),
            },
          },
          MatchId = {
            args: {label: 'Match ID', name: 'match-id', options, matchId: !0},
          },
          MatchIdMulti = {
            args: {
              label: 'Match ID',
              name: 'match-id-multi',
              options,
              multiple: !0,
              matchId: !0,
            },
          },
          CustomInput = {
            args: {
              name: 'custom-input',
              options,
              textFieldProps: {
                placeholder: 'Some placeholder',
                InputProps: {
                  startAdornment: __jsx(
                    _mui_icons_material_LocationOn__WEBPACK_IMPORTED_MODULE_7__.Z,
                    null
                  ),
                  endAdornment: null,
                },
              },
            },
          },
          WithTooltip = function WithTooltip() {
            return __jsx(
              FormWrap,
              null,
              __jsx(
                _mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
                {title: 'Some Tooltip'},
                __jsx(
                  'div',
                  null,
                  __jsx(
                    react_hook_form_mui_src__WEBPACK_IMPORTED_MODULE_2__.OC,
                    {options, name: 'tooltip', label: 'With Tooltip'}
                  )
                )
              )
            )
          }
        ;(WithTooltip.displayName = 'WithTooltip'),
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
          (BasicPreSelect.parameters = _objectSpread(
            _objectSpread({}, BasicPreSelect.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_BasicPreSelect$param = BasicPreSelect.parameters) ||
                    void 0 === _BasicPreSelect$param
                    ? void 0
                    : _BasicPreSelect$param.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'preselect',\n    options\n  }\n}",
                    },
                    null ===
                      (_BasicPreSelect$param2 = BasicPreSelect.parameters) ||
                      void 0 === _BasicPreSelect$param2 ||
                      null ===
                        (_BasicPreSelect$param2 =
                          _BasicPreSelect$param2.docs) ||
                      void 0 === _BasicPreSelect$param2
                      ? void 0
                      : _BasicPreSelect$param2.source
                  ),
                }
              ),
            }
          )),
          (MultiSelect.parameters = _objectSpread(
            _objectSpread({}, MultiSelect.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_MultiSelect$paramete = MultiSelect.parameters) ||
                    void 0 === _MultiSelect$paramete
                    ? void 0
                    : _MultiSelect$paramete.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'multi',\n    options,\n    multiple: true\n  }\n}",
                    },
                    null ===
                      (_MultiSelect$paramete2 = MultiSelect.parameters) ||
                      void 0 === _MultiSelect$paramete2 ||
                      null ===
                        (_MultiSelect$paramete2 =
                          _MultiSelect$paramete2.docs) ||
                      void 0 === _MultiSelect$paramete2
                      ? void 0
                      : _MultiSelect$paramete2.source
                  ),
                }
              ),
            }
          )),
          (MultiSelectRequired.parameters = _objectSpread(
            _objectSpread({}, MultiSelectRequired.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_MultiSelectRequired$ = MultiSelectRequired.parameters) ||
                    void 0 === _MultiSelectRequired$
                    ? void 0
                    : _MultiSelectRequired$.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Multiple Required',\n    name: 'multi-required',\n    options,\n    multiple: true,\n    required: true\n  }\n}",
                    },
                    null ===
                      (_MultiSelectRequired$2 =
                        MultiSelectRequired.parameters) ||
                      void 0 === _MultiSelectRequired$2 ||
                      null ===
                        (_MultiSelectRequired$2 =
                          _MultiSelectRequired$2.docs) ||
                      void 0 === _MultiSelectRequired$2
                      ? void 0
                      : _MultiSelectRequired$2.source
                  ),
                }
              ),
            }
          )),
          (MultiSelectRequiredCustom.parameters = _objectSpread(
            _objectSpread({}, MultiSelectRequiredCustom.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_MultiSelectRequiredC =
                      MultiSelectRequiredCustom.parameters) ||
                    void 0 === _MultiSelectRequiredC
                    ? void 0
                    : _MultiSelectRequiredC.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Multiple Required Custom',\n    name: 'multi-required-custom',\n    options,\n    multiple: true,\n    rules: {\n      required: 'Please fill out.'\n    }\n  }\n}",
                    },
                    null ===
                      (_MultiSelectRequiredC2 =
                        MultiSelectRequiredCustom.parameters) ||
                      void 0 === _MultiSelectRequiredC2 ||
                      null ===
                        (_MultiSelectRequiredC2 =
                          _MultiSelectRequiredC2.docs) ||
                      void 0 === _MultiSelectRequiredC2
                      ? void 0
                      : _MultiSelectRequiredC2.source
                  ),
                }
              ),
            }
          )),
          (MultiSelectPredefined.parameters = _objectSpread(
            _objectSpread({}, MultiSelectPredefined.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_MultiSelectPredefine =
                      MultiSelectPredefined.parameters) ||
                    void 0 === _MultiSelectPredefine
                    ? void 0
                    : _MultiSelectPredefine.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'multi-preselect',\n    options,\n    multiple: true\n  }\n}",
                    },
                    null ===
                      (_MultiSelectPredefine2 =
                        MultiSelectPredefined.parameters) ||
                      void 0 === _MultiSelectPredefine2 ||
                      null ===
                        (_MultiSelectPredefine2 =
                          _MultiSelectPredefine2.docs) ||
                      void 0 === _MultiSelectPredefine2
                      ? void 0
                      : _MultiSelectPredefine2.source
                  ),
                }
              ),
            }
          )),
          (MultiSelectCheckbox.parameters = _objectSpread(
            _objectSpread({}, MultiSelectCheckbox.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_MultiSelectCheckbox$ = MultiSelectCheckbox.parameters) ||
                    void 0 === _MultiSelectCheckbox$
                    ? void 0
                    : _MultiSelectCheckbox$.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'multicheck',\n    options,\n    multiple: true,\n    showCheckbox: true\n  }\n}",
                    },
                    null ===
                      (_MultiSelectCheckbox$2 =
                        MultiSelectCheckbox.parameters) ||
                      void 0 === _MultiSelectCheckbox$2 ||
                      null ===
                        (_MultiSelectCheckbox$2 =
                          _MultiSelectCheckbox$2.docs) ||
                      void 0 === _MultiSelectCheckbox$2
                      ? void 0
                      : _MultiSelectCheckbox$2.source
                  ),
                }
              ),
            }
          )),
          (Loading.parameters = _objectSpread(
            _objectSpread({}, Loading.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_Loading$parameters = Loading.parameters) ||
                    void 0 === _Loading$parameters
                    ? void 0
                    : _Loading$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Loading State',\n    name: 'loading',\n    options: [],\n    multiple: true,\n    showCheckbox: true,\n    loading: true\n  }\n}",
                    },
                    null === (_Loading$parameters2 = Loading.parameters) ||
                      void 0 === _Loading$parameters2 ||
                      null ===
                        (_Loading$parameters2 = _Loading$parameters2.docs) ||
                      void 0 === _Loading$parameters2
                      ? void 0
                      : _Loading$parameters2.source
                  ),
                }
              ),
            }
          )),
          (WithCustomLoading.parameters = _objectSpread(
            _objectSpread({}, WithCustomLoading.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null ===
                    (_WithCustomLoading$pa = WithCustomLoading.parameters) ||
                    void 0 === _WithCustomLoading$pa
                    ? void 0
                    : _WithCustomLoading$pa.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Loading State',\n    name: 'loading',\n    options: [],\n    multiple: true,\n    showCheckbox: true,\n    loading: true,\n    loadingIndicator: <AutoModeIcon />\n  }\n}",
                    },
                    null ===
                      (_WithCustomLoading$pa2 = WithCustomLoading.parameters) ||
                      void 0 === _WithCustomLoading$pa2 ||
                      null ===
                        (_WithCustomLoading$pa2 =
                          _WithCustomLoading$pa2.docs) ||
                      void 0 === _WithCustomLoading$pa2
                      ? void 0
                      : _WithCustomLoading$pa2.source
                  ),
                }
              ),
            }
          )),
          (MatchId.parameters = _objectSpread(
            _objectSpread({}, MatchId.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_MatchId$parameters = MatchId.parameters) ||
                    void 0 === _MatchId$parameters
                    ? void 0
                    : _MatchId$parameters.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Match ID',\n    name: 'match-id',\n    options,\n    matchId: true\n  }\n}",
                    },
                    null === (_MatchId$parameters2 = MatchId.parameters) ||
                      void 0 === _MatchId$parameters2 ||
                      null ===
                        (_MatchId$parameters2 = _MatchId$parameters2.docs) ||
                      void 0 === _MatchId$parameters2
                      ? void 0
                      : _MatchId$parameters2.source
                  ),
                }
              ),
            }
          )),
          (MatchIdMulti.parameters = _objectSpread(
            _objectSpread({}, MatchIdMulti.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_MatchIdMulti$paramet = MatchIdMulti.parameters) ||
                    void 0 === _MatchIdMulti$paramet
                    ? void 0
                    : _MatchIdMulti$paramet.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    label: 'Match ID',\n    name: 'match-id-multi',\n    options,\n    multiple: true,\n    matchId: true\n  }\n}",
                    },
                    null ===
                      (_MatchIdMulti$paramet2 = MatchIdMulti.parameters) ||
                      void 0 === _MatchIdMulti$paramet2 ||
                      null ===
                        (_MatchIdMulti$paramet2 =
                          _MatchIdMulti$paramet2.docs) ||
                      void 0 === _MatchIdMulti$paramet2
                      ? void 0
                      : _MatchIdMulti$paramet2.source
                  ),
                }
              ),
            }
          )),
          (CustomInput.parameters = _objectSpread(
            _objectSpread({}, CustomInput.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_CustomInput$paramete = CustomInput.parameters) ||
                    void 0 === _CustomInput$paramete
                    ? void 0
                    : _CustomInput$paramete.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "{\n  args: {\n    name: 'custom-input',\n    options,\n    textFieldProps: {\n      placeholder: 'Some placeholder',\n      InputProps: {\n        startAdornment: <LocationIcon />,\n        endAdornment: null\n      }\n    }\n  }\n}",
                    },
                    null ===
                      (_CustomInput$paramete2 = CustomInput.parameters) ||
                      void 0 === _CustomInput$paramete2 ||
                      null ===
                        (_CustomInput$paramete2 =
                          _CustomInput$paramete2.docs) ||
                      void 0 === _CustomInput$paramete2
                      ? void 0
                      : _CustomInput$paramete2.source
                  ),
                }
              ),
            }
          )),
          (WithTooltip.parameters = _objectSpread(
            _objectSpread({}, WithTooltip.parameters),
            {},
            {
              docs: _objectSpread(
                _objectSpread(
                  {},
                  null === (_WithTooltip$paramete = WithTooltip.parameters) ||
                    void 0 === _WithTooltip$paramete
                    ? void 0
                    : _WithTooltip$paramete.docs
                ),
                {},
                {
                  source: _objectSpread(
                    {
                      originalSource:
                        "() => <FormWrap>\n    <Tooltip title={'Some Tooltip'}>\n      <div>\n        <AutocompleteElement options={options} name={'tooltip'} label={'With Tooltip'} />\n      </div>\n    </Tooltip>\n  </FormWrap>",
                    },
                    null ===
                      (_WithTooltip$paramete2 = WithTooltip.parameters) ||
                      void 0 === _WithTooltip$paramete2 ||
                      null ===
                        (_WithTooltip$paramete2 =
                          _WithTooltip$paramete2.docs) ||
                      void 0 === _WithTooltip$paramete2
                      ? void 0
                      : _WithTooltip$paramete2.source
                  ),
                }
              ),
            }
          ))
      },
    },
  ]
)
