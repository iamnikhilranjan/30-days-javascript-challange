function GetInfo() {

  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = newName.value.toUpperCase();

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=3b660235bde751da6d75632d555bf8e3')
.then(response => response.json())
.then(data => {

  //Getting the min and max values for each day
  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
      //Number(1.3450001).toFixed(2); // 1.35
  }

  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
  }
  //------------------------------------------------------------

  //Getting Weather Icons
   for(i = 0; i<5; i++){
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
      data.list[i].weather[0].icon
      +".png";
  }
  //------------------------------------------------------------
  console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
  document.getElementById("cityInput").defaultValue = "London";
  GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}

function formatDate(date) {
  const options = { day: 'numeric', month: 'short' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function getNextDate(baseDate, daysToAdd) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + daysToAdd);
  return date;
}

const today = new Date();
for (let i = 0; i < 5; i++) {
  const currentDate = getNextDate(today, i);
  if (i === 0) {
      document.getElementById("day" + (i+1)).innerHTML = `${weekday[CheckDay(i)]}<br/><span style="font-size: 0.75em;">Today</span>`;
  } else {
      document.getElementById("day" + (i+1)).innerHTML = `${weekday[CheckDay(i)]}<br/><span style="font-size: 0.75em;">${formatDate(currentDate)}</span>`;
  }
}


