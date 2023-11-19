class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.alpha = 1;
  }
  draw(ctx) {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
  }
  update(bubbles) {
    if (this.alpha < 0) {
      bubbles.shift();
    } else {
      this.size += 0.5;
      this.alpha -= 0.005;
    }
  }
}

window.onload = () => {
  const canvas = document.getElementById("canvas-bg");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const bubbles = [];

  let x = 0;
  let y = 0;

  ctx.strokeStyle = "#47a";

  window.addEventListener("resize", (e) => {
    canvas.width = e.target.innerWidth;
    canvas.height = e.target.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    const a = Math.abs(x - e.clientX);
    const b = Math.abs(y - e.clientY);
    const distance = Math.sqrt(a * a + b * b);

    if (distance > 20) {
      x = e.clientX;
      y = e.clientY;
      const bubble = new Bubble(e.clientX, e.clientY);
      bubbles.push(bubble);
    }
  });

  const runCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
      bubble.draw(ctx);
      bubble.update(bubbles);
    });
    requestAnimationFrame(runCanvas);
  };

  runCanvas();
};
