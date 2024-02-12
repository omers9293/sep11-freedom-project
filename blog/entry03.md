# Entry 3
##### 2/12/24

#### Content + Tinkering
Since the last blog, I have been consistently tinkering with [Leaflet.js](https://leafletjs.com/) and [Kaboom](https://kaboomjs.com/) every week during school on Monday and during the weekend. I find this to be the most effective schedule as it allows me to make up for other school work and studying. Although I haven't physically tinkered with [D3Js](https://d3js.org/), I did go through some documentation so I can familiarize myself with the type of code it insists on. I realized that a lot of this tool is just using starter codes and for you to manually adjust it to your needs. I do plan on tinkering with it in the next few weeks because I can see the potential of using it in my geography game. I think it's effective to watch a video in full to digest the information being provided and then either follow the example being made with a second watch or create your example. That has been working for me in terms of tinkering with my tool.

During the winter break, I followed through this [Youtube Video](https://www.youtube.com/watch?v=hgReGsh5xVU&t=327s) and manually wrote the code as the YouTuber was explaining what and why he was doing his coding.

The code below is part of the Flappy Bird game that I followed through during the break. I'll analyze some features of the tinkering that I have done.
```js
player.collides("pipe", () => {
    go("gameover", score);
  });

```
This code is interesting because it works very similarly to a conditional in the aspect that it will do something if something else has occurred. For the context above, the scene and screen for the game will show a big "GAME OVER" if the sprite or player collides with the pipe. I intentionally decided to place this here because I will use something very similar since if the player chooses the wrong country I would want it to also say game over. I'm most likely going to use it because it will say the score achieved. I will increase by an increment of +1 since that will make it the most organized.

To create Flappy Bird, you need different sprites or players for the game to function and for it be able to be played. Flappy Bird is a game where you control a bird and use a key like the `spacebar` to make it jump. If you collide or hit the pipes embedded inside the game, you would have to start over.
```js
 var player = add([
    sprite("birdy"),
    scale(2),
    pos(80, 40),
    area(),
    body(),
  ]);
```
The [Replit YouTube channel](https://www.youtube.com/watch?v=hgReGsh5xVU&t=327s) explained that the code above is initializing a variable called `player` and that it is setting the initial positions of the `player` variable. As shown above, the position is set to be at `(80, 40)` which I believe is in the middle of the screen. All of the statements above are standard

```js
scene("gameover", (score) => {
  if (currentScore > highScore) {
    highScore = score;
  }
```
I also found the code above to be very useful in the future since I plan on keeping scores on how much the user guesses the country right since that will make my game much more competitive. I was a little confused about how `scene` was used but I later found out why and where it is commonly used. The `scene` is a section within a game organization and is commonly used to transition between two parts of a game. As seen in this, the transition that is taking place is between the current score and the new score that the user would have achieved. I can copy this exact code for the FP since it is very similar in the fact that I want the new High Score to be higher than any existing scores that the user has achieved.

```js
if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
    }
  });
```
I had many troubles understanding the code above, especially the parts `pipe.pos.x < player.pos.x` since it wasn't very explicit or straightforward. However, the guy from youtube said that if the position of the player in the game is bigger or more to the right, than the pipe, then it would increase by an increment of +1. There is no else statement because if it is false, something else would be prompted which is for the game to end and show the achieved score.

```js
 loop(1.5, () => {
    producePipes();
  });

  action("pipe", (pipe) => {
    pipe.move(-160, 0);
```
The code above is almost similar to a `for loop` in the sense that a pipe is produced and the function is recalled after 1.5 seconds. This helps create the infinite cycle of pipes since that is a major aspect of the Flappy Bird game. This is much more efficient since you don't know how many pipes the user will go through in a game.

#### EDP + Skills
The Engineering Design Process that I'm currently in can be classified to **brainstorm** possible solutions and **plan** the most promising solution. We have just entered the second semester and we will need to create the Minimum Viable Project (MVP) soon since we will be presenting them in the expo in a matter of few months. That being said, the **next** stage of the EDP is to create the prototype of the geography game that I was learning the tools. This would be like a first draft and will be improved on as needed later on. To prepare for this stage, I will create a new file under the tools folder and jot down any helpful sources that I feel would be useful to reference while creating my prototype/ MVP. Since the last time, I have developed and expanded a lot of my skill usage through my time tinkering and watching useful YouTube videos. The **skills** that I have developed are **Growth Mindset** and **Problem decomposition** which I have found to be extremely helpful in easing my journey in learning these tools. I started asking my neighbors for help more often especially since I knew they could know the answer to my questions. I once asked a neighbor to check why my screen was showing the actual code and not the preview even though everything was in the right place. Turns out I was previewing a different file that I wasn't supposed to be in. Additionally, the other skill that I learned was to break a task into smaller pieces so that I'm not overwhelmed by the amount of stuff I have to do. For example, I would set goals for the week that I would watch numerous videos and create examples with them but that was hard to accomplish. Instead, I made notes for myself that I would work on one example per week, but I made sure it was beneficial. A personal goal I have for myself is to embrace failure since I tend to easily give up after I get a bug which isn't something I like to admit to.

As I stated before, I want to spend more time focusing on learning [D3Js](https://d3js.org/) because it will help me get a more realistic and interactive image of the globe. The only reason I'm unsure of this is that I have already spent lots of time learning and tinkering with Leaflet.js. A difference between using Leaflet.js is that it would show real cities unlike with D3Js where I can manipulate it to only show the continents or not to be zoomed in so much for cities to be seen. I will watch this quick [D3Js video](https://www.youtube.com/watch?v=bp2GF8XcJdY) and explore more similar videos on the author's channel. I will also create one quick project that includes Kaboom and either Leaflet.js or D3Js to see what future challenges I may face with my freedom project. I also suspect that we will start on the FP in the next few weeks so that will be just in time for me to practice a little more.




[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)