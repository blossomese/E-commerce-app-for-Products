const Product = require("../model/productModel");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const product = async (req, res) => {
  const { title, description, price } = req.fields;
  const { image } = req.files;
  let userId = req.user
  try {
    const newProduct = await Product.create({
        id: uuidv4(),
        title,
        description,
        price,
        userId
      });
    if (image) {
      const imageData = fs.readFileSync(image.path);
      console.log(imageData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating product",
    });
  }
};

module.exports = product;
