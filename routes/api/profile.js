const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares');
const ctrl = require('../../controllers/profile');
const uploadCloud = require('../../middlewares/upload');

router.get('/current', authenticate, ctrl.getProfile);

router.patch(
    '/avatar',
    authenticate,
    uploadCloud.single('avatarUrl'),
    ctrl.updateAvatar
);

router.get(
    '/avatar',
    authenticate,
    uploadCloud.single('avatarUrl'),
    ctrl.getAvatar
);

module.exports = router;
