"use strict";
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 3167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CJ": () => (/* binding */ useLoadAllSubcategoriesInBrand),
  "cN": () => (/* binding */ useLoadCategoriesInBrand),
  "aP": () => (/* binding */ useLoadModelsInSubcategory),
  "H4": () => (/* binding */ useLoadPopularCategories),
  "Or": () => (/* binding */ useLoadPopularbrands)
});

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./apis/apis.js

(external_axios_default()).defaults.baseURL = "http://192.168.10.34:8337"; // import { backURL } from "../config/config";
// axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;
// /home

async function loadPopularBrandsAPI() {
  try {
    const response = await external_axios_default().get("/popular-brands");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function loadPopularCategoriesAPI() {
  try {
    const response = await external_axios_default().get(`/popularCategories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
} // * brands?category=[idx]&subcategory=[idx]

async function loadSubcategoriesInBrandAPI(query) {
  try {
    const response = await external_axios_default().get(`/subcategoriesInBrand?idx=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
} // * brand/[brand name]?brand=[query]

async function loadAllSubcategoriesInBrandAPI(query) {
  try {
    const response = await external_axios_default().get(`/allSubcategproesInBrand?brand=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
} // * brand/[brand name]?subcategory=[query] *event

async function loadModelsInSubcategoryAPI(query) {
  try {
    const response = await external_axios_default().get(`/modelsInSubcategory?subcategory=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
;// CONCATENATED MODULE: ./hooks/hooks.js

 // /Home

const useLoadPopularbrands = () => {
  return (0,external_react_query_.useQuery)(["popularBrands"], loadPopularBrandsAPI);
};
const useLoadPopularCategories = () => {
  return (0,external_react_query_.useQuery)(["popularCategories"], loadPopularCategoriesAPI);
}; // * brands?category=[idx]&subcategory=[idx]

const useLoadCategoriesInBrand = query => {
  return (0,external_react_query_.useQuery)(["categoriesInBrand", query], () => loadSubcategoriesInBrandAPI(encodeURIComponent(query)));
}; //
// * brand/[brandname]
//
// * brand/[brand name]?brand=[query]

const useLoadAllSubcategoriesInBrand = query => {
  return (0,external_react_query_.useQuery)(["brandModelsInSubcategories", query], () => loadAllSubcategoriesInBrandAPI(encodeURIComponent(query)));
}; // * brand/[brand name]?subcategory=[query] *event

const useLoadModelsInSubcategory = query => {
  return (0,external_react_query_.useQuery)(["modelsInSubcategory", query], () => loadModelsInSubcategoryAPI(query), {
    enabled: query ? true : false
  });
};

/***/ })

};
;