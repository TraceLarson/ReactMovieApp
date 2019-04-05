import React, { Component } from 'react';

import Movie from './Movie';

// const apiKey = "16cd8668a6c63d82aaae9c558483b1a9";
const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=16cd8668a6c63d82aaae9c558483b1a9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

class MoviesList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(endPoint);
      const movies = await res.json();
      // console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
