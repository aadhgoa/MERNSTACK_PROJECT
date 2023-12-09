import roomImg1 from "../images/Room1H1.jpg";
import roomImg2 from "../images/Room2H1.jpg";
import roomImg3 from "../images/Room3H1.jpg";
import roomImg4 from "../images/Room4H1.jpg";



const RoomData = [
  { id:1,
    Rooms: "Deluxe",
    adults: 2,
    images: roomImg1,
    costPerDay: 2500,
    description: "Experience the epitome of luxury in our Deluxe Room. This spacious and elegantly designed room offers a breathtaking view of the surroundings. Indulge in the finest amenities and make your stay truly unforgettable.",
    reviews: [
      {
        name:"Jhon doe",
        rating: 4.6,
      },
      {
        name:"Jhon doe",
        rating: 4.1,
      },
      
    ],
    avgRating: 4.5,
    featured: false
  },
  { id:2,
    Rooms: "Standard",
    adults: 2,
    images:  roomImg2, 
    costPerDay: 2500,
    description: "Experience comfort and style in our Standard Room. This well-appointed room offers a cozy ambiance and top-notch services during your stay. Immerse yourself in relaxation.",
    reviews: [],
    avgRating: 4.5,
    featured: true
  },
  { id:3,
    Rooms: "Standard",
    adults: 2,
    images: roomImg3,
    costPerDay: 2500,
    description: "Enjoy a delightful stay in our Standard Room. With modern amenities and a welcoming atmosphere, this room is perfect for a relaxing getaway.",
    reviews: [],
    avgRating: 4.5,
    featured: true
  },
  { id:4,
    Rooms: "Deluxe",
    adults: 2,
    images: roomImg4,
    costPerDay: 2500,
    description: "Indulge in luxury with our Deluxe Room. Experience a blend of sophistication and comfort with top-notch amenities and personalized services.",
    reviews: [],
    avgRating: 4.5,
    featured: true
  }
];

export default RoomData;
