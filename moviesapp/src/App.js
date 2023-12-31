import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import layout from './components/layout';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      
      const response = await api.get("/api/v1/movies");

  

      setMovies(response.data);
      
    } 
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getMovies();
     },[])

  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element = {layout}>

      </Route>
    </Routes>
    </div>
  );
}

export default App;
