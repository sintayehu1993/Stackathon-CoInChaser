import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';
import { timeLineOptions } from '../charFile/ChartSetUp';
import { useHistory } from 'react-router-dom';

function CoinChart({ data }) {
  const chartGraphColorGenerator = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return 'rgb(' + x + ',' + y + ',' + z + ')';
  };
  const chartReference = useRef();
  const { day, week, year, fiveYears, detail } = data;
  const [timeFormat, setTimeFormat] = useState('day');

  const chooseTimeFormat = () => {
    switch (timeFormat) {
      case 'day':
        return day;
      case 'week':
        return week;
      case 'year':
        return year;
      case 'fiveYears':
        return fiveYears;
      default:
        return day;
    }
  };

  useEffect(() => {
    //is
    if (chartReference && chartReference.current && detail) {
      const chartInstance = new Chart(chartReference.current, {
        type: 'line',
        data: {
          //Bring in data
          datasets: [
            {
              label: `${detail.name} Price`,
              data: chooseTimeFormat(),
              backgroundColor: `${chartGraphColorGenerator()}`,
              borderColor: `${chartGraphColorGenerator()}`,
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...timeLineOptions,
        },
      });
    }
  });
  const history = useHistory();

  ///this reDi
  const routeChangeToHome = () => {
    let path = `/`;
    history.push(path);
  };
  const renderPrice = () => {
    if (detail) {
      return (
        <div>
          <p className="bg-white my-0">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? 'text-danger my-0'
                : 'text-success my-0'
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      );
    }
  };

  return (
    //everyTime we want to reference the canvas chart we just call the useRef
    <div className="bg-lightblue border mt-2 round p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas
          ref={chartReference}
          id="myChart"
          width={250}
          height={250}
        ></canvas>
      </div>
      <div className="bg-white row-md-6">
        <button
          type="button"
          className="btn form-control"
          id="btn1"
          onClick={() => setTimeFormat('day')}
        >
          Day
        </button>{' '}
        <button
          type="button"
          className="btn form-control"
          id="btn2"
          onClick={() => setTimeFormat('week')}
        >
          Week
        </button>{' '}
        <button
          type="button"
          className="btn form-control"
          id="btn3"
          onClick={() => setTimeFormat('year')}
        >
          Year
        </button>{' '}
        <button
          type="button"
          className="btn form-control"
          id="btn4"
          onClick={() => setTimeFormat('fiveYears')}
        >
          5Years
        </button>
        <button
          type="button"
          className="bg-red form-control"
          id="btn5"
          onClick={routeChangeToHome}
        >
          HOME
        </button>
      </div>
    </div>
  );
}

export default CoinChart;
