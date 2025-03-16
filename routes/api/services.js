const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/services');
const { authenticate } = require('../../middlewares');

router.get('/allServices', authenticate, ctrl.getAllServices);

module.exports = router;
