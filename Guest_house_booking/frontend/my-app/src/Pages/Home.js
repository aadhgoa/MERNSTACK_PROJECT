import React from 'react'
import '../styles/home.css'
import {Container, Row, Col } from 'reactstrap'
import RoomVideo2 from '../images/RoomVideo2.mp4'
import Bathroomvideo from '../images/Bathroomvideo.mp4'
import RoomVideo from '../images/RoomVideo.mp4'
import Globe from '../images/glob.avif'
import Subtitle from './../Shared/Subtitle';
import Search from '../Shared/Search'
import 'remixicon/fonts/remixicon.css'
import ServicesList from '../services/serviceList'
import FeaturedRoomList from '../components/Featured-Rooms/FeaturedRoomList'
import experienceImg from '../images/experience.avif'
import Fullguesthosuepic from '../images/Fullguesthosuepic.jpg'
import MassImagesGallery from '../components/Image_gallery/MassImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from "../Shared/Newsletter";
import { useRef } from 'react'

const Home = () => {

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleHover = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseOut = (videoRef) => {
    videoRef.current.pause();
  };


  return (
    <>
    <section className='HOME'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='Room-Content'>
              <div className="Room_subtitle d-flex align-item-center">
                <Subtitle subtitle={"know Before you go"}/>
                <img src={Globe} alt=""/>
              </div>
              <h1>Best Guest House Here 
                 <span className='highlight'> memories</span> </h1>
                <p>"Step into a world of comfort and style with our meticulously designed rooms that redefine luxury living. 
                  Each space is a harmonious blend of modern elegance and thoughtful functionality, 
                  offering a sanctuary where relaxation meets sophistication. Immerse yourself in the plush ambiance of our well-appointed rooms,
                   meticulously curated to cater to your every need. From cozy retreats to spacious suites, discover a haven that transcends ordinary accommodation.
                    Elevate your stay with us, where every room is a testament to refined living and unparalleled hospitality."</p>
            </div>
          </Col>
          <Col lg='2'>
        <div
          className='room_img_box'
          onMouseOver={() => handleHover(videoRef1)}
          onMouseOut={() => handleMouseOut(videoRef1)}
        >
          <video src={RoomVideo2} alt='' ref={videoRef1} controls={false} muted />
        </div>
      </Col>
      <Col lg='2'>
        <div
          className='room_img_box'
          onMouseOver={() => handleHover(videoRef2)}
          onMouseOut={() => handleMouseOut(videoRef2)}
        >
          <video src={RoomVideo} alt='' ref={videoRef2} controls={false} muted />
        </div>
      </Col>
      <Col lg='2'>
        <div
          className='room_img_box'
          onMouseOver={() => handleHover(videoRef3)}
          onMouseOut={() => handleMouseOut(videoRef3)}
        >
          <video src={Bathroomvideo} alt='' ref={videoRef3} controls={false} muted />
        </div>
      </Col>
        </Row>
        <Search/>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
        <Col lg='3'>
          <h5 className='service_title'>What we Serve</h5>
          <h2 className='service_subtitle'>We Offer our best services</h2>
        </Col>
        <ServicesList />
        </Row>
      </Container>
    </section>
    <br></br><br></br>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className='featured_room-title'>Our featured Rooms</h2>
          </Col>
          <FeaturedRoomList/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='5'>
            <div className='experience_content'>
              <Subtitle subtitle={'Experience'}></Subtitle>
              <h2>
                with our all Experience <br></br>we will serve you
                </h2>
              <p>
                We will serve you with our best service
                <br/>
                you will have a best Experience
              </p>
            </div>
            <div className='counter_wrapper'>
              <div className='counter_box'>
                <span>500+</span>
                <h6>Happy Customers</h6>
              </div>
              <div className='counter_box'>
                <span>10+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className='counter_box'>
                <span>5</span>
                <h6>Months Experince</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className='experience_img'>
              <img src={experienceImg} alt=''/><span><img src={Fullguesthosuepic} alt=''/></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* { =================gallery section=========
    } */}
    <section>
      <Container>
        <Row>
          <Col lg='11'>
            <Subtitle subtitle={"Gallery"}></Subtitle>
            <h2 className="gallery_title">Visit our Customers Room gallery</h2>
          </Col>
          <Col lg='11'>
            <MassImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* =======testimonial section */}
    <br/>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Customer Love"}/>
            <h2 className='testimonial_title'>What our Customer Say about us</h2>
          </Col>
          <Testimonial/>
        </Row>
      </Container>
    </section>
    <Newsletter/>

    </>
  )
}

export default Home