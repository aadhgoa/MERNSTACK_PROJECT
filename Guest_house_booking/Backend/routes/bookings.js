import express from 'express'
import { verifyAdmin, verifyUser } from '../utilities/verifyToken.js';
import { bookingDate, createbooking, getAllBooking, getAllBookingUserspecific, getSingleBooking } from '../controllers/bookingController.js';


 const router = express.Router()

 router.post('/',verifyUser,createbooking)
 router.get("/:id", verifyUser, getSingleBooking)
 router.get("/", verifyUser, getAllBooking)
 router.get("/user/:id", verifyUser, getAllBookingUserspecific)
 router.get("/booked-dates/:roomName", bookingDate)





 export default router;