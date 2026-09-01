import { Link } from 'react-router-dom'
import preziLogo from '../assets/prezi-logo-blue.svg';
import Homepage from '../Pages/Homepage';
import Button from './Buttons';

const MenuBar = () => {
  return (
    <div className='md:flex md:flex-row hidden justify-end list-none gap-3 no-underline pt-2 text-2xl font-medium bg-white shadow-red-800'>
        <div className='mr-auto pl-4 mt-1'>
            <Link to={Homepage}><img className='w-34 h-auto' src={preziLogo} /></Link>
        </div>
        <div className='flex flex-row text-4 gap-3'>
            <li className='hover:bg-gray-100 rounded-md'>
            <Link to='/teams'>
                <Button>Pricing</Button>
            </Link>
          </li>
            <li className='hover:bg-gray-100 rounded-md'>
            <Link to='/teams'>
                <Button>Prezi-AI</Button>
            </Link>
          </li>
        </div>
        <div className='w-0.5 h-auto bg-gray-300 my-3'></div>
        <div className=''>
          <li className='hover:bg-gray-100 h-16 rounded-md'>
            <Link to='/teams'>
                <Button>Login</Button>
            </Link>
          </li>
        </div>
        <div className="flex flex-row gap-2 mr-2">
            <Link to='/teams'>
                <Button className='border-2 h-16 hover:bg-gray-100'>Teams</Button>
            </Link>
            <Link to='/start'>
                <Button className='w-40 h-16 hover:bg-blue-900 bg-blue-700 text-white border-2'>
                    Get Started
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default MenuBar

