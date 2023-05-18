import React from "react";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa"

function About() {
  return (
    <div style={{ height: "200vh" } }>       
       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
          <p className="readmore-description" style={{ fontWeight: "bold" }}>
        React is an open-source JavaScript library for building user interfaces.
        It was created by Jordan Walke in 2013 and is currently maintained by
        Meta (formerly Facebook). React is one of the most popular JavaScript
        libraries in the world, with over 1 million stars on GitHub. There are
        many major contributors to React, but some of the most notable include:{" "}
        <br /> <br />

        Jordan Walke: Jordan Walke is the creator of React. He is a software
        engineer at Meta and has been working on React since its inception. <br />

        Dan Abramov: Dan Abramov is a software engineer at Meta and is one of the
        most active contributors to React. He is the creator of many popular
        React libraries, including Redux and React Router. <br />

        Pete Hunt: Pete Hunt is a software engineer at Meta and is one of the original contributors
        to React. He is the creator of the React logo and the React
        documentation. <br />
        
        Andrew Clark: Andrew Clark is a software engineer at Meta
        and is one of the most active contributors to React. He is the creator
        of the React Developer Tools. <br /> <br />

        These are just a few of the many major
        contributors to React. React is a community-driven project and there are
        many other people who have made significant contributions to its
        development.
        <br />

        React is a powerful tool that has been used to build some of the most
        popular websites and applications in the world. It is a versatile
        library that can be used to build a wide variety of user interfaces.
        React is also well-documented and has a large community of developers
        who are willing to help. If you are looking for a JavaScript library for
        building user interfaces, React is a great option.
      </p>
    </div>
     <div>
      <Link to='/' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <FaHome />
                Back To Home
            </Link>
             </div>
          </div>
     </div>
      

  );
}

export default About;
