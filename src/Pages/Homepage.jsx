import MenuBar from '../Components/MenuBar'
import HeroSection from '../Components/HeroSection'
import Description from '../Components/Description'
import Present from '../Components/Present'
import WhyTheyLoveUs from '../Components/WhyTheyLoveUs'
import Designers from '../Components/Designers'

const Homepage = () => {
  return (
    <div className='m-0'>
        <HeroSection />
        <Description/>
        <Present/>
        <WhyTheyLoveUs/>
        <Designers/>
    </div>
  )
}

export default Homepage