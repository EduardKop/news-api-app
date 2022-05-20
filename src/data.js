import React, { useState } from 'react';
import Card from './components/card/news-cards';

function NewsData ({data}){

    return (
        <>
            {data.map((el, i) => ( 
                <Card 
                author = {el.author}
                title = {el.title}
                publishedAt = {el.publishedAt.slice(0, -1).replace(/T/g, ' ')}
                url = {el.url}
                urlToImage = {el.urlToImage}
                />
            ))}
        </>
    )

}



export default NewsData



