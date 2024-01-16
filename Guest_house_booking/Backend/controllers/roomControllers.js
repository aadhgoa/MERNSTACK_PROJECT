import Room from '../models/Room.js';

// create new Room
export const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedRoom,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'failed to create. Try again', error });
  }
};


//update Room
export const updateRoom = async(req,res)=>{
  const id = req.params.id
  try {
    const updatedRoom = await Room.findByIdAndUpdate(id,{
      $set:req.body
    }, {new:true})
    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedRoom,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update',
      
    });
    
  }
};
//Delete Room
export const deleteRoom = async(req,res)=>{
  const id = req.params.id;
  try {
    await Room.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete',
      
    });
    
  }
};
//uGet ssingle Room
export const GetSingleRoom = async(req,res)=>{
  const id = req.params.id;
  try {
    const room = await Room.findById(id).populate('reviews');
    ;
    res.status(200).json({
      success: true,
      message: 'Successfully',
      data:room,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Not Found',
      
    });
}};
//get Room
export const GetAllRoom = async(req,res)=>{
      const page = parseInt(req.query.page)

  try {

    const room = await Room.find({}).populate('reviews').skip(page * 8).limit(8);
    res.status(200).json({
      success: true,
      count:room.length,
      message: 'Successfully',
      data:room,
    })
    
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Not Found',
      
    });
    
  }
};


//get Room by Search

export const getRoomBySearch = async(req,res)=>{

  const Rooms = new RegExp(req.query.Rooms, 'i')// i means case sensitive
  const adults = parseInt(req.query.adults)


  try {
    
    //gte means greater than equal
    const rooms = await Room.find({Rooms, adults:{$gte:adults}}).populate('reviews')
    res.status(200).json({
      success: true,
      message: 'Successfull',
      data:rooms
      
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Not Found',
      
    });
    
    
  }
}

export const GetFeaturedRoom = async (req,res)=>{

try {

const room = await Room.find({featured:true}).populate('reviews')

res.status(200).json({
  success: true,
  message: 'Successfully',
  data:room,
})

} catch (error) {
res.status(404).json({
  success: false,
  message: 'Not Found',
  
});

}
};

//get room Counts

export const GetRoomCount = async(req,res)=>{
  try {
    const Roomcount = await Room.estimatedDocumentCount()

    res.status(200).json({success:true, data:Roomcount})
    
  } catch (error) {
    res.status(500).json({success:false, message:"failed to fetch"})
  }
}