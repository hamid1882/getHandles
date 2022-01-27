const Product = require("../models/productModel");
const errorHandler = require("../utils/errorHandler");
const handleAsyncErrors = require("../middleware/handleAsyncErrors");

// get all the products

exports.getAllProducts = handleAsyncErrors(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    success: true,
    product,
  });
});

// get product Details

exports.getProductDetails = handleAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new errorHandler("Product does not exists", 500));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// create new product -- admin

exports.createProduct = handleAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

// update a product -- admin

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new errorHandler("Unable to update", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    status: true,
    product,
  });
};

// delete product

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new errorHandler("Unable to delete", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
  });
};
