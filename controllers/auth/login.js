const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');
const { ctrlWrapper } = require('../../helpers');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    console.log('heereee');
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(400, 'email is invalid');
    }
    const passwordCompare = await bycrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(400, 'password is invalid');
    }

    const payload = {
        id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
        name: user.name,
        email: user.email,
        token,
    });
};

module.exports = {
    login: ctrlWrapper(login),
};
