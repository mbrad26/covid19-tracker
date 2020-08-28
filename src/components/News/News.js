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
    <Row className='news'>
      {isLoading && <Spinner id='spinner-news' animation="border" variant="light" role="status"/>}
      {articles &&
        articles.map(article =>
          <Col md={12} lg={4} xl={12}>
            <Article key={article.url} article={article} />
          </Col>
        )
      }
      {isError && <h3>Something went wrong ...</h3>}
    </Row>
  );
};

export default News;
