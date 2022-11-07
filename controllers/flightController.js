const {flights}= require("../models/Flight"); 
// const {v4:uuid} = require ('uuid')
const uuid = require("uuid").v4()


//get all flights booked
exports.getFlight = async (req, res) => {
    try{
        const flight = flights;

        res.status(200).json({
            message: "ALL Flights",
            BookedFlight: flight,
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

//get a single flight
exports.getFlightEach = async(req, res) =>{
    try{
        let id = req.params.id;
        const flightData = flights.find((flight) => flight.id === id);

        res.status(201).json({
            message: "flight found",
            BookedFlight: flightData,
        });
        }catch(err){
        res.status(500).json({
            message:err.message
        });
    }

}

//add or book new flight
exports.CreateFlight = async (req, res) =>{
    try{
    //const bookflight = await req.body;
    //console.log(bookflight);
       const {title, time, price, date}= await req.body;
       const newFlight ={
        id: uuid(),
        title,
        time,
        price,
        date
       };
       flights.push(newFlight);

        res.status(201).json({
            message: "New flight booked",
            BookedFlight: newFlight
        });

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }

}

//update flight record 
exports.updateFlightData = async(req, res) =>{
    try{
        let id = req.params.id;
        const flightRecord = flights.find((flight) => flight.id === id);
        const {title, time, price, date}= await req.body;
        flightRecord.title = title;
        flightRecord.time = time;
        flightRecord.price = price;
        flightRecord.date = date;

        res.status(200).json({
            message: "flight data updated",
            BookedFlight: flightRecord
        });

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }

}

//Delete or cancel Booked flight
exports.DeleteFlightRecord = async (req, res) =>{
    try{
        let id= req.params.id;
        const flightInfo = flights.find((flight) => flight.id ===id);
        flights.splice(flights.indexOf(flight), 1);
        res.status(200).json({
            message: "flight Data deleted",
            BookedFlight: flightInfo
        });

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }

}
