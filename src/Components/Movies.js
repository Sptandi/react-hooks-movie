import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  movieImages = () => {
    console.log(this.props.data);
  };

  render() {
    return (
      <div className="movie-item">
        <img
          className="movie-poster"
          src={"http://image.tmdb.org/t/p/w500/" + this.props.data.poster_path}
        />
        <div className="movie-content">
          <h3 className="movie-title">{this.props.data.title}</h3>
          <span className="movie-rating">5</span>
        </div>
        <div className="movie-overview">
          <h2>Overview :</h2>
          <p>{this.props.data.overview}</p>
        </div>
      </div>
    );
  }
}

export default Movies;
