const data_type = {
  Deaths: "Mortes",
  Recovered: "Recuperados",
  Confirmed: "Confirmados",
};

//Declarando o linesChart como global para poder dar o Refresh
let linesChart;

(function startPage() {
  let dateStart = document.getElementById("date_start");
  let dateEnd = document.getElementById("date_end");

  dateStart.value = new Date(2021, 04, 01).toISOString().substr(0, 10);
  dateStart.max = new Date(2021, 04, 01).toJSON().split("T")[0];

  dateEnd.value = new Date().toISOString().substr(0, 10);
  dateEnd.max = new Date().toJSON().split("T")[0];
  //Adiconanado um manipulador no filtro
  document.getElementById("filtro").addEventListener("click", handlerFilter);

  //Utilizan do uma função imediata, para ser disparada imeditamente
  (async () => {
    //utilizando o metodo allSettled para receber um array de promises countries e dados
    let response = await Promise.allSettled([
      axios.get("https://api.covid19api.com/countries"),
      axios.get(
        `https://api.covid19api.com/country/Brazil?from=${new Date(2021,04,01,-3,0,0
        ).toISOString()}&to=${new Date(2021, 04, 25, -3, 0, 0).toISOString()}`
      ),
      axios.get(
        `https://api.covid19api.com/country/Brazil?from=${new Date(2021,03,30,-3,0,0
        ).toISOString()}&to=${new Date(2021, 04, 24, -3, 0, 0).toISOString()}`
      ),
    ]);

    //verificando se os dados son validos de pais
    if (response[0].status === "fulfilled") {
      //Ordenando os paises ascendente antes de passar pelo metodo loadCountries
      let json = _.orderBy(response[0].value.data, ["Country"], ["asc"]);
      loadCountries(json);
    }
  //validar se a promisse as duas foram realizadas 
    if (
      response[1].status === "fulfilled" && response[2].status === "fulfilled"
    ) {
      //chamamos metodo loadlineChart passando o json o delta e o tipo de dado que vai ser exibido(campo de obitos, confirmados,recuperados )
      loadLineChart(response[1].value.data, response[2].value.data, "Deaths");
      loadKPI(response[1].value.data);
    }
  })();
})();

//Criando o metodo para passa na validaça
function loadCountries(json) {
  //fazendo o combo para poder popular
  let combo = document.getElementById("cmbCountry");
//Um For para pode ter as opçoes, pegando as informaçoes do pais, pais, chave e Brazil como pais default 
  for (index in json) {
    combo.options[combo.options.length] = new Option(
      json[index].Country,
      json[index].Country,
      json[index].Country === "Brazil",
      json[index].Country === "Brazil"
    );
  }
}

//Pasamos o primeiro json, o delta e os dados, para poder prencher nosso grafico de linhas 
function loadLineChart(json, jsonDelta, dataType) {
  //pegando as datas que sera selecionado
  let dates = _.map(json, "Date");

  //pegando os valores  para poder fazer os calculos diarios
  let values = _.map(json, dataType);
  let deltaValues = _.map(jsonDelta, dataType);

  //trabalhando com os dados, fazendo a conta de substração
  values = _.each(values, (x, index) => {
    values[index] = values[index] - deltaValues[index];
  });
  //Calculando a media o valor de media e um vetor 
  let avg = _.times(values.length, _.constant(_.mean(values)));

  linesChart = new Chart(document.getElementById("linhas"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: values,
          label: `Número de ${data_type[dataType]}`,
          borderColor: "rgb(255,140,13)",
        },
        {
          data: avg,
          label: `Média de ${data_type[dataType]}`,
          borderColor: "rgb(255,0,0)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top", //top, bottom, left, rigth
        },
        title: {
          display: true,
          text: "Curva diária de Covid-19",
          font: {
            size: 20,
          },
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
    },
  });
}

//O metodo LoadKPI, preciso so do primeiro json valores totais do pais, Confirmed, death e recovered, pegando a ultima posição
function loadKPI(json) {
  document.getElementById("kpiconfirmed").innerText = _.last(json).Confirmed.toLocaleString("PT");
  document.getElementById("kpideaths").innerText = _.last(json).Deaths.toLocaleString("PT");
  document.getElementById("kpirecovered").innerText = _.last(json).Recovered.toLocaleString("PT");
}

//Função de Filtro pegar o combo de pais a data de inicio o do fim o pais 
async function handlerFilter() {
  //Pegando o combo do pais
  let dataCountry = document.getElementById("cmbCountry");
  //Pegando a data de inicio transformato em objeto data
  let startDate = new Date(document.getElementById("date_start").value);
  //Pegando a data de fim, transformato em objeto data
  let endDate = new Date(document.getElementById("date_end").value);

//Incrementando um segundo a mais na nossa data fim
  endDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    -3,//Fuso horario,hora, minutos, um segundo a mais, e ms(milisegundos) 7 valores de Date em total
    0,
    1,
    0
  );
  startDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 1,
    -3,
    0,
    0,
    0
  );
  //Data delta dimimuindo um dia na chamada
  let startDateDelta = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    -3,
    0,
    0,
    0
  );

  let endDateDelta = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    -3,
    0,
    1,
    0
  );
  
  //Fazendo o chamado da Rota, passando as informaçoes de data de inicio(startDate) e de fim(endDate)
  let response = await Promise.allSettled([
    axios.get(
      `https://api.covid19api.com/country/${ dataCountry.value
      }?from=${startDate.toISOString()}&to=${endDate.toISOString()}`
    ),
    axios.get(
      `https://api.covid19api.com/country/${ dataCountry.value
      }?from=${startDateDelta.toISOString()}&to=${endDateDelta.toISOString()}`
    ),
  ]);

  //Verificando se o chamado foi realizado 
  if (
    response[0].status === "fulfilled" && response[1].status === "fulfilled"
  ) {
    //Destruit o objeto na contruçao de linechart para criação do mesmo, realizado no refresh
    linesChart.destroy();
    loadKPI(response[0].value.data);
    loadLineChart(
      response[0].value.data,
      response[1].value.data,
      document.getElementById("cmbData").value
    );
  }
}
