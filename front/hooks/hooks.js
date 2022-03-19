import { useQuery } from "react-query";
import { loadPopularCategoriesAPI, loadPopularBrandsAPI, loadCategoriesInBrandAPI } from "../apis/apis";

export const useLoadPopularbrands = () => {
  return useQuery(["popularBrands"], loadPopularBrandsAPI);
};
export const useLoadPopularCategories = () => {
  return useQuery(["popularCategories"], loadPopularCategoriesAPI);
};
export const useLoadCategoriesInBrand = (query) => {
  return useQuery(["categoriesInBrand", query], () => loadCategoriesInBrandAPI(encodeURIComponent(query)));
};
