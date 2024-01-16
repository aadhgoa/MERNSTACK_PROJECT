import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(

  {
    Rooms:{
      type:String,
      required:true,
      unique:true,

    },
    adults:{
      type:Number,
      required:true,
    },
    images:{
      type:String,
      required:true,
    },
    costPerDay:{
      type:Number,
      required:true,
    },
    description:{
      type:String,
      required:true
    },
    reviews:[
      {
        type:mongoose.Types.ObjectId,
        ref:"Review"
      },
    ],

    featured:{
      type:Boolean,
      default:false,
    },
  },
  {timestamps:true}

)

export default mongoose.model("Room",  roomSchema);