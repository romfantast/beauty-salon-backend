const { Schema, model } = require('mongoose');

const servicesSchema = new Schema(
    {
        currency: { type: String },
        description: { type: String },
        duration: { type: Number },
        name: { type: String },
        price: { type: Number },
        image: { type: String },
    },
    { versionKey: false }
);

const Services = model('services', servicesSchema);

module.exports = { Services };
