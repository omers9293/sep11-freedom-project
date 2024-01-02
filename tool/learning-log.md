# Tool Learning Log

Tool: **Kaboom & Leaflet & D3**

Project: **Geography Game**

---

10/29/23:
* [Leaflet](https://leafletjs.com/examples/quick-start/)
    * Followed tutorial and created an interactive map in JsBin
        * [JsBin Example](https://jsbin.com/kicetoniwe/1/edit?html,css,js,output)
        * Leaflet code is available (copy & paste)
    * Watched [Leaflet Youtube Video](https://www.youtube.com/watch?v=6QFkgOeQc0c&list=PLDmvslp_VR0xjh7wGMNd_1kk0zUox6Sue)
    * bindPopup --> creates a pop up
        * A lot of new terms need to be learned such as polygon, L.map, etc
* How do I alter the map with inputs? Ie; when I let the user insert a country name, how can it be marked/ changed?
    * Conditionals??
* How can I combine both Kaboom and Leaflet?
* Next Steps:
    * Tinker/ Play around with Kaboom


11/5/23
* [Kaboom](https://kaboomjs.com/play?example=add)
    * Created a kaboom background and changed the sprites into a different one
        * Done in IDE @ kaboomTinkering.html
        * Lots of examples online to be inspired from
    * Watched 10 minutes of [Kaboom Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU)
    * rotate() component gives sprite rotation
        * tutorials usually define the code in the comments
* Do I need a sprite for my geography game? Should I add one?
    * Use sprite and allow it to speak if country guessed is right or wrong
* What purpose does the sprite have in my future game?
* Next Steps Tomorrow:
    * Tinker with D3 JS
    * Confirm Tools


11/13/23
* [Leaflet](https://leafletjs.com/examples/quick-start/)
    * Watched 10 minutes of this youtube video called [Introduction To Leaflet JS](https://www.youtube.com/watch?v=JOg5GDy2Ih4&list=PLDmvslp_VR0xjh7wGMNd_1kk0zUox6Sue&index=2)
        * Created a map with a pop-up in IDE @ leaf1.js
* If you want to use a pop-up, bind it to whatever shape desire to associate with w/ info
* Can we change the shape of the pop up?
* How can I combine both Kaboom and Leaflet?
    * Still not sure --> more research needed
* Make sure to finish all the videos in the youtube series --> very helpful
    * Follow through as well just like today
* Next Steps:
    * Finish watching the YouTube video
    * Try to create a mini-game with Leaflet & Kaboom


11/19/23
* [Kaboom](https://kaboomjs.com/play?example=add)
    * Watched the remaining of this [Kaboom Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU)
        * Could utilize a key in doing an action using `keyPress()`
        * Include `.jump` next a sprite variable number to make it jump
    * Created a flappy game using Kaboom that includes a sprite that jumps in IDE @ kab2.js
        * Code is correct but is not showing as preview
        * Learned that `scale` makes the screen bigger or smaller depending on the value
    * Why is the code just showing when I use `http-server`?
    * Does Kaboom have to be downloaded to be used?
    * Next Steps:
        * Try to create flappy but @ Repl.it --> that's where the video was doing it
        * Go through this [Kaboom document](https://docs.replit.com/tutorials/kaboom/kaboom-editor) & follow it in IDE

11/26/23
* [Kaboom](https://kaboomjs.com/play?example=add)
    * Followed through this [Kaboom document](https://docs.replit.com/tutorials/kaboom/kaboom-editor)
        * Analyzed this pre-made [repl.it](https://replit.com/@omers9293/tinkering3#README.md)
            * Commented out significant code that altered the way it ran
            * Displays `kaboom` wherever you click your cursor on
    * Watched 20 minutes of this [Kaboom Mario Tuturial](https://www.youtube.com/watch?v=2nucjefSr6I)
        * `anchor()` defines the origin point of positioning.
    * Learned that `outline()` renders an outline of `4` pixels
    * How can I change the background in Kaboom?
        * Can the background be in motion?
    * Next Steps:
        * Create a small project using Kaboom + Leaflet.js
            * Start on Monday night --> Weekend tinkering isn't enough
        * A game involving clicking on a country with a sprite reacting @ IDE
        * Watch the remaining of [Kaboom Mario Tuturial](https://www.youtube.com/watch?v=2nucjefSr6I)

12/3/23
* [Kaboom](https://kaboomjs.com/play?example=add) + [Leaflet](https://leafletjs.com/examples/quick-start/)
    * Created a background including Kaboom and Leaflet.js @ IDE (kableaf)
        * Analyzed this [Leaflet on Mobile ](https://leafletjs.com/examples/mobile/) tutorial
            * Will keep this in back of mind to include in FP
    * Switched out some of this [repl.it](https://replit.com/@omers9293/tinkering3#README.md)code into my own
    * How can I make this game as interactive as possible?
        * Should the map also be interactive?
        * What should my sprite be?
    * `onKeyPress("space", () =>` utilizes any button on the keyboard just change what's inside the quotes
    * `L.Control.Scale` shows the scale which applies to the center point of the map.
    * Next Steps:
        * Finish watching this [Kaboom Mario Tuturial](https://www.youtube.com/watch?v=2nucjefSr6I)
        * Very long video --> watch 10-20 minutes of this [Leaflet.js Tutorial](https://www.youtube.com/watch?v=urOfcs7n4bA)
            * Follow through and create the example with him

12/10/23
* [Kaboom](https://kaboomjs.com/play?example=add) + [Leaflet](https://leafletjs.com/examples/quick-start/)
    * Finished watching [Kaboom Mario Tuturial](https://www.youtube.com/watch?v=2nucjefSr6I)
    * Watched 20 minutes of this [Leaflet.js Tutorial](https://www.youtube.com/watch?v=urOfcs7n4bA)
        * Adjusted the size of map using CSS @ map.js
        * Made map look Geographical including deserts and terrains
    * `L.marker([51.5, -0.09]).addTo(map);` creates a marker just change the indexes to fit the game
        * Map will be interactive using a marker for a user to drag and click
        * Points will be rewarded for correct answers + deducted for wrong
    * How can I make this map look more friendly? Like cartoon?
    * How can I make use of D3.js in my game?
    * Next Steps:
        * Watch another 20 minutes of this[Leaflet.js Tutorial](https://www.youtube.com/watch?v=urOfcs7n4bA)
            * Continue following through the example @ map.js
        * Start brainstorming sprites?
        * Tinker with D3.js

12/17/23
* [Kaboom](https://kaboomjs.com/play?example=add) + [Leaflet](https://leafletjs.com/examples/quick-start/)
    * Watched 20 minutes of this [Leaflet.js Tutorial](https://www.youtube.com/watch?v=urOfcs7n4bA)
* I finished the blog and reflected on my learning experience
    * Will try again and create the flappy bird game
* `keyPress("space", () => { player.jump(); })` is extremely beneficial for any game
* Didn't do much tinkering this week; focused on blog --> just wanted to watch video above
    * Next Steps:
        * Watch [Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU&t=327s)
            * Create flappy bird game in IDE
    * How can I refactor the flappy bird game when I complete it?
    * Can the sprite be anything?

12/31/23
* Watched [Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU&t=327s) TWICE
    * First time was for understanding and the second time to follow through
    * Created Flappy Bird @ mygame
* Completed my winter break goals --> need to focus more on leaflet.js than Kaboom
    * A lot of packages were generated when I initialized Kaboom --> unorganized
        * Is there a way I can keep them all in one file?
* `const scoreText = add([  text(score, {size: 50})  ]);` example of displaying and updating score
    * Will be helpful to keep track of the score in my geography game
    * Next Steps:
        * Create a quick game using leaflet with the scoring function in Kaboom
        * Watch this [Mapping Geolocation with Leaflet.js](https://www.youtube.com/watch?v=nZaZ2dB6pow)
            * Might be helpful or not (unsure)

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
