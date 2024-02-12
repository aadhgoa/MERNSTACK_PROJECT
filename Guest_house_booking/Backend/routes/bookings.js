import express from 'express'
import { verifyAdmin, verifyUser } from '../utilities/verifyToken.js';
import { createbooking, getAllBooking, getAllBookingUserspecific, getSingleBooking } from '../controllers/bookingController.js';


 const router = express.Router()

 router.post('/',verifyUser,createbooking)
 router.get("/:id", verifyUser, getSingleBooking)
 router.get("/", verifyUser, getAllBooking)
 router.get("/user/:id", verifyUser, getAllBookingUserspecific)





 export default router;
