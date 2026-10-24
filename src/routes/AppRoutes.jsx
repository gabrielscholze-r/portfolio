import React, { useEffect } from 'react'
import Home from '../pages/home/Home.jsx'
import Projects from '../pages/projects/Projects.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound.jsx'
import Devlog from '../pages/devlog/Devlog.jsx'
import Sites from '../pages/sites/Sites.jsx'
import { useLanguage } from '../context/Language.jsx'

const titles = {
    '/': 'title.home',
    '/projects': 'title.projects',
    '/sites': 'title.sites',
    '/devlog': 'title.devlog',
}

export default function AppRoutes() {
    const { pathname } = useLocation()
    const { lang, t } = useLanguage()

    // tab title follows the page and the language
    useEffect(() => {
        document.title = t(titles[pathname.replace(/\/$/, '') || '/'] ?? 'title.notFound')
    }, [pathname, lang]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/sites' element={<Sites />} />
                <Route path='/devlog' element={<Devlog />} />
            </Routes>
        </div>
    )
}
