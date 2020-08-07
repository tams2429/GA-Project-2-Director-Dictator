import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => (
  <>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">THE DIRECTOR DICTATOR</h1>      
          <Link to="/UI" className="button main-button">YOU WILL WATCH ...</Link>
        </div>
      </div>
    </section>
  </> 
)

export default Home



