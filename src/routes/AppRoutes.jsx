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

const SITE_URL = 'https://gabrielscholze.tech'

// creates, updates or (when the last attribute is null) removes a tag in <head>
function setHeadTag(selector, tag, attrs) {
    let el = document.head.querySelector(selector)
    const values = Object.values(attrs)
    if (values[values.length - 1] === null) {
        el?.remove()
        return
    }
    if (!el) {
        el = document.createElement(tag)
        document.head.appendChild(el)
    }
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
}

export default function AppRoutes() {
    const { pathname } = useLocation()
    const { lang, t } = useLanguage()

    // tab title follows the page and the language
    useEffect(() => {
        document.title = t(titles[pathname.replace(/\/$/, '') || '/'] ?? 'title.notFound')
    }, [pathname, lang]) // eslint-disable-line react-hooks/exhaustive-deps

    // each page is its own canonical URL; unknown routes are kept out of search results
    useEffect(() => {
        const path = pathname.replace(/\/$/, '') || '/'
        setHeadTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: titles[path] ? SITE_URL + path : null })
        setHeadTag('meta[name="robots"]', 'meta', { name: 'robots', content: titles[path] ? null : 'noindex' })
    }, [pathname])

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
