import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Download from './pages/Download';
import styles from './styles/App.module.css';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/download" element={<Download />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;