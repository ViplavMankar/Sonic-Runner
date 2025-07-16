import k from "../kaplayCtx.js";

export function makeMotobug(pos) {
    return k.add([
        k.sprite("motobug", { anim: "run" }),
        k.scale(4),
        k.area({shape: new k.Rect(k.vec2(-5,0),32,32)}),//offset,rectx_size,recty_size
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "enemy",
    ]);
}