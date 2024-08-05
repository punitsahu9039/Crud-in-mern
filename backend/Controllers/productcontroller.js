const proModel=require("../Models/productmodel")

const insertProduct=async(req,res)=>{
    const {productno,name,city,price}=req.body;
    
    const response=await proModel.create({
        productno:productno,
        name:name,
        city:city,
        price:price
    })

    res.status(200).json(response);
}

const displayProduct=async(req,res)=>{
    const response=await proModel.find();
    res.status(200).json(response);
}

const searchProduct=async(req,res)=>{
    const productno=req.body.productno;
    const response=await proModel.find({productno})
    res.status(200).json(response);
}

const deleteProduct=async(req,res)=>{
    const response=await proModel.find();
    res.status(200).json(response);
}

const deletingData=async(req,res)=>{
    const myid=req.body.myid;
    const response=await proModel.findByIdAndDelete(myid);
    res.status(200).json(response);
}

const productSummary=async(req,res)=>{
    const response=await proModel.find();
    res.status(200).json(response);
}

const DeleteData=async(req,res)=>{
    const myid=req.body.myid;
    const response=await proModel.findByIdAndDelete(myid);
    res.status(200).json(response)
}


module.exports={
    insertProduct,
    displayProduct,
    searchProduct,
    deleteProduct,
    deletingData,
    productSummary,
    DeleteData
}