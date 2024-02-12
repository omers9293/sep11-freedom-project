import kaboom from "kaboom";

// Initialize context
kaboom();

// Load assets
loadSprite("birdy", "sprites/birdy.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");

let highScore = 0;

scene("game", () => {
  var PIPE_GAP = 120;
  var score = 0;

  add([
    sprite("bg", {width: width(), height: height()})
  ]);

  var scoreText = add([
    text(score, {size: 50})
  ]);

  // Add a game object to the screen
  var player = add([
    // List of components
    sprite("birdy"),
    scale(2),
    pos(80, 40),
    area(),
    body(),
  ]);

  function producePipes(){
    var offset = rand(-50, 50);

    add([
      sprite("pipe"),
      pos(width(), height()/2 + offset + PIPE_GAP/2),
      "pipe",
      area(),
      {passed: false}
    ]);

    add([
      sprite("pipe", {flipY: true}),
      pos(width(), height()/2 + offset - PIPE_GAP/2),
      origin("botleft"),
      "pipe",
      area()
    ]);
  }

  loop(1.5, () => {
    producePipes();
  });

  action("pipe", (pipe) => {
    pipe.move(-160, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
    }
  });

  player.collides("pipe", () => {
    go("gameover", score);
  });

  player.action(() => {
    if (player.pos.y > height() + 30 || player.pos.y < -30) {
      go("gameover", score);
    }
  });

  keyPress("space", () => {
    player.jump(400);
  });
});

scene("gameover", (score) => {
  if (score > highScore) {
    highScore = score;
  }

  add([
    text(
      "Game Over!\n"
      + "Score: " + score
      + "\nHigh Score: " + highScore,
      {size: 45}
    )
  ]);

  keyPress("space", () => {
    go("game");
  });
});

go("game");
