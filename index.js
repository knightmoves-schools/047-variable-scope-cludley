var distanceInMiles = 100;

function estimatedArrivalTime {
 
  var milesPerHour = 60; 

  return distanceInMiles / milesPerHour;
}

document.getElementById('result').innerHTML = estimatedArrivalTime();