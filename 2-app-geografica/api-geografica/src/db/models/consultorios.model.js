const {Model, DataTypes} = require('sequelize');

const CONSULTORIO_TABLE = 'pediatria';

class Consultorio extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: CONSULTORIO_TABLE,
            modelName: 'Consultorio',
            timestamps: false
        }
    }
};

const ConsultorioSchema = {
    id_ped:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    geom:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'geom'
    },
    id:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'id'
    },
    identificacion:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'identifica'
    },
    codigoConsultiorio:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'código_de'
    },
    nombreConsultorio:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_del'
    },
    nombreServicio:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_del'
    },
    telefono:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'teléfono'
    },
    direccion:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'dirección'
    },
    correo:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'correo_ele'
    },
    tipoInstitucion:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo_de_pr'
    },
    claseConsultorio:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'clase_de_p'
    },
    codigoLocalidad:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'codigo_loc'
    },
    codigoUPZ:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'codigo_upz'
    },
    coordenadaLong:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'coordenada'
    },
    coordenadaLat:{
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'coordena_1'
    }
}

module.exports = {Consultorio, ConsultorioSchema};