"use strict";
(() => {
var exports = {};
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 4486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5261);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_1__);



async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        const query = (0,_utils_queries__WEBPACK_IMPORTED_MODULE_2__/* .postDetailQuery */ .IM)(id);
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.fetch(query);
        res.status(200).json(data[0]);
    } else if (req.method === "PUT") {
        const { comment, userId } = req.body;
        const { id } = req.query;
        const data = await _utils_client__WEBPACK_IMPORTED_MODULE_0__/* .client */ .L.patch(id).setIfMissing({
            comments: []
        }).insert("after", "comments[-1]", [
            {
                comment,
                _key: (0,uuidv4__WEBPACK_IMPORTED_MODULE_1__.uuid)(),
                postedBy: {
                    _type: "postedBy",
                    _ref: userId
                }
            }
        ]).commit();
        res.status(200).json(data);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [327], () => (__webpack_exec__(4486)));
module.exports = __webpack_exports__;

})();