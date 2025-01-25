import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Download from './pages/Download';
import styles from './styles/App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Home />
            <About />
            <Download />
            <Footer />
        </div>
    );
}

export default App;