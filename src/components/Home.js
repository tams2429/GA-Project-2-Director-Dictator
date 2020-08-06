import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => (

  <section className="section">
  <div className="container has-text-centered">  
    <h1>This is the Home page</h1>
    <Link to="/UI" className="button">Get your options</Link>
  </div>
  </section>
)

export default Home



{/* <Link to={`/cheeses/${cheese._id}/edit`} className="button is-warning">Edit Cheese</Link> */}