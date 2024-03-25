# Entry 4
##### 3/18/24

#### Content + Progress
Since the last blog, I have started working on my MVP (Minimum Viable Project) for my freedom project and was able to make some good progress. It is time for me to put the skills that I have learned with [Kaboom](https://kaboomjs.com/) and [Leaflet.js](https://leafletjs.com/) to some good use. I have been tinkering along the way so I can find solutions to the problems that have arisen while trying to connect both leaflet and kaboom together. In the blink of an eye, you can see that the leaflet and kaboom do appear on the same page but then the map disappears. This is still an issue that I need to explore more about.

Throughout the documentation, it wasn't clear to me how I would be able to integrate both tools since they both have completely different functions and uses as they aren't in the same category as game developers. I also couldn't make sense of any of the videos that talked about this topic which prompted me to try it out by myself.

```js
 var map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
```
An error that I was getting from the code above was that the letter `L` was not defined and I didn't understand what I was supposed to do since the documentation told me to just paste the code above within the `javascript` section of my file. I also did `console.log` and it should the same error of the letter not being defined. I went back to the documentation and realized that I had skipped putting the leaflet.js starting code in my head. This is very important because it will allow for me to use any of the variables already existing within the servers of this tool, instead of doing it manually.

The code below was really helpful to show me that Kaboom was properly installed within the IDE since this was also an issue I had to overcome. I added a text in order for me to effectively see if I can place something within Kaboom since I was only getting the squared dots in every game file I've seen before.

```js
  import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

    kaboom();
    add([
        text("hello"),
        pos(120, 80),
    ]);

    </script>

```

I also added this feature using geoJson which will allow me to input the population of states if need be. I think this is very cool because when I add this, the server will be able to automatically zoom within the state that is clicked which will save me a ton of time and work. But again, I still need to figure out how to put both tools together before I can focus on the specifics of this project. I hope to do this by the end of the week.

```js
{
    "type": "Feature",
    "properties": {
        "name": "Alabama",
        "density": 94.65
    },
    "geometry": ...
    ...

    function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}
}

```
The function above will color the states according to their population density which can be helpful in terms of visibility for the user. The function is saying that if the variable that I defined earlier is larger than the assigned number, it will produce a certain color respectively.

<<<<<<< HEAD
I found that importing Kaboom through the way above was the only effective way for Kaboom to work and run. This is because Kaboom does not domestically exist within the IDE and needs to be taken from an outside browser. I didn't come up with this alone and got a friend that was doing Kaboom to guide me to the correct direction. I may not be as good
=======
I found that importing Kaboom through the way above was the only effective way for Kaboom to work and run. This is because Kaboom does not domestically exist within the IDE and needs to be taken from an outside browser. I didn't come up with this alone and got a friend that was doing Kaboom to help me. I spent more time exploring leaflet.js so that may be way I'm not as familiar with it. 
>>>>>>> f177b2234de202244c12f15e12ce5995d7e8bec9

#### EDP + Skills
The [Engineering Design Process](https://hstatsep.github.io/students/) that I'm currently in can be classified as *Create* a prototype since I'm working towards my MVP. Although I haven't made a ton of progress toward the final project, I'm slowly but surely finding a way how I can make these two completely different tools work together. My plan B if this does not work is to completely drop the leaflet and find a way to create the geography game within Kaboom only. My next stage of the Engineering Design Process is to test and improve the prototype as needed. I'm not at that stage yet since I didn't create the prototype which means I don't have anything to improve. The **skills** that I have developed are **Logical reasoning** and **Debugging** since I was put in many positions where I had to find the error. In terms of debugging skills, my Kaboom file would not want to appear after I had done `http-server` because of the many syntax errors that I had. The process of using the console isn't something I'm used to or even think of whenever an error appears, so I asked a friend for help. They told me to check the console and so after we did, there were a dozen errors that didn't want to disappear even after satisfying each one. This prompted me to think outside the box and to restart my way of importing kaboom within my IDE, and following the [documentation](https://kaboomjs.com/) very carefully. And it worked right after that. Logical reasoning is also a skill that I have practiced through my attempt to connect Kaboom and Leaflet.js. This is because I tried to put the code for the map underneath the code for Kaboom since my page would quickly show Kaboom at the top of the page. This did not work but it brought me an idea of how I can go about next time to make this work. The idea is to integrate an add button within Kaboom for the features of leaflet.js. This means that the leaflet will serve as a component for Kaboom which I believe will work and make sense in my head.

Some next steps for me is to figure out how I can combine both leaflet and kaboom which I think is going to be my biggest challenge of this project. I don't want to resort back to not using leaflet.js because I'm going not to be able to make this the way I had imagined it in my head. I'm going to watch some more YouTube tutorials and hopefully, by the end of this week, I would've figured it out by then. I will not be learning [D3Js](https://d3js.org/) because I found it to be insignificant for the project I will be doing since it is practically the same thing as [Leaflet.js](https://leafletjs.com/). So in short, I only have to import Kaboom and Leaflet.js within my files but couldn't get them both to show up.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)

