import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{
  render(){
    // const {title, plot, price, rating, poster, stars, favorite, cart}=this.state.movies;
    const {movies, add, sub, toggleFav, toggleCart}=this.props;
    console.log(this.props);

    return (
      <>
       {movies.map((movie, index)=> <MovieCard movies={movie} addStars={add} 
       redStars={sub} fav={toggleFav} carts={toggleCart} key={index}/>)}
      </>
    )
  }
}

export default MovieList;