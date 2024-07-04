import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import About from './screens/About.jsx'
import './index.css'
import SchoolOfData from './screens/SchoolOfData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/schoolOfData" element={<SchoolOfData />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
