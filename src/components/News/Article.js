import React from 'react'
import { Card } from 'react-bootstrap';

const Article = ({ article }) => {

  return (
      <Card id='article'>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text id='source'><span>{article.source.name}</span></Card.Text>
          <Card.Text className='text-muted far fa-clock'>
            <span> {new Date(article.publishedAt).toDateString()}</span>
          </Card.Text>
          <Card.Text id='article-description'>{article.description}</Card.Text>
          <a href={article.url} target='_blank' rel='noopener noreferrer'>Read full article ...</a>
        </Card.Body>
      </Card>
  );
};

export default Article;
