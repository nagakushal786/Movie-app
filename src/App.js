// import MovieCard from "./Moviecard";
import React from "react";
import MovieList from "./Movielist";
import NavBar from "./Navbar";
import { movies } from "./MovieData";
// import Student from "./Student";
// import Head1 from "./Block1";
// import Head2 from "./Block2";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      movies: movies,
      cartCount: 0
    }
  } 

  handleIncStars=(movie)=>{
    const {movies}=this.state;

    const mid=this.state.movies.indexOf(movie);

    if(movies[mid].stars>=5){
      return;
    }

    movies[mid].stars+=0.5;

    this.setState({
      movies: movies
    });
  }

  handleRedStars=(movie)=>{
    const {movies}=this.state;

    const mid=this.state.movies.indexOf(movie);

    if(movies[mid].stars<=0){
      return;
    }

    movies[mid].stars-=0.5;

    this.setState({
      movies: movies
    });
  }

  handleFav=(movie)=>{
    const {movies}=this.state;

    const mid=movies.indexOf(movie);

    movies[mid].favorite=!movies[mid].favorite;

    this.setState({
      movies: movies
    });
  }

  handleCart=(movie)=>{
    let {movies, cartCount}=this.state;

    const mid=movies.indexOf(movie);

    movies[mid].cart=!movies[mid].cart;

    if(movies[mid].cart){
      cartCount+=1;
    }else{
      cartCount-=1;
    }
    console.log(movies[mid].cart);
    console.log(cartCount);

    this.setState({
      movies: movies,
      cartCount: cartCount
    });
  }

  render(){
    const {movies, cartCount}=this.state;

    return (
      <>
        {/* Props */}
        {/* <Student name="Kushal" marks={80}/>
        <Student name="Moksha" marks={75}/>
        <Student marks={70}/>
        <Student name="Sudha"/> */}
  
        <NavBar cartCount={cartCount}/>
        <MovieList movies={movies} add={this.handleIncStars} sub={this.handleRedStars}
        toggleFav={this.handleFav} toggleCart={this.handleCart}/>
  
        {/* CSS modules */}
        {/* <Head1/>
        <Head2/> */}
      </>
    );
  }
}

// Student.defaultProps={
//   name: "Student",
//   marks: 40
// }

export default App;
