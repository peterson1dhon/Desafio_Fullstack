import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Banner from '../assets/ghibliFlix.png';

function HomePage () {
    const [searchText, setSearchText] = useState('');
    const movies = useSelector((state) => state.logic);
    const filteredMovies = movies.filter((item) => Object.keys(item).some((key) => item[key]
        .toString()
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase())));
  return (
    <div className='HomePage'>
        <div className='BannerDiv'>
            <img src={Banner} alt="logo GHIBLIFLIX" />
        </div>
        <div className='InputContainer'>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Procure por filmes' className='SearchInput'/>
        </div>
        <div className='MoviesContainer'>
            {
                filteredMovies.map((film) => (
                    <MovieCard
                        key={film.movieKey}
                        movieKey={film.movieKey}
                        title={movies.title}
                        image={film.image}
                    />
                ))
            }
        </div>
    </div>
  );
}

export default HomePage;