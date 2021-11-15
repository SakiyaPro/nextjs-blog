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
exports.id = "pages/api/post/[pid]";
exports.ids = ["pages/api/post/[pid]"];
exports.modules = {

/***/ "./pages/api/post/[pid].js":
/*!*********************************!*\
  !*** ./pages/api/post/[pid].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const { pid  } = req.query;\n    res.end(`Post: ${pid}`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9bcGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsUUFBUSxDQUFDQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQ3pCRixHQUFHLENBQUNHLEdBQUcsRUFBRSxNQUFNLEVBQUVGLEdBQUc7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0L1twaWRdLmpzPzM1ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgcGlkIH0gPSByZXEucXVlcnlcbiAgICByZXMuZW5kKGBQb3N0OiAke3BpZH1gKVxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicGlkIiwicXVlcnkiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/post/[pid].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/[pid].js"));
module.exports = __webpack_exports__;

})();