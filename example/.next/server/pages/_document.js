/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyDocument; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.ts\");\n\nvar _jsxFileName = \"/Users/dominicgarms/Documents/Coding/react/react-form-hook-mui/example/pages/_document.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n      lang: \"en\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n          name: \"theme-color\",\n          content: _src_theme__WEBPACK_IMPORTED_MODULE_3__.default.palette.primary.main\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this);\n  }\n\n} // `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with server-side generation (SSG).\n\nMyDocument.getInitialProps = async ctx => {\n  // Resolution order\n  //\n  // On the server:\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. document.getInitialProps\n  // 4. app.render\n  // 5. page.render\n  // 6. document.render\n  //\n  // On the server with error:\n  // 1. document.getInitialProps\n  // 2. app.render\n  // 3. page.render\n  // 4. document.render\n  //\n  // On the client\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. app.render\n  // 4. page.render\n  // Render app and page and get the context of the page with collected side effects.\n  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ServerStyleSheets();\n  const originalRenderPage = ctx.renderPage;\n\n  ctx.renderPage = () => originalRenderPage({\n    enhanceApp: App => props => sheets.collect( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 54\n    }, undefined))\n  });\n\n  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n  return _objectSpread(_objectSpread({}, initialProps), {}, {\n    // Styles fragment is rendered after the app and page rendering finish.\n    styles: [...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles), sheets.getStyleElement()]\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vcGFnZXMvX2RvY3VtZW50LnRzeD82M2I2Il0sIm5hbWVzIjpbIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsInJlbmRlciIsInRoZW1lIiwibWFpbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNoZWV0cyIsIlNlcnZlclN0eWxlU2hlZXRzIiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImNvbGxlY3QiLCJpbml0aWFsUHJvcHMiLCJzdHlsZXMiLCJSZWFjdCIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDL0NDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQU0sVUFBSSxFQUFDLElBQVg7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLGdDQUVFO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBeUIsaUJBQU8sRUFBRUMsb0VBQTBCQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFDRSxhQUFHLEVBQUMsWUFETjtBQUVFLGNBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFBLGdDQUNBLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZ0JEOztBQWxCOEMsQyxDQXFCakQ7QUFDQTs7QUFDQUosVUFBVSxDQUFDSyxlQUFYLEdBQTZCLE1BQU9DLEdBQVAsSUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyx1RUFBSixFQUFmO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdILEdBQUcsQ0FBQ0ksVUFBL0I7O0FBRUFKLEtBQUcsQ0FBQ0ksVUFBSixHQUFpQixNQUNmRCxrQkFBa0IsQ0FBQztBQUNqQkUsY0FBVSxFQUFHQyxHQUFELElBQVVDLEtBQUQsSUFBV04sTUFBTSxDQUFDTyxPQUFQLGVBQWUsOERBQUMsR0FBRCxvQkFBU0QsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBRGYsR0FBRCxDQURwQjs7QUFLQSxRQUFNRSxZQUFZLEdBQUcsTUFBTWQsb0VBQUEsQ0FBeUJLLEdBQXpCLENBQTNCO0FBRUEseUNBQ0tTLFlBREw7QUFFRTtBQUNBQyxVQUFNLEVBQUUsQ0FBQyxHQUFHQyw2REFBQSxDQUF1QkYsWUFBWSxDQUFDQyxNQUFwQyxDQUFKLEVBQWlEVCxNQUFNLENBQUNXLGVBQVAsRUFBakQ7QUFIVjtBQUtELENBdkNEIiwiZmlsZSI6Ii4vcGFnZXMvX2RvY3VtZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBgZ2V0SW5pdGlhbFByb3BzYCBiZWxvbmdzIHRvIGBfZG9jdW1lbnRgIChpbnN0ZWFkIG9mIGBfYXBwYCksXG4vLyBpdCdzIGNvbXBhdGlibGUgd2l0aCBzZXJ2ZXItc2lkZSBnZW5lcmF0aW9uIChTU0cpLlxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIFJlc29sdXRpb24gb3JkZXJcbiAgLy9cbiAgLy8gT24gdGhlIHNlcnZlcjpcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xuICAvLyAzLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gNC4gYXBwLnJlbmRlclxuICAvLyA1LiBwYWdlLnJlbmRlclxuICAvLyA2LiBkb2N1bWVudC5yZW5kZXJcbiAgLy9cbiAgLy8gT24gdGhlIHNlcnZlciB3aXRoIGVycm9yOlxuICAvLyAxLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gYXBwLnJlbmRlclxuICAvLyAzLiBwYWdlLnJlbmRlclxuICAvLyA0LiBkb2N1bWVudC5yZW5kZXJcbiAgLy9cbiAgLy8gT24gdGhlIGNsaWVudFxuICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDMuIGFwcC5yZW5kZXJcbiAgLy8gNC4gcGFnZS5yZW5kZXJcblxuICAvLyBSZW5kZXIgYXBwIGFuZCBwYWdlIGFuZCBnZXQgdGhlIGNvbnRleHQgb2YgdGhlIHBhZ2Ugd2l0aCBjb2xsZWN0ZWQgc2lkZSBlZmZlY3RzLlxuICBjb25zdCBzaGVldHMgPSBuZXcgU2VydmVyU3R5bGVTaGVldHMoKTtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+IHNoZWV0cy5jb2xsZWN0KDxBcHAgey4uLnByb3BzfSAvPiksXG4gICAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgLy8gU3R5bGVzIGZyYWdtZW50IGlzIHJlbmRlcmVkIGFmdGVyIHRoZSBhcHAgYW5kIHBhZ2UgcmVuZGVyaW5nIGZpbmlzaC5cbiAgICBzdHlsZXM6IFsuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLCBzaGVldHMuZ2V0U3R5bGVFbGVtZW50KCldLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_0__);\n\n // Create a theme instance.\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme)({\n  palette: {\n    primary: {\n      main: '#ff9922'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: (_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_0___default().A400)\n    },\n    background: {\n      default: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vc3JjL3RoZW1lLnRzP2MzMjkiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Q0FHQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLHdFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxTQUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFRywwRUFBUUM7QUFEVCxLQVBBO0FBVVBDLGNBQVUsRUFBRTtBQUNWQyxhQUFPLEVBQUU7QUFEQztBQVZMO0FBRGtCLENBQUQsQ0FBNUI7QUFpQkEsK0RBQWVWLEtBQWYiLCJmaWxlIjoiLi9zcmMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCdcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjZmY5OTIyJ1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzE5ODU3YidcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmZmYnXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.ts\n");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/colors/red");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.tsx"); });
module.exports = __webpack_exports__;

})();