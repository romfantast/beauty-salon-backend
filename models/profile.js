const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, ref: 'user' },
        avatarUrl: { type: String },
    },
    { versionKey: false }
);

const Profile = model('profile', profileSchema);

module.exports = { Profile };
