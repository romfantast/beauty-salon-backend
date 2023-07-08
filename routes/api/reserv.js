const express = require('express');
const router = express.Router();

const { schemas } = require('../../models/reserv');
const ctrl = require('../../controllers/reservs');
const { validateBody } = require('../../middlewares');

router.get('/', ctrl.getAll);
router.post('/', validateBody(schemas.addSchema), ctrl.addReserv);

module.exports = router;
