import waypoints from "./waypoins.js"
var markers = L.markerClusterGroup();
var icons = ["alicate.png", "desatornillador.png", "martillo.png", "serrucho.png"]
var mymap = L.map('mapid').setView([9.8590257,-83.9154911], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVndWkiLCJhIjoiY2s1OGQyYWF2MGRoZjNsa2VpaDh5d3lzMyJ9.IkV7ks5D76hh89Wh0WncWg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZHVndWkiLCJhIjoiY2s1OGQyYWF2MGRoZjNsa2VpaDh5d3lzMyJ9.IkV7ks5D76hh89Wh0WncWg'
}).addTo(mymap);

waypoints.forEach((element,icon) => {
  let myIcon = L.icon({
    iconUrl: "icons/" + icons[icon],
    iconSize: [32, 32]
  })
  let message = "Ferreteria Velca, " + element.name + " <br>" + " Latitud: " + element.lat + "<br>" + " Longitud: " + element.lng
  markers.addLayer(L.marker([element.lat, element.lng], {icon: myIcon}).bindPopup(message) )
});

mymap.addLayer(markers);
