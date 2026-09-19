const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: "game",
    backgroundColor: "#8fcf7a",
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
    // later
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

    this.addeclipse(
        770,
        130,
        280,
        140,
        0x62b6d4
    )
};

function update() {
    // game logic later
}