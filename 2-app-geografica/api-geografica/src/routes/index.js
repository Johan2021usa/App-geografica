const express = require('express');

const consultoriosRouter = require('./consultorios.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/consultorios', consultoriosRouter);
}

module.exports = routerApi;