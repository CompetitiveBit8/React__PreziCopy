import React from 'react'

const ReviewBox = ({image, image2, image3, image4, reviews}) => {
  return (
    <div className={`md:grid md:grid-cols-1 place-items-center gap my-8 sm:w-130 sm:h-70 md:w-140 md:gap-2 h-90 border-2 border-gray-300 rounded-2xl py-8`} >
            <div className='flex flex-row gap-12'>
                {image && (<img className='w-50 h-auto' src={image}/>)}
                {image4 && (<img className='w-50 h-auto' src={image4}/>)}
            </div>
            <div className='grid grid-cols-5 p-4 w-60 h-auto'>
                {image2 && (<img className='w-60 h-auto' src={image2}/>)}
                {image2 && (<img className='w-60 h-auto' src={image2}/>)}
                {image2 && (<img className='w-60 h-auto' src={image2}/>)}
                {image2 && (<img className='w-60 h-auto' src={image2}/>)}
                {image3 && (<img className='w-60 h-auto' src={image3}/>)}
            </div>
            <div className=''>
                {
                    reviews && 
                    (
                        <div className='flex flex-row gap-2 text-gray-600'>
                            <span className='text-2xl font-bold'> 4.6 </span>
                            <div className='w-0.5 h-8 bg-gray-200'></div>
                            <span className='text-2xl'> {reviews}</span>
                            <h3 className='text-2xl'>Reviews</h3>
                        </div>
                    )
                }
        </div>
    </div>
  )
}

export default ReviewBox