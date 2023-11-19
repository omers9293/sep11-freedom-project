import kaboom from "kaboom";

kaboom()

loadSprite("birdy", "birdy.png")

var player = add([
    sprites("birdy")
    scale(2)
    pos(80,40)
    area()
    body()
]);

keyPress("space", () => {
player.jump();
})