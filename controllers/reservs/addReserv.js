const { ctrlWrapper } = require('../../helpers');
const { Reserv } = require('../../models/reserv');

const addReserv = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(owner);
    const result = await Reserv.create({ ...req.body, owner });
    res.status(201).json(result);
};

module.exports = {
    addReserv: ctrlWrapper(addReserv),
};
