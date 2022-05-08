const Product = require("../model/productSchema");
const jwt = require("jsonwebtoken");

exports.getProduct = async (req, res) => {
  const result = req.query.limit;
  try {
    let products;
    if (result) {
      products = await Product.find({}, null, { limit: result });
    } else {
      products = await Product.find({});
    }
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

exports.AddProduct = async (req, res) => {
  try {
    const newProduct = await Product(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (err) {
    res.send(err);
  }
};

exports.updateQuantity = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedValue = await Product.findByIdAndUpdate(id, req.body);
    res.send(updatedValue);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send(deletedProduct);
  } catch (err) {
    res.send(err);
  }
};

exports.getMyProduct = async (req, res) => {
  const decodedEmail = req.decoded.gmail;
  const gmail = req.query.gmail;
  if (gmail === decodedEmail) {
    try {
      const myitem = await Product.find({ gmail: gmail });
      res.send(myitem);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.status(403).send({ message: "forbidden accessss" });
  }
};

exports.getToken = async (req, res) => {
  const gmail = req.body;
  try {
    const token = await jwt.sign(gmail, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({ token });
  } catch (err) {
    res.send(err);
  }
};

exports.updateProduct = (req, res) => {
  res.send("delete todo");
};

exports.detailsProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const details = await Product.findById(id);
    res.send(details);
  } catch (err) {
    res.send(err);
  }
};
