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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"10a31672f7ee\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZjZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEwYTMxNjcyZjdlZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/switcher/ColorSwitcher.tsx":
/*!********************************************!*\
  !*** ./src/app/switcher/ColorSwitcher.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ColorSwitcher_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorSwitcher.css */ \"(app-pages-browser)/./src/app/switcher/ColorSwitcher.css\");\n/* harmony import */ var _assets_BlindCo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/BlindCo.svg */ \"(app-pages-browser)/./src/app/assets/BlindCo.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst colorBlindnessTypes = [\n    {\n        type: \"Normal Theme\",\n        filter: \"\"\n    },\n    {\n        type: \"Protanopia\",\n        filter: \"grayscale(0.5) sepia(0.5)\"\n    },\n    {\n        type: \"Deuteranopia\",\n        filter: \"grayscale(0.3) contrast(1.2)\"\n    },\n    {\n        type: \"Tritanopia\",\n        filter: \"grayscale(0.7) hue-rotate(120deg)\"\n    }\n];\nconst ColorSwitcher = ()=>{\n    _s();\n    const [colorBlindnessType, setColorBlindnessType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(colorBlindnessTypes[0]);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleColorBlindnessChange = (type)=>{\n        if (colorBlindnessType.type === type) {\n            setColorBlindnessType(colorBlindnessTypes[0]);\n            document.body.style.filter = \"\";\n        } else {\n            const selectedType = colorBlindnessTypes.find((t)=>t.type === type);\n            if (selectedType) {\n                setColorBlindnessType(selectedType);\n                document.body.style.filter = selectedType.filter;\n            }\n        }\n    };\n    const toggleDropdown = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const closeDropdown = ()=>{\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"color-switcher\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"color-blindness-button \".concat(colorBlindnessType.filter ? \"active\" : \"\"),\n                onClick: toggleDropdown,\n                children: [\n                    colorBlindnessType.type,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        src: _assets_BlindCo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"icon-BlindCo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay\",\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"dropdown\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"close-button\",\n                                onClick: closeDropdown,\n                                children: \"Fechar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dropdownText\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"h1-drop\",\n                                        children: \"BlindCo \\xae\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"p-drop\",\n                                        children: [\n                                            \"Esse \\xe9 o BlindCo o projeto que ajuda voc\\xea no seu cotidiano!\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 96\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 101\n                                            }, undefined),\n                                            \"Escolha abaixo a op\\xe7\\xe3o que se encaixa na sua dificuldade.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            colorBlindnessTypes.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"optionButton\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"color-blindness-button \".concat(colorBlindnessType.type === type.type ? \"active\" : \"\"),\n                                                onClick: ()=>handleColorBlindnessChange(type.type),\n                                                children: type.type\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ios-switch\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"checkbox\",\n                                                        id: \"switch-\".concat(type.type),\n                                                        checked: colorBlindnessType.type === type.type,\n                                                        onChange: ()=>handleColorBlindnessChange(type.type)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"switch-\".concat(type.type)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, type.type, false, {\n                                    fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arturfiorindo/BlindCo_nextJS/BlindCo/Sprint_BlindCo/src/app/switcher/ColorSwitcher.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ColorSwitcher, \"hAcCq54+V6YPD+GbnsFunWTixL0=\");\n_c = ColorSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ColorSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3dpdGNoZXIvQ29sb3JTd2l0Y2hlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ1g7QUFDZTtBQUNiO0FBUy9CLE1BQU1JLHNCQUE0QztJQUNoRDtRQUFFQyxNQUFNO1FBQWdCQyxRQUFRO0lBQUc7SUFDbkM7UUFBRUQsTUFBTTtRQUFjQyxRQUFRO0lBQTRCO0lBQzFEO1FBQUVELE1BQU07UUFBZ0JDLFFBQVE7SUFBK0I7SUFDL0Q7UUFBRUQsTUFBTTtRQUFjQyxRQUFRO0lBQW9DO0NBQ25FO0FBRUQsTUFBTUMsZ0JBQTBCOztJQUM5QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdSLCtDQUFRQSxDQUFxQkcsbUJBQW1CLENBQUMsRUFBRTtJQUN2RyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVU7SUFFOUMsTUFBTVcsNkJBQTZCLENBQUNQO1FBQ2xDLElBQUlHLG1CQUFtQkgsSUFBSSxLQUFLQSxNQUFNO1lBQ3BDSSxzQkFBc0JMLG1CQUFtQixDQUFDLEVBQUU7WUFDNUNTLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxNQUFNLEdBQUc7UUFDL0IsT0FBTztZQUNMLE1BQU1VLGVBQWVaLG9CQUFvQmEsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUViLElBQUksS0FBS0E7WUFDaEUsSUFBSVcsY0FBYztnQkFDaEJQLHNCQUFzQk87Z0JBQ3RCSCxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsTUFBTSxHQUFHVSxhQUFhVixNQUFNO1lBQ2xEO1FBQ0Y7SUFDRjtJQUVBLE1BQU1hLGlCQUFpQjtRQUNyQlIsVUFBVSxDQUFDRDtJQUNiO0lBRUEsTUFBTVUsZ0JBQWdCO1FBQ3BCVCxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFXLDBCQUFvRSxPQUExQ2QsbUJBQW1CRixNQUFNLEdBQUcsV0FBVztnQkFBTWtCLFNBQVNMOztvQkFDaEdYLG1CQUFtQkgsSUFBSTtrQ0FDeEIsOERBQUNGLGtEQUFLQTt3QkFBQ3NCLEtBQUt2QiwyREFBT0E7d0JBQUV3QixLQUFJOzs7Ozs7Ozs7Ozs7WUFJMUJoQix3QkFDQzs7a0NBQ0EsOERBQUNXO3dCQUFJQyxXQUFVO3dCQUFVRSxTQUFTLElBQU1iLFVBQVU7Ozs7OztrQ0FDOUMsOERBQUNnQjt3QkFBR0wsV0FBVTs7MENBQ1YsOERBQUNDO2dDQUFPRCxXQUFVO2dDQUFlRSxTQUFTSjswQ0FBZTs7Ozs7OzBDQUM3RCw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBVTs7Ozs7O2tEQUN4Qiw4REFBQ087d0NBQUVQLFdBQVU7OzRDQUFTOzBEQUEyRCw4REFBQ1E7Ozs7OzBEQUFJLDhEQUFDQTs7Ozs7NENBQUk7Ozs7Ozs7Ozs7Ozs7NEJBRTVGMUIsb0JBQW9CMkIsR0FBRyxDQUFDLENBQUMxQixxQkFDeEIsOERBQUMyQjs4Q0FDQyw0RUFBQ1g7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDQztnREFDQ0QsV0FBVywwQkFBZ0YsT0FBdERkLG1CQUFtQkgsSUFBSSxLQUFLQSxLQUFLQSxJQUFJLEdBQUcsV0FBVztnREFDeEZtQixTQUFTLElBQU1aLDJCQUEyQlAsS0FBS0EsSUFBSTswREFFbERBLEtBQUtBLElBQUk7Ozs7OzswREFFWiw4REFBQ2dCO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ1c7d0RBQ0M1QixNQUFLO3dEQUNMNkIsSUFBSSxVQUFvQixPQUFWN0IsS0FBS0EsSUFBSTt3REFDdkI4QixTQUFTM0IsbUJBQW1CSCxJQUFJLEtBQUtBLEtBQUtBLElBQUk7d0RBQzlDK0IsVUFBVSxJQUFNeEIsMkJBQTJCUCxLQUFLQSxJQUFJOzs7Ozs7a0VBRXRELDhEQUFDZ0M7d0RBQU1DLFNBQVMsVUFBb0IsT0FBVmpDLEtBQUtBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FmaENBLEtBQUtBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmhDO0dBcEVNRTtLQUFBQTtBQXNFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3N3aXRjaGVyL0NvbG9yU3dpdGNoZXIudHN4PzFhY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vQ29sb3JTd2l0Y2hlci5jc3MnO1xuaW1wb3J0IEJsaW5kQ28gZnJvbSAnLi4vYXNzZXRzL0JsaW5kQ28uc3ZnJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG5cbmludGVyZmFjZSBDb2xvckJsaW5kbmVzc1R5cGUge1xuICB0eXBlOiAnTm9ybWFsIFRoZW1lJyB8ICdQcm90YW5vcGlhJyB8ICdEZXV0ZXJhbm9waWEnIHwgJ1RyaXRhbm9waWEnO1xuICBmaWx0ZXI6IHN0cmluZztcbn1cblxuY29uc3QgY29sb3JCbGluZG5lc3NUeXBlczogQ29sb3JCbGluZG5lc3NUeXBlW10gPSBbXG4gIHsgdHlwZTogJ05vcm1hbCBUaGVtZScsIGZpbHRlcjogJycgfSxcbiAgeyB0eXBlOiAnUHJvdGFub3BpYScsIGZpbHRlcjogJ2dyYXlzY2FsZSgwLjUpIHNlcGlhKDAuNSknIH0sXG4gIHsgdHlwZTogJ0RldXRlcmFub3BpYScsIGZpbHRlcjogJ2dyYXlzY2FsZSgwLjMpIGNvbnRyYXN0KDEuMiknIH0sXG4gIHsgdHlwZTogJ1RyaXRhbm9waWEnLCBmaWx0ZXI6ICdncmF5c2NhbGUoMC43KSBodWUtcm90YXRlKDEyMGRlZyknIH0sXG5dO1xuXG5jb25zdCBDb2xvclN3aXRjaGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NvbG9yQmxpbmRuZXNzVHlwZSwgc2V0Q29sb3JCbGluZG5lc3NUeXBlXSA9IHVzZVN0YXRlPENvbG9yQmxpbmRuZXNzVHlwZT4oY29sb3JCbGluZG5lc3NUeXBlc1swXSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UgPSAodHlwZTogQ29sb3JCbGluZG5lc3NUeXBlWyd0eXBlJ10pID0+IHtcbiAgICBpZiAoY29sb3JCbGluZG5lc3NUeXBlLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHNldENvbG9yQmxpbmRuZXNzVHlwZShjb2xvckJsaW5kbmVzc1R5cGVzWzBdKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVHlwZSA9IGNvbG9yQmxpbmRuZXNzVHlwZXMuZmluZCgodCkgPT4gdC50eXBlID09PSB0eXBlKTtcbiAgICAgIGlmIChzZWxlY3RlZFR5cGUpIHtcbiAgICAgICAgc2V0Q29sb3JCbGluZG5lc3NUeXBlKHNlbGVjdGVkVHlwZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gc2VsZWN0ZWRUeXBlLmZpbHRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc3dpdGNoZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgY29sb3ItYmxpbmRuZXNzLWJ1dHRvbiAke2NvbG9yQmxpbmRuZXNzVHlwZS5maWx0ZXIgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAge2NvbG9yQmxpbmRuZXNzVHlwZS50eXBlfVxuICAgICAgICA8SW1hZ2Ugc3JjPXtCbGluZENvfSBhbHQ9J2ljb24tQmxpbmRDbycvPlxuICAgICAgICBcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgXG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25DbGljaz17Y2xvc2VEcm9wZG93bn0+RmVjaGFyPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd25UZXh0Jz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naDEtZHJvcCc+QmxpbmRDbyAmcmVnOzwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncC1kcm9wJz5Fc3NlIMOpIG8gQmxpbmRDbyBvIHByb2pldG8gcXVlIGFqdWRhIHZvY8OqIG5vIHNldSBjb3RpZGlhbm8hPGJyLz48YnIvPkVzY29saGEgYWJhaXhvIGEgb3DDp8OjbyBxdWUgc2UgZW5jYWl4YSBuYSBzdWEgZGlmaWN1bGRhZGUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y29sb3JCbGluZG5lc3NUeXBlcy5tYXAoKHR5cGUpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17dHlwZS50eXBlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uQnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sb3ItYmxpbmRuZXNzLWJ1dHRvbiAke2NvbG9yQmxpbmRuZXNzVHlwZS50eXBlID09PSB0eXBlLnR5cGUgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQmxpbmRuZXNzQ2hhbmdlKHR5cGUudHlwZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlLnR5cGV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW9zLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgc3dpdGNoLSR7dHlwZS50eXBlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29sb3JCbGluZG5lc3NUeXBlLnR5cGUgPT09IHR5cGUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UodHlwZS50eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2Bzd2l0Y2gtJHt0eXBlLnR5cGV9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JTd2l0Y2hlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQmxpbmRDbyIsIkltYWdlIiwiY29sb3JCbGluZG5lc3NUeXBlcyIsInR5cGUiLCJmaWx0ZXIiLCJDb2xvclN3aXRjaGVyIiwiY29sb3JCbGluZG5lc3NUeXBlIiwic2V0Q29sb3JCbGluZG5lc3NUeXBlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ29sb3JCbGluZG5lc3NDaGFuZ2UiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInNlbGVjdGVkVHlwZSIsImZpbmQiLCJ0IiwidG9nZ2xlRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsInVsIiwiaDEiLCJwIiwiYnIiLCJtYXAiLCJsaSIsImlucHV0IiwiaWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/switcher/ColorSwitcher.tsx\n"));

/***/ })

});