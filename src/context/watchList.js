import React, { createContext, useEffect, useState } from 'react';

export const WatchList = createContext();

export const WatchListProvider = (props) => {
  const [watchList, setwatchList] = useState(
    localStorage.getItem('watchList').split(',') || [
    ]
  );
  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);
  const removeCoinHandler = (coin) => {
    setwatchList(
      watchList.filter((item) => {
        return item !== coin;
      })
    );
  };
  console.log('what is watch list now', watchList)
  const addCoin = (coin) => {
    // if we pass in a coin that is not on the list, it will give us a -1
    if (watchList.indexOf(coin) === -1) {
      setwatchList([...watchList, coin]);
    } else {
      return;
    }
  };
  return (
    <WatchList.Provider value={{ watchList, removeCoinHandler, addCoin }}>
      {props.children}
    </WatchList.Provider>
  );
};

// export default WatchListProvider
