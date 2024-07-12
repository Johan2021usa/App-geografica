const ConsultorioService = require('../services/consultorio.service');
const service = new ConsultorioService();

const create = async (req, res)=>{
    try{
        const response = await service.createConsultorio(req.body);
        res.json({success: true, data: response});
    }catch (error){
        res.status(500).send({success:false, message:error.message});
    }
}

const get = async(req,res)=>{
    try{
        const response = await service.getAllConsultorios();
        res.json(response);
    }catch(error){
        res.status(500).send({success:false, message:error.message});
    }
}

const getById = async(req,res)=>{
    try{
        const {id} = req.params;
        const response = await service.getConsultorioById(id);
        res.json(response);
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const update = async(req,res)=>{
    try{
        const {id} = req.params;
        const body = req.body;
        const response = await service.updateConsultorio(id,body);
        res.json(response);
    }catch(error){
        res.status(500).send({success: false, message: error.message});
    }
}

const _delete = async(req,res)=>{
    try{
        const {id} = req.params;
        const response = await service.deleteConsultorio(id);
        res.json(response);
    }catch(error){
        res.status(500).send({success: false, message: error});
    }
}

module.exports = {create, get, getById, update, _delete};