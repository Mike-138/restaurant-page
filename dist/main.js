/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --nav-gutter: 4em;
}

html {
    height:  100%; /* temp value */
    box-sizing: border-box;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

img {
    display: block; /* Removes whitespace from button of images */
}

p {
    line-height: 1.5;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: inherit; /* temp value */
    display: grid;
    grid-template-rows: 200px 1fr;
}

header {
    display: flex;
}

nav {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0 1em;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr minmax(240px, 1080px) 1fr; /* temp value */;
    gap: 0.5em;
    align-items: center;
    background-color: green;
}

.nav-icon {
    width: var(--nav-gutter);
}

.nav-title {
    text-align: center;
}

.nav-buttons {
    min-width: var(--nav-gutter); /* must equal nav icon width to keep nav symmetrical on shrink */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25em;
}

main {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr minmax(240px, 1080px) 1fr; /* temp value */;
    grid-template-areas: ". content .";
    background-color: blue;
}

#content {
    grid-area: content;
    font-size: 1rem;
    height: inherit;
    padding: 1em;
    background-color: beige;
}

.landing-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

.landing-image {
    width: 16em;
}

.landing-description {
    font-size: 1.25em;
}

.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    gap: 1em;
}

.menu-item {
    background: white;
}

.menu-item-name {
    position: relative;
    height: 2.5em;
    display: flex;
    align-items: flex-end;
}

.menu-item-name::after {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid red;
}

.menu-item-price::before {
    content: "\$";
}

.contact-container {
    height: inherit;
    display: grid;
    place-content: center;
}

.contact-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.25em;
}

.contact-grid > *:nth-child(odd) {
    text-align: right;
}

.contact-email {
    font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa,EAAE,eAAe;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,cAAc,EAAE,6CAA6C;AACjE;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gDAAgD;IAChD,eAAe,EAAE,eAAe;IAChC,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,OAAO;IACP,aAAa;IACb,oDAAoD,EAAE,eAAe;IACrE,UAAU;IACV,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B,EAAE,gEAAgE;IAC9F,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,oDAAoD,EAAE,eAAe;IACrE,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    --nav-gutter: 4em;\n}\n\nhtml {\n    height:  100%; /* temp value */\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nimg {\n    display: block; /* Removes whitespace from button of images */\n}\n\np {\n    line-height: 1.5;\n}\n\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    height: inherit; /* temp value */\n    display: grid;\n    grid-template-rows: 200px 1fr;\n}\n\nheader {\n    display: flex;\n}\n\nnav {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 0 1em;\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr minmax(240px, 1080px) 1fr; /* temp value */;\n    gap: 0.5em;\n    align-items: center;\n    background-color: green;\n}\n\n.nav-icon {\n    width: var(--nav-gutter);\n}\n\n.nav-title {\n    text-align: center;\n}\n\n.nav-buttons {\n    min-width: var(--nav-gutter); /* must equal nav icon width to keep nav symmetrical on shrink */\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 0.25em;\n}\n\nmain {\n    height: inherit;\n    display: grid;\n    grid-template-columns: 1fr minmax(240px, 1080px) 1fr; /* temp value */;\n    grid-template-areas: \". content .\";\n    background-color: blue;\n}\n\n#content {\n    grid-area: content;\n    font-size: 1rem;\n    height: inherit;\n    padding: 1em;\n    background-color: beige;\n}\n\n.landing-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\n.landing-image {\n    width: 16em;\n}\n\n.landing-description {\n    font-size: 1.25em;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));\n    gap: 1em;\n}\n\n.menu-item {\n    background: white;\n}\n\n.menu-item-name {\n    position: relative;\n    height: 2.5em;\n    display: flex;\n    align-items: flex-end;\n}\n\n.menu-item-name::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    border: 1px solid red;\n}\n\n.menu-item-price::before {\n    content: \"$\";\n}\n\n.contact-container {\n    height: inherit;\n    display: grid;\n    place-content: center;\n}\n\n.contact-grid {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 0.25em;\n}\n\n.contact-grid > *:nth-child(odd) {\n    text-align: right;\n}\n\n.contact-email {\n    font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/food.svg":
/*!**********************!*\
  !*** ./src/food.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2aa18ff9c2a57a08b103.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _food_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.svg */ "./src/food.svg");



const base = (() => {

    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const main = document.createElement("main");

    const makeDiv = () => document.createElement("div");

    const makeHeader = () => document.createElement("h1");

    const makePara = () => document.createElement("p");

    const contentContainer = (() => {

        const container = makeDiv();
        container.id = "content";
        return container;

    })();

    return {  header, nav, main, contentContainer, makeDiv, makeHeader, makePara };

})();

const navBar = (() => {

    const navIcon = (() => {
        const container = base.makeDiv();
        container.classList.add("nav-icon");
        const icon = new Image();
        icon.src = _food_svg__WEBPACK_IMPORTED_MODULE_1__;
        container.appendChild(icon);
        return container;
    })();

    const _navTitle = (() => {
        const container = base.makeHeader();
        container.classList.add("nav-title");
        container.textContent = "The Food Truck";
        return container;
    })();

    const menuTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Menu";
        return container;
    })();

    const contactTab = (() => {
        const container = base.makeDiv();
        container.textContent = "Contact";
        return container;
    })();

    const _navButtons = (() => {
        const container = base.makeDiv();
        container.classList.add("nav-buttons");
        container.append(menuTab, contactTab);
        return container;
    })();

    const render = () => {
        base.nav.append(navIcon, _navTitle, _navButtons);
    }

    return { navIcon, menuTab, contactTab, render };

})();

const landingPage = (() => {

    const _landingTitle = (() => {
        const container = base.makeHeader();
        container.classList.add("landing-title");
        container.textContent = "Welcome to The Food Truck!";
        return container;
    })();

    const _truckImage = (() => {
        const container = base.makeDiv();
        container.classList.add("landing-image");
        const image = new Image();
        image.src = _food_svg__WEBPACK_IMPORTED_MODULE_1__; // placeholder
        container.appendChild(image);
        return container;
    })();

    const _landingDescription = (() => {
        const container = base.makePara();
        container.classList.add("landing-description");
        container.textContent = (
            `The Food Truck has been delivering delish Western pub food to its patrons since 1922.
            Specializing in hot dogs and hamburgers, our manipulation of beef and pork product to create
            masterful food creations has led to over a century of pleasure amonst our fans. Come try our
            Glizzy Dog or GigaBurger today, and you'll see that we are more than just hype. We welcome all people
            from all backgrounds at our truck, and should you impress us by devouring our Giga Googa Combo in under
            12 minutes, we will put you on our Wall of Fame! Visit The Food Truck today!`
        );
        return container;
    })();

    const _landingContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("landing-container");
        container.append(_landingTitle, _truckImage, _landingDescription);
        return container;
    })();

    const render = () => {
        base.contentContainer.replaceChildren(_landingContainer);
    }

    return { render };

})();

const menuPage = (() => {

    const _menuList = [];

    const _makeMenuItem = (name, price, image, description) => {

        const itemName = base.makeHeader();
        itemName.classList.add("menu-item-name");
        itemName.textContent = name;

        const itemPrice = base.makeHeader();
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = price;

        const itemImage = new Image();
        itemImage.classList.add("menu-item-image");
        itemImage.src = image;

        const itemDescription = base.makePara();
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = description;

        const container = base.makeDiv();
        container.classList.add("menu-item");
        container.append(itemName, itemPrice, itemImage, itemDescription);
        return container;
    }

    const _publishMenuItem = (name, price, image, description) => {
        const menuItem = _makeMenuItem(name, price, image, description);
        _menuList.push(menuItem);
        return menuItem;
    }

    // Icon is a placeholder for images

    const _hamburger = _publishMenuItem(
        "Classic Hamburger",
        8.99,
        _food_svg__WEBPACK_IMPORTED_MODULE_1__,
        "This classic homestyle hamburger is sure to quell whatever cravings you may have!"
    );

    const _hotDog = _publishMenuItem(
        "Jumbo Glizzy",
        5.99,
        _food_svg__WEBPACK_IMPORTED_MODULE_1__,
        "You can never go wrong with one of our flame-grilled glizzies!"
    );

    const _macAndCheese = _publishMenuItem(
        "Mac 'n' Cheese",
        7.99,
        _food_svg__WEBPACK_IMPORTED_MODULE_1__,
        "For the more sophisticated among you."
    );

    const _frenchFries = _publishMenuItem(
        "French Fries",
        2.99,
        _food_svg__WEBPACK_IMPORTED_MODULE_1__,
        "No fast food feast is complete without a few of these!"
    );

    const _softDrink = _publishMenuItem(
        "Pop",
        1.99,
        _food_svg__WEBPACK_IMPORTED_MODULE_1__,
        "To quench your thirst."
    );

    const _menuContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("menu-container");
        container.append(..._menuList);
        return container;
    })();

    const render = () => {
        base.contentContainer.replaceChildren(_menuContainer);
    }

    return { render };

})();

const contactPage = (() => {

    const _contactNumberPrompt = (() => {
        const container = base.makeHeader();
        container.classList.add("contact-number-prompt");
        container.textContent = "Give us a call at:";
        return container;
    })();

    const _contactNumber = (() => {
        const container = base.makeHeader();
        container.classList.add("contact-number");
        container.textContent = "000-000-0000";
        return container;
    })();

    const _contactEmailPrompt = (() => {
        const container = base.makePara();
        container.classList.add("contact-email-prompt");
        container.textContent = "Or email us at:";
        return container;
    })();

    const _contactEmail = (() => {
        const container = base.makePara();
        container.classList.add("contact-email");
        container.textContent = "datruck@food.com";
        return container;
    })();

    const _contactGrid = (() => {
        const container = base.makeDiv();
        container.classList.add("contact-grid");
        container.append(_contactNumberPrompt, _contactNumber, _contactEmailPrompt, _contactEmail);
        return container;
    })();

    const _contactContainer = (() => {
        const container = base.makeDiv();
        container.classList.add("contact-container");
        container.append(_contactGrid);
        return container;
    })();

    const render = () => {
        base.contentContainer.replaceChildren(_contactContainer);
    }

    return { render };

})();

const displayController = (() => {

    const _setNav = () => {
        navBar.render();
        base.header.appendChild(base.nav);
    }

    const _setHeader = () => {
        document.body.appendChild(base.header);
    }

    const _renderHeader = () => {
        _setNav();
        _setHeader();
    }

    const _renderMain = () => {
        base.main.appendChild(base.contentContainer);
        document.body.appendChild(base.main);
    }

    const render = () => {
        _renderHeader();
        landingPage.render();
        _renderMain();
    }

    navBar.navIcon.addEventListener("click", landingPage.render);

    navBar.menuTab.addEventListener("click", menuPage.render);

    navBar.contactTab.addEventListener("click", contactPage.render);

    return { render };

})();

displayController.render();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1uYXYtZ3V0dGVyOiA0ZW07XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogIDEwMCU7IC8qIHRlbXAgdmFsdWUgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSBidXR0b24gb2YgaW1hZ2VzICovXG59XG5cbnAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7IC8qIHRlbXAgdmFsdWUgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbm5hdiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgyNDBweCwgMTA4MHB4KSAxZnI7IC8qIHRlbXAgdmFsdWUgKi87XG4gICAgZ2FwOiAwLjVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubmF2LWljb24ge1xuICAgIHdpZHRoOiB2YXIoLS1uYXYtZ3V0dGVyKTtcbn1cblxuLm5hdi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LWJ1dHRvbnMge1xuICAgIG1pbi13aWR0aDogdmFyKC0tbmF2LWd1dHRlcik7IC8qIG11c3QgZXF1YWwgbmF2IGljb24gd2lkdGggdG8ga2VlcCBuYXYgc3ltbWV0cmljYWwgb24gc2hyaW5rICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjI1ZW07XG59XG5cbm1haW4ge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgyNDBweCwgMTA4MHB4KSAxZnI7IC8qIHRlbXAgdmFsdWUgKi87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNvbnRlbnQgLlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNjb250ZW50IHtcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi5sYW5kaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sYW5kaW5nLWltYWdlIHtcbiAgICB3aWR0aDogMTZlbTtcbn1cblxuLmxhbmRpbmctZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMGVtLCAxZnIpKTtcbiAgICBnYXA6IDFlbTtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tZW51LWl0ZW0tbmFtZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5tZW51LWl0ZW0tbmFtZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLm1lbnUtaXRlbS1wcmljZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcJFwiO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgIGdhcDogMC4yNWVtO1xufVxuXG4uY29udGFjdC1ncmlkID4gKjpudGgtY2hpbGQob2RkKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250YWN0LWVtYWlsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhLEVBQUUsZUFBZTtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSw2Q0FBNkM7QUFDakU7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsZUFBZSxFQUFFLGVBQWU7SUFDaEMsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLG9EQUFvRCxFQUFFLGVBQWU7SUFDckUsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSxnRUFBZ0U7SUFDOUYsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixvREFBb0QsRUFBRSxlQUFlO0lBQ3JFLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbmF2LWd1dHRlcjogNGVtO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAgMTAwJTsgLyogdGVtcCB2YWx1ZSAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jazsgLyogUmVtb3ZlcyB3aGl0ZXNwYWNlIGZyb20gYnV0dG9uIG9mIGltYWdlcyAqL1xcbn1cXG5cXG5wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiBpbmhlcml0OyAvKiB0ZW1wIHZhbHVlICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgoMjQwcHgsIDEwODBweCkgMWZyOyAvKiB0ZW1wIHZhbHVlICovO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm5hdi1pY29uIHtcXG4gICAgd2lkdGg6IHZhcigtLW5hdi1ndXR0ZXIpO1xcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLW5hdi1ndXR0ZXIpOyAvKiBtdXN0IGVxdWFsIG5hdiBpY29uIHdpZHRoIHRvIGtlZXAgbmF2IHN5bW1ldHJpY2FsIG9uIHNocmluayAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuMjVlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDI0MHB4LCAxMDgwcHgpIDFmcjsgLyogdGVtcCB2YWx1ZSAqLztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gY29udGVudCAuXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4ubGFuZGluZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxhbmRpbmctaW1hZ2Uge1xcbiAgICB3aWR0aDogMTZlbTtcXG59XFxuXFxuLmxhbmRpbmctZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMGVtLCAxZnIpKTtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1uYW1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5tZW51LWl0ZW0tbmFtZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVudS1pdGVtLXByaWNlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiJFxcXCI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5jb250YWN0LWdyaWQgPiAqOm50aC1jaGlsZChvZGQpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb250YWN0LWVtYWlsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9mb29kLnN2Z1wiO1xuXG5jb25zdCBiYXNlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgY29uc3QgbWFrZURpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgY29uc3QgbWFrZVBhcmEgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gXCJjb250ZW50XCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgIGhlYWRlciwgbmF2LCBtYWluLCBjb250ZW50Q29udGFpbmVyLCBtYWtlRGl2LCBtYWtlSGVhZGVyLCBtYWtlUGFyYSB9O1xuXG59KSgpO1xuXG5jb25zdCBuYXZCYXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2SWNvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1pY29uXCIpO1xuICAgICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGljb24uc3JjID0gSWNvbjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBfbmF2VGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VIZWFkZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtdGl0bGVcIik7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiVGhlIEZvb2QgVHJ1Y2tcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgbWVudVRhYiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29udGFjdFRhYiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX25hdkJ1dHRvbnMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtZW51VGFiLCBjb250YWN0VGFiKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBiYXNlLm5hdi5hcHBlbmQobmF2SWNvbiwgX25hdlRpdGxlLCBfbmF2QnV0dG9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmF2SWNvbiwgbWVudVRhYiwgY29udGFjdFRhYiwgcmVuZGVyIH07XG5cbn0pKCk7XG5cbmNvbnN0IGxhbmRpbmdQYWdlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9sYW5kaW5nVGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VIZWFkZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLXRpdGxlXCIpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVGhlIEZvb2QgVHJ1Y2shXCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF90cnVja0ltYWdlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy1pbWFnZVwiKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gSWNvbjsgLy8gcGxhY2Vob2xkZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2xhbmRpbmdEZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZVBhcmEoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAoXG4gICAgICAgICAgICBgVGhlIEZvb2QgVHJ1Y2sgaGFzIGJlZW4gZGVsaXZlcmluZyBkZWxpc2ggV2VzdGVybiBwdWIgZm9vZCB0byBpdHMgcGF0cm9ucyBzaW5jZSAxOTIyLlxuICAgICAgICAgICAgU3BlY2lhbGl6aW5nIGluIGhvdCBkb2dzIGFuZCBoYW1idXJnZXJzLCBvdXIgbWFuaXB1bGF0aW9uIG9mIGJlZWYgYW5kIHBvcmsgcHJvZHVjdCB0byBjcmVhdGVcbiAgICAgICAgICAgIG1hc3RlcmZ1bCBmb29kIGNyZWF0aW9ucyBoYXMgbGVkIHRvIG92ZXIgYSBjZW50dXJ5IG9mIHBsZWFzdXJlIGFtb25zdCBvdXIgZmFucy4gQ29tZSB0cnkgb3VyXG4gICAgICAgICAgICBHbGl6enkgRG9nIG9yIEdpZ2FCdXJnZXIgdG9kYXksIGFuZCB5b3UnbGwgc2VlIHRoYXQgd2UgYXJlIG1vcmUgdGhhbiBqdXN0IGh5cGUuIFdlIHdlbGNvbWUgYWxsIHBlb3BsZVxuICAgICAgICAgICAgZnJvbSBhbGwgYmFja2dyb3VuZHMgYXQgb3VyIHRydWNrLCBhbmQgc2hvdWxkIHlvdSBpbXByZXNzIHVzIGJ5IGRldm91cmluZyBvdXIgR2lnYSBHb29nYSBDb21ibyBpbiB1bmRlclxuICAgICAgICAgICAgMTIgbWludXRlcywgd2Ugd2lsbCBwdXQgeW91IG9uIG91ciBXYWxsIG9mIEZhbWUhIFZpc2l0IFRoZSBGb29kIFRydWNrIHRvZGF5IWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2xhbmRpbmdDb250YWluZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChfbGFuZGluZ1RpdGxlLCBfdHJ1Y2tJbWFnZSwgX2xhbmRpbmdEZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgYmFzZS5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihfbGFuZGluZ0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyIH07XG5cbn0pKCk7XG5cbmNvbnN0IG1lbnVQYWdlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9tZW51TGlzdCA9IFtdO1xuXG4gICAgY29uc3QgX21ha2VNZW51SXRlbSA9IChuYW1lLCBwcmljZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBiYXNlLm1ha2VIZWFkZXIoKTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1uYW1lXCIpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gYmFzZS5tYWtlSGVhZGVyKCk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXByaWNlXCIpO1xuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgICAgICBjb25zdCBpdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0taW1hZ2VcIik7XG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpbWFnZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBiYXNlLm1ha2VQYXJhKCk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1QcmljZSwgaXRlbUltYWdlLCBpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IF9wdWJsaXNoTWVudUl0ZW0gPSAobmFtZSwgcHJpY2UsIGltYWdlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IF9tYWtlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGltYWdlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIF9tZW51TGlzdC5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgcmV0dXJuIG1lbnVJdGVtO1xuICAgIH1cblxuICAgIC8vIEljb24gaXMgYSBwbGFjZWhvbGRlciBmb3IgaW1hZ2VzXG5cbiAgICBjb25zdCBfaGFtYnVyZ2VyID0gX3B1Ymxpc2hNZW51SXRlbShcbiAgICAgICAgXCJDbGFzc2ljIEhhbWJ1cmdlclwiLFxuICAgICAgICA4Ljk5LFxuICAgICAgICBJY29uLFxuICAgICAgICBcIlRoaXMgY2xhc3NpYyBob21lc3R5bGUgaGFtYnVyZ2VyIGlzIHN1cmUgdG8gcXVlbGwgd2hhdGV2ZXIgY3JhdmluZ3MgeW91IG1heSBoYXZlIVwiXG4gICAgKTtcblxuICAgIGNvbnN0IF9ob3REb2cgPSBfcHVibGlzaE1lbnVJdGVtKFxuICAgICAgICBcIkp1bWJvIEdsaXp6eVwiLFxuICAgICAgICA1Ljk5LFxuICAgICAgICBJY29uLFxuICAgICAgICBcIllvdSBjYW4gbmV2ZXIgZ28gd3Jvbmcgd2l0aCBvbmUgb2Ygb3VyIGZsYW1lLWdyaWxsZWQgZ2xpenppZXMhXCJcbiAgICApO1xuXG4gICAgY29uc3QgX21hY0FuZENoZWVzZSA9IF9wdWJsaXNoTWVudUl0ZW0oXG4gICAgICAgIFwiTWFjICduJyBDaGVlc2VcIixcbiAgICAgICAgNy45OSxcbiAgICAgICAgSWNvbixcbiAgICAgICAgXCJGb3IgdGhlIG1vcmUgc29waGlzdGljYXRlZCBhbW9uZyB5b3UuXCJcbiAgICApO1xuXG4gICAgY29uc3QgX2ZyZW5jaEZyaWVzID0gX3B1Ymxpc2hNZW51SXRlbShcbiAgICAgICAgXCJGcmVuY2ggRnJpZXNcIixcbiAgICAgICAgMi45OSxcbiAgICAgICAgSWNvbixcbiAgICAgICAgXCJObyBmYXN0IGZvb2QgZmVhc3QgaXMgY29tcGxldGUgd2l0aG91dCBhIGZldyBvZiB0aGVzZSFcIlxuICAgICk7XG5cbiAgICBjb25zdCBfc29mdERyaW5rID0gX3B1Ymxpc2hNZW51SXRlbShcbiAgICAgICAgXCJQb3BcIixcbiAgICAgICAgMS45OSxcbiAgICAgICAgSWNvbixcbiAgICAgICAgXCJUbyBxdWVuY2ggeW91ciB0aGlyc3QuXCJcbiAgICApO1xuXG4gICAgY29uc3QgX21lbnVDb250YWluZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCguLi5fbWVudUxpc3QpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGJhc2UuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oX21lbnVDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9O1xuXG59KSgpO1xuXG5jb25zdCBjb250YWN0UGFnZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBfY29udGFjdE51bWJlclByb21wdCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZUhlYWRlcigpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbnVtYmVyLXByb21wdFwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJHaXZlIHVzIGEgY2FsbCBhdDpcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2NvbnRhY3ROdW1iZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VIZWFkZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LW51bWJlclwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCIwMDAtMDAwLTAwMDBcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2NvbnRhY3RFbWFpbFByb21wdCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZVBhcmEoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWVtYWlsLXByb21wdFwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJPciBlbWFpbCB1cyBhdDpcIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2NvbnRhY3RFbWFpbCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZVBhcmEoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWVtYWlsXCIpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcImRhdHJ1Y2tAZm9vZC5jb21cIjtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX2NvbnRhY3RHcmlkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1ncmlkXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKF9jb250YWN0TnVtYmVyUHJvbXB0LCBfY29udGFjdE51bWJlciwgX2NvbnRhY3RFbWFpbFByb21wdCwgX2NvbnRhY3RFbWFpbCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9jb250YWN0Q29udGFpbmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoX2NvbnRhY3RHcmlkKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBiYXNlLmNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKF9jb250YWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfTtcblxufSkoKTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX3NldE5hdiA9ICgpID0+IHtcbiAgICAgICAgbmF2QmFyLnJlbmRlcigpO1xuICAgICAgICBiYXNlLmhlYWRlci5hcHBlbmRDaGlsZChiYXNlLm5hdik7XG4gICAgfVxuXG4gICAgY29uc3QgX3NldEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYXNlLmhlYWRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgX3JlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgX3NldE5hdigpO1xuICAgICAgICBfc2V0SGVhZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX3JlbmRlck1haW4gPSAoKSA9PiB7XG4gICAgICAgIGJhc2UubWFpbi5hcHBlbmRDaGlsZChiYXNlLmNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhc2UubWFpbik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBfcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIGxhbmRpbmdQYWdlLnJlbmRlcigpO1xuICAgICAgICBfcmVuZGVyTWFpbigpO1xuICAgIH1cblxuICAgIG5hdkJhci5uYXZJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYW5kaW5nUGFnZS5yZW5kZXIpO1xuXG4gICAgbmF2QmFyLm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVQYWdlLnJlbmRlcik7XG5cbiAgICBuYXZCYXIuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdFBhZ2UucmVuZGVyKTtcblxuICAgIHJldHVybiB7IHJlbmRlciB9O1xuXG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=