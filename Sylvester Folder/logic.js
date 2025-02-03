// Creating our initial map object;
// we set the longtitude,latitude, and starting zoom level
let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
});
// Adding a tile layer (the background map image) to our map :
// we use the addto()method to add objects to our map.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
