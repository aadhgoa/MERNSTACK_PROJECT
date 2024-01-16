import React from 'react'
import {Col} from 'reactstrap'
import weatherimg from '../images/weather1.jpg'
import guideimg from '../images/guide.jpg'
import customizationimg from '../images/Customization.png'
import  ServicesCard from './serviceCard'

const serviceData = [

  {
    imgUrl: weatherimg,
    title: "calculate weather",
    desc: "Good weather"
  },
  {
    imgUrl: guideimg,
    title: "Best Tour guide",
    desc: "best tour guiding"
  },
  {
    imgUrl: customizationimg,
    title: "customize",
    desc: "customize yours"
  },
]


const ServicesList = () => {
  return (
    <>
    {
      serviceData.map((item,index)=>
      (
      <Col lg='3' md="6" sm="12" className='mb-4' key={index}>
        <ServicesCard item={item}/>
        </Col>

      
    ))}
    </>
  )
}

export default ServicesList