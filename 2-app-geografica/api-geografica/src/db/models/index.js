const {Consultorio, ConsultorioSchema} = require('./consultorios.model');

function setupModels(sequelize){
    Consultorio.init(ConsultorioSchema, Consultorio.config(sequelize));
}

module.exports = setupModels;