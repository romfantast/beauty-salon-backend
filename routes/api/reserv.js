const express = require('express');
const router = express.Router();

const { schemas } = require('../../models/reserv');
const ctrl = require('../../controllers/reservs');
const { validateBody, authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrl.getAllReservs);
router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addReserv);

module.exports = router;
