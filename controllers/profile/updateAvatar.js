const { ctrlWrapper } = require('../../helpers');
const { Profile } = require('../../models/profile');

async function updateAvatar(req, res) {
    const { _id } = req.user;
    const avatarUrl = req.file.path;

    await Profile.create({
        owner: _id,
        avatarUrl,
    });

    res.json({
        avatarUrl,
    });
}

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
