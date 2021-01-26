import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinSummary from './pages/CoinSummary';
import Header from './Components/Header';
import '../src/App.css';
import { WatchListProvider } from './context/watchList';
import CoinDetail from './pages/CoinDetail';
import Particles from 'react-particles-js';
const App = () => {
  return (
    <div className="container">
      <div>
        <Particles
          className="particles_canvas"
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
            },
          }}
        />
      </div>
      <WatchListProvider>
        <BrowserRouter>
          {/*this is out route for displaying all stocks in front page*/}
          <Route exact path="/" component={Header}></Route>
          <Route exact path="/" component={CoinSummary}></Route>
          <Route exact path="/coins/:id" component={CoinDetail}></Route>
        </BrowserRouter>
      </WatchListProvider>
    </div>
  );
};

export default App;
