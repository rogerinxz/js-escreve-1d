let cor;
let posicaovertical;
let posicaohorizoltal;

function setup() {
    createCanvas(400, 400);
    background(color(20, 0, 100));
  cor= color(random(0, 255), random(0, 255), random(0, 255));
  posicaohorizontal = 200;
  posicaovertical = 200;
}
function draw() {
  fill(cor);
circle(posicaohorizontal, posicaovertical, 20);
  
   if(mouseX < posicaohorizontal) {
      posicaohorizontal = posicaohorizontal - 1;
   }
}