const { validationResult } = require("express-validator");
const Product = require("../../modals/product");
exports.AddProducts = (req, res) => {
  const error = validationResult(req).array();
  if (error.length > 0) {
    return res.status(400).json({ error: error[0].msg });
  }
  const product = new Product(req.body);
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json({ success: "product saved successfully" });
  });
};

exports.DeleteProduct = (req, res) => {
  Product.findById(req.body.id).exec((err,product)=>{
    if(err){
      return res.status(400).json({error : err});
    }
    product.remove((err,product)=>{
      if(err){
        return res.status(400).json({error : err});
      }
      return res.status(200).json({success : "product deleted succesfully"});
    })
  })
  // Product.findOneAndRemove(req.body.id).exec((err, product) => {
  //   if (err) {
  //     return res.json({ error: err });
  //   }
  //   return res.json({ success: "product deleted successfully" });
  // });
};

exports.UpdateProduct = (req, res) => {
  Product.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, product) => {
        if(err){return res.status(400).json({error : err});}console.log(product);
        return res.status(200).json({success : "update product success"})
    }
  );
};

exports.GetAllProducts = (req,res)=>{
  Product.find((err,products)=>{
    if(err){
      return res.status(400).json({error : err});
    }
    return res.status(200).json(products);

  })
}
