"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/logout/page",{

/***/ "(app-pages-browser)/./src/app/logout/page.tsx":
/*!*********************************!*\
  !*** ./src/app/logout/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n// pages/logout.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n// pages/logout.tsx\n\n\nconst LogoutPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Limpar os dados de autenticação (por exemplo, remover o nome de usuário da localStorage)\n        localStorage.removeItem(\"username\");\n        // Redirecionar o usuário para a página inicial\n        window.location.href = \"/\";\n    }, [\n        router\n    ]); // Adicione router como uma dependência do useEffect\n    return null; // Esta página não renderiza nada\n};\n_s(LogoutPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = LogoutPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutPage);\nvar _c;\n$RefreshReg$(_c, \"LogoutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9nb3V0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtQkFBbUI7O0FBRW5CLG1CQUFtQjtBQUVlO0FBQ007QUFFeEMsTUFBTUUsYUFBdUI7O0lBQzNCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUiwyRkFBMkY7UUFDM0ZJLGFBQWFDLFVBQVUsQ0FBQztRQUV4QiwrQ0FBK0M7UUFDL0NDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCLEdBQUc7UUFBQ0w7S0FBTyxHQUFHLG9EQUFvRDtJQUVsRSxPQUFPLE1BQU0saUNBQWlDO0FBQ2hEO0dBWk1EOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFjTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ291dC9wYWdlLnRzeD9hMGE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2xvZ291dC50c3hcblwidXNlIGNsaWVudFwiO1xuLy8gcGFnZXMvbG9nb3V0LnRzeFxuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IExvZ291dFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExpbXBhciBvcyBkYWRvcyBkZSBhdXRlbnRpY2HDp8OjbyAocG9yIGV4ZW1wbG8sIHJlbW92ZXIgbyBub21lIGRlIHVzdcOhcmlvIGRhIGxvY2FsU3RvcmFnZSlcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcblxuICAgIC8vIFJlZGlyZWNpb25hciBvIHVzdcOhcmlvIHBhcmEgYSBww6FnaW5hIGluaWNpYWxcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgfSwgW3JvdXRlcl0pOyAvLyBBZGljaW9uZSByb3V0ZXIgY29tbyB1bWEgZGVwZW5kw6puY2lhIGRvIHVzZUVmZmVjdFxuXG4gIHJldHVybiBudWxsOyAvLyBFc3RhIHDDoWdpbmEgbsOjbyByZW5kZXJpemEgbmFkYVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMb2dvdXRQYWdlIiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/logout/page.tsx\n"));

/***/ })

});