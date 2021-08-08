var bg, bgImg;
var Engine = Matter.Engine,
    Bodies = Matter.Bodies;

function preload() {
    bgImg = loadImage('./snow3.jpg');
}
function setup() {
    createCanvas(1600, 800);
    bg = createSprite(800, 400, 160, 800);
    bg.addImage(bgImg);
}

function draw() {
    background(31, 50, 56);
    //snow = new Snow1();
    drawSprites();
}
