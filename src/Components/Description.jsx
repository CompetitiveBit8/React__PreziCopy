import descVid from '../assets/DescriptionFIles/craft_optimized_video.mp4'
// import { FileText, Clock, MessageSquare, FileDown } from 'lucide-react'
// import { FiFileCheck, FiClock, FiMessageSquare, FiFolder } from 'react-icons/fi'


const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-blue-800 md:w-12xl'>
        <div className='flex flex-col items-center justify-center gap-8'>
            <span className='text-6xl text-white font-semibold'>Just describe what you need</span>
            <span className='text-2xl text-white'>Prezi AI creates your presentation through conversation. Tell it your goal, upload your files, refine as 
                <br></br>you go. It's like briefing a designer who already knows what works.</span>
        </div>
        <div className='md:grid md:grid-cols-2 md:w-7xl mb-24 gap-8 pt-12 grid-cols- pl-8 items-center justify-center'>
            <div ><video className='w-xl rounded-2xl' src={descVid} autoPlay muted loop playsInline /></div>
            <div className='flex flex-col gap-5'>
                <li className='list-none'>
                    <span>
                        {/* <FiFileCheck size={18}/> */}
                        <h2 className='text-2xl text-white font-semibold'>Import anything to get started</h2>
                    </span>
                    <h4 className ='text-xl text-white'>
                        Drop in a PPTX, PDF, DOCX, or paste your notes. 
                        Prezi AI turns your existing work into a polished 
                        presentation
                    </h4>
                </li>
                <li className='list-none'>
                    <span>
                        {/* <Clock/> */}
                        <h2 className='text-2xl text-white font-semibold'>Generate slides in seconds, not hours</h2>
                    </span>
                    <h4 className ='text-xl text-white'>
                        Prezi AI is trained on 500 million real presentations. 
                        It gets the design right the first time.
                    </h4>
                </li>
                <li className='list-none'>
                    <span>
                        
                        <h2 className='text-2xl text-white font-semibold'>Refine through conversation</h2>
                    </span>
                    <h4 className ='text-xl text-white'>
                        Ask for changes the way you'd talk to a colleague. 
                        Or make quick edits right on the slides. 
                        No learning curve either way.
                    </h4>
                </li>
                <li className='list-none'>
                    <span>
                        
                        <h2 className='text-2xl text-white font-semibold'>Export and share anywhere</h2>
                    </span>
                    <h4 className ='text-xl text-white'>
                        Download as PPTX, PDF, or weblink. 
                        Present directly or share a link.
                    </h4>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Description