import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        toast.info('Você está sendo redirecionado para a página inicial...', {
            position: "bottom-right",
            className: "custom-toast",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });

        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);
      
      
    return (
        <div
            className="d-flex justify-content-center align-items-center px-3"
            style={{
                minHeight: 'calc(100vh - 165px)',
                overflowY: 'hidden',
            }}
        >
            <div className="text-center">
                <h1 className="mb-4">
                    Ops...
                </h1>
                <p className="h4 mb-4">
                    Esta página não existe
                </p>
                <i className="bi bi-question-lg display-3"></i>
            </div>
        </div>
    )
}
