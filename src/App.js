import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedSelector from './components/FeedSelector';
import ThemeToggle from './components/ThemeToggle';
import SkeletonLoader from './components/SkeletonLoader';
import YouTubeFeed from './components/YouTubeFeed';
import RSSFeed from './components/RSSFeed';

const App = () => {
    return (
        <div>
            <Header />
            <FeedSelector />
            <ThemeToggle />
            <SkeletonLoader />
            <YouTubeFeed />
            <RSSFeed />
            <Footer />
        </div>
    );
};

export default App;
