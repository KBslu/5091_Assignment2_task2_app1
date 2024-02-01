require([
  "esri/Map",
  "esri/layers/CSVLayer",
  "esri/views/MapView",
  "esri/config",
  "esri/core/urlUtils",
  "dojo/domReady!"
], function(Map, CSVLayer, MapView, esriConfig, urlUtils) {

  // Adding the URL for your St. Louis crime data CSV
  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
  esriConfig.request.corsEnabledServers.push('https://raw.githubusercontent.com');

  const template = {
    title: "Crime Info",
    content: "A crime occurred at {location} on {date}."
  };

  const csvLayer = new CSVLayer({
    url: url,
    popupTemplate: template
  });

  var symbol = {
    type: "simple-marker", 
    color: "purple" // Change color as needed
  };

  csvLayer.renderer = {
    type: "simple",
    symbol: symbol
  };

  var map = new Map({
    basemap: "gray",
    layers: [csvLayer]
  });

  var view = new MapView({
    container: "viewDiv",
    center: [-90.1994, 38.6270], // Center on St. Louis
    zoom: 12, // Adjust zoom level as needed
    map: map
  });

});
