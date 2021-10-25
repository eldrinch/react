
//usando a funçao imediata
(async () => {
  let response = await axios.get("https://api.covid19api.com/summary");
  loadSummary(response.data);
})();

//Criando um metodo para chamar as tres funçoes
function loadSummary(json) {
  loadKPI(json);
  loadPieChart(json);
  loadBarChart(json);
}

//Pegar os elementos HTML
function loadKPI(json) {
console.log(json);
  document.getElementById("confirmed").innerText = json.Global.TotalConfirmed.toLocaleString("PT");
  document.getElementById("death").innerText = json.Global.TotalDeaths.toLocaleString("PT");
  document.getElementById("recovered").innerText = json.Global.TotalRecovered.toLocaleString("PT");
  document.getElementById("date").innerText = `Data de atualização ${json.Date}`;
}

//odenando os dados para poder popular o grafico de barras
function loadBarChart(json) {
  //Ordenar o json, ordenar os paises pelo total de mortos, descendente para o total de morto e asc para o pais
  let countriesDeathsSorted = _.orderBy(json.Countries,["TotalDeaths", "Country"],["desc", "asc"]);
  //pegar somente os dez primeiros
  let countriesDeathsFiltered = _.slice(countriesDeathsSorted, 0, 10);
  //Com os dez primeiros items, vou mapear os paises
  let countriesMapped = _.map(countriesDeathsFiltered, "Country");
  //Aqui mapeo pelo total de mortes
  let totalDeathsMapped = _.map(countriesDeathsFiltered, "TotalDeaths");

//Criando o Grafico de Barras
  let bar = new Chart(document.getElementById("barras"), {
    type: "bar",
    data: {
      labels: countriesMapped,
      datasets: [
        {
          label: "Total de Mortes",
          data: totalDeathsMapped,
          backgroundColor: "rgba(153, 102, 255)",
        },
      ],
    },
    options: {
      reponsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Top 10 número de mortes por país",
          font: {
            size: 20,
          },
        },
      },
    },
  });
}

//Crio um vetor com as 3 informaçoes para popular nosso grafico de pizza
function loadPieChart(json) {
  let data = [
    json.Global.NewConfirmed,
    json.Global.NewDeaths,
    json.Global.NewRecovered,
  ];

// Populando os dados do grafico de pizza
  let pizza = new Chart(document.getElementById("pizza"), {
    type: "pie",
    data: {
      labels: ["Confirmados", "Mortes", "Recuperados"],
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Distribuicao de novos casos",
          font: {
            size: 20,
          },
        },
      },
    },
  });
 }
