const mongoose = require('mongoose');



const Admin =new mongoose.Schema({
    email:String,
    password:String
});

const AdminModel = mongoose.model('Admin',Admin);

module.exports = AdminModel;


const addAdmin = async (req,res)=>{
    try{
     const admin = new AdminModel({
         email:'admin@gmail.com',
         password:'12345'
     })
 
     await admin.save();
 
    }catch(error){
        res.status(500).send("Error occurred");
    }
 }
 
 addAdmin();