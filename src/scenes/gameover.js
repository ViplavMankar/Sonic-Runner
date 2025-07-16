import k from "../kaplayCtx.js";

export default function gameover(citySfx){
    citySfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    const rankGrades = ["F", "E", "D", "C", "B", "A", "S"];
    const rankValues = [50, 100, 200, 300, 400, 500, 600];

    let currentRank = "F";
    let bestRank = "F";

    for(let i=0;i<rankValues.length;i++){
        if(currentScore > rankValues[i]){
            currentRank = rankGrades[i];
        }
        if(bestScore > rankValues[i]){
            bestRank = rankGrades[i];
        }
    }

    if(bestScore < currentScore){
        k.setData("best-score", currentScore);
        bestScore = currentScore;
        bestRank = currentRank;
    }

    k.add([
        k.text("GAME OVER", { font: "mania", size: 96 }),
        k.pos(k.center().x, k.center().y - 300),
        k.anchor("center"),
    ]);
    k.add([
        k.text(`BEST SCORE : ${bestScore}`, { font: "mania", size: 64 }),
        k.pos(k.center().x - 400, k.center().y - 200),
        k.anchor("center"),
    ]);
    k.add([
        k.text(`CURRENT SCORE : ${currentScore}`, { font: "mania", size: 64 }),
        k.pos(k.center().x + 400, k.center().y - 200),
        k.anchor("center"),
    ]);

    const bestRankBox = k.add([
        k.rect(400,400,{radius: 4}),
        k.color(0, 0, 0, 0.5),
        k.area(),
        k.anchor("center"),
        k.outline(6,k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x - 400, k.center().y + 50),
    ]);

    bestRankBox.add([
        k.text(bestRank, { font: "mania", size: 100 }),
        k.anchor("center"),
    ]);

    const currentRankBox = k.add([
        k.rect(400,400,{radius: 4}),
        k.color(0, 0, 0, 0.5),
        k.area(),
        k.anchor("center"),
        k.outline(6,k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x + 400, k.center().y + 50),
    ]);

    currentRankBox.add([
        k.text(bestRank, { font: "mania", size: 100 }),
        k.anchor("center"),
    ]);

    k.wait(1, () => {
        k.add([
            k.text("Press Space/Click/Touch to Play Again", { font: "mania", size: 64 }),
            k.pos(k.center().x, k.center().y + 350),
            k.anchor("center"),
        ]);
        k.onButtonPress("jump", () => k.go("game"));
    });
}