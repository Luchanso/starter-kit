export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  init() {

  }

  preload() {

  }

  create() {
    this.stage.backgroundColor = 0x282c34;

    this.addStartKitLabel();
  }

  update() {

  }

  render() {

  }

  addStartKitLabel() {
    const x = 15;
    const y = 15;

    this.add.text(x, y, 'Starter Kit 2.0.0', {
      fill: 'white', font: '26px Open Sans'
    });
  }
}
