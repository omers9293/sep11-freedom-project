import kaboom from "kaboom";
import * as L from "leaflet";

const dom = new JSDOM('<!DOCTYPE html><div id="map" style="height: 400px;"></div>');
global.window = dom.window;
global.document = dom.window.document;

kaboom();


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();