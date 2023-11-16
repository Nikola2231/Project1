let dates = ["2012-02-19", "2013-06-11", "2015-07-27", "2017-10-10", "2019-01-17", "2021-04-22", "2023-11-15"];
let subscriberCounts = [100, 1000, 10000, 100000, 1000000, 50000000, 212000000]; // Example data, replace with real data

function createChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Subscriber Count Over Time',
        data: subscriberCounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

window.onload = createChart;