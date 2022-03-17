import axios from "axios";

axios.defaults.baseURL = "http://192.168.10.34:8337";
// import { backURL } from "../config/config";
// axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;

export async function loadPopularCategories() {
  try {
    const response = await axios.get(`/popular-categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function loadPopularBrands() {
  try {
    const response = await axios.get("/popular-brands");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function loadBrandCategories(query) {
  try {
    const response = await axios.get(`brand-category?category=${encodeURIComponent(query.queryKey[1])}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function loadCategoryModels(query) {
  try {
  } catch (error) {
    console.error(error);
  }
}
