import React, { useEffect, useState, useContext } from 'react';
import CoinApi from '../apis/CoinApi';
import { WatchList } from '../context/watchList';
import CoinCard from './CoinCard';

const CoinList = () => {
  // useState take in two argument , first is the default state and second is the function that update the state ==> in this case is seCoins.
  const [coins, setCoins] = useState([]);
  // we get the default coins from watchList
  const { watchList, removeCoinHandler } = useContext(WatchList);
  // we give isLoading a default state of false
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDate = async () => {
      // make setIsLoading to true
      setIsLoading(true);
      const { data } = await CoinApi.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCoins(data); //here we save our state =>
      // after we finish saving out state,  make setIsLoading to false
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchDate();
    } else {
      setCoins([]);
    }
  }, [watchList]);
  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <h1 className="text-center"> Watch List </h1>
          <ul className=" coinList list-group mt-2">
            {coins.map((coin) => {
              return (
                <CoinCard
                  key={coin.id}
                  coin={coin}
                  removeCoin={removeCoinHandler}
                />
              );
            })}
          </ul>
        </>
      );
    }
  };
  return <div>{renderCoins()}</div>;
};

export default CoinList;
