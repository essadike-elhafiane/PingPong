"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/Sidebar.tsx":
/*!***************************************!*\
  !*** ./src/app/component/Sidebar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ \"(app-pages-browser)/./src/app/component/Profile.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Buttons = (param)=>{\n    let { ButtonClick } = param;\n    _s();\n    const [activeButton, setActiveButton] = useState(null);\n    const handleButton = (buttonId)=>{\n        setActiveButton(buttonId);\n    };\n    const handleButtonClick = (value)=>{\n        ButtonClick(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"sideButton\",\n                onClick: ()=>handleButtonClick(1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton\",\n                onClick: ()=>handleButtonClick(2),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Games\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton\",\n                onClick: ()=>handleButtonClick(3),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Ranking\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton\",\n                onClick: ()=>handleButtonClick(4),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton visible xl:invisible\",\n                onClick: ()=>handleButtonClick(5),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Buttons, \"2IlxFF4hDMq20XkKpqpiCEEIzsY=\");\n_c = Buttons;\nconst PhoneButtons = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"phonebuttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/homeicon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/gamesicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/rankingicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/searchicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/chaticon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = PhoneButtons;\nconst Sidebar = (param)=>{\n    let { ButtonClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"side_holder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Sidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Buttons, {\n                        ButtonClick: ButtonClick\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logout\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"Username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logoutSection\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"logoutbutton\",\n                                    children: \"logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"PhoneSidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhoneButtons, {}, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logoutIcon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"icon\",\n                            src: \"homeimages/logouticon.svg\",\n                            alt: \"logo\",\n                            width: 26,\n                            height: 18\n                        }, void 0, false, {\n                            fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Buttons\");\n$RefreshReg$(_c1, \"PhoneButtons\");\n$RefreshReg$(_c2, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUNDO0FBR2hDLE1BQU1FLFVBQVU7UUFBQyxFQUFDQyxXQUFXLEVBQUM7O0lBRTFCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdDLFNBQVM7SUFFakQsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkgsZ0JBQWdCRztJQUNsQjtJQUdBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QlAsWUFBWU87SUFDaEI7SUFHQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUFhRSxTQUFTLElBQU1MLGtCQUFrQjs7a0NBQzVELDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9HLEtBQUk7d0JBQTBCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3BGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUjtnQkFBSUMsV0FBVTtnQkFBYUUsU0FBUyxJQUFNTCxrQkFBa0I7O2tDQUN6RCw4REFBQ1Qsa0RBQUtBO3dCQUFDWSxXQUFVO3dCQUFPRyxLQUFJO3dCQUEwQkMsS0FBSTt3QkFBT0MsT0FBTzt3QkFBSUMsUUFBUTs7Ozs7O2tDQUNwRiw4REFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ1I7Z0JBQUlDLFdBQVU7Z0JBQWFFLFNBQVMsSUFBTUwsa0JBQWtCOztrQ0FDekQsOERBQUNULGtEQUFLQTt3QkFBQ1ksV0FBVTt3QkFBT0csS0FBSTt3QkFBMEJDLEtBQUk7d0JBQU9DLE9BQU87d0JBQUlDLFFBQVE7Ozs7OztrQ0FDcEYsOERBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNSO2dCQUFJQyxXQUFVO2dCQUFhRSxTQUFTLElBQU1MLGtCQUFrQjs7a0NBQ3pELDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9HLEtBQUk7d0JBQTBCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3BGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUjtnQkFBSUMsV0FBVTtnQkFBa0NFLFNBQVMsSUFBTUwsa0JBQWtCOztrQ0FDOUUsOERBQUNULGtEQUFLQTt3QkFBQ1ksV0FBVTt3QkFBT0csS0FBSTt3QkFBMEJDLEtBQUk7d0JBQU9DLE9BQU87d0JBQUlDLFFBQVE7Ozs7OztrQ0FDcEYsOERBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0EzQ01qQjtLQUFBQTtBQTZDTixNQUFNa0IsZUFBZTtJQUdqQixxQkFDSSw4REFBQ1Q7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOzBCQUNHLDRFQUFDWCxrREFBS0E7b0JBQUNZLFdBQVU7b0JBQU9HLEtBQUk7b0JBQTBCQyxLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFFeEYsOERBQUNQOzBCQUNHLDRFQUFDWCxrREFBS0E7b0JBQUNZLFdBQVU7b0JBQU9HLEtBQUk7b0JBQTJCQyxLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFFekYsOERBQUNQOzBCQUNHLDRFQUFDWCxrREFBS0E7b0JBQUNZLFdBQVU7b0JBQU9HLEtBQUk7b0JBQTZCQyxLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFFM0YsOERBQUNQOzBCQUNHLDRFQUFDWCxrREFBS0E7b0JBQUNZLFdBQVU7b0JBQU9HLEtBQUk7b0JBQTRCQyxLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFROzs7Ozs7Ozs7OzswQkFFMUYsOERBQUNQOzBCQUNHLDRFQUFDWCxrREFBS0E7b0JBQUNZLFdBQVU7b0JBQU9HLEtBQUk7b0JBQTBCQyxLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRztNQXRCTUU7QUF3Qk4sTUFBTUMsVUFBVTtRQUFDLEVBQUNsQixXQUFXLEVBQUM7SUFFMUIscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNWO3dCQUFRQyxhQUFhQTs7Ozs7O2tDQUN0Qiw4REFBQ1E7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDWCxnREFBT0E7Ozs7OzBDQUVSLDhEQUFDa0I7Z0NBQUdQLFdBQVU7MENBQVc7Ozs7OzswQ0FFekIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDQztvQ0FBT0QsV0FBVTs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTdDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRVosOERBQUNROzs7OztrQ0FDQSw4REFBQ1Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNaLGtEQUFLQTs0QkFBQ1ksV0FBVTs0QkFBT0csS0FBSTs0QkFBNEJDLEtBQUk7NEJBQU9DLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFHO01BL0JNRztBQWlDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9TaWRlYmFyLnRzeD84ZmUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZVwiO1xuXG5cbmNvbnN0IEJ1dHRvbnMgPSAoe0J1dHRvbkNsaWNrfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IFthY3RpdmVCdXR0b24sIHNldEFjdGl2ZUJ1dHRvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbiA9IChidXR0b25JZCkgPT4ge1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbklkKTtcbiAgICB9O1xuXG4gICAgXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAodmFsdWU6bnVtYmVyKSA9PiB7XG4gICAgICAgIEJ1dHRvbkNsaWNrKHZhbHVlKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lkZUJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDEpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvaG9tZWljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsxNH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj4gXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMil9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPkdhbWVzPC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMyl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPlJhbmtpbmc8L2gyPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayg0KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL2hvbWVpY29uLnN2Z1wiIGFsdD1cImxvZ29cIiB3aWR0aD17MTR9IGhlaWdodD17MTh9Lz5cbiAgICAgICAgICAgICAgICA8aDI+U2VhcmNoPC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQnV0dG9uIHZpc2libGUgeGw6aW52aXNpYmxlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soNSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPkNoYXQ8L2gyPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbik7XG5cbn1cblxuY29uc3QgUGhvbmVCdXR0b25zID0gKCk9PntcblxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9nYW1lc2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvcmFua2luZ2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvc2VhcmNoaWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9jaGF0aWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgU2lkZWJhciA9ICh7QnV0dG9uQ2xpY2t9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfaG9sZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9ucyBCdXR0b25DbGljaz17QnV0dG9uQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ291dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiVXNlcm5hbWVcIj5Vc2VybmFtZTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvdXRTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ291dGJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBob25lU2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPFBob25lQnV0dG9ucy8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvdXRJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9sb2dvdXRpY29uLnN2Z1wiIGFsdD1cImxvZ29cIiB3aWR0aD17MjZ9IGhlaWdodD17MTh9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiSW1hZ2UiLCJQcm9maWxlIiwiQnV0dG9ucyIsIkJ1dHRvbkNsaWNrIiwiYWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwidXNlU3RhdGUiLCJoYW5kbGVCdXR0b24iLCJidXR0b25JZCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsIlBob25lQnV0dG9ucyIsIlNpZGViYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Sidebar.tsx\n"));

/***/ })

});