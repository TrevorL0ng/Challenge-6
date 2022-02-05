var apiKey="85b3199b8c20c1ee1c5c37943d8fc461"
var home="concord"
var gazeNow="https://api.openweathermap.org/data/2.5/weather?appid="
var gazeUV="https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"
var gazeFive="https://api.openweathermap.org/data/2.5/forecast?q="

$(document).ready(function() {
    $("#gaze-button").on("click", function(event) {
        var desiredGaze = $("#gaze-box").val();
        skySight(desiredGaze);
    })
})

function skySight(location){
    var callFunc = "";
    if (location !== ""){
        callFunc = gazeNow + apiKey + "&q=" + location + "&units=imperial"
    }
    else {
        callFunc = gazeNow + apiKey +"&q=" + home + "&units=imperial"
    }


$.ajax({
    url: callFunc,
    method: "GET"
})
.then (function(response) {
    console.log(response)
    var tempur = response.main.temp;
    var here = response.name
    $(".skyNow").append("The temperature is " + tempur + " Fahrenheit in " + here)
})    
}
