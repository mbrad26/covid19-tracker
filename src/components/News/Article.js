import React from 'react'

const Article = ({ article }) => {

  return (
      <div className='article-container'>
        <div className='article-img'>
          <img src={article.urlToImage} alt='Article' />
        </div>
        <div className='article-body'>
          <h4>{article.title}</h4>
          <p id='title'><span>{article.source.name}</span></p>
          <p className='text-muted'>
            <i className="far fa-clock" >
              <span> {new Date(article.publishedAt).toDateString()}</span>
            </i>
          </p>
          <p>{article.description}</p>
          <a href={article.url} target='_blank' rel='noopener noreferrer'>Read full article ...</a>
        </div>
      </div>
  );
};

export default Article;
