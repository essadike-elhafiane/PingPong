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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ \"(app-pages-browser)/./src/app/component/Profile.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst Buttons = (param)=>{\n    let { ButtonClick } = param;\n    _s();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleActiveButton = (buttonId)=>{\n        setActiveButton(buttonId);\n    };\n    const handleButtonClick = (value)=>{\n        handleActiveButton(value);\n        ButtonClick(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 1 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/homeicon.svg\",\n                        alt: \"logo\",\n                        width: 14,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 2 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(2),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/gamesicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Games\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 3 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(3),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/rankingicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Ranking\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton \".concat(activeButton === 4 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(4),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/searchicon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sideButton visible xl:invisible \".concat(activeButton === 5 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(5),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"icon\",\n                        src: \"homeimages/chaticon.svg\",\n                        alt: \"logo\",\n                        width: 20,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Buttons, \"GFYa6ng+s1UYoMT9kpDoqfjZCXw=\");\n_c = Buttons;\nconst PhoneButtons = (param)=>{\n    let { ButtonClick } = param;\n    _s1();\n    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const handleActiveButton = (buttonId)=>{\n        setActiveButton(buttonId);\n    };\n    const handleButtonClick = (value)=>{\n        handleActiveButton(value);\n        ButtonClick(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"phonebuttons\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 1 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(1),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/homeicon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 20\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 2 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(2),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/gamesicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 72,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 3 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(3),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/rankingicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 75,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 4 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(4),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/searchicon.svg\",\n                    alt: \"logo\",\n                    width: 30,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 78,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"phonebutton \".concat(activeButton === 1 ? \"activeChatButton\" : \"\"),\n                onClick: ()=>handleButtonClick(5),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"icon\",\n                    src: \"homeimages/chaticon.svg\",\n                    alt: \"logo\",\n                    width: 24,\n                    height: 18\n                }, void 0, false, {\n                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(PhoneButtons, \"GFYa6ng+s1UYoMT9kpDoqfjZCXw=\");\n_c1 = PhoneButtons;\nconst Sidebar = (param)=>{\n    let { ButtonClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"side_holder\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Sidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Buttons, {\n                        ButtonClick: ButtonClick\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logout\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"Username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logoutSection\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"logoutbutton\",\n                                    children: \"logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"PhoneSidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhoneButtons, {\n                        ButtonClick: ButtonClick\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logoutIcon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: \"icon\",\n                            src: \"homeimages/logouticon.svg\",\n                            alt: \"logo\",\n                            width: 26,\n                            height: 18\n                        }, void 0, false, {\n                            fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ysahih/Desktop/PingPong/src/app/component/Sidebar.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Buttons\");\n$RefreshReg$(_c1, \"PhoneButtons\");\n$RefreshReg$(_c2, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0M7QUFDQztBQUdqQyxNQUFNRyxVQUFVO1FBQUMsRUFBQ0MsV0FBVyxFQUFDOztJQUUxQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSyxxQkFBcUIsQ0FBQ0M7UUFDMUJGLGdCQUFnQkU7SUFDbEI7SUFHQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDdkJILG1CQUFtQkc7UUFDbkJOLFlBQVlNO0lBQ2hCO0lBR0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFNUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzNHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTBCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3BGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFNUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzNHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTJCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3JGLDhEQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDUDtnQkFBSUMsV0FBVyxjQUEyRCxPQUE3Q1AsaUJBQWlCLElBQUkscUJBQXFCO2dCQUFPUSxTQUFTLElBQU1KLGtCQUFrQjs7a0NBQzVHLDhEQUFDVCxrREFBS0E7d0JBQUNZLFdBQVU7d0JBQU9FLEtBQUk7d0JBQTZCQyxLQUFJO3dCQUFPQyxPQUFPO3dCQUFJQyxRQUFROzs7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QUV6Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNTO29DQUFPVCxXQUFVOzhDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRN0MsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWiw4REFBQ087d0JBQWFmLGFBQWFBOzs7Ozs7a0NBQzFCLDhEQUFDTzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1osa0RBQUtBOzRCQUFDWSxXQUFVOzRCQUFPRSxLQUFJOzRCQUE0QkMsS0FBSTs0QkFBT0MsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUc7TUEvQk1HO0FBaUNOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L1NpZGViYXIudHN4PzhmZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9Qcm9maWxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IEJ1dHRvbnMgPSAoe0J1dHRvbkNsaWNrfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IFthY3RpdmVCdXR0b24sIHNldEFjdGl2ZUJ1dHRvbl0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUFjdGl2ZUJ1dHRvbiA9IChidXR0b25JZCkgPT4ge1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbklkKTtcbiAgICB9O1xuXG4gICAgXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAodmFsdWU6bnVtYmVyKSA9PiB7XG4gICAgICAgIGhhbmRsZUFjdGl2ZUJ1dHRvbih2YWx1ZSk7XG4gICAgICAgIEJ1dHRvbkNsaWNrKHZhbHVlKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gMSA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDEpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvaG9tZWljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsxNH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5Ib21lPC9oMj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAyID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMil9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9nYW1lc2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5HYW1lczwvaDI+IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gMyA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9ICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygzKX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL3JhbmtpbmdpY29uLnN2Z1wiIGFsdD1cImxvZ29cIiB3aWR0aD17MjB9IGhlaWdodD17MTh9Lz5cbiAgICAgICAgICAgICAgICA8aDI+UmFua2luZzwvaDI+IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gNCA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9ICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayg0KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL3NlYXJjaGljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgICAgIDxoMj5TZWFyY2g8L2gyPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVCdXR0b24gdmlzaWJsZSB4bDppbnZpc2libGUgJHthY3RpdmVCdXR0b24gPT09IDUgPyAnYWN0aXZlQ2hhdEJ1dHRvbicgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayg1KX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCJob21laW1hZ2VzL2NoYXRpY29uLnN2Z1wiIGFsdD1cImxvZ29cIiB3aWR0aD17MjB9IGhlaWdodD17MTh9Lz5cbiAgICAgICAgICAgICAgICA8aDI+Q2hhdDwvaDI+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuKTtcblxufVxuXG5jb25zdCBQaG9uZUJ1dHRvbnMgPSAoe0J1dHRvbkNsaWNrfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IFthY3RpdmVCdXR0b24sIHNldEFjdGl2ZUJ1dHRvbl0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUFjdGl2ZUJ1dHRvbiA9IChidXR0b25JZCkgPT4ge1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbklkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAodmFsdWU6bnVtYmVyKSA9PiB7XG4gICAgICAgIGhhbmRsZUFjdGl2ZUJ1dHRvbih2YWx1ZSk7XG4gICAgICAgIEJ1dHRvbkNsaWNrKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lYnV0dG9uc1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBob25lYnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAxID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9ob21laWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezIwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBob25lYnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAyID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soMil9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9nYW1lc2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwaG9uZWJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gMyA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDMpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvcmFua2luZ2ljb24uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXszMH0gaGVpZ2h0PXsxOH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwaG9uZWJ1dHRvbiAke2FjdGl2ZUJ1dHRvbiA9PT0gNCA/ICdhY3RpdmVDaGF0QnV0dG9uJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKDQpfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvc2VhcmNoaWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBob25lYnV0dG9uICR7YWN0aXZlQnV0dG9uID09PSAxID8gJ2FjdGl2ZUNoYXRCdXR0b24nIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soNSl9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpY29uXCIgc3JjPVwiaG9tZWltYWdlcy9jaGF0aWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBTaWRlYmFyID0gKHtCdXR0b25DbGlja30pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZV9ob2xkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25zIEJ1dHRvbkNsaWNrPXtCdXR0b25DbGlja30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb3V0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJVc2VybmFtZVwiPlVzZXJuYW1lPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ291dFNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9nb3V0YnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGhvbmVTaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8UGhvbmVCdXR0b25zIEJ1dHRvbkNsaWNrPXtCdXR0b25DbGlja30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb3V0SWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cImhvbWVpbWFnZXMvbG9nb3V0aWNvbi5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezI2fSBoZWlnaHQ9ezE4fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbIkltYWdlIiwiUHJvZmlsZSIsInVzZVN0YXRlIiwiQnV0dG9ucyIsIkJ1dHRvbkNsaWNrIiwiYWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwiaGFuZGxlQWN0aXZlQnV0dG9uIiwiYnV0dG9uSWQiLCJoYW5kbGVCdXR0b25DbGljayIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJQaG9uZUJ1dHRvbnMiLCJTaWRlYmFyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Sidebar.tsx\n"));

/***/ })

});