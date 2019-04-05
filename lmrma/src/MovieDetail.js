import React, { Component } from 'react';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=16cd8668a6c63d82aaae9c558483b1a9&language=en-US`,
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <h1>{movie.title}</h1>
      </div>
    );
  }
}

export default MovieDetail;
