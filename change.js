let box = document.getElementsByClassName("exercise-type");
let bground = document.getElementById("wallpaper");
let main_page = document.getElementById("main_title");
let sub_title = document.getElementsByTagName("h2");
let condition = document.getElementById("pollution");


var url1 = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=f13d1e5d52110975235e3b1b31831a78";
var http1 = new XMLHttpRequest();
http1.open("GET", url1, false);
http1.send();

var url2 = "https://api.openweathermap.org/data/2.5/air_pollution?lat=37.5683&lon=126.9778&appid=f13d1e5d52110975235e3b1b31831a78";
var http2 = new XMLHttpRequest();
http2.open("GET", url2, false);
http2.send();

obj1 = JSON.parse(http1.responseText);
obj2 = JSON.parse(http2.responseText);

document.getElementById("icon").src = "http://openweathermap.org/img/w/"+obj1.weather[0].icon+".png"
document.getElementById("temp").innerHTML = obj1.main.feels_like + " °C";
document.getElementById("wind").innerHTML = obj1.wind.speed + " m/s";
if (obj2.list[0].main.aqi===1){
  document.getElementById("pollution").innerHTML = "매우 좋음";
}
else if (obj2.list[0].main.aqi === 2) {
  document.getElementById("pollution").innerHTML = "좋음";
}
else if (obj2.list[0].main.aqi === 3 ) {
  document.getElementById("pollution").innerHTML = "보통";
}
else if (obj2.list[0].main.aqi === 4 ) {
  document.getElementById("pollution").innerHTML = "나쁨";
}
else if (obj2.list[0].main.aqi === 5 ) {
  document.getElementById("pollution").innerHTML = "매우 나쁨";
}


if (obj1.main.feels_like<32 && obj1.main.feels_like>3 && obj1.wind.speed<15 && (obj1.weather[0].main === "Clear" || obj1.weather.main === "Clouds") && obj2.list[0].main.aqi<4){
  bground.style.backgroundImage = "linear-gradient(coral, peachpuff)";
  document.getElementById("image").src = "outside.png";
  main_page.innerHTML = "오늘은 <br><strong>실외</strong>에서 운동하기 좋은 날입니다";
  for (var i = 0; i < sub_title.length; i++) {
    sub_title[i].style.color = "coral";
  }
  for (var i = 0; i < box.length; i++) {
      box[i].style.border = "2px solid coral";
  }
  document.getElementById("ex1_1").innerHTML = "조깅";
  document.getElementById("ex1_2").innerHTML = "자전거";
  document.getElementById("ex1_3").innerHTML = "줄넘기";
  document.getElementById("ex1_4").innerHTML = "스케이트보드";

  document.getElementById("ex2_1").innerHTML = "배드민턴";
  document.getElementById("ex2_2").innerHTML = "테니스";
  document.getElementById("ex2_3").innerHTML = "등산";
  document.getElementById("ex2_4").innerHTML = "캐치볼";

  document.getElementById("ex3_1").innerHTML = "축구";
  document.getElementById("ex3_2").innerHTML = "야구";
  document.getElementById("ex3_3").innerHTML = "골프";
  document.getElementById("ex3_4").innerHTML = "농구";
}
else{
  bground.style.backgroundImage = "linear-gradient(mediumorchid, lavenderblush)";
  document.getElementById("image").src = "inside.png";
  main_page.innerHTML = "오늘은 <br><strong>실내</strong>에서 운동하기 좋은 날입니다";
  for (var i = 0; i < sub_title.length; i++) {
    sub_title[i].style.color = "mediumorchid";
  }
  for (var i = 0; i < box.length; i++) {
      box[i].style.border = "2px solid mediumorchid";
  }
  document.getElementById("ex1_1").innerHTML = "필라테스";
  document.getElementById("ex1_2").innerHTML = "러닝머신";
  document.getElementById("ex1_3").innerHTML = "웨이트<br>트레이닝";
  document.getElementById("ex1_4").innerHTML = "실내<br>암벽등반";

  document.getElementById("ex2_1").innerHTML = "탁구";
  document.getElementById("ex2_2").innerHTML = "발레";
  document.getElementById("ex2_3").innerHTML = "유도";
  document.getElementById("ex2_4").innerHTML = "복싱";

  document.getElementById("ex3_1").innerHTML = "크로스핏";
  document.getElementById("ex3_2").innerHTML = "수영";
  document.getElementById("ex3_3").innerHTML = "요가";
  document.getElementById("ex3_4").innerHTML = "태권도";
}

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('mouseover', function(event){
    event.target.style.color = "white";
    if (obj1.main.feels_like<32 && obj1.main.feels_like>3 && obj1.wind.speed<15 && (obj1.weather[0].main === "Clear" || obj1.weather.main === "Clouds") && obj2.list[0].main.aqi<4){
      event.target.style.backgroundColor = "coral";
    }
    else {
      event.target.style.backgroundColor = "mediumorchid";
    }
  });

  box[i].addEventListener('mouseout', function(event){
    event.target.style.color = "black";
    event.target.style.backgroundColor = "white";
  });
}
