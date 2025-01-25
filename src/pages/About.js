import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <h1>About Witherers</h1>
            <p>
                Witherers is a group of friends who share a love for gaming, creativity, and good times. 
                What started as a small circle of Minecraft enthusiasts has grown into a fun and collaborative community 
                where we build, explore, and share our favorite gaming experiences.
            </p>
            <p>
                We’re not just a gaming group—we’re a family. Whether we’re crafting epic Minecraft worlds, 
                competing in friendly challenges, or just hanging out, Witherers is all about creating memories 
                and having a blast together.
            </p>
        </div>
    );
};

export default About;