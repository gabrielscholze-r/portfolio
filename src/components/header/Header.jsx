import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='header px-5'>
            <div className='w-25 text-center align-items-center'>
                <h3 className='logo-text my-auto'>GABRIEL SCHOLZE</h3>
            </div>
            <div className='w-75 d-flex justify-content-end'>
                <NavLink className='px-3 navlink' to='/'>    
                    Home
                </NavLink>
                <NavLink className='px-3 navlink' to='Projects'>
                    Projects
                </NavLink>

            </div>

        </div>
    )
}
