
var map = L.map('map').setView([38.862, -77.05], 12);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// 		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHN0ZXBwMiIsImEiOiJjamdqcGY0ZG0wa2s4MnBsZHNyMWhhb3BuIn0.3qg0E1MPPHUUHvoow4BD1Q', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var usms = L.marker([38.862, -77.05]).addTo(map)
		.bindPopup('United States Marshalls Service')
		.openPopup();





// L.geoJSON(someFeatures, {
//     filter: function(feature, layer) {
//         return feature.properties.show_on_map;
//     }
// }).addTo(map);


var geojson = L.geoJSON(data, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>'+feature.properties.city_name+'</h1>'
    				+'<p>State Name: '+ feature.properties.state_name+'</p>'
    				+'<p>County FIPS: ' + feature.properties.county_fips+ '</p>'
    				+'<p>County Name: ' + feature.properties.county_name+ '</p>'
    				+'<p>Population: ' + feature.properties.population+ '</p>'
    				+'<p>Density: ' + feature.properties.density+ '</p>');
  }
});




var markers = L.markerClusterGroup();
markers.addLayer(geojson).addLayers([usms]);
markers.addLayer(geojson);
map.addLayer(markers);
