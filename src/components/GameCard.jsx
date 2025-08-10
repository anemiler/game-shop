import React, { useContext } from 'react';
import './gameCard.css';
import GameRating from './GameRating';
import { AppContext } from '../App';

export default function GameCard({ game }) {

    const { library, setLibrary, bag, setBag } = useContext(AppContext);
    const handleAddToLibrary = game => {
        setLibrary([...library, game])
    }


    const handelRemoveFromLibrary = game => {
        setLibrary(library.filter(item => item._id !== game._id))
    }
    const handleAddToBag = game => {
        if (bag.includes(game)) return;
        setBag([...bag, game]);
    };

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gameCard">
                <img
                    src={game.img}
                    alt={`Image of ${game.title}`}
                    className='img-fluid'
                />
                <a
                    href="#"
                    className={`like ${library.includes(game) ? 'active' : ''}`}
                    onClick={
                        library.includes(game)
                            ? () => handelRemoveFromLibrary(game)
                            : () => handleAddToLibrary(game)

                    }
                    aria-label={`Like ${game.title}`}
                >
                    <i className="bi bi-heart-fill"></i>
                </a>
                <div className="gameFeature">
                    <span className="gameType">{game.level}</span>
                    <GameRating rating={game.rating} />
                </div>
                <div className="gameTitle mt-4 mb-3">
                    {game.title}
                </div>
                <div className="gamePrice">
                    {game.discount !== 0 && (
                        <>
                            <span className='discount'>
                                <i>{(game.discount * 100).toFixed(0)}%</i>
                            </span>
                            <span className="prevPrice">
                                ${game.price.toFixed(2)}
                            </span>
                        </>
                    )}
                    <span className='currentPrice'>
                        ${((1 - game.discount) * game.price).toFixed(2)}
                    </span>
                </div>
                <a
                    href="#"
                    className="addBag"
                    onClick={() => handleAddToBag(game)}
                    aria-label={`Add ${game.title} to bag`}
                >
                    <i className="bi bi-bag-plus-fill"></i>
                </a>
            </div>
        </div>
    );
}
