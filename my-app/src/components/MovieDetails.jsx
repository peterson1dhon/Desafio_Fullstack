import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieApi } from '../Api/Logic';
 
function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.logic);
    useEffect(() => {
        dispatch(getMovieApi());
    }, []); 

    const myMovie = movies.filter((movie) => movie.movieKey === id);
    const currentMovie = myMovie[0];

    return (
        <div className='DetailPage'>
            <div className='DetailCard'>
                <div className='MovieBanner'>
                    <img src={currentMovie.banner} alt={`${currentMovie.name} banner`} className='MovieImage'/>
                </div>
                <div className='InfoContainer'>

                    <div className='MovieInfo'>
                        <p>Titulo do Filme:</p>
                        <p>{currentMovie.title}</p>
                    </div>
                    <div className='MovieInfo'>
                        <p>Diretor:</p>
                        <p>{currentMovie.director}</p>
                    </div>
                    <div className='MovieInfo'>
                        <p>Produtor:</p>
                        <p>{currentMovie.producer}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieDetails;