const express = require("express");

const router = express.Router();

router.get("/popular-brands", (req, res, next) => {
  console.log("home router is working..");
  const dummyPopularBrands = {
    brand: "A-stream",
    brand: "gitck",
    brand: "bic burket",
    brand: "steam link",
    brand: "start company",
    brand: "good kickhen",
    brand: "egg drop",
    brand: "bit coin",
    brand: "centons",
    brand: "ubuntu",
    brand: "fadora",
    brand: "red hat",
    brand: "stop this record",
    brand: "pinao porte",
    brand: "electronic guitar",
    brand: "all about machine",
    brand: "dont look up",
    brand: "victim",
    brand: "find someone and",
    brand: "good service company",
    brand: "action movie creator",
    brand: "actors party",
    brand: "cretical damage",
    brand: "will you write test code?",
    brand: "no i dont have much time",
    brand: "A-stream",
    brand: "gitck",
    brand: "bic burket",
    brand: "steam link",
    brand: "start company",
    brand: "good kickhen",
    brand: "egg drop",
    brand: "bit coin",
    brand: "centons",
    brand: "ubuntu",
    brand: "fadora",
    brand: "red hat",
    brand: "stop this record",
    brand: "pinao porte",
    brand: "electronic guitar",
    brand: "all about machine",
    brand: "dont look up",
    brand: "victim",
    brand: "find someone and",
    brand: "good service company",
    brand: "action movie creator",
    brand: "actors party",
    brand: "cretical damage",
    brand: "will you write test code?",
    brand: "no i dont have much time",
    brand: "bit coin",
    brand: "centons",
    brand: "ubuntu",
    brand: "fadora",
    brand: "red hat",
    brand: "stop this record",
    brand: "pinao porte",
    brand: "electronic guitar",
    brand: "all about machine",
    brand: "dont look up",
    brand: "look up me",
  };
  return res.json(dummyPopularBrands);
});

router.get("/popular-category", (req, res, next) => {
  const dummyPopularCatogies = {
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
    category: "baby",
    category: "computer",
  };

  return res.json(dummyPopularCatogies);
});

module.exports = router;
