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