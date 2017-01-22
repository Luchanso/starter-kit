Engine.game = new Phaser.Game(Engine.maxWidth, Engine.maxHeight, Phaser.AUTO);

window.onresize = () => {
  Engine.game.scale.setGameSize(window.innerWidth, window.innerHeight);
}

let a = { b: 1234 };
let { b } = a;

Engine.game.state.add('Boot', Boot);
Engine.game.state.add('Game', Game);
Engine.game.state.add('Loader', Loader);

Engine.game.state.start('Boot');
