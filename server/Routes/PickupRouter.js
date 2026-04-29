const express = require('express');
const router = express.Router();
const PickupController = require('../Controllers/PickupController');
const authMiddleware = require('../Middlewares/authMiddleware');


router.post('/pickup', authMiddleware, PickupController.createPickup);
router.get('/pickups', authMiddleware, PickupController.getAllPickups);
module.exports = router;
