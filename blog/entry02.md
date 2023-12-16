# Entry 2
##### 12/18/23

#### Content + Tinkering
Throughout the last month, I have been constantly tinkering with [Leaflet.js](https://leafletjs.com/) and [Kaboom](https://kaboomjs.com/) for the geography game that I plan to make. For the most part, I have been tinkering on Monday and Sunday nights which I found to be effective since that is when we discuss the FP the most. I've stated before that I was going to keep [D3Js](https://d3js.org/) in the back of my mind for reference, which is still true despite me not tinkering with it at all *yet*. I started by trying to understand this [Leaflet tutorial](https://www.youtube.com/watch?v=6QFkgOeQc0c&list=PLDmvslp_VR0xjh7wGMNd_1kk0zUox6Sue) and how I can incorporate it in my example.

One of the first mistakes I made which I had to include whenever I use Kaboom for tinkering was this stylesheet link that I included below. This code links the leaflet CSS file to the code that I will write in the future. I skipped right through this and when I tried to run my code, a white screen popped up which forced me to look back at what I did wrong.
```js
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
```
There is also a link that I need to include in the html file that looks similar to the one above. I chose not to include it here since the overall message of my needing to pay more attention in the tutorial has been understood. In other words, this event helped me develop the skill of *attention to detail* since I started paying closely to the tutorials making sure I didn't skip anything important. Make sure to also use `npm install kaboom` or else nothing works!!

```js
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
```

For one of my tinkering, I decided I wanted to create a flappy bird game since that was a childhood memory that I had competing with my brothers. I knew I wouldn't be able to do one on my own so I searched for a [tutorial](https://www.youtube.com/watch?v=hgReGsh5xVU) online and came upon a useful one. I wanted to highlight the code below because it successfully creates a bird sprite. A challenge that I had with this was not kaboom-related, surprisingly. I forgot how I could link a picture to the sprite and even forgot how to import an image to the IDE which I figured by searching it up.
```js
var spriteBird = add([
  sprite("bird"),
  pos(75, 120),
  layer("game"),
  {
    value: 0,
  },
]);
```
I wasn't able to get it to work which was a bummer but that's why I decided I'm going to dedicate some time to making it work during break. I did become more familiar with writing codes for sprites which is something worthy of mentioning. It is also worth mentioning I tried figuring out why but couldn't see the problem. My only experience with creating sprites was with [scratch](https://scratch.mit.edu/). I'll be talking more about that later on in this blog so keep an eye out for that.

```js
keyPress("space", () => {
player.jump();
})
```
This code that I wrote is worth mentioning since I will be using it in my FP game. It allows me to utilize any key on a keyboard by assigning it a specific task. For the example above, the sprite will jump every time the `space` key is triggered/clicked by the user. I included it in the Flappy Bird code when I was tinkering.

#### EDP + Skills
The Engineering Design Process that I'm currently in hasn't changed yet which can be classified as researching and brainstorming possible solutions. Tinkering is an important part of being able to accomplish the FP since I would not be able to effectively and efficiently use the tool and create the essence of my game without knowledge. The next stage of the *EDP* is to plan how I will be creating my geography game in terms of technicality. This means planning my usage of Kaboom and Leaflet.js when creating the game. I still do plan on tinkering with D3Js so I can see how I can bring it to use, which I know can be helpful in some aspects. The **skills** that I have developed from the last entry blog are *Time Management* and *Organization*. I have improved significantly in dedicating specific periods during Monday and Sunday nights for tinkering with my tool. I would start tinkering at approximately 8 at night after I've done all of my schoolwork just so nothing can be on my mind when I'm learning. Usually, it's hard for me to dedicate or plan something and do it but I got myself together for this purpose. This is something I've improved on since I would usually just tinker during school and call it a day. My organization skills have exponentially increased as I used to use [JSBIN](https://jsbin.com/?html,output) for any tinkering I did, which I started to feel was messy and scattered. I now use my IDE as a place to store all the code I use while learning my tools which was extremely helpful when writing this blog entry.

I plan to watch this [Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU&t=327s) in full without doing any tinkering to fully comprehend the information being presented. I could watch it during the first few days of break, it's only 30 minutes. I will then watch it for the second time and follow through with it in my IDE. The video is about creating a flappy bird kaboom game, which I tried creating before but didn't necessarily work. I'm also going to utilize *commenting* to make sure I comprehend/understand everything and for me to reference the work in the future. I also plan to refactor the code and/or change it to fit more into my understanding. That will be my plan for tinkering with Kaboom during the break. Similarly, I will do something similar with leaflet.js using this [Youtube Video](https://www.youtube.com/watch?v=urOfcs7n4bA&t=944s). I don't have anything huge planned for the break which will make all of this possible. (It's not even that much!)

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)

