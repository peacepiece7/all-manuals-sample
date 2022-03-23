const express = require("express");
const {
  dummyBrandCategories,
  dummyPopularBrands,
  dummyPopularCategories,
  dummySubcategoriesInBrand,
  dummyModelsInSubcategory,
} = require("../dummy/dummy");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("back server is working..");
  return res.send("back server is work!");
});

router.get("/test", async (req, res, next) => {
  try {
    const response = await axios.get("http://localhost:8080/allmanual/api");
    const result = response.data;
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// * HOME
router.get("/popular-brands", (req, res, next) => {
  console.log("/popular-brands");

  return res.json(dummyPopularBrands);
});
router.get("/popularCategories", (req, res, next) => {
  console.log("/popular-categories\n\r");

  return res.json(dummyPopularCategories);
});

// * brands?category=[idx]&subcategory=[idx]
router.get("/subcategoriesInBrand", (req, res, next) => {
  const subcategoryIdx = req.query.idx;
  const copyBrandCategories = dummyBrandCategories;
  copyBrandCategories.brands.unshift(`${subcategoryIdx} idx page!`);
  return res.json(copyBrandCategories);
});

// * brand/[brand name]?brand=[query]
router.get("/allSubcategproesInBrand", (req, res, next) => {
  // query로 받아온 brand name
  const brand = req.query.brand;
  const copySubCategories = dummySubcategoriesInBrand;
  return res.json(copySubCategories);
});

// * brand/[brand name]?subcategory=[query] *event
router.get("/modelsInSubcategory", (req, res, next) => {
  const subcategory = req.query.subcategory;
  // front에 "subCategory와 일치시"라는 조건문이 있음!
  console.log("/modelsInSubcategory get a query : ", subcategory);
  const copyDummy = dummyModelsInSubcategory;
  copyDummy.subcategory = subcategory;
  return res.json(copyDummy);
});

module.exports = router;
