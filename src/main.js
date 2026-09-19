const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: "game",
    backgroundColor: "#8fcf7a",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image(
        "player",
        "assets/placeholder.png"
    )
}

function create() {
    this.add.rectangle(
        480,
        270,
        960,
        540,
        0x8fcf7a
    );

    this.add.rectangle(
        480,
        430,
        960,
        100,
        0xc99a63
    );

    this.add.rectangle(
        180,
        270,
        90,
        320,
        0xc99a63
    );

    createFarmPlot(this, 390, 170);
    createFarmPlot(this, 560, 170);

    createFarmPlot(this, 390, 300);
    createFarmPlot(this, 560, 300);

    this.add.ellipse(
        770,
        130,
        280,
        140,
        0x62b6d4
    )

    createTree(this, 80, 80);
    createTree(this, 800, 80);
    createTree(this, 80, 470);
    createTree(this, 880, 470);

    createPlayer(this);

    this.physics.world.setBounds(
        30,
        30,
        900,
        480
    );

    createUI(this);
};

function update() {
    // game logic later
}

function createFarmPlot(scene, x, y) {
    scene.add.rectangle(
        x,
        y,
        130,
        90,
        0x8b5a3c
    );

    for (let i = -2; i <= 2; i++) {

        scene.add.rectangle(
            x,
            y + i * 15,
            110,
            5,
            0x70452f
        );
    }
}