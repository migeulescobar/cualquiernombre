const Empleado = require('../models/vehicle')

//Get all documents from Vehicle
const getEmpleado = async(req, res)=>{
    const empleados = await Empleado.find()
    res.json(empleados)
}

//Post Create a document in the collection Vehicle
const postEmpleado = async(req, res)=>{
    const body = req.body //Get the body send from postman or a form
    let msg = 'Vehicle inserted succesful'
    try {
        const empleado = new Vehicle(body)//create the object Vehicle in RAM
        await empleado.save()//insert object at the collection 
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

// const putVehiculo = async(req,res)=>{
//     const {plate,color,model} = req.body //Destructuring
//     let msg = 'Vehicule update succesful'
//     try {
//         await Vehicle.findOneAndUpdate({plate:plate},{color:color,model})
//     } catch (error) {
//         msg = error
//     }
//     res.json({msg:msg})
// }

// const deleteVehicle = async(req,res)=>{
//     //por _id
//     const _id=req.params.id
//     try{
//         await Vehicle.findByIdAndDelete({_id:_id})
//         res.json({msg: 'Vehicle deleted'})
//     }
//     catch(error){
//         res.status(500).json(error,{msg: 'there was a problem deleting the vechicle'})
//     }
// }

module.exports = {
    getEmpleado, postEmpleado
    // putVehiculo, deleteVehicle
}