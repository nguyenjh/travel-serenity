import Hotel from "../models/Hotel.js"

// create
export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch(err) {
        next(err)
    }
}

// update
export const updateHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body,},
            {new: true}
        )
        res.status(200).json(updatedHotel)
    } catch(err) {
        next(err)
    }
}

// delete
export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Hotel has been deleted")
    } catch(err) {
        next(err)
    }
}

// get
export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).json(hotel)
    } catch(err) {
        next(err)
    }
}

// get all
export const getAllHotel = async (req,res,next) => {
    const {min,max,limit,  ...others} = req.query;
    try {
        const hotels=await Hotel.find({...others, cheapestPrice:{$gt: min | 1 , $lt:max || 999}}).limit(limit); 
        res.status(200).json(hotels); 
    } catch(err) {
        next(err);
    }
}

// get all (countDocuments of city name)
export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch(err) {
        next(err)
    }
}

export const countByType = async (req,res,next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})
        
        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"apartment", count:apartmentCount},
            {type:"villa", count:villaCount},
            {type:"resort", count:resortCount},
            {type:"cabin", count:cabinCount},
        ])
    } catch(err) {
        next(err)
    }
}