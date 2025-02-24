
const ProjModel = require('../model/model')
const mongoose = require('mongoose')
const Delete = async(req,res)=>{
    const {id} = req.body;
   try{
    const project = await ProjModel.findByIdAndDelete(id);
    if(!project){
        
        res.send("project not found")
    }else{
     
        res.send("project deleted Successfully")
    }
   }catch(error){
    
    res.status(500).json({ message: 'Server error' });
   }
}


module.exports = Delete