import * as analytics from './vendors/analytics';
import * as stats from './vendors/stats';
import Config from '../config';
import Boot from './boot/boot';
import Game from './game/game';
import Loader from './loader/loader';

analytics.init();
stats.init();

let game = new Phaser.Game(Config.width, Config.height, Phaser.AUTO);

window.onresize = () => {
  game.scale.setGameSize(window.innerWidth, window.innerHeight);
}

game.state.add('Boot', Boot);
game.state.add('Game', Game);
game.state.add('Loader', Loader);

game.state.start('Boot');
