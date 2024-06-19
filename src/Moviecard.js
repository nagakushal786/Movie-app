import React from "react";

export default class MovieCard extends React.Component{
  render(){
    const {title, plot, price, rating, poster, stars, favorite, cart}=this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">

          <div className="left">
            <img alt="Poster" src={poster}/>
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img className="str-btn" 
                alt="minus" 
                src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
                onClick={()=> this.props.redStars(this.props.movies)}/>

                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                <img className="str-btn" 
                alt="plus" 
                src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                onClick={()=> {this.props.addStars(this.props.movies)}}/>

                <span>{stars}</span>
              </div>

              {favorite ?<button className="unfavourite-btn" onClick={()=> this.props.fav(this.props.movies)}>Un-Favourite</button>
              : <button className="favourite-btn" onClick={()=> this.props.fav(this.props.movies)}>Favourite</button>}

              {cart? <button className="removeCart-btn" onClick={()=> this.props.carts(this.props.movies)}>Remove</button>
              : <button className="cart-btn" onClick={()=> this.props.carts(this.props.movies)}>Cart</button>}

            </div>
          </div>
          
        </div>
      </div>
    )
  }
}