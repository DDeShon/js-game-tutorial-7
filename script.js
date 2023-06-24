const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;
const explosions = [];

class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.image = new Image();
    this.image.src = "boom.png";
    this.frame = 0;
  }
  update() {
    this.frame++;
  }
  draw() {
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
}
