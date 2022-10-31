import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Banner from '../assets/ghibliFlix.png';
import MovieCard from './MovieCard';

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
            <img src={Banner} alt="logo GHIBLIFLIX"  style={{
                width: '120px',
            }}/>
        </div>
        <div className='InputContainer'>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Procure por filmes' className='SearchInput'/>
        </div>
        <div className='MoviesContainer'>
            {
                filteredMovies.map((film) => (
                    <MovieCard
                        key={`${film?.id}-${film?.title}`}
                        id={film?.id}
                        title={film?.title}
                        image={film?.image}
                    />
                ))
            }
        </div>
    </div>
  );
}

export default HomePage;