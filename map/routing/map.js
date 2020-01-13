import waypoints from "./waypoins.js"
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVndWkiLCJhIjoiY2s1OGQyYWF2MGRoZjNsa2VpaDh5d3lzMyJ9.IkV7ks5D76hh89Wh0WncWg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZHVndWkiLCJhIjoiY2s1OGQyYWF2MGRoZjNsa2VpaDh5d3lzMyJ9.IkV7ks5D76hh89Wh0WncWg'
}).addTo(mymap);
let w =  []
waypoints.forEach(element => {
  w.push(L.latLng(element.lat, element.lng))
});
geocoder = L.Control.Geocoder.nominatim();
routingPlan = L.Routing.plan(w, {
createMarker: (index, waypoint) => {
  if (waypoints[0]) {
    return L.marker(waypoint.latLng, {
      draggable: false
    })
  }
},
geocoder: geocoder,
routeWhileDragging: false
});
L.Routing.control({
    plan:routingPlan
    
}).addTo(mymap);
