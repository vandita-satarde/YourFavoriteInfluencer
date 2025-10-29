import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddProducts from './pages/AddProducts'
import Login from './pages/Login'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/AddProducts' element={<AddProducts />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
