import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to Witherers</h1>
            <p className={styles.subtitle}>
                Hey there! Welcome to <strong>Witherers</strong>, a group of friends who love gaming, creativity, and having fun together. 
                Connect with the crew and let’s create some unforgettable memories!
            </p>
        </div>
    );
};

export default Home;