import React from 'react'
import ReviewBox from './ReviewBox'
import Capterra from '../assets/Ratings/Capterra-Logo.svg'
import GetApp from '../assets/Ratings/GetApp-Logo.svg'
import StarFull from '../assets/Ratings/Star-Full.svg'
import StarHalf from '../assets/Ratings/Star-Half.svg'
import PresentationLeader from '../assets/Ratings/PresentationLeader.avif'
import PresentationLeaderEnt from '../assets/Ratings/PresentationLeaderEnterprose.avif'


const WhyTheyLoveUs = () => {
  return (
    <div className='md:flex md:flex-col sm:flex sm:flex-col pt-80 gap-10 mx-8'>
        <span className='md:text-6xl sm:text-4xl font-semibold'>See why our customers love us</span>
        <span className='md:text-3xl sm:text-2xl '>Prezi ranks as the attention-grabbing presentation leader across
            <br></br>industries based on thousands of glowing customer reviews.
        </span>
        <div className='md:grid md:gap-150 md:grid-cols-3 md:w-200 sm:flex sm:flex-col sm:gap-4'>
            <ReviewBox image={Capterra} image2={StarFull} image3={StarHalf} reviews={'2,010'}/> 
            <ReviewBox image={GetApp} image2={StarFull} image3={StarHalf} reviews={'1,934'}/> 
            <ReviewBox image={PresentationLeader} image4={PresentationLeaderEnt}/> 
        </div>
    </div>
  )
}

export default WhyTheyLoveUs