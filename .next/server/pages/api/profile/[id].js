"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5261);


async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        const query = (0,_utils_queries__WEBPACK_IMPORTED_MODULE_1__/* .singleUserQuery */ .lg)(id);
        const userVideosQuery = (0,_utils_queries__WEBPACK_IMPORTED_MODULE_1__/* .userCreatedPostsQuery */ .Xf)(id);
        const userLikedVideosQuery = (0,_utils_queries__WEBPACK_IMPORTED_MODULE_1__/* .userLikedPostsQuery */ .rU)(id);
        const user = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.fetch(query);
        const userVideos = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.fetch(userVideosQuery);
        const userLikedVideos = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.fetch(userLikedVideosQuery);
        res.status(200).json({
            user: user[0],
            userVideos,
            userLikedVideos
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [327], () => (__webpack_exec__(209)));
module.exports = __webpack_exports__;

})();