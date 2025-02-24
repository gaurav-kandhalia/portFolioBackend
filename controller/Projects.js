const ProjModel = require('../model/model');

const getProjects = async (req, res) => {
  try {
    const data = await ProjModel.find();

   
    
    res.json(data);
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProjects;
