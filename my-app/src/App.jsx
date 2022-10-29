import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './css/App.css';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
