const { ctrlWrapper } = require('../../helpers');

const { Services } = require('../../models/services');

const getAllServices = async (req, res) => {
    const result = await Services.find();
    res.json(result);
};

module.exports = {
    getAllServices: ctrlWrapper(getAllServices),
};
