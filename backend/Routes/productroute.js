const express=require('express');
const route=express.Router();
const proController=require('../Controllers/productcontroller')

route.post("/insertproduct" , proController.insertProduct);
route.get("/displayproduct", proController.displayProduct);
route.post("/searchproduct", proController.searchProduct);
route.get("/deleteproduct", proController.deleteProduct);
route.post("/deletingproduct", proController.deletingData)
route.get("/productsummary",proController.productSummary)
route.post("/deleteproduct",proController.DeleteData)

module.exports=route;