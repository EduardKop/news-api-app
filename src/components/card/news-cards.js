import React from "react";
import './card.css'

function Card ({author,title,publishedAt,url,urlToImage}) {

    return (
        <div className="card">
            <div className="wrapper">
                <div className="header">
                    <div className="header-image">
                    <img src={urlToImage}/>
                    </div>
                </div>
                <div className="detail">
                    <div className="detail-info-wrapper">
                        <div className="title">
                    <div className="title-name">
                        <span>{title}</span>
                    </div>
                    <div className="title-publish_date">
                        <span>{publishedAt}</span>
                    </div>
                        </div>
                        <div className="description">
                    <div className="description-author">
                        <span>{author}</span>
                    </div>
                        </div>
                    </div>
                    <div className="url-btn">
                        <form action={url}>
                            <input type="submit" value="" />
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card