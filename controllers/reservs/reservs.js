const { ctrlWrapper } = require('../../helpers');

const { Reserv } = require('../../models/reserv');

const getAll = async (req, res) => {
    const result = await Reserv.find();
    res.json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
};
