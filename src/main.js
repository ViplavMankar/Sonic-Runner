import k from "./kaplayCtx.js";
import game from "./scenes/game.js";
import gameover from "./scenes/gameover.js";
import mainMenu from "./scenes/mainMenu.js";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");
k.loadSprite("sonic","graphics/sonic.png",{
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 20},
        jump: {from: 8, to: 15, loop: true, speed: 80},
    }
});
k.loadSprite("ring","graphics/ring.png",{
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: {from: 0, to: 15, loop: true, speed: 20},
    }
});
k.loadSprite("motobug","graphics/motobug.png",{
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 7},
    }
});

k.loadFont("mania","fonts/mania.ttf");

k.loadSound("destroy","sounds/Destroy.wav");
k.loadSound("jump","sounds/Jump.wav");
k.loadSound("hyper-ring","sounds/HyperRing.wav");
k.loadSound("ring","sounds/Ring.wav");
k.loadSound("hurt","sounds/Hurt.wav");
k.loadSound("city","sounds/city.mp3");

k.scene("main-menu",mainMenu);

k.scene("game", game);

k.scene("gameover", gameover);

k.go("main-menu");