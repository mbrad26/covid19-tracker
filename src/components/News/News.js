import React, { useEffect } from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

import './News.css';
import Article from './Article';

const News = ({
  isError,
  articles,
  isLoading,
  loadingNewsData,
  }) => {

  useEffect(() => {
    loadingNewsData();
  }, [loadingNewsData]);

  console.log('NEWS: ', isLoading);

  return (
    <div className='news'>
      {isLoading && <Spinner id='spinner-news' animation="border" variant="light" role="status"/>}
      {articles &&
        articles.slice(0, 8).map(article =>
          <Article key={article.url} article={article} />
        )
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default News;
