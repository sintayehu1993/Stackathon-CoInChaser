import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin, removeCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinList-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <h3>{coin.name}</h3>
        <img className="coinList-image" src={coin.image} alt="" />
        <span className="text-decoration-non">{coin.Current_price}</span>

        {/*below is what shows our Percentage  and down or upward arrow */}

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? 'text-danger mr-2'
              : 'text-success mr-2'
          }
        >
          <i
            className={
              coin.price_change_percentage_24h < 0
                ? 'fas fa-sort-down align-middle mr-1'
                : 'fas fa-sort-up align-middle mr-1'
            }
          ></i>
          {coin.price_change_percentage_24h}
        </span>

        <i
          onClick={(evt) => {
            evt.preventDefault();
            removeCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        ></i>
      </li>
    </Link>
  );
};

export default CoinCard;
