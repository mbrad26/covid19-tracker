import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardColumns, Card } from 'react-bootstrap';

import './News.module.css';
import { doNewsLoading } from '../../actions/newsData';

const News = () => {
  const { articles } = useSelector(state => state.newsDataState.data);
  const dispatch = useDispatch();

  console.log('NEWS: ', articles);

  useEffect(() => {
    dispatch(doNewsLoading());
  }, []);

  return (
    <div className='container'>
      <CardColumns className='m-3'>
      {articles &&
        articles.map(article =>
          <Card>
            <Card.Img variant='top' src={article.urlToImage} loading='lazy' />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {article.description}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }
      </CardColumns>
    </div>
  )
};

export default News;
