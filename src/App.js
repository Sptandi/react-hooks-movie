import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Movies from "./Components/Movies";
import ReactLoading from "react-loading";

const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=afa8cf5d2726973c13a888765b454f34";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(NOW_PLAYING).then((res) => {
      if (res.data.results) {
        setMovies(res.data.results);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Now Playing</h1>
      </div>
      <div className="content">
        {loading ? (
          <ReactLoading
            className="loading"
            type={'spin'}
            color={'#ffffff'}
            height={"10%"}
            width={"10%"}
          />
        ) : (
          movies.length > 0 &&
          movies.map((movie) => {
            return <Movies key={movie.id} data={movie} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
