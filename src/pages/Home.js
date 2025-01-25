import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Home.module.css';
import image1 from '../assets/image1.jpg'; // Replace with your image paths
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Home = () => {
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1, // Scroll one image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval (3 seconds)
        pauseOnHover: true, // Pause on hover
        arrows: false, // Hide navigation arrows
    };

    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <Slider {...settings}>
                    <div className={styles.slide}>
                        <img src={image1} alt="Slide 1" className={styles.carouselImage} />
                        <div className={styles.welcomeMessage}>
                            <h1>Welcome to Witherers</h1>
                            <p className={styles.subtitle}>
                                A group of friends who love gaming, creativity, and having fun together.
                            </p>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img src={image2} alt="Slide 2" className={styles.carouselImage} />
                        <div className={styles.welcomeMessage}>
                            <h1>Welcome to Witherers</h1>
                            <p className={styles.subtitle}>
                                A group of friends who love gaming, creativity, and having fun together.
                            </p>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img src={image3} alt="Slide 3" className={styles.carouselImage} />
                        <div className={styles.welcomeMessage}>
                            <h1>Welcome to Witherers</h1>
                            <p className={styles.subtitle}>
                                A group of friends who love gaming, creativity, and having fun together.
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;