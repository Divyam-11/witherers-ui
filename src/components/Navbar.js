import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/Witherers-25-1-2025.png'; // Adjust the path to your logo

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <img src={logo} alt="Witherers Logo" className={styles.logo} />
                <div className={styles.links}>
                    <button onClick={() => window.scrollTo(0, 0)} className={styles.link}>Home</button>
                    <button onClick={() => window.scrollTo(0, document.getElementById('about').offsetTop)} className={styles.link}>About</button>
                    <button onClick={() => window.scrollTo(0, document.getElementById('download').offsetTop)} className={styles.link}>Download</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;