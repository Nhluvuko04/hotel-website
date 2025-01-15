import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Indulge in the ultimate getaway with our exclusive package tailored to elevate your stay at [Hotel Name]. Unwind in luxurious accommodations adorned with plush furnishings and breathtaking views, where every detail has been meticulously curated to ensure your utmost comfort and relaxation.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
