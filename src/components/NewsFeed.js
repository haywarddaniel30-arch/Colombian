import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('https://api.example.com/news'); // Replace with your news API
            const data = await response.json();
            setNews(data);
        };

        fetchNews();
        const intervalId = setInterval(fetchNews, 60000); // Fetch news every minute

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Real-Time News Feed</h2>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;
