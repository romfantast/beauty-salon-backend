const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const dateRegExp =
    /^([1-9]|([012][0-9])|(3[01]))-([0]{0,1}[1-9]|1[012])-\d\d\d\d (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/;

const reservSchema = new Schema(
    {
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
