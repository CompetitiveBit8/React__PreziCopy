import {Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import MenuBar from './Components/MenuBar'


function App() {

  return (
    <main>
      <MenuBar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        {/* <Route path='' */}
      </Routes>
    </main>
  )
}

export default App
