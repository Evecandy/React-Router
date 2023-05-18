import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ height: "200vh", margin: "6px" }}>Home page
         <h1 className="home-title">Welcome to Blogify</h1>
      <p className="home-description">Discover who are the major contributors in React and its frameworks.</p>
      <button className="home-button"><Link to="/blogs">Get Started</Link></button></div>
    )
}
export default Home