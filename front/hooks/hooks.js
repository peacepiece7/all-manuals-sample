import { useQuery } from "react-query";
import {
  loadPopularCategoriesAPI,
  loadPopularBrandsAPI,
  loadSubcategoriesInBrandAPI,
  loadAllSubcategoriesInBrandAPI,
  loadModelsInSubcategoryAPI,
} from "../apis/apis";

// /Home
export const useLoadPopularbrands = () => {
  return useQuery(["popularBrands"], loadPopularBrandsAPI);
};
export const useLoadPopularCategories = () => {
  return useQuery(["popularCategories"], loadPopularCategoriesAPI);
};

// * brands?category=[idx]&subcategory=[idx]
export const useLoadCategoriesInBrand = (query) => {
  return useQuery(["categoriesInBrand", query], () => loadSubcategoriesInBrandAPI(encodeURIComponent(query)));
};

//
// * brand/[brandname]
//
// * brand/[brand name]?brand=[query]
export const useLoadAllSubcategoriesInBrand = (query) => {
  return useQuery(["brandModelsInSubcategories", query], () =>
    loadAllSubcategoriesInBrandAPI(encodeURIComponent(query))
  );
};
// * brand/[brand name]?subcategory=[query] *event
export const useLoadModelsInSubcategory = (query) => {
  return useQuery(["modelsInSubcategory", query], () => loadModelsInSubcategoryAPI(query), {
    enabled: query ? true : false,
  });
};
