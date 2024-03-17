import React, { useEffect, useState } from 'react';


function SendClicks(){
    const [clickPositions, setClickPositions] = useState<{ x: number; y: number }[]>([]);
 
    const sendClickPositions = async () => {
    try {
        const response = await fetch('http://localhost:5000/mouse-clicks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clickPositions),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error sending data:', error);
    }
    };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
        setClickPositions((prev) => [...prev, { x: event.screenX, y: event.screenY }]);
        };

        window.addEventListener('click', handleClick);

        return () => {
        window.removeEventListener('click', handleClick);
        };
    }, []);
    return(
        <>
            <div>
            <h1>Posições clicadas</h1>
            <ul>
                {clickPositions.map((pos, index) => (
                <li key={index}>X: {pos.x}, Y: {pos.y}</li>
                ))}
            </ul>
            <button onClick={sendClickPositions}>Send Clicks</button>
            </div>
        </>
    );
    }

export default SendClicks