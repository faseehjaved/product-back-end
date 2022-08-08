const products = require("../controllers/product.controller.js");
var router = require("express").Router();
router.post("/", products.create);
module.exports = {
    router: router
}
