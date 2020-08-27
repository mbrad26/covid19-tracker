import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import './News.css';
import Article from './Article';
import { doNewsLoading } from '../../actions/newsData';

const News = () => {
  const { articles } = useSelector(state => state.newsDataState.data);
  const dispatch = useDispatch();

  console.log('NEWS: ', articles);

  useEffect(() => {
    dispatch(doNewsLoading());
  }, [dispatch]);

  return (
    <div className='news'>
      {articles &&
        articles.slice(0, 6).map(article =>
          <Article article={article} />
        )
      }
    </div>
  )
};

export default News;
