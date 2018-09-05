import React from 'react';

const AstronomyCard = ({ data }) => {
    const { title, url, hdurl, explanation, date, copyright } = data;

    return (
        <div className="astronomy-card">
            <h6 className="astronomy-title">{title}</h6>

            <a href={hdurl} className="astronomy-image-wrapper">
                <img src={url} alt={title} />
            </a>

            <p>{explanation}</p>

            <span>{date} - {copyright}</span>
        </div>
    )
}
    
export default AstronomyCard;