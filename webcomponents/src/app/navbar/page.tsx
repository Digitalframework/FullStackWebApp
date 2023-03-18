'use client';
import styles from './Navbar.module.css'
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function Navbar() {
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const {height,width} = useWindowDimensions();

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
    <div className={styles.wrapper}>  
        <header>
            <nav className={styles.navbar} style={{height:0.15*height}}>
                <div className={styles.logo}>
                    <a href="#">
                    <img src="https://img.freepik.com/free-vector/woodcutter-vector-illustration-head-skeleton-beanie-hat-crossed-saws-woodwork-text-lumberjack-job-craft-concept-logo_74855-12629.jpg?w=740&t=st=1674058850~exp=1674059450~hmac=4b20c9a91df5041c0ecbf3bf307c9e7631900bfad154c1b70230c5e994efb2ed" alt="Hand" width="120" height="120">
                    </img>
                    </a>
                </div>
                <button className={styles.togglebutton} onClick={toggleHamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div className={styles.navlist} style={{display: hamburgerOpen || width >= 805 ? 'flex' : 'none'}}>
                    <ul>
                        <li ><a href="/layout">Home</a></li>
                        <li ><a href="/projects">Projekte</a></li>
                        <li ><a href="/aboutUs">ÜberUns</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>      
    )
}