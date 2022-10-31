import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = React.useState({});
   


    const getMovieDetails = async() => {
        const url = `https://ghibliapi.herokuapp.com/films/${id}`;
        await fetch(url).then((response) => response.json()).then((data) => {
            setMovie(data);
        });
    };

    useEffect(() => {
       getMovieDetails();

    }, [id]); 



    return (
        <div className='DetailPage'>
            <div className='DetailCard'>
                <div className='MovieBanner'>
                    <img src={movie.movie_banner} alt={`${movie.name} banner`} className='MovieImage'/>
                </div>
                <div className='InfoContainer'>

                    <div className='MovieInfo'>
                        <p>Titulo do Filme:</p>
                        <p>{movie.title}</p>
                    </div>
                    <div className='MovieInfo'>
                        <p>Diretor:</p>
                        <p>{movie.director}</p>
                    </div>
                    <div className='MovieInfo'>
                        <p>Produtor:</p>
                        <p>{movie.producer}</p>
                    </div>

                    <div className='MovieInfo'>
                        <p>Ano de Lançamento:</p>
                        <p>{movie.release_date}</p>
                    </div>

                    <div className='MovieInfo'>
                        <p>Sinopse:</p>
                        <p>{movie.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieDetails;