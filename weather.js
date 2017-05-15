/* called when button is pushed */

function gotNewPlace() {
	// get what the user put into the textbox
	var newPlace = document.getElementById("zipbox").value;

	// make a new script element
	var script = document.createElement('script');

	// start making the complicated URL
	script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+newPlace+"')&format=json&callback=callbackFunction"
	script.id = "jsonpCall";

	// remove old script
	var oldScript = document.getElementById("jsonpCall");
	if (oldScript != null) {
		document.body.removeChild(oldScript);
	}

	// put new script into DOM at bottom of body
	document.body.appendChild(script);
}

/* called when new weather arrives */

function getConditionImage(condNumber,name) {

	if(condNumber < 5){
    	document.getElementById(name).src = "weatherApp/rain.png";
    } if(condNumber > 4 && condNumber < 13){
    	document.getElementById(name).src = "weatherApp/thunder.png";
    } if((condNumber > 12 && condNumber < 19) || (condNumber > 40 && condNumber < 48)){
    	document.getElementById(name).src = "weatherApp/snow.png";
    } if(condNumber > 18 && condNumber < 32){
    	document.getElementById(name).src = "weatherApp/cloudy.png";
    } if((condNumber> 31 && condNumber < 35) || condNumber == 36){
    	document.getElementById(name).src = "weatherApp/sunny.png";
    } if(condNumber == 35 || (condNumber > 36 && condNumber < 41)){
    	document.getElementById(name).src = "weatherApp/rain.png";
    } if(condNumber == 44){
    	document.getElementById(name).src = "weatherApp/part-sun.png";
    }
}

function callbackFunction(data) {
	// data contains object returned from server
	var object = JSON.parse(JSON.stringify(data));
    var date = document.getElementById("date");
    var date1 = JSON.stringify(object.query.results.channel.lastBuildDate);
    var dateArray = date1.split(' ');
    date.textContent = dateArray[4] + dateArray[5];
    var time = document.getElementById("dateMain");
    dateMain.textContent = dateArray[2] + " " + dateArray[1] + "," + " " + dateArray[3];

    var city = document.getElementById("cityMain");
    var city1 = JSON.stringify(object.query.results.channel.location.city);
    city1 = city1.split("\"");

    // var state = document.getElementById("stateMain");
    var state1 = JSON.stringify(object.query.results.channel.location.region);
    state1 = state1.split("\"");
    city.textContent = city1[1] + "," + state1[1];

	var temp = document.getElementById("tempMain");
    var temp1 = JSON.stringify(object.query.results.channel.item.condition.temp);
    temp1 = temp1.split("\"");
    temp.textContent = temp1[1];

    var condition = document.getElementById("conditionMain");
    var condition1 = JSON.stringify(object.query.results.channel.item.condition.text);
    condition1 = condition1.split("\"");
    condition.textContent = condition1[1];

    var humid = document.getElementById("hum");
    var humid1 = JSON.stringify(object.query.results.channel.atmosphere.rising);
    humid1 = humid1.split("\"");
    humid.textContent = humid1[1] + "%";

    var wind = document.getElementById("wind");
    var wind1 = JSON.stringify(object.query.results.channel.wind.speed);
    wind1 = wind1.split("\"");
    wind.textContent = wind1[1] + "mph";

    document.getElementById("condLogo").src = "weatherApp/part-sun.png";

    var weatherImage = document.getElementById("condLogo");
    var conditionNum = JSON.stringify(object.query.results.channel.item.condition.code);
    conditionNum = conditionNum.split("\"");
    if(conditionNum[1] < 5){
    	document.getElementById("condLogo").src = "weatherApp/rain.png";
    } if(conditionNum[1] > 4 && conditionNum[1] < 13){
    	document.getElementById("condLogo").src = "weatherApp/thunder.png";
    } if((conditionNum[1] > 12 && conditionNum[1] < 19) || (conditionNum[1] > 40 && conditionNum[1] < 48)){
    	document.getElementById("condLogo").src = "weatherApp/snow.png";
    } if(conditionNum[1] > 18 && conditionNum[1] < 32){
    	document.getElementById("condLogo").src = "weatherApp/cloudy.png";
    } if((conditionNum[1]> 31 && conditionNum[1] < 35) || conditionNum[1] == 36){
    	document.getElementById("condLogo").src = "weatherApp/sunny.png";
    } if(conditionNum[1] == 35 || (conditionNum[1] > 36 && conditionNum[1] < 41)){
    	document.getElementById("condLogo").src = "weatherApp/rain.png";
    } if(conditionNum[1] == 44){
    	document.getElementById("condLogo").src = "weatherApp/part-sun.png";
    }

    for (var i = 0; i < 10; i++) { 
		document.getElementById("weatherBox" + i);
		document.getElementById("day" + i).innerHTML = object.query.results.channel.item.forecast[i].day;
		document.getElementById("high" + i).innerHTML = object.query.results.channel.item.forecast[i].high;
		document.getElementById("low" + i).innerHTML = object.query.results.channel.item.forecast[i].low;
		document.getElementById("condition" + i).innerHTML = object.query.results.channel.item.forecast[i].text;
		getConditionImage(object.query.results.channel.item.forecast[i].code, "condLogo" + i);


	}
   	// 			document.getElementById("high" + i).innerHTML = object.query.results.channel.item.forecast[i].high;
				// document.getElementById("low" + i).innerHTML = object.query.results.channel.item.forecast[i].low;
    	

	// for (var i = 1; i < 11; i++) { 


	// }

}


	    	// document.getElementById("day" + i).innerHTML = object.query.results.channel.item.forecast[1].text
	   //  		var dayy1 = JSON.stringify(object.query.results.channel.item.forecast);
				// dayy1 = dayy1.split("\"");
				// dayy.textContent = dayy1[11];


var distance = 0;

function moreButton() {
  if (distance > -100) {
    distance = distance - 20;
    document.getElementById("weatherBox0").style.marginLeft = distance + "%";
  }

}

function previousButton() {
  if (distance <= -100 || distance < 0) {
    distance = distance + 20;
    document.getElementById("weatherBox0").style.marginLeft = distance + "%";
  }

}


function init() { 
var range = document.getElementsByClassName("range"); 
var rangeWidth = range.clientWidth; 
var steppers = document.getElementsByClassName("stepper"); 
var n = steppers.length; 
for (i = 0; i < n; i++) { 
data
	}
} 




