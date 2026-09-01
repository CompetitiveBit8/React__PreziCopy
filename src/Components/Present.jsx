import Buttons from "./Buttons"
import videoClip from '../assets/DescriptionFIles/present_brooklyn_prezi.mp4'

const Present = () => {
  return (
    <div className="grid grid-cols-1 place-items-center w-210 md:mx-8 md:w-lvw sm:mx-4 sm:w-lvw">
        <div className="grid grid-cols-1 mt-30 mb-20 place-items-center">
            <span className="text-6xl font-semibold mb-12">Present your way</span>
            <span className="text-2xl">Choose a classic slide presentation
                or Prezi's <br></br>dynamic zooming format when 
                it's time to present.
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-2 place-items-center">
            <Buttons className="bg-blue-100 w-auto rounded-md md:w-60 h-15 text-2xl text-blue-700 font-semibold" children={'Zooming Prezi'}/>
            <Buttons className="rounded-md w-40 h-15 border-2 text-2xl text-blue-700 font-semibold" children={'Slides'}/>
        </div>
        <div className="grid grid-cols-1 place-items-center mt-8 w-lvw md:w-230 sm:w-lvw rounded-md bg-amber-50">
            <video className='rounded-md sm:w-150 sm:md:my-12' src={videoClip} autoPlay muted loop playsInline/>
        </div>
    </div>
  )
}

export default Present