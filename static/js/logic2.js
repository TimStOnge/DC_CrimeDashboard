// Creating map object
const API_ONE = "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ";

var myMap = L.map("map-crime", {
  center: [38.9072, -77.0369],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGltbXltYXBzIiwiYSI6ImNqdGxvM2M0bTB1NXIzeXBnd3QxcGx3Mm0ifQ.IwW87rAiKtVg2uATox5ftg", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_ONE
}).addTo(myMap);

// Store API query variables
var baseURL = "/data"

// Grab the data with d3
d3.json(baseURL).then( function(response) {
  //console.log(response);
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {
    
    // Set the data location property to a variable
    // Check for location property
    // Add a new marker to the cluster group and bind a pop-up
    markers.addLayer(L.marker([response[i].LATITUDE, response[i].LONGITUDE]));
        //.bindPopup(response[i].descriptor + "<hr>" + response[i].cross_street_1 + "<br>" + response[i].cross_street_2));

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

// FILTERING SECTION ********************************************
//********************************************
//********************************************
//********************************************
//********************************************

// Populated Metadata Panel with data for each selected sample
function typeFilter(sample) {

  var selector = d3.select("#sample-metadata");

  selector.html("");
  var url_meta = `/metadata/${sample}`

  d3.json(url_meta).then(function(data) {

    Object.entries(data).forEach(function([key, value]) {
      var cell = selector.append("div");
      var key_format = key.toUpperCase();
      cell.text(`${key_format}: ${value}`);
    
  });

  });
}


/* THIS SECTION TO INITIALIZE WHAT IS FIRST SEEN ON THE PAGE
****************************************************************************************

// Initializes the application.
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();



/* STORING EVENT LISTENERS I WILL NEED
****************************************************************************************

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
*/





/* THIS COMBINE THE RESULTS OF TWO ENDPOINTS (AT THIS POINT I'M JUST TRYING TO PRINT DATA TO TEST)
****************************************************************************************

/*function comboTest(ctype, ward){
  var url_ctype = `/type/${ctype}`
  var url_ward = `/location/${ward}`

d3.json(url_ctype).then(function(response) {
  console.log(response);
});
d3.json(url_ward).then(function(response) {
  console.log(response);
});
}
comboTest("HOMICIDE", 1)*/

