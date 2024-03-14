import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const chartElement = document.getElementById('myChart') as HTMLCanvasElement;

const data = [50, 50, 50];
const rotation = Math.floor(180 / data.length);
const titles = ["Lorem 1", "Lorem 2", "Lorem 3"];
const descriptions = ["Shorten 1", "Shorten 2", "Shorten 3"];

new Chart(chartElement, {
  type: 'doughnut',
  data: {
    datasets: [{
      datalabels: {
        labels: {
          pill: {
            font: {
              size: 13,
              lineHeight: 1,
            },
            backgroundColor: "#fff",
            color: "#fff",
            formatter: (value, context) => {
              return descriptions[context.dataIndex];
            },
            padding: {
              top: 20,
              bottom: 5,
              left: 20,
              right: 20,
            },
            borderRadius: 13 + 20 + 5,
          },
          title: {
            align: "top",
            color: 'darkGreen',
            formatter: (value, context) => {
              return titles[context.dataIndex];
            },
            font: {
              size: 12,
            },
            borderRadius: 10,
          },
          description: {
            color: 'blue',
            font: {
              size: 13,
              weight: "bold"
            },
            formatter: (value, context) => {
              return descriptions[context.dataIndex];
            },
          },
        }
      },
      data: data,
      borderWidth: 5,
      borderColor: "#fff",
      backgroundColor: ["#FF0000", "#00FF00", "#0000FF"],
      hoverBorderColor: "lawnGreen",
      hoverBackgroundColor: "greenYellow",
      rotation: -rotation,
      spacing: 10,
      hoverOffset: 10
    },
  ]
  },
  options: {
    responsive: true,
    plugins: {
      legend:{display: false},
      title: {display: false},
      tooltip: {enabled: false},
    },
    layout: {
      padding: 20
    },
    // @ts-ignore
    cutout: "55%",
  },
  
  plugins: [ChartDataLabels],
});