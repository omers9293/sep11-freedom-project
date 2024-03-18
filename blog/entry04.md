# Entry 4
##### 3/18/24

#### Content + Tinkering
Since the


```js
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

```


```js

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
```


#### EDP + Skills



[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)