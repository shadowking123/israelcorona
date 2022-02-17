COVID_API = "https://corona.lmao.ninja/v3/covid-19/countries/israel";

async function getData_API() {
    let covidApiData  = await fetch(COVID_API)
    .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json;
      });
        let active = covidApiData.active;
        let recovered = covidApiData.recovered;
        let deaths = covidApiData.deaths;
        let cases = covidApiData.cases;
        
        $(".active").append(active);
        $(".recovered").append(recovered);
        $(".death").append(deaths);
        $(".cases").append(cases);
   }

   getData_API()