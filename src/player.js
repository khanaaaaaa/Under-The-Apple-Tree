let player;
let cursors;
let wasd;

function createPlayer(scene) {
    player = scene.physics.add.sprite(
        480,
        270,
        "player"
    );

    player.setScale(2);

    player.body.setColliderIdBounds(true);

    cursors = scene.input.keyboard.createCursorKeys();

    wasd = scene.input.keyboard.addKeys({
        W: "W",
        A: "A",
        S: "S",
        D: "D"
    })
}