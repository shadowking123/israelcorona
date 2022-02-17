
$.getJSON("https://corona.lmao.ninja/v3/covid-19/countries",function(data){

    
    var israel;
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].country == "Israel"){
          israel = i;
          break;
      }
    }
    console.log("log " +  israel)

    var active = 
        data[israel].active
    
    var recovered = 
        data[israel].recovered

    var deaths=
        data[israel].deaths
    
    var date =
        data[israel].todayCases;
    
    var cases = 
        data[israel].cases;
    
   $('.active').append(active)
   $('.recovered').append(recovered)
   $('.death').append(deaths)
   $('.cases').append(cases)
   $('.date').append(date)
})
