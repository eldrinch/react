//"https://www.chartjs.org";
// npm install chart.js

let bar = new Chart(document.getElementById("barras"), {
  type: 'bar',
  data: {
    labels: ["Palio", "Uno", "Gol", "Corsa", "Up", "Onix"],
    datasets: [
      {
        label: "Realizado",
        data: [10, 35, 24, 11, 12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      },
      {
        label: "Planejado",
        data: [20, 25, 30, 10, 14, 20],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)", "rgba(255, 206, 86)", "rgba(75, 192, 192)", "rgba(153, 102, 255)", "rgba(255, 159, 64)"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vendas de Veiculos",
      },
    },
  },
});

let linhas = new Chart(document.getElementById("linhas"), {
  type: 'line',
  data: {
    labels: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    datasets: [
      {
        data: [1123, 1109, 1008, 1208, 1423, 1114, 1036],
        label: "Casos Confirmados",
        backgroundColor: "#0f0f0f",
        borderColor: "rgb(60,186,159,0.1)",
      },
      {
        data: [143, 109, 208, 218, 223, 214, 103],
        label: "Número de Obitos",
        backgroundColor: "red",
        borderColor: "red",
      }
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left", //top,botton,left,rigth
      },
      title: {
        display: true,
        text: "Curva de Covid",
      },
      layout: {
        padding: {
          left: 100,
          right: 100,
          top: 50,
          bottom: 10,
        },
      },
    },
  }
});


let pizza = new Chart(document.getElementById("pizza"), {
  type: 'pie',
  data: {
    labels: ["Iphone", "S20", "A32"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#3e95cd", "#3c8523", "#42f39f"],
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Distribuição de Celulares",
      },
    },
  },
});

// setInterval(getData, 3000)

function getData(){
  pizza.data.labels.push("Iphone 12");
  pizza.data.datasets[0].data.push(30);
  pizza.update();
 }