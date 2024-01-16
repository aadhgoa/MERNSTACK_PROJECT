import booking from "../models/booking.js"

export const  createbooking = async(req,res)=>{

  const newBooking = new booking(req.body)
  try {
    const savedbooking = await newBooking.save()
    res.status(200).json({success:true, message:"your room in boooked",data:savedbooking} )
    
  } catch (error) {
    res.status(500).json({success:true, message:"Internal Server Error"} )

    
  }
}

export const getSingleBooking = async(req,res)=>{
  const id = req.params.id
  try {
    const book = await booking.findById(id)

    res.status(200).json({success:true, message:"success",data:book} )
    
  } catch (error) {
    
    res.status(404).json({success:true, message:"not found"} )

  }
}

export const getAllBooking = async(req,res)=>{

  try {
    const booksAll = await booking.find();

    res.status(200).json({success:true, message:"success",data:booksAll} )
    
  } catch (error) {
    
    res.status(404).json({success:true, message:"internal server"} )

  }
}

