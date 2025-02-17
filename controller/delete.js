
const ProjModel = require('../model/model')
const mongoose = require('mongoose')
const Delete = async(req,res)=>{
    const {id} = req.body;
   try{
    const project = await ProjModel.findByIdAndDelete(id);
    if(!project){
        // console.log("project not found")
        res.send("project not found")
    }else{
        // console.log("project deleted successfully");
        res.send("project deleted Successfully")
    }
   }catch(error){
    // console.log("error occured",error)
    res.status(500).json({ message: 'Server error' });
   }
}


module.exports = Delete