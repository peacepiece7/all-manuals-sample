exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 6570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./components/Common/Layout/Layout.module.css
var Layout_module = __webpack_require__(2018);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ./components/Common/Header/Header.module.css
var Header_module = __webpack_require__(8653);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/all_manual.png
/* harmony default export */ const all_manual = ({"src":"/_next/static/media/all_manual.2fcab455.png","height":74,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAALklEQVR42mP4//Xjv/9AwPD/wb1f375//8fw+/qVG3dvXfnD8O/L2w+fXn/4DwAjmx4Zh/OE6wAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Common/Header/Header.jsx






function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Header_module_default()).headerContainer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).titleInner,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).title,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              className: (Header_module_default()).titleImage,
              src: all_manual,
              alt: "AllManual"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).topMenus,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Header_module_default()).categoies,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/categories",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Categories"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Header_module_default()).brands,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: {
              pathname: "/brands",
              query: {
                category: "A",
                subcategory: "#"
              }
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Brands"
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).language,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Languages"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "(지구본)"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/Common/Footer/Footer.module.css
var Footer_module = __webpack_require__(9010);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Common/Footer/Footer.jsx




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Footer_module_default()).footerContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).firstLine,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).firstLineInner,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).contactUs,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/contactUs",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "contact Us"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).privacyPolicy,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/PrivacyPolicy",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Privacy Policy"
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Language"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).secondLine,
      children: "ALL RIGHTS RESERVED \xA9 ALLMANUAL.COM"
    })]
  });
}
;// CONCATENATED MODULE: ./components/Common/Layout/Layout.jsx





function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Header, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Layout_module_default()).Layout,
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {})
    })]
  });
}

/***/ }),

/***/ 9010:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "Footer_footerContainer__9EF72",
	"firstLine": "Footer_firstLine__r9UIy",
	"firstLineInner": "Footer_firstLineInner__5huuk",
	"contactUs": "Footer_contactUs__k3J99",
	"secondLine": "Footer_secondLine__ueKcx"
};


/***/ }),

/***/ 8653:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "Header_headerContainer__yN4VM",
	"titleInner": "Header_titleInner__SalCq",
	"categoies": "Header_categoies__BdIHM",
	"brands": "Header_brands__DE5Ys",
	"language": "Header_language__ZSPWo"
};


/***/ }),

/***/ 2018:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__gZoLf",
	"Layout": "Layout_Layout__RwvjU"
};


/***/ })

};
;