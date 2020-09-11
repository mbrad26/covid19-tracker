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

  return (
    <Row className='news'>
      {isLoading && <Spinner id='spinner-news' animation="border" variant="dark" role="status"/>}
      {articles &&
        articles.map(article =>
          <Col md={12} lg={4} xl={12} key={article.url}>
            <Article article={article} />
          </Col>
        )
      }
      {isError && <h3>Something went wrong ...</h3>}
    </Row>
  );
};

export default News;
