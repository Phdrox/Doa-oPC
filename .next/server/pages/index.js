"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DoacaoPc),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStaticProps() {\n    const data = await fetch(\"https://doar-computador-api.herokuapp.com/\");\n    const alive = await data.json();\n    return {\n        props: {\n            alive\n        }\n    };\n}\nfunction DoacaoPc({ alive  }) {\n    if (alive.alive == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Doa\\xe7\\xe3o de computadores usados\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"API online\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Doa\\xe7\\xe3o de computadores usados\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"API offline\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\ProjetosPessoais\\\\doarpc\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBTyxlQUFlQSxjQUFjLEdBQUc7SUFFckMsTUFBTUMsSUFBSSxHQUFFLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUNyRSxNQUFNQyxLQUFLLEdBQUUsTUFBTUYsSUFBSSxDQUFDRyxJQUFJLEVBQUU7SUFFOUIsT0FBTTtRQUNKQyxLQUFLLEVBQUM7WUFBQ0YsS0FBSztTQUFDO0tBQ2Q7Q0FDRjtBQUdjLFNBQVNHLFFBQVEsQ0FBQyxFQUFDSCxLQUFLLEdBQUMsRUFBQztJQUV2QyxJQUFHQSxLQUFLLENBQUNBLEtBQUssSUFBRSxJQUFJLEVBQUM7UUFDbkIscUJBQ0UsOERBQUNJLEtBQUc7OzhCQUNGLDhEQUFDQyxJQUFFOzhCQUFDLHFDQUE2Qjs7Ozs7d0JBQUs7OEJBQ3RDLDhEQUFDQyxHQUFDOzhCQUFDLFlBQVU7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ2IsQ0FDUDtLQUNGLE1BQ0c7UUFDRixxQkFDRSw4REFBQ0YsS0FBRzs7OEJBQ0YsOERBQUNDLElBQUU7OEJBQUMscUNBQTZCOzs7Ozt3QkFBSzs4QkFDdEMsOERBQUNDLEdBQUM7OEJBQUMsYUFBVzs7Ozs7d0JBQUk7Ozs7OztnQkFDZCxDQUNQO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvYXJwYy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgXG4gIGNvbnN0IGRhdGE9IGF3YWl0IGZldGNoKCdodHRwczovL2RvYXItY29tcHV0YWRvci1hcGkuaGVyb2t1YXBwLmNvbS8nKTtcbiAgY29uc3QgYWxpdmU9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgcmV0dXJue1xuICAgIHByb3BzOnthbGl2ZX1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvYWNhb1BjKHthbGl2ZX0pe1xuXG4gIGlmKGFsaXZlLmFsaXZlPT10cnVlKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RG9hw6fDo28gZGUgY29tcHV0YWRvcmVzIHVzYWRvczwvaDE+XG4gICAgICAgIDxwPkFQSSBvbmxpbmU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgZWxzZXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RG9hw6fDo28gZGUgY29tcHV0YWRvcmVzIHVzYWRvczwvaDE+XG4gICAgICAgIDxwPkFQSSBvZmZsaW5lPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiZmV0Y2giLCJhbGl2ZSIsImpzb24iLCJwcm9wcyIsIkRvYWNhb1BjIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();