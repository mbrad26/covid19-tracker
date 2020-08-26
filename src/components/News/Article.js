import React from 'react'

const Article = ({ article }) => {

  // author: "https://www.facebook.com/bbcnews"
  // content: "Image copyrightGetty ImagesImage caption
  // ↵ Mobile chat applications like WhatsApp have proved fertile ground for unfounded rumours about Covid-19
  // ↵At least 800 people died around the world because of… [+2737 chars]"
  // description: "A study says at least 800 people have died globally because of coronavirus-related misinformation."
  // publishedAt: "2020-08-12T14:28:55Z"
  // source: {id: "bbc-news", name: "BBC News"}
  // title: "'Hundreds dead' because of Covid-19 misinformation"
  // url: "https://www.bbc.co.uk/news/world-53755067"
  // urlToImage

  return (
      <div className='article-container'>
        <div className='article-img'>
          <img src={article.urlToImage} alt='Article' />
        </div>
        <div className='article-body'>
          <h4>{article.title}</h4>
          <p id='title'><span>{article.source.name}</span></p>
          <p className='text-muted'>
            <i class="far fa-clock" >
              <span> {new Date(article.publishedAt).toDateString()}</span>
            </i>
          </p>
          <p>{article.description}</p>
          <a href={article.url} target='_blank'>Read full article ...</a>
        </div>
      </div>
  );
};

export default Article;
