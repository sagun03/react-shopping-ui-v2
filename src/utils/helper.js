/* eslint-disable @typescript-eslint/explicit-function-return-type */
const config = {
  "100 ml": 30,
  "250 ml": 50,
  "500 ml": 90,
  "1 liter": 190,
  "5 liter": 600
};

export const getPrice = (size) => {
  return config[size];
};

export const CATEGORY_MENU = [
  { id: 1, title: "All", name: "" },
  {
    id: 2,
    title: "Liquid Detergent",
    name: "detergent",
    similar: ["dishWasher", "detergent"],
    otherRelated: ["floorCleaner", "toiletCleaner"]
  },
  {
    id: 3,
    title: "Hand Wash",
    name: "handWash",
    similar: ["toiletCleaner", "glassCleaner"],
    otherRelated: ["floorCleaner", "dishWasher"]
  },
  {
    id: 4,
    title: "Floor Cleaner",
    name: "floorCleaner",
    similar: ["detergent", "toiletCleaner"],
    otherRelated: ["glassCleaner", "dishWasher"]
  },
  {
    id: 5,
    title: "Dish Washer",
    name: "dishWasher",
    similar: ["detergent", "handWash"],
    otherRelated: ["floorCleaner", "glassCleaner"]
  },
  {
    id: 6,
    title: "Toilet Cleaner",
    name: "toiletCleaner",
    similar: ["floorCleaner", "handWash"],
    otherRelated: ["detergent", "dishWasher"]
  },
  {
    id: 7,
    title: "Glass Cleaner",
    name: "glassCleaner",
    similar: ["toiletCleaner", "floorCleaner"],
    otherRelated: ["detergent", "dishWasher"]
  }
];

export const flattenProductSizes = (products) =>
  products.flatMap((product) =>
    product.sizes.map((size) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      categoryId: product.categoryId,
      category: product.category,
      size: size.size,
      price: size.price,
      images: size.images,
      inStock: size.inStock,
      discountPercentage: size.discountPercentage,
      ratingCount: product.ratingCount,
      averageRating: product.averageRating
    }))
  );

export const getSimilarProducts = (products, currentProduct) => {
  const categoryInfo = CATEGORY_MENU.find(
    (cat) => cat.name === currentProduct.category
  );
  console.log(categoryInfo, "categoryInfo", products);
  if (!categoryInfo) return [];

  const similarCategories = categoryInfo.similar || [];
  const filterProduct = products.filter(
    (product) => similarCategories.includes(product.category) &&
    product.id !== currentProduct.id
  );
  return filterProduct
};

export const getOtherRelatedProducts = (
  products,
  currentProduct
) => {
  const categoryInfo = CATEGORY_MENU.find(
    (cat) => cat.name === currentProduct.category
  );

  if (!categoryInfo) return [];

  const relatedCategories = categoryInfo.otherRelated || [];
  return products.filter(
    (product) =>
      relatedCategories.includes(product.category) &&
      product.id !== currentProduct.id
  );
};
