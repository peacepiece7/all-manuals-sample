"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const queryClient = new external_react_query_.QueryClient();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_query_.QueryClientProvider, {
    client: queryClient,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_query_.Hydrate, {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    }),  false && /*#__PURE__*/0]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8725));
module.exports = __webpack_exports__;

})();