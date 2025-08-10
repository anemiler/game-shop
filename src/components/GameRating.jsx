import React, { useState, useEffect } from 'react';
import './gameRating.css';

export default function GameRating({ rating }) {
    const [stars, setStars] = useState([]);

    const generateStars = () => {
     
        if (rating < 1 || rating > 5) {
            return [];
        }
        return Array.from({ length: Math.round(rating) }, (_, i) => i);
    };

    useEffect(() => {
        setStars(generateStars());
    }, [rating]); 

    return (
        <div className='gameRating'>
            {stars.map((_, index) => (
                <i key={index} className="bi bi-star-fill"></i>
            ))}
        </div>
    );
}
