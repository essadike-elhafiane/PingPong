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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ \"(app-pages-browser)/./src/app/component/Profile.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst Buttons = (param)=>{\n    let { ButtonClick } = param;\n    _s();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleActiveButton = (buttonId)=>{\n        setActiveButton(buttonId);\n    };\n    const handleButtonClick = (value)=>{\n        handleActiveButton(value);\n        ButtonClick(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 1 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 2 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(2),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/gamesicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Games\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 3 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(3),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/rankingicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Ranking\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 4 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(4),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/searchicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton visible xl:invisible \".concat(activeButton === 5 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(5),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/chaticon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Buttons, \"GFYa6ng+s1UYoMT9kpDoqfjZCXw=\");\n_c = Buttons;\nconst PhoneButtons = (param)=>{\n    let { ButtonClick } = param;\n    _s1();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleActiveButton = (buttonId)=>{\n        setActiveButton(buttonId);\n    };\n    const handleButtonClick = (value)=>{\n        handleActiveButton(value);\n        ButtonClick(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"phonebuttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 1 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(1),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/homeicon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/gamesicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/rankingicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/searchicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/chaticon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(PhoneButtons, \"2IlxFF4hDMq20XkKpqpiCEEIzsY=\");\n_c1 = PhoneButtons;\nconst Sidebar = (param)=>{\n    let { ButtonClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"side_holder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Sidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Buttons, {\n                        ButtonClick: ButtonClick\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logout\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"Username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logoutSection\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"logoutbutton\",\n                                    children: \"logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"PhoneSidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhoneButtons, {\n                        ButtonClick: ButtonClick\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logoutIcon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"icon\",\n                            src: \"homeimages/logouticon.svg\",\n                            alt: \"logo\",\n                            width: 26,\n                            height: 18\n                        }, void 0, false, {\n                            fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Buttons\");\n$RefreshReg$(_c1, \"PhoneButtons\");\n$RefreshReg$(_c2, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0M7QUFDQztBQUdqQyxNQUFNRyxVQUFVO1FBQUMsRUFBQ0MsV0FBVyxFQUFDOztJQUUxQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSyxxQkFBcUIsQ0FBQ0M7UUFDMUJGLGdCQUFnQkU7SUFDbEI7SUFHQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkJILG1CQUFtQkc7UUFDbkJOLFlBQVlNO0lBQ2hCO0lBR0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFNUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzNHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTBCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3BGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFNUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzNHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTJCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3JGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFPUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzVHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTZCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7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Q04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvU2lkZWJhci50c3g/OGZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQnV0dG9ucyA9ICh7QnV0dG9uQ2xpY2t9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgW2FjdGl2ZUJ1dHRvbiwgc2V0QWN0aXZlQnV0dG9uXSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgY29uc3QgaGFuZGxlQWN0aXZlQnV0dG9uID0gKGJ1dHRvbklkKSA9PiB7XG4gICAgICBzZXRBY3RpdmVCdXR0b24oYnV0dG9uSWQpO1xuICAgIH07XG5cbiAgICBcbiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICh2YWx1ZTpudW1iZXIpID0+IHtcbiAgICAgICAgaGFuZGxlQWN0aXZlQnV0dG9uKHZhbHVlKTtcbiAgICAgICAgQnV0dG9uQ2xpY2sodmFsdWUpO1xuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAxID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezE0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVCdXR0b24gJHthY3RpdmVCdXR0b24gPT09IDIgPyAnYWN0aXZlQ2hhdEJ1dHRvbicgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygyKX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL2dhbWVzaWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPkdhbWVzPC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAzID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDMpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvcmFua2luZ2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5SYW5raW5nPC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSA0ID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDQpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvc2VhcmNoaWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPGgyPlNlYXJjaDwvaDI+IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJ1dHRvbiB2aXNpYmxlIHhsOmludmlzaWJsZSAke2FjdGl2ZUJ1dHRvbiA9PT0gNSA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDUpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvY2hhdGljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5DaGF0PC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4pO1xuXG59XG5cbmNvbnN0IFBob25lQnV0dG9ucyA9ICh7QnV0dG9uQ2xpY2t9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgW2FjdGl2ZUJ1dHRvbiwgc2V0QWN0aXZlQnV0dG9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlQWN0aXZlQnV0dG9uID0gKGJ1dHRvbklkKSA9PiB7XG4gICAgICBzZXRBY3RpdmVCdXR0b24oYnV0dG9uSWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICh2YWx1ZTpudW1iZXIpID0+IHtcbiAgICAgICAgaGFuZGxlQWN0aXZlQnV0dG9uKHZhbHVlKTtcbiAgICAgICAgQnV0dG9uQ2xpY2sodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwaG9uZWJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gMSA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDEpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvaG9tZWljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyNH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9nYW1lc2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9yYW5raW5naWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL3NlYXJjaGljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9jaGF0aWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgU2lkZWJhciA9ICh7QnV0dG9uQ2xpY2t9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfaG9sZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9ucyBCdXR0b25DbGljaz17QnV0dG9uQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ291dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiVXNlcm5hbWVcIj5Vc2VybmFtZTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvdXRTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ291dGJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBob25lU2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPFBob25lQnV0dG9ucyBCdXR0b25DbGljaz17QnV0dG9uQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ291dEljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL2xvZ291dGljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyNn0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsIkJ1dHRvbnMiLCJCdXR0b25DbGljayIsImFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsImhhbmRsZUFjdGl2ZUJ1dHRvbiIsImJ1dHRvbklkIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwiUGhvbmVCdXR0b25zIiwiU2lkZWJhciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Sidebar.tsx\n"));

/***/ })

});