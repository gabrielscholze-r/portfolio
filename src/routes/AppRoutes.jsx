import React from 'react'
import Home from '../pages/home/Home.jsx'
import Projects from '../pages/projects/Projects.jsx'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound.jsx'

export default function AppRoutes() {
    return (
        <div style={{ paddingTop: "80px", }}>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}
