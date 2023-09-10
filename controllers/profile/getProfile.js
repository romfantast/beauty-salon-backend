const { ctrlWrapper } = require('../../helpers');
const { User } = require('../../models/user');

async function getProfile(req, res) {
    const { _id } = req.user;
    const user = await User.findOne({ owner: _id });

    res.json({
        user,
    });
}

module.exports = { getProfile: ctrlWrapper(getProfile) };
