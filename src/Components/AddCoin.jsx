import React, { useContext, useEffect, useState } from 'react';
import { WatchList } from '../context/watchList';
// import CoinApi from '../apis/CoinApi'

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchList);
//   make sure to come back and use an api to generate all coins that should be available...

//   const availableCoinsForNOww = async () => {
//     const response = await CoinApi.get("/coins/list")
//     console.log("this is all data", response.data)
//     return 
//   }
  const availableCoinsForNOw = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tether',
    'stellar',
    'litecoin',
    'polkadot',
    'cardano',
    'bitcoin-cash',
    'uniswap',
    'celsius',
    'eos',
    'tron',
    'veChain',
    'monero',
  ];
  const clickHandler = (coin) => {
    addCoin(coin);
    setIsActive(false)
  };
  return (
    <div class="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        + Coin
      </button>
      <div
        className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}
        aria-labelledby="dropdownMenuButton"
      >
        {availableCoinsForNOw.map((coin) => {
          return (
            <a
              onClick={() => clickHandler(coin)}
              className="dropdown-item"
              href="#"
            >
              {coin}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
