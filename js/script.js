'use strict';
window.onload = function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();
};

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = 'white';
    this.#width = width;
    this.#height = height;
    console.log('effect loaded');
    this.#draw(100, 100);
  }
  #draw(x, y) {
    const lenth = 300;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    // this.#ctxlineTo(x + 300, y + 300);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }
  animate() {
    this.#draw(100, 100);
    console.log('animating');
    requestAnimationFrame(this.animate.bind(this));
  }
}
