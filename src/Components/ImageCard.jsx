import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

// useEffect(()=>{

// })
const ImageCard = ({backgroundImage, imgName}) => {
    const [onHover, setOnHover] = useState(false)
    
    function hoverOver(){
        setOnHover(true)
        console.log('Entered')
}

    function hoverOverFalse(){
        setOnHover(false)
        console.log('Left')
}

useEffect(()=> {
    console.log('weeeeeeeeeeeeeeeee')
},[hoverOver])

  return (
    <div className={`w-120 h-70 rounded-2xl bg-cover bg-center `} 
    // bg-${images}
    onMouseEnter={hoverOver}
    onMouseLeave={hoverOverFalse}
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        {
            onHover && 
            (<div className=''> 
                <Buttons className='text-4xl bg-amber-800 opacity-80 w-90 h-auto mt-24 font-extrabold'>{imgName}</Buttons>
             </div>)
             
        }
    </div>
  )
}

export default ImageCard