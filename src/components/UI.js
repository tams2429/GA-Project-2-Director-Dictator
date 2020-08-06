import React from 'react'

import { getMovie } from '../lib/api'
// import RandomID from './RandomID'

class UI extends React.Component {

  state = {
    movie: null,
    moviesLeft: 3
    // showStuff: false
  }
  
  isMovieValid = async () => {
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage')
      return 
    }
    const randomIndex = Math.floor(Math.random() * 9000000)
    try {
      console.log('tt' + randomIndex)
      this.setState( { movie: null } )
      const res = await getMovie('tt' + randomIndex)

      if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        console.log('Its a movie', res.data.Title)
        const moviesLeft = this.state.moviesLeft - 1
        console.log('Number of movies left:', moviesLeft)
        this.setState( { movie: res.data } )
        this.setState( { moviesLeft })
        // this.setState( { showStuff: true })
      } else {
        this.isMovieValid()
      } 
    } catch (error) {
      console.log('The error is', error)
    }
  }
  
  // handleClick = () => {
  //   return (
  //     console.log('hello')
      
  //   )
  // }

  componentDidMount() {
    this.isMovieValid()
  }




  render() {
    // if (!this.state.movie) return null
    return (
      <>
        {this.state.movie ? 
          <div>
            <h1>{this.state.movie.Title}</h1>
            <p>Year:{this.state.movie.Year}</p>
            <div>
              <a href={`https://www.imdb.com/title/${this.state.movie.imdbID}`}><img src={this.state.movie.Poster}></img></a>
            </div>
            <p>Genre: {this.state.movie.Genre}</p>
            <p>IMDB rating: {this.state.movie.imdbRating}</p>
            <p>We rate it: 10</p>    
            <button onClick={this.isMovieValid}>Generate Movie</button>
          </div>
          :
          <progress className="progress is-large is-info" max="100">60%</progress>
        }
      </>
      
      
    )
  }
}

export default UI


//* Ratings filter
// && parseFloat(res.data.imdbRating) <= 10