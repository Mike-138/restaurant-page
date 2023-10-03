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
    font-size: 10px;
    --nav-gutter: 4em;
}

@media only screen and (min-width: 400px) {
    :root {
        font-size: 12px;
    }
}

@media only screen and (min-width: 600px) {
    :root {
        font-size: 16px;
    }
}

html {
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
    min-height: 100vh;
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
    grid-template-columns: 1fr minmax(144px, 1080px) 1fr; /* temp value */;
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
    display: grid;
    grid-template-columns: 1fr minmax(144px, 1080px) 1fr; /* temp value */;
    grid-template-areas: ". content .";
    background-color: blue;
}

#content {
    grid-area: content;
    font-size: 1rem;
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
    min-height: 100%;
    font-size: 1.5em;
    display: grid;
    place-content: center;
}

.contact-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5em;
}

.contact-grid > *:nth-child(odd) {
    text-align: right;
}

.contact-email {
    font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,cAAc,EAAE,6CAA6C;AACjE;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gDAAgD;IAChD,iBAAiB;IACjB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,OAAO;IACP,aAAa;IACb,oDAAoD,EAAE,eAAe;IACrE,UAAU;IACV,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B,EAAE,gEAAgE;IAC9F,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,oDAAoD,EAAE,eAAe;IACrE,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    font-size: 10px;\n    --nav-gutter: 4em;\n}\n\n@media only screen and (min-width: 400px) {\n    :root {\n        font-size: 12px;\n    }\n}\n\n@media only screen and (min-width: 600px) {\n    :root {\n        font-size: 16px;\n    }\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nimg {\n    display: block; /* Removes whitespace from button of images */\n}\n\np {\n    line-height: 1.5;\n}\n\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 200px 1fr;\n}\n\nheader {\n    display: flex;\n}\n\nnav {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 0 1em;\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr minmax(144px, 1080px) 1fr; /* temp value */;\n    gap: 0.5em;\n    align-items: center;\n    background-color: green;\n}\n\n.nav-icon {\n    width: var(--nav-gutter);\n}\n\n.nav-title {\n    text-align: center;\n}\n\n.nav-buttons {\n    min-width: var(--nav-gutter); /* must equal nav icon width to keep nav symmetrical on shrink */\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 0.25em;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr minmax(144px, 1080px) 1fr; /* temp value */;\n    grid-template-areas: \". content .\";\n    background-color: blue;\n}\n\n#content {\n    grid-area: content;\n    font-size: 1rem;\n    padding: 1em;\n    background-color: beige;\n}\n\n.landing-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\n.landing-image {\n    width: 16em;\n}\n\n.landing-description {\n    font-size: 1.25em;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));\n    gap: 1em;\n}\n\n.menu-item {\n    background: white;\n}\n\n.menu-item-name {\n    position: relative;\n    height: 2.5em;\n    display: flex;\n    align-items: flex-end;\n}\n\n.menu-item-name::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    border: 1px solid red;\n}\n\n.menu-item-price::before {\n    content: \"$\";\n}\n\n.contact-container {\n    min-height: 100%;\n    font-size: 1.5em;\n    display: grid;\n    place-content: center;\n}\n\n.contact-grid {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 0.5em;\n}\n\n.contact-grid > *:nth-child(odd) {\n    text-align: right;\n}\n\n.contact-email {\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFJLEVBQUU7QUFDMUI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQ0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRCwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC0tbmF2LWd1dHRlcjogNGVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgOnJvb3Qge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5odG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSBidXR0b24gb2YgaW1hZ2VzICovXG59XG5cbnAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbm5hdiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgxNDRweCwgMTA4MHB4KSAxZnI7IC8qIHRlbXAgdmFsdWUgKi87XG4gICAgZ2FwOiAwLjVlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubmF2LWljb24ge1xuICAgIHdpZHRoOiB2YXIoLS1uYXYtZ3V0dGVyKTtcbn1cblxuLm5hdi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LWJ1dHRvbnMge1xuICAgIG1pbi13aWR0aDogdmFyKC0tbmF2LWd1dHRlcik7IC8qIG11c3QgZXF1YWwgbmF2IGljb24gd2lkdGggdG8ga2VlcCBuYXYgc3ltbWV0cmljYWwgb24gc2hyaW5rICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjI1ZW07XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDE0NHB4LCAxMDgwcHgpIDFmcjsgLyogdGVtcCB2YWx1ZSAqLztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gY29udGVudCAuXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG4ubGFuZGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGFuZGluZy1pbWFnZSB7XG4gICAgd2lkdGg6IDE2ZW07XG59XG5cbi5sYW5kaW5nLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTBlbSwgMWZyKSk7XG4gICAgZ2FwOiAxZW07XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWVudS1pdGVtLW5hbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ubWVudS1pdGVtLW5hbWU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5tZW51LWl0ZW0tcHJpY2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXCRcIjtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBnYXA6IDAuNWVtO1xufVxuXG4uY29udGFjdC1ncmlkID4gKjpudGgtY2hpbGQob2RkKSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250YWN0LWVtYWlsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYyxFQUFFLDZDQUE2QztBQUNqRTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLG9EQUFvRCxFQUFFLGVBQWU7SUFDckUsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSxnRUFBZ0U7SUFDOUYsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9EQUFvRCxFQUFFLGVBQWU7SUFDckUsa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAtLW5hdi1ndXR0ZXI6IDRlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSBidXR0b24gb2YgaW1hZ2VzICovXFxufVxcblxcbnAge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm5hdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMCAxZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgxNDRweCwgMTA4MHB4KSAxZnI7IC8qIHRlbXAgdmFsdWUgKi87XFxuICAgIGdhcDogMC41ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubmF2LWljb24ge1xcbiAgICB3aWR0aDogdmFyKC0tbmF2LWd1dHRlcik7XFxufVxcblxcbi5uYXYtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9ucyB7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tbmF2LWd1dHRlcik7IC8qIG11c3QgZXF1YWwgbmF2IGljb24gd2lkdGggdG8ga2VlcCBuYXYgc3ltbWV0cmljYWwgb24gc2hyaW5rICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC4yNWVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDE0NHB4LCAxMDgwcHgpIDFmcjsgLyogdGVtcCB2YWx1ZSAqLztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gY29udGVudCAuXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuLmxhbmRpbmctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sYW5kaW5nLWltYWdlIHtcXG4gICAgd2lkdGg6IDE2ZW07XFxufVxcblxcbi5sYW5kaW5nLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTBlbSwgMWZyKSk7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5tZW51LWl0ZW0tbmFtZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lbnUtaXRlbS1wcmljZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uY29udGFjdC1ncmlkID4gKjpudGgtY2hpbGQob2RkKSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vZm9vZC5zdmdcIjtcblxuY29uc3QgYmFzZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnN0IG1ha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgIGNvbnN0IG1ha2VQYXJhID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBtYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuXG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7ICBoZWFkZXIsIG5hdiwgbWFpbiwgY29udGVudENvbnRhaW5lciwgbWFrZURpdiwgbWFrZUhlYWRlciwgbWFrZVBhcmEgfTtcblxufSkoKTtcblxuY29uc3QgbmF2QmFyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IG5hdkljb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYyA9IEljb247XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgX25hdlRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlSGVhZGVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LXRpdGxlXCIpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlRoZSBGb29kIFRydWNrXCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IG1lbnVUYWIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VEaXYoKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9uYXZCdXR0b25zID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvbnNcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobWVudVRhYiwgY29udGFjdFRhYik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgYmFzZS5uYXYuYXBwZW5kKG5hdkljb24sIF9uYXZUaXRsZSwgX25hdkJ1dHRvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5hdkljb24sIG1lbnVUYWIsIGNvbnRhY3RUYWIsIHJlbmRlciB9O1xuXG59KSgpO1xuXG5jb25zdCBsYW5kaW5nUGFnZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBfbGFuZGluZ1RpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlSGVhZGVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy10aXRsZVwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRoZSBGb29kIFRydWNrIVwiO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBfdHJ1Y2tJbWFnZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctaW1hZ2VcIik7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IEljb247IC8vIHBsYWNlaG9sZGVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9sYW5kaW5nRGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VQYXJhKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gKFxuICAgICAgICAgICAgYFRoZSBGb29kIFRydWNrIGhhcyBiZWVuIGRlbGl2ZXJpbmcgZGVsaXNoIFdlc3Rlcm4gcHViIGZvb2QgdG8gaXRzIHBhdHJvbnMgc2luY2UgMTkyMi5cbiAgICAgICAgICAgIFNwZWNpYWxpemluZyBpbiBob3QgZG9ncyBhbmQgaGFtYnVyZ2Vycywgb3VyIG1hbmlwdWxhdGlvbiBvZiBiZWVmIGFuZCBwb3JrIHByb2R1Y3QgdG8gY3JlYXRlXG4gICAgICAgICAgICBtYXN0ZXJmdWwgZm9vZCBjcmVhdGlvbnMgaGFzIGxlZCB0byBvdmVyIGEgY2VudHVyeSBvZiBwbGVhc3VyZSBhbW9uc3Qgb3VyIGZhbnMuIENvbWUgdHJ5IG91clxuICAgICAgICAgICAgR2xpenp5IERvZyBvciBHaWdhQnVyZ2VyIHRvZGF5LCBhbmQgeW91J2xsIHNlZSB0aGF0IHdlIGFyZSBtb3JlIHRoYW4ganVzdCBoeXBlLiBXZSB3ZWxjb21lIGFsbCBwZW9wbGVcbiAgICAgICAgICAgIGZyb20gYWxsIGJhY2tncm91bmRzIGF0IG91ciB0cnVjaywgYW5kIHNob3VsZCB5b3UgaW1wcmVzcyB1cyBieSBkZXZvdXJpbmcgb3VyIEdpZ2EgR29vZ2EgQ29tYm8gaW4gdW5kZXJcbiAgICAgICAgICAgIDEyIG1pbnV0ZXMsIHdlIHdpbGwgcHV0IHlvdSBvbiBvdXIgV2FsbCBvZiBGYW1lISBWaXNpdCBUaGUgRm9vZCBUcnVjayB0b2RheSFgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9sYW5kaW5nQ29udGFpbmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGFuZGluZy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoX2xhbmRpbmdUaXRsZSwgX3RydWNrSW1hZ2UsIF9sYW5kaW5nRGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGJhc2UuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oX2xhbmRpbmdDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlciB9O1xuXG59KSgpO1xuXG5jb25zdCBtZW51UGFnZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBfbWVudUxpc3QgPSBbXTtcblxuICAgIGNvbnN0IF9tYWtlTWVudUl0ZW0gPSAobmFtZSwgcHJpY2UsIGltYWdlLCBkZXNjcmlwdGlvbikgPT4ge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYmFzZS5tYWtlSGVhZGVyKCk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tbmFtZVwiKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGJhc2UubWFrZUhlYWRlcigpO1xuICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1wcmljZVwiKTtcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICAgICAgY29uc3QgaXRlbUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltYWdlXCIpO1xuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gYmFzZS5tYWtlUGFyYSgpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1JbWFnZSwgaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBfcHVibGlzaE1lbnVJdGVtID0gKG5hbWUsIHByaWNlLCBpbWFnZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBfbWFrZU1lbnVJdGVtKG5hbWUsIHByaWNlLCBpbWFnZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBfbWVudUxpc3QucHVzaChtZW51SXRlbSk7XG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcbiAgICB9XG5cbiAgICAvLyBJY29uIGlzIGEgcGxhY2Vob2xkZXIgZm9yIGltYWdlc1xuXG4gICAgY29uc3QgX2hhbWJ1cmdlciA9IF9wdWJsaXNoTWVudUl0ZW0oXG4gICAgICAgIFwiQ2xhc3NpYyBIYW1idXJnZXJcIixcbiAgICAgICAgOC45OSxcbiAgICAgICAgSWNvbixcbiAgICAgICAgXCJUaGlzIGNsYXNzaWMgaG9tZXN0eWxlIGhhbWJ1cmdlciBpcyBzdXJlIHRvIHF1ZWxsIHdoYXRldmVyIGNyYXZpbmdzIHlvdSBtYXkgaGF2ZSFcIlxuICAgICk7XG5cbiAgICBjb25zdCBfaG90RG9nID0gX3B1Ymxpc2hNZW51SXRlbShcbiAgICAgICAgXCJKdW1ibyBHbGl6enlcIixcbiAgICAgICAgNS45OSxcbiAgICAgICAgSWNvbixcbiAgICAgICAgXCJZb3UgY2FuIG5ldmVyIGdvIHdyb25nIHdpdGggb25lIG9mIG91ciBmbGFtZS1ncmlsbGVkIGdsaXp6aWVzIVwiXG4gICAgKTtcblxuICAgIGNvbnN0IF9tYWNBbmRDaGVlc2UgPSBfcHVibGlzaE1lbnVJdGVtKFxuICAgICAgICBcIk1hYyAnbicgQ2hlZXNlXCIsXG4gICAgICAgIDcuOTksXG4gICAgICAgIEljb24sXG4gICAgICAgIFwiRm9yIHRoZSBtb3JlIHNvcGhpc3RpY2F0ZWQgYW1vbmcgeW91LlwiXG4gICAgKTtcblxuICAgIGNvbnN0IF9mcmVuY2hGcmllcyA9IF9wdWJsaXNoTWVudUl0ZW0oXG4gICAgICAgIFwiRnJlbmNoIEZyaWVzXCIsXG4gICAgICAgIDIuOTksXG4gICAgICAgIEljb24sXG4gICAgICAgIFwiTm8gZmFzdCBmb29kIGZlYXN0IGlzIGNvbXBsZXRlIHdpdGhvdXQgYSBmZXcgb2YgdGhlc2UhXCJcbiAgICApO1xuXG4gICAgY29uc3QgX3NvZnREcmluayA9IF9wdWJsaXNoTWVudUl0ZW0oXG4gICAgICAgIFwiUG9wXCIsXG4gICAgICAgIDEuOTksXG4gICAgICAgIEljb24sXG4gICAgICAgIFwiVG8gcXVlbmNoIHlvdXIgdGhpcnN0LlwiXG4gICAgKTtcblxuICAgIGNvbnN0IF9tZW51Q29udGFpbmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlRGl2KCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoLi4uX21lbnVMaXN0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICBiYXNlLmNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKF9tZW51Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXIgfTtcblxufSkoKTtcblxuY29uc3QgY29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX2NvbnRhY3ROdW1iZXJQcm9tcHQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VIZWFkZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LW51bWJlci1wcm9tcHRcIik7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiR2l2ZSB1cyBhIGNhbGwgYXQ6XCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9jb250YWN0TnVtYmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYmFzZS5tYWtlSGVhZGVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1udW1iZXJcIik7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiMDAwLTAwMC0wMDAwXCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9jb250YWN0RW1haWxQcm9tcHQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VQYXJhKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1lbWFpbC1wcm9tcHRcIik7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiT3IgZW1haWwgdXMgYXQ6XCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9jb250YWN0RW1haWwgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBiYXNlLm1ha2VQYXJhKCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1lbWFpbFwiKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJkYXRydWNrQGZvb2QuY29tXCI7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IF9jb250YWN0R3JpZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZ3JpZFwiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChfY29udGFjdE51bWJlclByb21wdCwgX2NvbnRhY3ROdW1iZXIsIF9jb250YWN0RW1haWxQcm9tcHQsIF9jb250YWN0RW1haWwpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBfY29udGFjdENvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGJhc2UubWFrZURpdigpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKF9jb250YWN0R3JpZCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgYmFzZS5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihfY29udGFjdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyIH07XG5cbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9zZXROYXYgPSAoKSA9PiB7XG4gICAgICAgIG5hdkJhci5yZW5kZXIoKTtcbiAgICAgICAgYmFzZS5oZWFkZXIuYXBwZW5kQ2hpbGQoYmFzZS5uYXYpO1xuICAgIH1cblxuICAgIGNvbnN0IF9zZXRIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFzZS5oZWFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IF9yZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIF9zZXROYXYoKTtcbiAgICAgICAgX3NldEhlYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0IF9yZW5kZXJNYWluID0gKCkgPT4ge1xuICAgICAgICBiYXNlLm1haW4uYXBwZW5kQ2hpbGQoYmFzZS5jb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYXNlLm1haW4pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgX3JlbmRlckhlYWRlcigpO1xuICAgICAgICBsYW5kaW5nUGFnZS5yZW5kZXIoKTtcbiAgICAgICAgX3JlbmRlck1haW4oKTtcbiAgICB9XG5cbiAgICBuYXZCYXIubmF2SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGFuZGluZ1BhZ2UucmVuZGVyKTtcblxuICAgIG5hdkJhci5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UGFnZS5yZW5kZXIpO1xuXG4gICAgbmF2QmFyLmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RQYWdlLnJlbmRlcik7XG5cbiAgICByZXR1cm4geyByZW5kZXIgfTtcblxufSkoKTtcblxuZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9