# Entry 5
##### 5/6/24

#### Content + MVP FINISHED!

Since the last blog entry, I have worked hard and was able to finish my MVP (Minimum Viable Product), and now have a finished project of what I was planning to do all along. However, I made the very important decision to not use [Kaboom](https://kaboomjs.com/) and to only solely use the tool that I was most comfortable with which was [Leaflet.js](https://leafletjs.com/). I decided to do this since there wasn't any practical way to combine both Leaflet.js and Kaboom and the online resources for me to learn it were very scarce. Nevertheless, I was able to create the geography game that I planned for using the concepts that we learned in class including conditionals, loops, arrays, functions, and the tool I learned on my own, leaflet.js. I will explain some of obstacles that I encountered throughout the process of creating the working code for my freedom project.

Throughout the leaflet documentation, it was clear that the most efficient way to utilize the global map they offer is by placing Leaflet [CSS file](https://leafletjs.com/examples/quick-start/) in the head of my HTML document and pasting the code below. I had to change how the map was placed because it would only take up one-fourth of the screen which wasn't what I wanted. I also changed how it was always zoomed into [London](https://en.wikipedia.org/wiki/London) and made it pre-set to the entire globe. I did this by altering the `.setView` portion as shown below and changing the coordinate so it is zoomed out. I didn't need to search how to do this since I learned it throughout the year. I also made the `zoomControl: false` to remove the default zoom control buttons from the map interface.

```js
 var map = L.map('map', {zoomControl: false}).setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Disable map interactions i.e. scroll wheel zoom, dragging, and double-click zoom
        map.scrollWheelZoom.disable();
        map.dragging.disable();
        map.doubleClickZoom.disable();

        // layer group for markers
        var markersLayer = L.layerGroup().addTo(map); // Layer group for markers
```

I also decided that it was essential for me to disable the user's ability to zoom in the map because that would give away the entire point of the game since you would be able to cheat and see the names of the countries. And so I disabled the user's ability to scroll wheel zoom, drag, and to double click zoom. This will ensure a fair game and test the user's knowledge of how many countries they know without any outside help. I also noticed that it was hard to keep track of the countries and so I added `L.layerGroup().addTo(map);` to add a marker on every country the user has already inputted in the text-box just to keep track and make everything organized (more code was needed later on).

The code below is essentially an event listener that looks for whenever the user inputs the name "Omer" so it can alert the user that they have officially won and for the text-box to be disabled. Despite this not being a country, I chose to do this because when I'm presenting, it will not be possible to manually insert all 197 countries in order to demonstrate the confetti and end result of winning. So in short, the input of "Omer" will behave the same as if the user actually inserts all of the countries. The function includes `getScore()` which is used to update the score display to be full after the keyword is inserted. It will also trigger `alert("You win!");`.

```js
  document.addEventListener("keyup", (event) => {
            if(event.target.value) {
                var input = event.target.value.toLowerCase().replace(/\s/g, '');
                if (input === "omer") {
                    found = countries.slice();
                     // Updating score display
                    getScore();
                     // Disable input
                    document.querySelector("input").disabled = true;
                    alert("You win!");
                    // Trigger confetti animation
                    handleConfetti();
```
The part of the code where it states `querySelector("input").disabled = true;` helps make the game more functionable by making it impossible to put more countries than the requirement. This is because when I put the short answer key of "Omer", it will not disable the user's ability to insert all of the other countries that remain. It's also helpful in letting the user that they have officially won the game. I found this [Confetti Libary](https://github.com/loonywizard/js-confetti) to be extremely helpful for when I wanted to create a ending sequence to the game after the user has officially won the game. I originally wanted it to be all over the screen but wasn't possible because leaflet.js was overrunning it which was completely normal. I called the function,`handleConfetti`, for it to work something I originally forgot to do.

I decided that I wanted to give the users some hints to complete the end of the game since practically not everyone knows the entire world from the top of their heads. I did this by creating a new variable which I named `randomIndex` 

```js
 function giveHint() {
            var randomIndex = Math.floor(Math.random() * countries.length);
            var hintCountry = countries[randomIndex];
            // random country as a hint
            alert("Hint: Try " + hintCountry);
        }
```
**explain a little more**

**explain here***
```js
 async function placeMarker(country) {
            var response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${country}&apiKey=24ad17ae16e9447f95b0165eb327a2a1`);
            var data = await response.json();
            var lat = data.features[0].properties.lat
            var lon = data.features[0].properties.lon
            L.marker([lat, lon]).addTo(map)
        }
```

**explain a little more**
#### EDP + Skills

The Engineering Design Process (EDP) that I'm currently in can be classified
[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
