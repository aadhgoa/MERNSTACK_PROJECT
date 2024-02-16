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


export const getAllBookingUserspecific = async (req, res) => {
  try {
    console.log(req.params.id)
    const userId = req.params.id; // Assuming user ID is stored in the token
    const bookings = await booking.find({ userId });
    res.status(200).json({ success: true, message: "Success", data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const bookingDate = async(req,res)=>{
  try {
    const { roomName } = req.params;
    // Query the database to find all bookings for the specified room
    const bookings = await booking.find({ roomName });
    // Extract booked dates from the bookings
    const bookedDates = bookings.map((booking) => booking.bookAt.toISOString().split('T')[0]);
    // Return the booked dates as a response
    res.status(200).json({ success: true, bookedDates });
  } catch (error) {
    console.error('Error retrieving booked dates:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
