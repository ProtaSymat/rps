var attributionsText = [
  "jouer à tuto game",
];

var attributionsURL = [
  "http://193.70.0.177/realgame1/",
];

export default class Attributions extends Phaser.Scene {
  constructor() {
    super("attributionsScene");
  }

  create() {
    this.background = this.add
      .image(800, 450, "background")
      .setOrigin(0.5, 0.5)
      .setScale(0.5);

    this.title = this.add.image(800, 150, "title").setScale(0.15);

    this.attributionsTitle = this.add
      .text(800, 300, "Attributions", {
        font: "30px Trebuchet MS",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5, 0.5);

    for (var i = 0; i < attributionsText.length; i++) {
      this["attributionsTexts" + i] = this.add
        .text(800, 310 + 40 * (i + 1), attributionsText[i], {
          font: "25px Trebuchet MS",
          fill: "#FFFFFF",
        })
        .setOrigin(0.5, 0.5)
        .setInteractive()
        .on("pointerdown", urlClickHandler(i));
    }

    function urlClickHandler(i) {
      return function () {
        window.open(attributionsURL[i]);
      };
    }

    this.homebutton = this.add
      .image(800, 850, "home")
      .setOrigin(0.5, 0.5)
      .setScale(0.1)
      .setInteractive()
      .on("pointerdown", () => {
        this.homebutton.setScale(0.105);
        setTimeout(() => {
          this.homebutton.setScale(0.1);
        }, 100);
        setTimeout(() => {
          this.scene.launch("mainScreenScene");
          this.scene.stop("attributionsScene");
        }, 150);
      });

    this.brand_white = this.add
      .image(130, 860, "erg_brand_white")
      .setScale(0.06);

  }
}
