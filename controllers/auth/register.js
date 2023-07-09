const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const { ctrlWrapper } = require('../../helpers');
const bycrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, 'Email in use');
    }

    const hashPassword = await bycrypt.hash(password, 10);
    const result = await User.create({ name, email, password: hashPassword });
    res.status(201).json({
        name: result.name,
        email: result.email,
    });
};

module.exports = {
    register: ctrlWrapper(register),
};
