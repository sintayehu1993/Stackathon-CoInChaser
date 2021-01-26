import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinSummary from './pages/CoinSummary';
// import SingleStock from './components/SingleStock';
import Header from './Components/Header';
import '../src/App.css';
import { WatchListProvider } from './context/watchList';
import CoinDetail from './pages/CoinDetail';
const App = () => {
  return (
    <div className="container">
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
