const express = require('express');
const router = express.Router();

const { getWells, addWell, getWell, updateWell, deleteWell} = require('../controllers/data.controller');

router.get('/data', getWells);
router.post('/data', addWell);
router.get('/data/:id', getWell);
router.put('/data/:id', updateWell);
router.delete('/data/:id', deleteWell);

module.exports = router;

