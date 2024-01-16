import express from 'express';
import  
{GetAllRoom,
  GetFeaturedRoom,
  GetRoomCount,
  GetSingleRoom,
createRoom, deleteRoom, getRoomBySearch, updateRoom}  from '../controllers/roomControllers.js';
import { verifyAdmin } from '../utilities/verifyToken.js';



const router = express.Router();


// create New Room 
router.post('/', verifyAdmin, createRoom );
//update
router.put('/:id', verifyAdmin, updateRoom );
//delete
router.delete('/:id',verifyAdmin,deleteRoom );
//get
router.get('/',GetAllRoom );

//get single room
router.get('/:id',GetSingleRoom );

//Room by search
router.get("/search/getRoomBySearch", getRoomBySearch)
//room by featured
router.get("/search/getFeaturedRooms", GetFeaturedRoom)
//Room count
router.get("/search/getRoomCount", GetRoomCount)


export default router;
