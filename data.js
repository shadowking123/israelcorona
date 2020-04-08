
$.getJSON("https://api.covid19api.com/summary",function(data){
    console.log(data)

    var cases = 
        data.Countries[107].TotalConfirmed;
    
    var date =
        data.Countries[107].NewConfirmed;
   $('.cases').append(cases)
   $('.date').append(date)
})
