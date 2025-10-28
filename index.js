var distanceInMiles = 100;

function square(number) {
  return number * number;
}

function estimatedArrivalTime() {
  var milesPerHour = 50;
  return distanceInMiles / milesPerHour;
}

document.getElementById('result').innerHTML = estimatedArrivalTime();