import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.jalirani.com/files/barstool.json');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Barstool Sports Articles</h1>
      {articles.map((article) => (
        <div key={article.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <img
            src={`${article.thumbnail.location}${article.thumbnail.images.small}`}
            alt="Article Thumbnail"
            style={{ marginRight: '20px', maxWidth: '200px', maxHeight: '150px' }}
          />
          <div>
            <h2 style={{ margin: '0 0 10px' }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p style={{ margin: '0' }}>Author: {article.author.name}</p>
            <img
              src={article.author.avatar}
              alt="Author Avatar"
              style={{ marginTop: '5px', maxWidth: '60px', maxHeight: '60px' }}
            />
            <p style={{ margin: '0' }}>Comment Count: {article.comment_count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
