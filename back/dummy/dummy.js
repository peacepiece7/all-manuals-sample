// * 카테고리 구조
// * 브랜드 > 카테고리 > 서브카테고리 > 모델

// 가장 인기있는 서브카테고리 14개
const dummyPopularCategories = {
  categories: [
    "baby",
    "computer",
    "baby",
    "computer",
    "baby",
    "seat",
    "baby",
    "computer",
    "baby",
    "desktop",
    "hub & router",
    "repeater",
    "car",
    "electornics",
  ],
};

const dummySubcategoriesInBrand = {
  subcategories: [
    { subcategory: "aaa", id: 812 },
    { subcategory: "asdasdas", id: 83 },
    { subcategory: "dd asdxc doek", id: 48 },
    { subcategory: "aaa", id: 158 },
    { subcategory: "aaa", id: 816 },
    { subcategory: "skfk ekfmks", id: 15 },
    { subcategory: "ras in dela", id: 17 },
    { subcategory: "aaa", id: 11 },
    { subcategory: "romasce lib der", id: 12 },
    { subcategory: "origia zier", id: 13 },
    { subcategory: "origna grande", id: 14 },
    { subcategory: "locsone", id: 1165 },
    { subcategory: "aaa", id: 116 },
    { subcategory: "ros lagjs", id: 19915 },
    { subcategory: "margato de orino ba", id: 117 },
    { subcategory: "bars des pons", id: 1211 },
    { subcategory: "ckick lock and own", id: 22 },
    { subcategory: "adown on a bit", id: 23 },
    { subcategory: "dd asdxc doek", id: 24 },
    { subcategory: "aaa", id: 125 },
    { subcategory: "aaa", id: 126 },
    { subcategory: "let another us", id: 888215 },
    { subcategory: "dearco sole man", id: 127 },
    { subcategory: "prino zeroco", id: 121 },
    { subcategory: "bdgadg", id: 212 },
    { subcategory: "aaa", id: 132 },
    { subcategory: "aaa", id: 12312342 },
    { subcategory: "sadasd", id: 1215 },
    { subcategory: "aaa", id: 1162 },
    { subcategory: "ros lagjs", id: 2115 },
    { subcategory: "kasdmmsdzxc", id: 2117 },
    { subcategory: "romasce lib der", id: 552 },
    { subcategory: "origia zier", id: 153 },
    { subcategory: "origna grande", id: 154 },
    { subcategory: "locsone", id: 1155 },
    { subcategory: "aaa", id: 1156 },
    { subcategory: "ros lagjs", id: 5115 },
    { subcategory: "margato de orino ba", id: 1157 },
    { subcategory: "bars des pons", id: 15211 },
    { subcategory: "ckick lock and own", id: 522 },
    { subcategory: "adown on a bit", id: 253 },
    { subcategory: "dd asdxc doek", id: 254 },
    { subcategory: "aaa", id: 1255 },
    { subcategory: "aaa", id: 1265 },
    { subcategory: "let another us", id: 21555 },
    { subcategory: "dearco sole man", id: 1527 },
    { subcategory: "prino zeroco", id: 1251 },
    { subcategory: "bdgadg", id: 5212 },
    { subcategory: "aaa", id: 1325 },
    { subcategory: "aaa", id: 142 },
    { subcategory: "sadasd", id: 51215 },
    { subcategory: "aaa", id: 11652 },
    { subcategory: "aaa", id: 11251 },
  ],
};

// 가장 인기있는 브랜드 N가지
const dummyPopularBrands = {
  brands: [
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write",
    "no i dont have",
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write ",
    "no i dont have ",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "look up me",
  ],
};

// 인덱스와 일치하는 모든 서브카테고리
// ex) 인덱스가 A# => [A-123, A&B, A-Brnad]
// ex2) 인덱스가 BB => [BB-cream, BBB, BBsport]
const dummyBrandCategories = {
  brands: [
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write",
    "no i dont have",
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write",
    "no i dont have",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "look up me",
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write",
    "no i dont have",
    "A-stream",
    "gitck",
    "bic burket",
    "steam link",
    "start company",
    "good kickhen",
    "egg drop",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "victim",
    "find someone and",
    "good service company",
    "action movie creator",
    "actors party",
    "cretical damage",
    "will you write",
    "no i dont have",
    "bit coin",
    "centons",
    "ubuntu",
    "fadora",
    "red hat",
    "stop this record",
    "pinao porte",
    "electronic guitar",
    "all about machine",
    "dont look up",
    "look up me",
  ],
};

const dummyModelsInSubcategory1 = [
  {
    manualName: "LM-324",
    id: 1,
    items: [
      {
        doc: 1,
        url: 2,
      },
    ],
  },
  {
    manualName: "LM-324",
    id: 1,
    items: [
      {
        doc: 1,
        url: 2,
      },
    ],
  },
  {
    manualName: "LM-324",
    id: 1,
    items: [
      {
        doc: 1,
        url: 2,
      },
    ],
  },
];

const dummyModelsInSubcategory = {
  subcategory: "3D printers",
  models: [
    {
      modelName: "LM-324",
      id: 1,
      items: [
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1542005-123242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1542005-123245",
        },
      ],
    },
    {
      modelName: "A-324",
      id: 2,
      items: [
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName19954005-123242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName1999954005-123242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9992005-993245",
        },
      ],
    },
    {
      modelName: "UUID4675",
      id: 3,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "LMX4728/522",
      id: 4,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "BabyBohj One Cotton Mix Baby Carrier - Baby Carrier One, One Aire New version",
      id: 5,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "loeram lipsum the fox jumps over the lazy brown dog",
      id: 7016,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "loeram lipsum the fox jumps over the lazy brown dog - FR",
      id: 12467,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "loeram lipsum the fox jumps over the lazy brown dog - IT",
      id: 4567,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "loeram lipsum the fox jumps over the lazy brown dog - SP",
      id: 736547,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
    {
      modelName: "loeram lipsum the fox jumps over the lazy brown dog - GE",
      id: 777,
      items: [
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "instruction",
          url: "http://192.168.10.34:7282/model/product1/pdfName78954005-53242",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "owners manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName1232005593245",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName9540055242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
        {
          doctype: "users manual",
          url: "http://192.168.10.34:7282/model/product1/pdfName4564005-53242",
        },
      ],
    },
  ],
};

module.exports = {
  dummyBrandCategories,
  dummyPopularBrands,
  dummyPopularCategories,
  dummySubcategoriesInBrand,
  dummyModelsInSubcategory,
};
