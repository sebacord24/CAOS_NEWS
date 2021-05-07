var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0d500153d001490ac9beccc412723baa'+'&lang=es')
.then(response => response.json())
.then(data => {
  var tempValue = data ['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Descripción: "+descValue;
  temp.innerHTML = "Temperatura: "+ (Math.round(tempValue - 273.15))+"C°";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})