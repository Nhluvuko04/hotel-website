import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Check out our  hotel' />

            <p>
               

     Welcome to Raddison hotel

  Nestled in the heart of [Location],  Raddison stands as an 
epitome of luxury, comfort, and unparalleled hospitality. Since
 our inception in 2024, we have been dedicated to providing our
  guests with an unforgettable experience that transcends the ordinary.

</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
