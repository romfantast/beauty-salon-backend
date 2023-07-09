const { ctrlWrapper } = require('../../helpers');

const { Reserv } = require('../../models/reserv');

const getAllReservs = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Reserv.find({ owner });
    res.json(result);
};

module.exports = {
    getAllReservs: ctrlWrapper(getAllReservs),
};
