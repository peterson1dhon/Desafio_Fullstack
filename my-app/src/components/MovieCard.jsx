/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';

function MovieCard({
    filmKey,
    title,
    release,
    image,
}) {
    const imageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
    };

    return (
        <link to={`/FilmDetails/${filmKey}`} key={filmKey}>
            <div className='MovieCard' key={filmKey} style={imageStyle}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="CircleArrow" />
                <div className='FilmDescription'>
                    <h3>{title}</h3>
                    <p>{release}</p>
                </div>
            </div>
        </link>
    );
}

MovieCard.protoTypes = {
    filmKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};


export default MovieCard