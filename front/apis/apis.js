import axios from "axios";

axios.defaults.baseURL = "http://192.168.10.34:8337";
// import { backURL } from "../config/config";
// axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;

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
    const response = await axios.get(`/popular-categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function loadCategoriesInBrandAPI(query) {
  try {
    const response = await axios.get(`/category-in-brand?category=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function loadCategoryModelsAPI(query) {
  try {
  } catch (error) {
    console.error(error);
  }
}
