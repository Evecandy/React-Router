import React from "react";
import { Link } from 'react-router-dom';

function Blogs() {
    return (
        <div style={{ height: "450vh" }}>
            <h1>Blogs Page</h1>
        
            <h2 className="blog-title">REACT 101</h2>

            <p className="blog-description">React is an open-source JavaScript library for building user interfaces. It was created by Jordan Walke in 2013 and is currently maintained by Meta. React is one of the most popular JavaScript libraries in the world, with over 1 million stars on GitHub.
            There are many major contributors to React, but some of the most notable include: <br/>
            Jordan Walke: Jordan Walke is the creator of React. He is a software engineer at Meta and ...
            </p>

    <button className="readmore-button">
    <Link to="/readmore">Read More</Link>
  </button>

      </div>

    );
}

export default Blogs