const {models} = require('../libs/sequelize');

class ConsultorioService{

    constructor(){}

    async getAllConsultorios(){
        const res = await models.Consultorio.findAll();
        return res;
    }

    async getConsultorioById(id){
        const res = await models.Consultorio.findByPk(id);
        return res;
    }

    async createConsultorio(data){
        const res = await models.Consultorio.create(data);
        return res;
    }

    async updateConsultorio(id, data){
        const model = await this.getConsultorioById(id);
        const res = await model.update(data);
        return res; 
    }

    async deleteConsultorio(id){
        const model = await this.getConsultorioById(id);
        await model.destroy();
        return {deleted: true};
    }
}

module.exports = ConsultorioService;
