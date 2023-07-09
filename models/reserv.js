const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const dateRegExp =
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;

const reservSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        service_type: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            match: dateRegExp,
            unique: true,
            required: true,
        },
        comment: {
            type: String,
        },
        discount: {
            type: Number,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

reservSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
    name: Joi.string().required(),
    service_type: Joi.string().required(),
    time: Joi.string().pattern(dateRegExp).required(),
    comment: Joi.string(),
    discount: Joi.number(),
});

const schemas = {
    addSchema,
};

const Reserv = model('reserv', reservSchema);

module.exports = {
    Reserv,
    schemas,
};
