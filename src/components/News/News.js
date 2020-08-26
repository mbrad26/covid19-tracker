import React, { useEffect } from 'react';
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
    <div className='news-container'>
      {articles &&
        articles.map(article =>
          <Article key={article.title} article={article} />
        )
      }
    </div>
  )
};

export default News;
