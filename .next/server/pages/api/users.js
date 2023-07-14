"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5261);


async function handler(req, res) {
    if (req.method === "GET") {
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.fetch((0,_utils_queries__WEBPACK_IMPORTED_MODULE_1__/* .allUsersQuery */ .I8)());
        if (data) {
            res.status(200).json(data);
        } else {
            res.json([]);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [327], () => (__webpack_exec__(440)));
module.exports = __webpack_exports__;

})();