

 let url = "https://api.openweathermap.org/data/2.5/weather?q="
 let city ="Stockholm"
 let apikey =  "&appid=be0211d09b3b1c062b61ffe1f18c49d4&units=metric"


function getwether(city) {
  fetch(
    url+city+apikey
  ).then((response) => response.json()).then(

    (data) => this.display(data)
  )
}

function display(data){
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp } = data.main;

  document.querySelector(".city").innerHTML =  name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".describe").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";

}

document.querySelector(".bar").addEventListener("keypress", function(event){
if(event.key == "Enter")
search();
})


function search(){
  this.getwether(document.querySelector(".bar").value);
}
document.querySelector(".search button").addEventListener("click", function () {
  search();
});
