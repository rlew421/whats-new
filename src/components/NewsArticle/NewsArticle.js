import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({img, headline, description, url}) => {
  return (
    <div className='article'>
      <img src={ img } alt="Image for article"/>
      <h3>{ headline }</h3>
      <p>{ description }</p>
      <p>{ url }</p>
    </div>
  )
}

export default NewsArticle;
