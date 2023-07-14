"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

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


/***/ }),

/***/ 5261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I8: () => (/* binding */ allUsersQuery),
/* harmony export */   IM: () => (/* binding */ postDetailQuery),
/* harmony export */   Rd: () => (/* binding */ searchPostsQuery),
/* harmony export */   Xf: () => (/* binding */ userCreatedPostsQuery),
/* harmony export */   dC: () => (/* binding */ topicPostsQuery),
/* harmony export */   lg: () => (/* binding */ singleUserQuery),
/* harmony export */   rU: () => (/* binding */ userLikedPostsQuery),
/* harmony export */   xT: () => (/* binding */ allPostsQuery)
/* harmony export */ });
const allPostsQuery = ()=>{
    const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
    return query;
};
const postDetailQuery = (postId)=>{
    const query = `*[_type == "post" && _id == '${postId}']{
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
     likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
      _id,
    },
    }
  }`;
    return query;
};
const searchPostsQuery = (searchTerm)=>{
    const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
    return query;
};
const singleUserQuery = (userId)=>{
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
};
const allUsersQuery = ()=>{
    const query = `*[_type == "user"]`;
    return query;
};
const userCreatedPostsQuery = (userId)=>{
    const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
    return query;
};
const userLikedPostsQuery = (userId)=>{
    const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
    return query;
};
const topicPostsQuery = (topic)=>{
    const query = `*[_type == "post" && topic match '${topic}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
    return query;
};


/***/ })

};
;