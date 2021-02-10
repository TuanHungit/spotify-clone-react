// Code is copied and modified a bit from stackoverflow

let canvas;
let ctx;
let source;
let context;
let analyser;
let fbcArray;
let bars;
let barX;
let barWidth;
let barHeight;

function initAnalyzer(audio) {
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser_render');
  ctx = canvas.getContext('2d');
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();
}

function frameLooper() {
  window.requestAnimationFrame(frameLooper);
  fbcArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbcArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  ctx.fillStyle = 'white';

  bars = 200;
  for (let i = 0; i < bars; i++) {
    barX = i * 2;
    barWidth = 1;
    barHeight = -(fbcArray[i] / 2);
    //  fillRect( x, y, width, height ) // Explanation of the parameters below
    ctx.fillRect(barX, canvas.height, barWidth, barHeight);
  }
}

export default initAnalyzer;
