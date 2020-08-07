import React from 'react'

import { getMovie } from '../lib/api'
import { logState } from '../lib/logger'
// import RandomID from './RandomID'

class UI extends React.Component {

  state = {
    movie: null,
    moviesLeft: 5
  }
  
  getRandomMovie = async () => {
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage')
      return 
    }
    const randomIndex = Math.floor(Math.random() * 9000000)
    this.setState( { movie: null } )
    try {
      console.log('tt' + randomIndex)
      const res = await getMovie('tt' + randomIndex)

      if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        console.log('Its a movie', res.data.Title)
        const moviesLeft = this.state.moviesLeft - 1
        console.log('Number of movies left:', moviesLeft)
        return (
          this.setState( { movie: res.data } ), 
          this.setState( { moviesLeft })
        )
      } 
      return this.getRandomMovie()
    } catch (error) {
      console.log('The error is', error)
    }
  }

  componentDidMount() {
    this.getRandomMovie()
  }




  render() {
    // if (!this.state.movie) return null
    logState()
    return (
      <>
        {this.state.movie ? 
          // <div>
          //   <h1>{this.state.movie.Title}</h1>
          //   <p>Year:{this.state.movie.Year}</p>
          //   <div>
          //     <a href={`https://www.imdb.com/title/${this.state.movie.imdbID}`}><img src={this.state.movie.Poster}></img></a>
          //   </div>
          //   <p>Genre: {this.state.movie.Genre}</p>
          //   <p>IMDB rating: {this.state.movie.imdbRating}</p>
          //   <p>We rate it: 10</p>    
          //   <button onClick={this.getRandomMovie}>Generate Movie</button>
          // </div>
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="card-container">
                  <div className="card is-flex">
                    <div className="movie-title heading">
                      <h1>{this.state.movie.Title}</h1>
                    </div>
                    <div className="card-image">
                      <figure className="">
                        <a href={`https://www.imdb.com/title/${this.state.movie.imdbID}`}><img src={this.state.movie.Poster} alt="movie-poster"></img></a>
                      </figure>
                      <div className="card-text heading">
                        <p>Year:{this.state.movie.Year}</p>
                        <p>Genre: {this.state.movie.Genre}</p>
                        <p>IMDB rating: {this.state.movie.imdbRating}</p>
                      </div>
                    </div>
                    <div className="selection-buttons"> 
                      <button onClick={this.getRandomMovie} className="next-movie button">LOOKS CRAP</button>
                      <button className="picked-movie button">THAT WILL DO </button>
                    </div>
                  </div>
                </div>
                <div className="counter">
                  <h1><span>{this.state.moviesLeft}</span> OPTIONS REMAINING</h1>
                </div> 
              </div>
            </div>
          </section>

          :
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="card-container">
                  <div className="card is-flex">
                    <div className="spinner-img"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            

          
        }
      </>
      
      
    )
  }
}

export default UI


//* Ratings filter
// && parseFloat(res.data.imdbRating) <= 10