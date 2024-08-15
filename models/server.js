const express = require('express')
const dbConnection = require('../database/config')
require('dotenv').config()
const { getEmpleado, postEmpleado} = require ('../controllers/vehicleController')

class Server{
    //el constructor instancia una clase
    //si es un metodo tiene parentesis y atributo no
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathEmpleado = '/api/empleado'//indica una ruta publica de una api 
        this.route()
    }

    async dbConnection(){//espera a que haya una respuesta
        await dbConnection()
    }

    route(){
        this.app.use(express.json())//Emplear json al req body
        this.app.get(this.pathEmpleado, getEmpleado)//call to controller
        this.app.post(this.pathEmpleado, postEmpleado)
        // this.app.put(this.pathVehicle,putVehiculo)
        // this.app.delete(this.pathVehicle+'/:id', deleteVehicle) //call to controller for delete vehicle by id  //:id representa un parametro dinamico en la url que se enviara por get o post en el request body
    }

    listen(){
        //variable de entorno o global, verifica si el servidor esta corriendo
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port:${process.env.PORT}`);
            
        })
    }
}

module.exports = Server //Export the class Server