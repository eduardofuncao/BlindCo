"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9aaae9ace754\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZjZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjlhYWFlOWFjZTc1NFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/switcher/ColorSwitcher.tsx":
/*!********************************************!*\
  !*** ./src/app/switcher/ColorSwitcher.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ColorSwitcher_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorSwitcher.css */ \"(app-pages-browser)/./src/app/switcher/ColorSwitcher.css\");\n/* harmony import */ var _assets_BlindCo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/BlindCo.svg */ \"(app-pages-browser)/./src/app/assets/BlindCo.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst colorBlindnessTypes = [\n    {\n        type: \"Normal Theme\",\n        filter: \"\"\n    },\n    {\n        type: \"Protanopia\",\n        filter: \"grayscale(0.5) sepia(0.5)\"\n    },\n    {\n        type: \"Deuteranopia\",\n        filter: \"grayscale(0.3) contrast(1.2)\"\n    },\n    {\n        type: \"Tritanopia\",\n        filter: \"grayscale(0.7) hue-rotate(120deg)\"\n    }\n];\nconst ColorSwitcher = ()=>{\n    _s();\n    const [colorBlindnessType, setColorBlindnessType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(colorBlindnessTypes[0]);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const applyFilter = (filter)=>{\n        document.body.style.filter = filter;\n    };\n    const handleColorBlindnessChange = (type, filter)=>{\n        setColorBlindnessType({\n            type,\n            filter\n        });\n        applyFilter(filter);\n    };\n    const toggleDropdown = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const closeDropdown = ()=>{\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"color-switcher\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"color-blindness-button \".concat(colorBlindnessType.filter ? \"active\" : \"\"),\n                onClick: toggleDropdown,\n                children: [\n                    colorBlindnessType.type,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: _assets_BlindCo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"icon-BlindCo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay\",\n                        onClick: closeDropdown\n                    }, void 0, false, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"close-button\",\n                                onClick: closeDropdown,\n                                children: \"Fechar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dropdownText\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"h1-drop\",\n                                        children: \"BlindCo \\xae\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"p-drop\",\n                                        children: [\n                                            \"Esse \\xe9 o BlindCo o projeto que ajuda voc\\xea no seu cotidiano!\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 96\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 101\n                                            }, undefined),\n                                            \"Escolha abaixo a op\\xe7\\xe3o que se encaixa na sua dificuldade.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            colorBlindnessTypes.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"optionButton\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"color-blindness-button \".concat(colorBlindnessType.type === type.type ? \"active\" : \"\"),\n                                                onClick: ()=>handleColorBlindnessChange(type.type, type.filter),\n                                                children: type.type\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ios-switch\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"checkbox\",\n                                                        id: \"switch-\".concat(type.type),\n                                                        checked: colorBlindnessType.type === type.type,\n                                                        onChange: ()=>handleColorBlindnessChange(type.type, type.filter)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"switch-\".concat(type.type)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, type.type, false, {\n                                    fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ColorSwitcher, \"ZL/w7XT0WQBIGPhONJ7shgmds2Q=\");\n_c = ColorSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ColorSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3dpdGNoZXIvQ29sb3JTd2l0Y2hlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRXRCO0FBQ2U7QUFDYjtBQU8vQixNQUFNSSxzQkFBNEM7SUFDaEQ7UUFBRUMsTUFBTTtRQUFnQkMsUUFBUTtJQUFHO0lBQ25DO1FBQUVELE1BQU07UUFBY0MsUUFBUTtJQUE0QjtJQUMxRDtRQUFFRCxNQUFNO1FBQWdCQyxRQUFRO0lBQStCO0lBQy9EO1FBQUVELE1BQU07UUFBY0MsUUFBUTtJQUFvQztDQUNuRTtBQUVELE1BQU1DLGdCQUEwQjs7SUFDOUIsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHUiwrQ0FBUUEsQ0FBcUJHLG1CQUFtQixDQUFDLEVBQUU7SUFDdkcsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUk3QyxNQUFNYSxjQUFjLENBQUNSO1FBQ25CUyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1gsTUFBTSxHQUFHQTtJQUMvQjtJQUVBLE1BQU1ZLDZCQUE2QixDQUFDYixNQUFrQ0M7UUFDcEVHLHNCQUFzQjtZQUFFSjtZQUFNQztRQUFPO1FBQ3JDUSxZQUFZUjtJQUNkO0lBRUEsTUFBTWEsaUJBQWlCO1FBQ3JCUixVQUFVLENBQUNEO0lBQ2I7SUFFQSxNQUFNVSxnQkFBZ0I7UUFDcEJULFVBQVU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVcsMEJBQW9FLE9BQTFDZCxtQkFBbUJGLE1BQU0sR0FBRyxXQUFXO2dCQUFNa0IsU0FBU0w7O29CQUNoR1gsbUJBQW1CSCxJQUFJO2tDQUN4Qiw4REFBQ0Ysa0RBQUtBO3dCQUFDc0IsS0FBS3ZCLDJEQUFPQTt3QkFBRXdCLEtBQUk7Ozs7Ozs7Ozs7OztZQUUxQmhCLHdCQUNDOztrQ0FDRSw4REFBQ1c7d0JBQUlDLFdBQVU7d0JBQVVFLFNBQVNKOzs7Ozs7a0NBQ2xDLDhEQUFDTzt3QkFBR0wsV0FBVTs7MENBQ1osOERBQUNDO2dDQUFPRCxXQUFVO2dDQUFlRSxTQUFTSjswQ0FBZTs7Ozs7OzBDQUN6RCw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBVTs7Ozs7O2tEQUN4Qiw4REFBQ087d0NBQUVQLFdBQVU7OzRDQUFTOzBEQUEyRCw4REFBQ1E7Ozs7OzBEQUFJLDhEQUFDQTs7Ozs7NENBQUk7Ozs7Ozs7Ozs7Ozs7NEJBRTVGMUIsb0JBQW9CMkIsR0FBRyxDQUFDLENBQUMxQixxQkFDeEIsOERBQUMyQjs4Q0FDQyw0RUFBQ1g7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDQztnREFDQ0QsV0FBVywwQkFBZ0YsT0FBdERkLG1CQUFtQkgsSUFBSSxLQUFLQSxLQUFLQSxJQUFJLEdBQUcsV0FBVztnREFDeEZtQixTQUFTLElBQU1OLDJCQUEyQmIsS0FBS0EsSUFBSSxFQUFFQSxLQUFLQyxNQUFNOzBEQUUvREQsS0FBS0EsSUFBSTs7Ozs7OzBEQUVaLDhEQUFDZ0I7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDVzt3REFDQzVCLE1BQUs7d0RBQ0w2QixJQUFJLFVBQW9CLE9BQVY3QixLQUFLQSxJQUFJO3dEQUN2QjhCLFNBQVMzQixtQkFBbUJILElBQUksS0FBS0EsS0FBS0EsSUFBSTt3REFDOUMrQixVQUFVLElBQU1sQiwyQkFBMkJiLEtBQUtBLElBQUksRUFBRUEsS0FBS0MsTUFBTTs7Ozs7O2tFQUVuRSw4REFBQytCO3dEQUFNQyxTQUFTLFVBQW9CLE9BQVZqQyxLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZmhDQSxLQUFLQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJoQztHQWpFTUU7S0FBQUE7QUFtRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zd2l0Y2hlci9Db2xvclN3aXRjaGVyLnRzeD8xYWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi9Db2xvclN3aXRjaGVyLmNzcyc7XG5pbXBvcnQgQmxpbmRDbyBmcm9tICcuLi9hc3NldHMvQmxpbmRDby5zdmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbnRlcmZhY2UgQ29sb3JCbGluZG5lc3NUeXBlIHtcbiAgdHlwZTogJ05vcm1hbCBUaGVtZScgfCAnUHJvdGFub3BpYScgfCAnRGV1dGVyYW5vcGlhJyB8ICdUcml0YW5vcGlhJztcbiAgZmlsdGVyOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbG9yQmxpbmRuZXNzVHlwZXM6IENvbG9yQmxpbmRuZXNzVHlwZVtdID0gW1xuICB7IHR5cGU6ICdOb3JtYWwgVGhlbWUnLCBmaWx0ZXI6ICcnIH0sXG4gIHsgdHlwZTogJ1Byb3Rhbm9waWEnLCBmaWx0ZXI6ICdncmF5c2NhbGUoMC41KSBzZXBpYSgwLjUpJyB9LFxuICB7IHR5cGU6ICdEZXV0ZXJhbm9waWEnLCBmaWx0ZXI6ICdncmF5c2NhbGUoMC4zKSBjb250cmFzdCgxLjIpJyB9LFxuICB7IHR5cGU6ICdUcml0YW5vcGlhJywgZmlsdGVyOiAnZ3JheXNjYWxlKDAuNykgaHVlLXJvdGF0ZSgxMjBkZWcpJyB9LFxuXTtcblxuY29uc3QgQ29sb3JTd2l0Y2hlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb2xvckJsaW5kbmVzc1R5cGUsIHNldENvbG9yQmxpbmRuZXNzVHlwZV0gPSB1c2VTdGF0ZTxDb2xvckJsaW5kbmVzc1R5cGU+KGNvbG9yQmxpbmRuZXNzVHlwZXNbMF0pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cblxuXG4gIGNvbnN0IGFwcGx5RmlsdGVyID0gKGZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBmaWx0ZXI7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UgPSAodHlwZTogQ29sb3JCbGluZG5lc3NUeXBlWyd0eXBlJ10sIGZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q29sb3JCbGluZG5lc3NUeXBlKHsgdHlwZSwgZmlsdGVyIH0pO1xuICAgIGFwcGx5RmlsdGVyKGZpbHRlcik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc3dpdGNoZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgY29sb3ItYmxpbmRuZXNzLWJ1dHRvbiAke2NvbG9yQmxpbmRuZXNzVHlwZS5maWx0ZXIgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAge2NvbG9yQmxpbmRuZXNzVHlwZS50eXBlfVxuICAgICAgICA8SW1hZ2Ugc3JjPXtCbGluZENvfSBhbHQ9J2ljb24tQmxpbmRDbycvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufSAvPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5GZWNoYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93blRleHQnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdoMS1kcm9wJz5CbGluZENvICZyZWc7PC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwLWRyb3AnPkVzc2Ugw6kgbyBCbGluZENvIG8gcHJvamV0byBxdWUgYWp1ZGEgdm9jw6ogbm8gc2V1IGNvdGlkaWFubyE8YnIvPjxici8+RXNjb2xoYSBhYmFpeG8gYSBvcMOnw6NvIHF1ZSBzZSBlbmNhaXhhIG5hIHN1YSBkaWZpY3VsZGFkZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjb2xvckJsaW5kbmVzc1R5cGVzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0eXBlLnR5cGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb25CdXR0b24nPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2xvci1ibGluZG5lc3MtYnV0dG9uICR7Y29sb3JCbGluZG5lc3NUeXBlLnR5cGUgPT09IHR5cGUudHlwZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UodHlwZS50eXBlLCB0eXBlLmZpbHRlcil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlLnR5cGV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW9zLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgc3dpdGNoLSR7dHlwZS50eXBlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29sb3JCbGluZG5lc3NUeXBlLnR5cGUgPT09IHR5cGUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UodHlwZS50eXBlLCB0eXBlLmZpbHRlcil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgc3dpdGNoLSR7dHlwZS50eXBlfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yU3dpdGNoZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJsaW5kQ28iLCJJbWFnZSIsImNvbG9yQmxpbmRuZXNzVHlwZXMiLCJ0eXBlIiwiZmlsdGVyIiwiQ29sb3JTd2l0Y2hlciIsImNvbG9yQmxpbmRuZXNzVHlwZSIsInNldENvbG9yQmxpbmRuZXNzVHlwZSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXJJZCIsInNldFVzZXJJZCIsImFwcGx5RmlsdGVyIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJoYW5kbGVDb2xvckJsaW5kbmVzc0NoYW5nZSIsInRvZ2dsZURyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ1bCIsImgxIiwicCIsImJyIiwibWFwIiwibGkiLCJpbnB1dCIsImlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/switcher/ColorSwitcher.tsx\n"));

/***/ })

});