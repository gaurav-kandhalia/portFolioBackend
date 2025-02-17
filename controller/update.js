const { default: mongoose } = require('mongoose');
const ProjModel = require('../model/model');

const Update = async (req, res) => {
    try {
        const _id = req.body._id
        const Project = await ProjModel.findById(_id);
        
        const newTitle = req.body.title;
        const newDesc = req.body.desc;
        const newImgLink = req.body.newImgLink;
        // console.log("id=-------0",_id)



        if (newTitle || newDesc || newImgLink) {
            if (newTitle) {
                Project.title = newTitle;
            }
            if (newDesc) {
                Project.desc = newDesc;
            }
            if (newImgLink) {
                Project.img_link = newImgLink;
            }
            await Project.save();
            res.send("Information updated successfully");
        } else {
            res.status(400).send("No fields to update");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating information");
    }
}

module.exports = Update;
