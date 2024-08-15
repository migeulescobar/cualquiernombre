const {model, Schema} = require('mongoose')

const EmpleadoSchema = new Schema({
    //infromacion del empleado: Documento, Nombres, FechaIngreso, FechaRetiro, salario, DiasLaborados, Cesantias
    documento: {
        type: String,
        unique:true,
        required:[true, 'The field documento is required'],
        maxLength :[10, 'Max 10 characters'],
        minLength :[10, 'Min 10 characters'],
    },
    nombres: {
        type: String,
        required:[true, 'The field nombres is required'],
        maxLength :[50, 'Max 50 characters'],
    },
    fechaIngreso: {
        type: Date,
        required:[true, 'The field fechaIngreso is required'],
    },
    fechaRetiro: {
        type: Date,
    },
    salario: {
        type: Number,
        required:[true, 'The field salario is required'],
    },
    diasLaborados: {
        type: Number,
        required:[true, 'The field diasLaborados is required'],
    },
    cesantias: {
        type: Number,
        required:[true, 'The field cesantias is required'],
    }
    // plate: {
    //     type: String,
    //     unique:true,
    //     required:[true, 'The field plate is required'],
    //     maxLength :[6, 'Max 6 characters'],
    //     minLength :[5, 'Max 5 characters'],
    // },
    // color: {
    //     type: String,
    //     required:[true, 'The field color is required'],
    //     minLength :[3, 'Min 3 characters'],
    // },
    // model: {
    //     type: Number,
    //     required:[true, 'The field model is required'],
    // }
}) 

module.exports = model('Empleado',EmpleadoSchema,'empleado')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection