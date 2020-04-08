
$.getJSON("https://corona.lmao.ninja/countries",function(data){
    console.log(data)

    var cases = 
        data[16].cases;
    
    var date =
        data[16].todayCases;
console.log(length-1)
   $('.cases').append(cases)
   $('.date').append(date)
})
