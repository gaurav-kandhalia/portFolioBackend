const ProjModel = require('../model/model');

const getProjects = async (req, res) => {
  try {
    const data = await ProjModel.find();
    console.log("--------------projects--------------");
    console.log(data)
    // console.log(data);
    res.json(data);
  } catch (error) {
    // console.log(data)
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProjects;
