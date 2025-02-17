const ProjModel = require('../model/model');
const uploadCloudinary = require('../utils/cloudinary');
const path = require('path');

const AddProject = async (req, res) => {
    try {
        const { title, link } = req.body;

        if (!title || !link) {
            return res.status(400).send('Enter valid details');
        }

        const existingProject = await ProjModel.findOne({ link });

        if (existingProject) {
            return res.status(401).send("Project already exists");
        }

        const coverImage = req.file?.path;
        console.log("coverImage");
        console.log(coverImage)

        if (!coverImage) {
            return res.status(400).send("Not a valid image");
        }

        const absolutePath = path.resolve(coverImage).replace(/\\/g, '/');
       

        const image = await uploadCloudinary(coverImage);

        if (!image) {
            return res.status(400).send("Image upload failed");
        }

        

        const project = new ProjModel({
            title,
            link,
            img_link: image, // Use img_link as defined in schema
        });

        

        await project.save();
        return res.status(201).send("Project added successfully");
        
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            return res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = AddProject;
