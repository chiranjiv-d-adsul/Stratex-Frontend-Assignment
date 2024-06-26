import React from 'react';
import MovieList from '../components/MovieList';
import FavoritePage from './FavoritesPage';
import {Link} from 'react-router-dom';

const MovieListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <Link to="/favorites" className="text-blue-500 text-[18px]">View Favorites</Link>
      <MovieList />
    </div>


  );
};

export default MovieListPage;
