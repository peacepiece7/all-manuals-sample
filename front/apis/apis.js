import axios from "axios";

axios.defaults.baseURL = "http://localhost:8337";
// import { backURL } from "../config/config";
// axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;

// /home
export async function loadPopularBrandsAPI() {
  try {
    const response = await axios.get("/popular-brands");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function loadPopularCategoriesAPI() {
  try {
    const response = await axios.get(`/popularCategories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// * brands?category=[idx]&subcategory=[idx]
export async function loadSubcategoriesInBrandAPI(query) {
  try {
    const response = await axios.get(`/subcategoriesInBrand?idx=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// * brand/[brand name]?brand=[query]
export async function loadAllSubcategoriesInBrandAPI(query) {
  try {
    const response = await axios.get(`/allSubcategproesInBrand?brand=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// * brand/[brand name]?subcategory=[query] *event
export async function loadModelsInSubcategoryAPI(query) {
  try {
    const response = await axios.get(`/modelsInSubcategory?subcategory=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
