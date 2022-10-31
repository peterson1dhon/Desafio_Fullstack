/* eslint-disable react/prop-types */
/* eslint-disable react/void-dom-elements-no-children */
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({
    id,
    title,
    release,
    image,
}) {
    const imageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
    };
    

    return (
        
        <Link to={`/movie-details/${id}`}>
            <div className='MovieCard' style={imageStyle}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="CircleArrow" />
                <div className='FilmDescription'>
                    <h3>{title}</h3>
                    <p>{release}</p>
                </div>
            </div>
        </Link>
    );
}

MovieCard.protoTypes = {
    filmKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};


export default MovieCard