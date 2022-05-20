import React from 'react';
import Card from '../card/news-cards';

function SearchList({ filteredCards }) {
  return (
    <div>
      {filteredCards && filteredCards.map((cards, i) =>  
    <Card 
    author = {cards.author}
    title = {cards.title}
    publishedAt = {cards.publishedAt.slice(0, -1).replace(/T/g, ' ')}
    url = {cards.url}
    urlToImage = {cards.urlToImage}
    key={i}
    />)}
    </div>
  );
}

export default SearchList;