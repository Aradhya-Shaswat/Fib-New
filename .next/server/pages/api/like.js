"use strict";
(() => {
var exports = {};
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1033);


async function handler(req, res) {
    if (req.method === "PUT") {
        const { userId, postId, like } = req.body;
        const data = like ? await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .client */ .L.patch(postId).setIfMissing({
            likes: []
        }).insert("after", "likes[-1]", [
            {
                _key: (0,uuidv4__WEBPACK_IMPORTED_MODULE_0__.uuid)(),
                _ref: userId
            }
        ]).commit() : await _utils_client__WEBPACK_IMPORTED_MODULE_1__/* .client */ .L.patch(postId).unset([
            `likes[_ref=="${userId}"]`
        ]).commit();
        res.status(200).json(data);
    }
}


/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "t6ctl7ok",
    dataset: "production",
    apiVersion: "2022-03-10",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(847));
module.exports = __webpack_exports__;

})();