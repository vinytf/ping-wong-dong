let xBolinha = 20;
let yBolinha = 20;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
let trilha;
let ponto;
let raquetada;
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
function setup() {
  trilha.loop();
  createCanvas(600, 400);
  fill("green");
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);  
  movimentaRaquete();
   movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
   verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
}
function mostraBolinha() {
  fill("white");
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 5;
  }
  if (keyIsDown(83)) {
    yRaquete += 5;
  }
}
function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 5;
  }
}


function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu){    
velocidadeXBolinha *=-1;
   
    if(xBolinha>300)
      xBolinha = 577;
    else
      xBolinha = 23;
  }
}