# Entry 4
##### 3/18/24

#### Content + Progress
Since the last blog, I have started working on my MVP (Minimum Viable Project) for my freedom project and was able to make some good progress. It is time for me to put the skills that I have learned with [Kaboom](https://kaboomjs.com/) and [Leaflet.js](https://leafletjs.com/) to some good use. I have been tinkering along the way so I can find solutions to the problems that have arose while trying to connect both leaflet and kaboom togethor. For the blink of an eye, you can see that leaflet and kaboom do appear within the same page but then the map disappears. This is still an issue that I need to explore more about.

Throughout the documentation, it wasn't clear to me how I would be able to integrate

```js
 var map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
```

The code below was really helpful to show me that kaboom was properly installed within the IDE since this was also an issue I had to overcome. I added a text in order for me to effectively see if I can place something within Kaboom since I was only getting the squared dots in every game file I've seen before.

```js
  import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

    kaboom();
    add([
        text("hello"),
        pos(120, 80),
    ]);

    </script>

```

#### EDP + Skills
The Engineering Design Process that I'm currently in can be classified as *Create* a prototype since I'm working towards my MVP. Although I haven't made a ton of progress towards the final project, I'm slowly but surely finding a way on how I can make these two completely different tools work togethor. My plan B if this does not work is to completely drop the leaflet and find a way to create the geography game

The **skills** that I have developed are 

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)