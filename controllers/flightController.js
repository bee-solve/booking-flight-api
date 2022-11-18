const { Flight } = require("../model/Flight");
//const uuid = require('uuid').v4();
const {v4: uuid} = require("uuid");




//get all flights
exports.getAllFlights = async (req, res)=>{
    try{
    const flights = Flight;
   
    //res.status(200).json(users);
    res.status(200).json({
        message: "All Flight booked",
        AllFlight: flights,
    });
} catch(err){
    res.status(500).json({
        message: err.message
    });
}
}
//create new flight
exports.bookFlight = async (req, res) =>{
    try{
        
        const { title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        };

         Flight.push(newFlight);
        

        res.status(201).json({
            message: "flight booked",
            newFlight,
        });
    } catch(err){
        res.status(500).json({
            message: err.message
        })
}
}

//fetch single user
exports.getEachFlight = async (req, res)=>{
    try{
        id= req.params.id;
        const EachFlight = Flight.find((flight) => flight.id === id);
 
        if(EachFlight)
        return res.status(200).json({
            message: "Flight record found",
            EachFlight,
        });
            res.status(404).json({
                message: "Flight record not found in database",
            });
        }
     catch(err){
        res.status(500).json({
            message: err.message
        })
}
}

//update users
exports.updateFlight = async (req, res) =>{
    try{
     id = req.params.id;
        const FlightUpdate = Flight.find((flight) => flight.id === id);
       
        const { title, time, price, date } = await req.body;
        FlightUpdate.title = title;
        FlightUpdate.time = time;
        FlightUpdate.price = price;
        FlightUpdate.date = date;

        res.status(200).json({
            message: "flight data updated",
            FlightUpdate,
        });
    } catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

//delete user
exports.removeFlight = async(req, res) =>{
    try{
        id = req.params.id;
        const deleteFlight = Flight.find((flight) => flight.id === id);
        Flight.splice(Flight.indexOf(deleteFlight), 1)

        res.status(200).json({
            message: "Booked flight removed successfully",
            
        });
    } catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}
