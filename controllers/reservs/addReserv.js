const { ctrlWrapper } = require('../../helpers');
const { Reserv } = require('../../models/reserv');

const addReserv = async (req, res) => {
    const result = await Reserv.create(req.body);
    res.json(result);
};

module.exports = {
    addReserv: ctrlWrapper(addReserv),
};
