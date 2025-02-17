// import {v2 as cloudinary} from "cloudinary"
const cloudinary = require('cloudinary').v2;

const fs = require('fs')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null
     const response = await    cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log("file is uploaded succesfully",)
        return response.url;
    }catch(error){
        fs.unlinkSync(localFilePath); // remove the local saved temporary file as the upload operation got failed 
        return null
    }
}

module.exports = uploadCloudinary

