import React from 'react';
import logo from '../images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <img src={logo} className="App-logo" />


      <div className="App-description">

        <p>Kinky Humans is an art project that tells the underground story of the most liberated, inspiring and resilient people in the world who dare to live and love differently.</p>

        <p>The collection focuses on the unspoken language of kink hiding in plain sight.</p>

      </div>

      <hr />

      <div className="App-takepart">

        <p>We’re collaborating with people who are willing to share their story and how they express their kinky lifestyle in public, discreetly or not.</p>

        <p>The format is split into two parts: interview and documentary photography*. These should take 2 hours to complete and are on a voluntary basis.</p>

        <p>To take part, <a href="mailto:takepart@kinkyhumans.com">
            send us an email
          </a> with a brief intro about yourself.</p>

        <p className="asterisk">* A model release form must be signed.</p>

      </div>
      
    </div>
  );
}

export default App;
