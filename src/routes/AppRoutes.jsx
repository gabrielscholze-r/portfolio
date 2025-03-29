import React from 'react'
import Home from '../pages/Home/Home.jsx'
import Projects from '../pages/projects/Projects.jsx'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
    return (
        <div style={{ paddingTop: "80px", }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}
