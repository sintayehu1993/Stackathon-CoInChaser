
export const timeLineOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 2,
    },
  
    animation: {
      duration: 3000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
        },
      ],
    },
  };