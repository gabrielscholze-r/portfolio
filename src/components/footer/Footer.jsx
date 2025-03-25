import React from 'react'
import './Footer.css'
import { toast } from 'react-toastify';
export default function Footer() {
    function copyMail() {
        navigator.clipboard.writeText("gabrielscholze24@gmail.com")
        toast.success('Email copiado com sucesso!', {
            position: "bottom-right",
            className: "custom-toast",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }
    return (
        <footer className='footer py-4 align-items-center d-flex w-100'>
            <div className='d-flex justify-content-center align-items-center mx-auto'>
                <a className='px-3 footer-link' target='_blank' href='https://www.linkedin.com/in/gabriel-scholze-rosa-28b9ab1b2/'>
                    <i className="bi bi-linkedin icon-footer"></i>
                </a>
                <a target="_blank" className='px-3 footer-link' onClick={() => { copyMail() }}>
                    <i className="bi bi-envelope-fill icon-footer"></i>
                </a>
            </div>
        </footer>
    )
}
