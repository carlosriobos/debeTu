import './App.css'
import Messages from './components/Messages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Saludo from './components/Saludo'
import Navbar from './components/Navbar'
import Users from './components/Users'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Saludo/>}></Route>
        <Route path='/chat' element={<Messages/>}></Route>
        <Route path='/register' element={<Users/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
