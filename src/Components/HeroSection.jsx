import React, { useState } from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import ImageCard from './ImageCard'

//Scroll imgs
import Sep from '../assets/Sep.avif'
import SupportTeam from '../assets/SupportTeam.avif'
import DIabetesTreat from '../assets/DIabetesTreat.avif'
import Theraphy from '../assets/Theraphy.avif'
import EatingForEnergy from '../assets/EatingForEnergy.avif'
import Phase from '../assets/Phase.avif'

//worked with
import Airbus from '../assets/WorkedWith/Airbus.svg'
import Autodesk from '../assets/WorkedWith/Autodesk.svg'
import BMW from '../assets/WorkedWith/BMW-1.svg'
import Cisco from '../assets/WorkedWith/Cisco.svg'
import Discovery from '../assets/WorkedWith/Discovery.svg'
import Fujitsu from '../assets/WorkedWith/Fujitsu.svg'
import Salesforce from '../assets/WorkedWith/Salesforce.svg'
import Sony from '../assets/WorkedWith/Sony.svg'
import Staples from '../assets/WorkedWith/Staples.svg'
import Description from './Description'


const HeroSection = () => {
    const [images, setImages] = useState ([
                    {id:1, image:Sep, name:'Sepsis'}, 
                    {id:2, image: SupportTeam, name:'Support Team'},
                    {id:3, image: DIabetesTreat, name:'DIabetes Treatment'},
                    {id:4, image: Theraphy, name:'Theraphy'},
                    {id:5, image: EatingForEnergy, name:'Eating For Energy'},
    ])


  return (
    <div className='flex flex-col items-center text-center pt-40 bg-gradient-to-t from-blue-800 to-white'>
        <span className='text-6xl font-semibold'>Better presentations, faster with <br></br> AI</span>
        <span className='text-2xl font-semibold  mt-4'>Describe what you need. Prezi AI delivers 
              studio-quality presentations through a <br></br> simple conversation. No editor to learn.
        </span>
        <Link to='/try-Prezi'>
            <Buttons className='mt-12 rounded-xl shadow-2xl bg-gradient-to-r from-red-400 to-orange-500 w-63 h-21 text-white text-2xl font-semibold'>Try Prezi for free</Buttons>
        </Link>
        <span className='flex flex-row pt-8 text-[1.4rem] gap-2'>
            Looking for education discounts?
            <Link className='underline text-blue-600' to='/discount'> Click Here.</Link>
        </span>
        <span className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-12 text-2xl font-semibold'> 
            <Link to='/Education' ><Buttons className='w-40 h-15 bg-white'>Education</Buttons></Link>
            <Link to='/Marketing' ><Buttons className='w-40 h-15 bg-white'>Marketing</Buttons></Link>
            <Link to='/Training' ><Buttons className='w-40 h-15 bg-white'>Training</Buttons></Link>
            <Link to='/Sales' ><Buttons className='w-40 h-15 bg-white'>Sales</Buttons></Link>
            <Link to='/Technology' ><Buttons className='w-40 h-15 bg-white'>Technology</Buttons></Link>
            <Link to='/Healthcare' ><Buttons className='w-40 h-15 bg-white'>Healthcare</Buttons></Link>
        </span>
        <span className='lg:flex lg:flex-row gap-4 py-8 w-400 scrollbar-none overflow-clip overflow-x-scroll sm:hidden '>
            {images.map((image)=>(
                <div className='' key={image.id}>
                    <ImageCard imgg={image.image} imgName={image.name} backgroundImage={image.image}/>
                </div>
            ))}
        </span>
        <span className='pt-16 pb-12 items-center grid grid-cols sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {/* <div className='flex flex-row gap-8 '> */}
                <img className='w-22 h-auto' src={Cisco} alt='Cisco'/>
                <img className='w-22 h-auto' src={Autodesk} alt='Autodesk'/>
                <img className='w-22 h-auto' src={Salesforce} alt='Salesforce'/>
                <img className='w-22 h-auto' src={Airbus} alt='Airbus'/>
                <img className='w-22 h-auto' src={Staples} alt='Staples'/>
                <img className='w-22 h-auto' src={Sony} alt='Sony'/>
                <img className='w-22 h-auto' src={BMW} />
                <img className='w-22 h-auto' src={Fujitsu} />
                <img className='w-22 h-auto' src={Discovery} />
            {/* </div> */}
        </span>
    </div>
  )
}

export default HeroSection