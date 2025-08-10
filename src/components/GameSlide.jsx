import React from 'react';

export default function GameSlide({ game, active, toggleVideo }) {
    return (
        <div className="gameSlider">
            <img src={game.img} alt={`Image of ${game.title}`} />
            <div className={`video ${active ? "active" : ""}`}>
                <iframe
                    width="1280"
                    height="700"
                    src={game.trailer}
                    title={`${game.title} Trailer`}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                    <a href="#" className="orderBtn">Order Now</a>
                    <a
                        href="#"
                        className={`playBtn ${active ? 'active' : ''}`}
                        onClick={e => {
                            e.preventDefault(); 
                            toggleVideo();
                        }}
                    >
                        <span className='pause'>
                            <i className="bi bi-pause"></i>
                        </span>
                        <span className='play'>
                            <i className="bi bi-play-fill"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
