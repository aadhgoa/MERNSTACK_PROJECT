import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin:true,
  credentials:true
}

// Database connection
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb connected");
  } catch (error) {
    console.log("Mongodb database connection failed");
  }
};

// For testing
app.get('/', (req, res) => {
  res.send("API is working");
});

// Middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute)
app.use('/api/v1/rooms', roomRoute);
app.use("/api/v1/users", userRoute );
app.use("/api/v1/reviews", reviewRoute)
app.use("/api/v1/booking", bookingRoute)

// Connect to the database and start the server
    app.listen(port, () => {
      connect()
      console.log("Server listening on port ", port);
  
    });