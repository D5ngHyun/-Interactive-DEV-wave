import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.wavegroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.wavegroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    //   수정
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
    this.wavegroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => new App();
