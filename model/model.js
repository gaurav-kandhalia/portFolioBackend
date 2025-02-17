const mongoose = require('mongoose')

const Proj = new  mongoose.Schema({
    title:String,
    link:String,
    img_link:String
},{timestamps:true});

const ProjModel =new mongoose.model('Projects',Proj)

module.exports = ProjModel;