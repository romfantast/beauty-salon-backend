const { ctrlWrapper } = require('../../helpers');
const { Profile } = require('../../models/profile');

async function getAvatar(req, res) {
    const { _id } = req.user;
    const { avatarUrl } = await Profile.findOne({ owner: _id });

    res.json({
        avatarUrl,
    });
}

module.exports = { getAvatar: ctrlWrapper(getAvatar) };
