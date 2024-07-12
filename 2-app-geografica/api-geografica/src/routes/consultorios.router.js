const express = require('express');
const router = express.Router();
const consultorioController = require('../controllers/consultorio.controller');

router
    .get('/', consultorioController.get)
    .get('/:id', consultorioController.getById)
    .post('/', consultorioController.create)
    .put('/:id',consultorioController.update)
    .delete('/:id',consultorioController._delete);

module.exports = router;