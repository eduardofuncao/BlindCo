import React, { useState, useEffect } from 'react';
import './CookiePopup.css';

const CookiePopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Verifica se o usuário já aceitou os cookies
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (!acceptedCookies) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('acceptedCookies', 'true');
        setShow(false);
    };

    const declineCookies = () => {
        
        setShow(false);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="cookie-popup">
            <p>Nós usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.</p>
            <button className="accept-cookies" onClick={acceptCookies}>Aceitar</button>
            <button className="decline-cookies" onClick={declineCookies}>Recusar</button>
        </div>
    );
};

export default CookiePopup;

