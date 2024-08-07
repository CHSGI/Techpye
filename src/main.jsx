import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import About from './screens/About.jsx'
import './index.css'
import SchoolOfData from './screens/SchoolOfData.jsx'
import SchoolOfDesign from './screens/SchoolOfDesign.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/schoolOfData" element={<SchoolOfData />} />
        <Route path="/schoolOfDesign" element={<SchoolOfDesign />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
