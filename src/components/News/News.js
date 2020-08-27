import React, { useEffect } from 'react';

import './News.css';
import Article from './Article';

const News = ({
  isError,
  articles,
  isLoading,
  loadingNewsData,
  }) => {
  console.log('NEWS: ', articles);

  useEffect(() => {
    loadingNewsData();
  }, [loadingNewsData]);

  return (
    <div className='news'>
    {articles &&
      articles.slice(0, 8).map(article =>
        <Article key={article.url} article={article} />
      )
    }
    </div>
  );
};

export default News;
