import React from 'react';
import Navbar from './Navbar';


export default function Header(){
    return(
        <header className='header container'>
            <div className="logo">
                <img src="./senailogoo.png" alt="Logo" srcset="" />
            </div>
            <Navbar />
        </header>
    )
}