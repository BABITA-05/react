
import './App.css'
import './styles.css'

import Dashboard from './dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Courses from './courses.jsx'
import Admissions from './admissions.jsx'


function App() {

  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
