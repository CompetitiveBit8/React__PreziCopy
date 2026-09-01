import trainingAi from '../assets/DesignersSection/500MilionPresentationsTrainedOurAI.png'
import designers from '../assets/DesignersSection/Designers.png'
import everyPresentation from '../assets/DesignersSection/EveryPresentationBuiltFromScratch.png'
import builtIn from '../assets/DesignersSection/YourBrandBuiltIn.png'
import businessTeam from '../assets/DesignersSection/Business_Teams_Image.avif'
import InfoCard from './Infocard'



const Designers = () => {
  return (
    <div className='flex flex-col items-center mt-40 gap-8 mx-33'>
        <div>
            <img className='w-70 h-auto' src={designers} alt='500 Milion Presentations Trained Our AI' />
        </div>
        <div className='flex flex-row items-center justify-center mt-10'>
            <span className="text-5xl font-semibold mb-12 ">
                The world's best AI presentation <br></br> designers, at your service
            </span>
        </div>
        <div className='flex flex-row items-center justify-center text-2xl'>
            Prezi AI turns your ideas into unique presentations in seconds, then helps you refine them. It's like
            <br></br> working with a professional designer with decades of experience.
        </div>
        
        <div className='flex flex-col items-center gap-8'>
            <div className='h-140'>
                <InfoCard 
                className={'sm:w-full md:w-auto '}
                text1={'500 million presentations trained our AI'} 
                text2={`Other tools guess at design. Prezi AI draws on the world's 
                    largest presentation dataset to make decisions about layout, hierarchy, 
                        pacing, and visual storytelling. You get the benefit of 15 years of
                        design expertise in every slide.`} 
                imgSrc={trainingAi} 
                />
            </div>
            <div className='flex flex-row gap-45'>
                <div>
                    <InfoCard 
                    // className={'h-2'}
                    text1={'Every presentation built from scratch'} 
                    text2={`Every deck is generated around your content, your structure, and your story. The result looks custom  because it is.`} 
                    imgSrc={everyPresentation} 
                    />
                </div>
                <div>
                    <InfoCard 
                    text1={'Your brand built in'} 
                    text2={`Upload your brand guidelines, colors, and assets
                        or just link to your website. Prezi AI applies your
                        brand consistently across every slide so your
                        presentations look like they came 
                        from your own design team`} 
                    imgSrc={builtIn} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Designers