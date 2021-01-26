import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinData from '../Components/CoinData';
import CoinChart from '../Components/CoinChart';
import axios from 'axios';
import CoinApi from '../apis/CoinApi';

const CoinDetail = () => {
  const { id } = useParams();
  //our date is stored in coinData => make sure to passe it down to the chart component...
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const formatData = (data) => {
    return data.map((item) => {
      return {
          // t is for x axes and y is for y axes
        t: item[0],
        y: item[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    const fetchDate = async () => {
      setIsloading(true);
      const [
        oneDayResult,
        oneWeekResult,
        oneYearResult,
        fiveYearsResult,
        coinDetail,
      ] = await Promise.all([
        CoinApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          },
        }),
        CoinApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }),
        CoinApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }),
        CoinApi.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1825',
          },
        }),
        // this is our route for detail for the specific coin
        CoinApi.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        }),
      ]);
    //   console.log('this is a day of data', oneDayResult);
      setCoinData({
        day: formatData(oneDayResult.data.prices),
        week: formatData(oneWeekResult.data.prices),
        year: formatData(oneYearResult.data.prices),
        fiveYears: formatData(fiveYearsResult.data.prices),
        detail: coinDetail.data[0],
      });
      setIsloading(false);
    };
    fetchDate();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="coinlist">
        <CoinChart data={coinData}/>
        <CoinData data={coinData.detail}/>
      </div>
    );
  };
  return renderData();
};

export default CoinDetail;
