import React, { useContext } from 'react';
import './header.css';
import { AppContext } from '../App';
import userImg from '../img/user.png';
import { Link } from 'react-router-dom';

export default function Header({ active, handleToggleActive }) {
    const { library, bag } = useContext(AppContext);
    return (
        <header>
            <a href="#" className={`menu ${active ? 'active' : ''}`} onClick={(e) => {
                e.preventDefault();
                handleToggleActive();
            }}>
                <i className="bi bi-sliders"></i>
            </a>

            <div className="userItems">
                <Link to="/library" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">{library.length}</span>
                </Link>
                <a href="#" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">{bag.length}</span>
                </a>
                <div className="avatar">
                    <a href="#">
                        <img src={userImg} alt="User Image" />
                    </a>
                    <div className="user">
                        <span> User Name</span>
                        <a href="#"> View Profile</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
