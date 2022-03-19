const express = require("express");
const { dummyBrandCategories, dummyPopularBrands, dummyPopularCategories } = require("../dummy/dummy");

const router = express.Router();

router.get("/popular-brands", (req, res, next) => {
  console.log("/popular-brands");
  setTimeout(() => {
    return res.json(dummyPopularBrands);
  }, 1000);
});

router.get("/popular-categories", (req, res, next) => {
  console.log("/popular-categories\n\r");
  setTimeout(() => {
    return res.json(dummyPopularCategories);
  }, 2000);
});

router.get("/category-in-brand", (req, res, next) => {
  const subcategory = req.query.category;
  const copyBrandCategories = dummyBrandCategories;
  copyBrandCategories.brands.unshift(`${subcategory} idx page!`);
  return res.json(copyBrandCategories);
});

module.exports = router;
