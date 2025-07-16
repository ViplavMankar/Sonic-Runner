import k from "../kaplayCtx.js";

export function makeSonic(pos){
    const sonic = k.add([
        k.sprite("sonic",{anim: "run"}),
        k.scale(4),
        k.area(),
        k.anchor("center"),
        k.pos(pos),
        k.body({jumpForce: 1700}),
        {
            ringCollectUI: null,
            setControls(){
                k.onButtonPress("jump",() => {
                    if(this.isGrounded()){
                        this.play("jump");//play jump animation of the object "sonic"
                        this.jump();
                        k.play("jump",{volume: 0.5});//kaplay play audio function
                    }
                })
            },
            setEvents() { 
                this.onGround(() => {
                    this.play("run");
                });
            }
        }
    ]);

    sonic.ringCollectUI = sonic.add([
        k.anchor("center"),
        k.text("", { font: "mania", size: 24 }),
        k.color(255, 255, 0),
        k.pos(30,-10)
    ]);
    return sonic;
}