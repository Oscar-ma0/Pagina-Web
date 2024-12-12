

function parseCSV(file, callback) {
  const reader = new FileReader();
  reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split('\n').map(row => row.split(','));
      callback(rows);
  };
  reader.readAsText(file);
}


function updateChart(chart, labels, data) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
}


const chartBarras = new Chart(document.getElementById('chartBarras'), {
  type: 'bar',
  data: {
      labels: ["Chile", "México", "Colombia", "Brasil", "Argentina"],
      datasets: [{
          label: 'Promedio de Emprendimientos Anuales (millones)',
          data: [0.7, 1.2, 0.9, 1.5, 0.8],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      }]
  }
});

const chartPie = new Chart(document.getElementById('chartPie'), {
  type: 'pie',
  data: {
      labels: ["Tecnológico", "Social", "Cultural", "Tradicional"],
      datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
  }
});

const chartLineas = new Chart(document.getElementById('chartLineas'), {
  type: 'line',
  data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [{
          label: '',
          data: [1.5, 1.8, 2.0, 2.3, 2.6],
          fill: false,
          borderColor: '#742774',
          tension: 0.1
      }]
  }
});

const chartArea = new Chart(document.getElementById('chartArea'), {
  type: 'line',
  data: {
      labels: ["2020", "2021", "2022", "2023"],
      datasets: [{
          label: '',
          data: [34, 36, 38, 40],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.1
      }]
  },
  options: {
      plugins: {
          filler: {
              propagate: true
          }
      }
  }
});


document.getElementById('fileBarras').addEventListener('change', (event) => {
  const file = event.target.files[0];
  parseCSV(file, (rows) => {
      const labels = rows.slice(1).map(row => row[0]);
      const data = rows.slice(1).map(row => parseFloat(row[1]));
      updateChart(chartBarras, labels, data);
  });
});

document.getElementById('filePie').addEventListener('change', (event) => {
  const file = event.target.files[0];
  parseCSV(file, (rows) => {
      const labels = rows.slice(1).map(row => row[0]);
      const data = rows.slice(1).map(row => parseFloat(row[1]));
      updateChart(chartPie, labels, data);
  });
});

document.getElementById('fileLineas').addEventListener('change', (event) => {
  const file = event.target.files[0];
  parseCSV(file, (rows) => {
      const labels = rows.slice(1).map(row => row[0]);
      const data = rows.slice(1).map(row => parseFloat(row[1]));
      updateChart(chartLineas, labels, data);
  });
});

document.getElementById('fileArea').addEventListener('change', (event) => {
  const file = event.target.files[0];
  parseCSV(file, (rows) => {
      const labels = rows.slice(1).map(row => row[0]);
      const data = rows.slice(1).map(row => parseFloat(row[1]));
      updateChart(chartArea, labels, data);
  });
});

function calcularEmprendimiento() {
  const personas = parseInt(document.getElementById('personas').value, 10);
  const tipo = document.getElementById('tipoEmprendimiento').value;

  let nivelEmprendimiento = '';
  if (personas <= 5) {
      nivelEmprendimiento = 'bajo';
  } else if (personas <= 30) {
      nivelEmprendimiento = 'moderado';
  } else {
      nivelEmprendimiento = 'alto';
  }

  const resultado = ` ${tipo} Tu nivel de emprendimiento es  ${nivelEmprendimiento}.`;
  document.getElementById('resultado').innerText = resultado;
}





