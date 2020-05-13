import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ({articles}) => {

  const localArticles = articles.map(article => {
    return (
      <NewsArticle
        img={article.img}
        headline={article.headline}
        description={article.description}
        url={article.url}
      />
    )
  })

  return (
    <div className='articles-container'>
      {localArticles}
    </div>
  )
}

export default NewsContainer;
