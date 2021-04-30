import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import Typed from 'react-typed';
//💸 💰 💸 💰 💸 💰 💸 💰  🏃 🏃 🏃 🏃 🏃 :watch: :grinning:
const Header = (props) => {
  console.log('this is props', props);
  return (
    <div>
      <h1 className="text-center text-warning mt-3 mb-4">
        <Typed
          className="typed_text"
          strings={['Coin Chaser']}
          typeSpeed={40}
          loop
        />
      </h1>
    </div>
  );
};

export default Header;
