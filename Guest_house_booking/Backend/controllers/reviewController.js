import Room from "../models/Room.js"
import Review from '../models/Review.js'



export const createReview = async(req,res)=>{

  const roomId = req.params.roomId
  const newReview = new Review({ ...req.body})

  try {

    const savedReview = await newReview.save()


    await Room.findByIdAndUpdate(roomId,{
      $push:{reviews: savedReview._id}

    })

    res.status(200).json({success:true, message:"Review submitted", data:savedReview})
  } catch (error) {
    res.status(500).json({success:true, message:"failed to submit"})
  }
}