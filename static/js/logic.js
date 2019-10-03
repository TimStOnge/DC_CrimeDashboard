// Creating map object
const API_ONE = "pk.eyJ1IjoidGltbXltYXBzIiwiYSI6ImNrMTl6ZmExbTA2eDQzY3FwMGdvOXE1bmcifQ.4GdVSdxFyPcKzlIHfI7viA";

var myMap = L.map("map-crime", {
  center: [38.9072, -77.0369],
  zoom: 12
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_ONE
}).addTo(myMap);


ward_link = "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson"

d3.json(ward_link).then(function(data) {

  function styleInfoWards(feature) {
    return {
      fillOpacity: 0,
      color: "#808080",
      stroke: true,
      weight: 4
    };
  }
  L.geoJson(data, {
    style: styleInfoWards,
  }).addTo(myMap);
});


var link = "https://raw.githubusercontent.com/jpw24/project-3-team2/master/bg_test.geojson";

var poverty_layer = new L.LayerGroup();
var unemployment_layer = new L.LayerGroup();
var vacancy_layer = new L.LayerGroup();

var overlays = {
  "Poverty": poverty_layer,
  "Unemployment": unemployment_layer,
  "Housing Vacancy": vacancy_layer,
};

L
  .control
  .layers(overlays)
  .addTo(myMap);

// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {

function styleInfoPoverty(feature) {
  return {
    opacity: .9,
    fillOpacity: .7,
    fillColor: getColorPoverty(feature.properties.pct_poverty),
    color: "#000000",
    stroke: true,
    weight: 0.1
  };
}

// Determines the color of the marker based on the magnitude of the earthquake.
function getColorPoverty(magnitude) {
  switch (true) {
  case magnitude > 40:
    return "#7a0177";
  case magnitude > 30:
    return "#c51b8a";
  case magnitude > 20:
    return "#f768a1";
  case magnitude > 10:
    return "#fbb4b9";
  default:
    return "#feebe2";
  }
}

function onEachFeature(feature, layer) {
  layer.bindPopup("<h5>" + "Percent in Poverty: " + feature.properties.pct_poverty + "%</h5>");//feature.properties.pct_poverty);
}


L.geoJson(data, {
  style: styleInfoPoverty,
  onEachFeature: onEachFeature
}).addTo(poverty_layer);
//});

/////////

  function styleInfoUnemployment(feature) {
    return {
      opacity: .9,
      fillOpacity: .7,
      fillColor: getColorUnemployment(feature.properties.pct_unemployed),
      color: "#000000",
      stroke: true,
      weight: 0.1
    };
  }
  
  // Determines the color of the marker based on the magnitude of the earthquake.
  function getColorUnemployment(magnitude) {
    switch (true) {
    case magnitude > 30:
      return "#253494";
    case magnitude > 20:
      return "#2c7fb8";
    case magnitude > 10:
      return "#41b6c4";
    case magnitude > 5:
      return "#a1dab4";
    default:
      return "#fffccc";
    }
  }
  
  function onEachFeatureUn(feature, layer) {
    layer.bindPopup("<h5>" + "Percent Unemployed: " + feature.properties.pct_unemployed + "%</h5>");//feature.properties.pct_poverty);
  }

  L.geoJson(data, {
    style: styleInfoUnemployment,
    onEachFeature: onEachFeatureUn
  }).addTo(unemployment_layer);

  function styleInfoVacancy(feature) {
    return {
      opacity: .9,
      fillOpacity: .7,
      fillColor: getColorVacancy(feature.properties.pct_vacancy),
      color: "#000000",
      stroke: true,
      weight: 0.1
    };
  }
  
  // Determines the color of the marker based on the magnitude of the earthquake.
  function getColorVacancy(magnitude) {
    switch (true) {
    case magnitude > 30:
      return "#006837";
    case magnitude > 20:
      return "#31a354";
    case magnitude > 10:
      return "#78c679";
    case magnitude > 5:
      return "#c2e699";
    default:
      return "#fffccc";
    }
  }
  
  function onEachFeatureVac(feature, layer) {
    layer.bindPopup("<h5>" + "Percent Housing Vacancy: " + feature.properties.pct_vacancy + "%</h5>");//feature.properties.pct_poverty);
  }

  L.geoJson(data, {
    style: styleInfoVacancy,
    onEachFeature: onEachFeatureVac
  }).addTo(vacancy_layer);

  });





































//INFO FOR JIMMY
var baseURL="/data"

var layer;
function buildCharts(filter) {
  if (filter.offense==="All"){
    var chart_url=baseURL.concat("?OFFENSE=",filter.offense,"&WARD=",filter.ward.toString());
    //console.log("Jimmy");
  }
  else{
    var chart_url=baseURL.concat("?OFFENSE='",filter.offense.toString(),"'&WARD=",filter.ward.toString());
  }
  //building the map
  d3.json(chart_url).then((response) => {
    var markers = L.markerClusterGroup();
    if (layer){
      layer.clearLayers();
    }
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      // Check for location property
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([response[i].LATITUDE, response[i].LONGITUDE]));
      //markers.popup("Shift: "+ response[i].OFFENSE);
      //.bindPopup("Shift: "+ response.SHIFT + "<hr>" + response[i].LONGITUDE + "<br>" + response[i].WARD);
  
    }
    layer=markers;
    
    
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
    //markers.clearLayers();


  });
  //reena code
  //var reena_chart_url="/charts_data".concat("?OFFENSE='",filter.offense,"'&WARD=",filter.ward.toString())
  //d3.json(reena_chart_url).then((response)=>{

  //})

//  console.log(users)

}

function init() {
  // Grab a reference to the dropdown select element
  var offenseSelector = d3.select("#selType");
  var wardSelector = d3.select("#selWard")

  // Use the list of sample names to populate the select options
  /*d3.json("/offense").then((offense_data)=>{
    offense_data.forEach((offense)=>{
      offenseSelector
        .append("option")
        .text(offense.OFFENSE)
        .property("value", offense.OFFENSE);
      });
      const firstOffense = offense_data[0].OFFENSE;
    });
    */
  d3.json("/ward_offense").then((data) => {
    //console.log(ward_data);
    data.ward.forEach((ward) => {
        //.append ALL here?
      wardSelector
        .append("option")
        .text(ward.Ward)
        .property("value", ward.Ward);
      });
    data.offense.forEach((offense)=>{
      offenseSelector
        .append("option")
        .text(offense.OFFENSE)
        .property("value",offense.OFFENSE)
    });
    //.append ALL here?
    // Use the first sample from the list to build the initial plots
    const firstWard = data.ward[0].Ward;
    const firstOffense = data.offense[0].OFFENSE;
    wardSelector.append("option").text("All").property("value","All");
    offenseSelector.append("option").text("All").property("value","All");
    var firstFilter = {
      offense: firstOffense,
      ward: firstWard
    };
    buildCharts(firstFilter);
  });

}

function filterSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select inputs from the filter dropdowns
  var offenseFilter = d3.select("#selType").node().value;
  console.log(offenseFilter);
  var wardFilter = d3.select("#selWard").node().value;
  console.log(wardFilter);

  var filter = {
    offense: offenseFilter,
    ward: wardFilter
  };

  // CALL THE BUILD CHARTS FUNCTION(S) PASSING IN THE FILTER
  buildCharts(filter); //or whatever the function is called
}

// EVENT LISTENER FOR PLOT DATA BUTTON
d3.select("#submit").on("click", filterSubmit);
init();