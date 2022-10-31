import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import './css/App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;