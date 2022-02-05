var apiKey="85b3199b8c20c1ee1c5c37943d8fc461"
var home="concord"
var gazeNow="api.openweathermap.org/data/2.5/weather?appid="
var gazeUV="api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"
var gazeFive="api.openweathermap.org/data/2.5/forecast?q="

$(document).ready(function() {
    $("gaze-button").on("click", function() {
        var desiredGaze = $("gaze-box");
        skySight(desiredGaze);
    })
})

function skySight(location){
    var callFunc = ""
    if (location !== ""){
        callFunc = gazeNow + apiKey + "&q=" + location
    }
    else {
        callFunc = gazeNow + apiKey +"&q=" + home
    }
}

$.ajax({
    url: callFunc,
    method: "GET"
})
.then (function(response) {
    console.log(response)
    var tempur = response.main.temp
    $("#skyNow").append("<h3>" + tempur + "</h3>")
})    
