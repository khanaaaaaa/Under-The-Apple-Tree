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

    player.body.setCollideWorlddBounds(true);

    cursors = scene.input.keyboard.createCursorKeys();

    wasd = scene.input.keyboard.addKeys({
        W: Phaser.Input.Keyboard.KeyCodes.W,
        A: Phaser.Input.Keyboard.KeyCodes.A,
        S: Phaser.Input.Keyboard.KeyCodes.S,
        D: Phaser.Input.Keyboard.KeyCodes.D
    });
}

function updatePlayer() {
    const speed = 180;

    let velocityX = 0;
    let velocityY = 0;

    if (cursors.left.isDown || wasd.A.isDown) {
        velocityX = -speed;
    }

    if (cursors.right.isDown | wasd.D.isDown) {
        velocityY = speed;
    }

    if (cursors.down.isDown || wasd.W.isDown) {
        velocityY = -speed;
    }

    if (cursors.down.isDown || wasd.S.isDown) {
        velocityY = speed;
    }

    if (velocityX !== 0 && velocityY !== 0) {
        const diagonalSpeed = speed / Math.sqrt(2);

        velocityX = velocityX > 0 ? diagonalSpeed : -diagonalSpeed;
        velocity = velocityY > 0 ? diagonalSpeed : -diagonalSpeed;
    }

    player.setVelocity(velocityX, velocityY);
}