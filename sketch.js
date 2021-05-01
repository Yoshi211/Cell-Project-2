var cell;
var plant;
var organelles = [];
var gameState = "start";
var textBack;
var cells = 0;

var cellCount = 0;
var tCount = 0;
var oCount = 0;
var osCount = 0;

var nu, cm, cy, ga, er, ly, mi, va, ri;
var nImg, cmImg, cyImg, gImg, eImg, lyImge, mImg, vImg, rImg;

var c, t, o, os, or;
var cellsGroup, tissuesGroup, organsGroup, organSGroup;

var font;
var cellImg;

let cam;

function preload(){
  font = loadFont("Questrial-Regular.ttf")

  cellImg = loadAnimation("emptycell.png");
  aniCell = loadAnimation("anicell.png")
  tImage = loadAnimation("ti.png");
  oImage = loadAnimation("h.png");
  osImage = loadAnimation("os.jpeg");
  humanImage = loadAnimation("human.jpeg");
  plantI = loadImage("plant.png");

  nImg = loadImage("nu.png");
  cmImg = loadImage("cm.jpeg");
  cyImg = loadImage("cy.png");
  gImg = loadImage("ga.jpeg");
  eImg = loadImage("er.jpeg");
  lyImg = loadImage("ly.jpeg");
  mImg = loadImage("mi.png");
  vImg = loadImage("va.svg");
  rImg = loadImage("ri.png");
}

function setup() {
  createCanvas(1700,500,WEBGL);

  cell = createSprite(-710,200,20,20);
  cell.addAnimation("empty",cellImg);
  cell.addAnimation("first",aniCell);
  cell.addAnimation("t",tImage);
  cell.addAnimation("o",oImage);
  cell.addAnimation("os",osImage);
  cell.addAnimation("human",humanImage);
  cell.scale = 0.2;

  plant = createSprite(12000,100,20,20)
  plant.addImage(plantI);
  plant.scale = 0.3;

  textBack = createSprite(100,-20,2000,2000);
  textBack.shapeColor = "blue";
  textBack.visible = false;

  nu = createSprite(500,Math.round(random(-100,200)),20,20);
  nu.addImage(nImg);
  nu.scale = 0.5;

  cm = createSprite(1500,Math.round(random(-100,200)),20,20);
  cm.addImage(cmImg);
  cm.scale = 0.8;

  cy = createSprite(2500,Math.round(random(-100,200)),20,20);
  cy.addImage(cyImg);
  cy.scale = 0.3;

  ga = createSprite(3500,Math.round(random(-100,200)),20,20);
  ga.addImage(gImg);
  ga.scale = 0.06;

  er = createSprite(4500,Math.round(random(-100,200)),20,20);
  er.addImage(eImg);
  er.scale = 0.4;

  ly = createSprite(5500,Math.round(random(-100,200)),20,20);
  ly.addImage(lyImg);
  ly.scale = 0.3;

  mi = createSprite(6500,Math.round(random(-100,200)),20,20);
  mi.addImage(mImg);
  mi.scale = 0.2;

  va = createSprite(7500,Math.round(random(-100,200)),20,20);
  va.addImage(vImg);
  va.scale = 0.3;

  ri = createSprite(8500,Math.round(random(-100,200)),20,20);
  ri.addImage(rImg);
  ri.scale = 0.1;

  cam = createCamera();
  cellsGroup = createGroup();
  tissuesGroup = createGroup();
  organsGroup = createGroup();
  organSGroup = createGroup();
}

function draw() {
  background("blue");

  if((keyDown(RIGHT_ARROW) && gameState === "go") || (keyDown(RIGHT_ARROW) && gameState === "cells") || (keyDown(RIGHT_ARROW) && gameState === "tissues") || (keyDown(RIGHT_ARROW) && gameState === "organs") || (keyDown(RIGHT_ARROW) && gameState === "oss")){
    cell.x = cell.x + 10;
    cam.move(10,0,0);
  }

  if((keyDown(LEFT_ARROW) && gameState === "go") || (keyDown(LEFT_ARROW) && gameState === "cells") || (keyDown(LEFT_ARROW) && gameState === "tissues") || (keyDown(LEFT_ARROW) && gameState === "organs") || (keyDown(LEFT_ARROW) && gameState === "oss")){
    cell.x = cell.x - 10;
    cam.move(-10,0,0);
  }

  if((keyDown(UP_ARROW) && gameState === "go") || (keyDown(UP_ARROW) && gameState === "cells") || (keyDown(UP_ARROW) && gameState === "tissues") || (keyDown(UP_ARROW) && gameState === "organs") || (keyDown(UP_ARROW) && gameState === "oss")){
    cell.y = cell.y - 10;
  }

  if((keyDown(DOWN_ARROW) && gameState === "go") || (keyDown(DOWN_ARROW) && gameState === "cells") || (keyDown(DOWN_ARROW) && gameState === "tissues") || (keyDown(DOWN_ARROW) && gameState === "organs") || (keyDown(DOWN_ARROW) && gameState === "oss")){
    cell.y = cell.y + 10;
  }

  if(keyDown("space") && cell.x<8500){
    gameState = "go";
    textBack.visible = false;
  }

  if(keyDown("space") && gameState === "cell"){
    gameState = "cells";
    textBack.visible = false;
  }

  if(keyDown("space") && gameState === "tissue"){
    gameState = "tissues";
    textBack.visible = false;
  }

  if(keyDown("space") && gameState === "organ"){
    gameState = "organs";
    textBack.visible = false;
  }

  if(keyDown("space") && gameState === "os"){
    gameState = "oss";
    textBack.visible = false;
  }

  if(keyDown("space") && gameState === "plant"){
    gameState = "cells";
    plant.y = 1500;
    textBack.visible = false;
  }

  if(cell.isTouching(nu)){
    gameState = "nu";
    organelles.push("Nucleus");
  }

  if(cell.isTouching(cm)){
    gameState = "cm";
    organelles.push(" Cell Membrane");
  }

  if(cell.isTouching(cy)){
    gameState = "cy";
    organelles.push(" Cytoplasm");
  }

  if(cell.isTouching(ga)){
    gameState = "ga";
    organelles.push(" Golgi Apparatus");
  }

  if(cell.isTouching(er)){
    gameState = "er";
    organelles.push(" Endoplasmic Reticulum");
  }

  if(cell.isTouching(ly)){
    gameState = "ly";
    organelles.push(" Lysosomes");
  }

  if(cell.isTouching(mi)){
    gameState = "mi";
    organelles.push(" Mitochondria");
  }

  if(cell.isTouching(va)){
    gameState = "va";
    organelles.push(" Vacuoles");
  }

  if(cell.isTouching(ri)){
    gameState = "ri";
    organelles.push(" Ribosomes");
  }

  if(gameState === "cells"){
    spawnCells()

    //console.log(cellCount)
    textSize(45);
    fill("white");
    textFont(font);
    text("Cells collected: " + cellCount,cell.x-130,-200);

    if(cellsGroup.isTouching(cell)){
      cellCount += 1;
      cellsGroup.destroyEach();
    }
  }

  if(cellCount === 5){
    gameState = "tissue"
  }

  if(gameState === "tissues"){
    spawnTissues()

    //console.log(tCount)
    textSize(45);
    fill("white");
    textFont(font);
    text("Tissues collected: " + tCount,cell.x-130,-200);

    if(tissuesGroup.isTouching(cell)){
      tCount += 1;
      tissuesGroup.destroyEach();
    }
  }

  if(tCount === 5){
    gameState = "organ"
  }

  if(gameState === "organs"){
    spawnOrgans()

    //console.log(Count)
    textSize(45);
    fill("white");
    textFont(font);
    text("Organs collected: " + oCount,cell.x-130,-200);

    if(organsGroup.isTouching(cell)){
      oCount += 1;
      organsGroup.destroyEach();
    }
  }

  if(oCount === 5){
    gameState = "os"
  }

  if(gameState === "oss"){
    spawnOs()

    //console.log(cellCount)
    textSize(45);
    fill("white");
    textFont(font);
    text("Organ systems collected: " + osCount,cell.x-130,-200);

    if(organSGroup.isTouching(cell)){
      osCount += 1;
      organSGroup.destroyEach();
    }
  }

  if(osCount === 5){
    gameState = "organism"
  }

  //console.log(gameState);
  //console.log(cell.x);
  drawSprites();

  if(gameState === "start"){
    textBack.visible = true;
    textBack.depth = textBack.depth + 1;
    textSize(60);
    fill("white");
    textFont(font);
    text("You are an empty animal cell",cell.x+320,-100)
    text("Use the arrow keys to move around",cell.x+250,-40)
    text("and collect organelles to become a complete cell!",cell.x+60,20)
    text("Press Space to Start",cell.x+450,200)
  }

  if(gameState === "go"){
    textSize(25);
    fill("white");
    textFont(font);
    text("Organelles collected: " + organelles,cell.x-130,-200)
  }

  if(cell.isTouching(plant)){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textBack.depth = textBack.depth + 1;
    textSize(40);
    fill("white");
    textFont(font);
    text("You have gathered another cell but it is a plant cell! You can’t merge with this because", cell.x-40,-150);
    text("plant and animal cells are very different. Animal cells have multiple small vacuoles", cell.x,-100);
    text("while plants have one big vacuole. Plant cells also have two extra organelles which",cell.x-30,-50);
    text("are the chloroplasts and cell wall. The cell wall is a stiff wall that surrounds the cell",cell.x,0);
    text("membrane and offers more protection. The chloroplasts use photosynthesis",cell.x+30,50);
    text("to get energy from the sun and produce energy for the cell.",cell.x+250,100);
    text("Press Space to Continue",cell.x+500,200);
    gameState = "plant";
  }

  if(gameState === "nu"){
    textBack.visible = true;
    textBack.x = cell.x + 700;
    textFont(font);
    textSize(40);
    fill("white");
    text("You have acquired the nucleus. The nucleus is like the brain of the cell and controls the", cell.x-55,-100);
    text("cells activites and directs everything happening inside it. It has chromesomes which", cell.x-30,-50);
    text("stores the genes or DNA and has a nucleolus at the center that produces ribosomes.",cell.x-30,0);
    text("The DNA is genetic infomation that is used as a blueprint when creating a new cell.",cell.x-10,50);
    text("Press Space to Continue",cell.x+500,200);
    nu.y = 400;
  }

  if(gameState === "cm"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired the cell membrane. This is what divides the cell and everything", cell.x-100,-100);
    text("that is around it. It is selectively permeable which means it only allows certain", cell.x-60,-50);
    text("substances in and out. This keeps harmful substances out and keeps homeostasis.",cell.x-100,0);
    text("Press Space to Continue",cell.x+500,200);
    cm.y = 500;
  }

  if(gameState === "cy"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired the cytoplasm. This is a fluid", cell.x+270,-100);
    text("that takes up most of the space inside the cell.", cell.x+280,-50);
    text("All of the organelles are suspended inside it.",cell.x+300,0);
    text("Press Space to Continue",cell.x+500,200);
    cy.y = 400;
  }

  if(gameState === "ga"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired the golgi apparatus. It can store proteins and also gets packages", cell.x-135,-100);
    text("called vesicles that take some proteins to the cell's surface or the cell membrane.", cell.x-100,-50);
    text("It uses enzymes to modify molecules it receives and sorts them.",cell.x+100,0);
    text("Press Space to Continue",cell.x+500,200);
    ga.y = 800;
  }

  if(gameState === "er"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(40);
    fill("white");
    text("You have acquired the endoplasmic reticulum. It is attached to the nuclear membrane. Its", cell.x-80,-150);
    text("function is to process and transport molecules around the cell. It makes vesicles that", cell.x-40,-100);
    text("carry molecules to where they need to go. There are two types of endoplasmic reticulum,",cell.x-70,-50);
    text("rough and smooth. The rough endoplasmic reticulum has ribosomes attached to it and is",cell.x-80,0);
    text("more involved in processing and transporting proteins. The smooth endoplasmic",cell.x-10,50);
    text("reticulum is involved with detoxification and can make some types of lipids.",cell.x+50,100);
    text("Press Space to Continue",cell.x+500,200);
    er.y = 800;
  }

  if(gameState === "ly"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired lysosomes. These organelles patrol the cytoplasm and kill", cell.x-60,-100);
    text("any invading organisms that entered the cell. It also has special proteins", cell.x-10,-50);
    text("that break down large molecules into smaller ones that can be reused.",cell.x+10,0);
    text("Press Space to Continue",cell.x+500,200);
    ly.y = 300;
  }

  if(gameState === "mi"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired mitochondria. This organelle provides energy to the other", cell.x-60,-100);
    text("organelles using a process called cellular respiration. It combines glucose with", cell.x-70,-50);
    text("oxygen to create ATP energy. This also creates carbon dioxide and water.",cell.x-20,0);
    text("Press Space to Continue",cell.x+500,200);
    mi.y = 400;
  }

  if(gameState === "va"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired vacuoles. These organelles", cell.x+260,-100);
    text("store materials that can’t be used immediately.", cell.x+260,-50);
    text("For example, sugar, water, wastes, and enzymes.",cell.x+240,0)
    text("Press Space to Continue",cell.x+500,200);
    va.y = 400;
  }

  if(gameState === "ri"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have acquired ribosomes. These are tiny organelles", cell.x+150,-100);
    text("that produce proteins. They can either be floating in", cell.x+200,-50);
    text("the cytoplasm or stuck onto the rough endoplasmic reticulum",cell.x+100,0);
    text("Press Space to Continue",cell.x+500,200);
    ri.y = 300;
  }

  if(cell.x>8700 && cells === 0){
    gameState = "cell";
    cell.changeAnimation("first",aniCell);
    cell.scale = 0.3;
  }

  if(gameState === "cell"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have now acquired all the organelles needed to", cell.x+220,-100);
    text("be a functioning cell! Now collect other cells to", cell.x+280,-50);
    text("create a tissue which is a collection of cells",cell.x+300,0);
    text("Press Space to Continue",cell.x+500,200);
    cells = 1;
  }

  if(gameState === "tissue"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    cell.changeAnimation("t",tImage);
    cell.scale = 0.1;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have now acquired enough cells to make a tissue!", cell.x+220,-100);
    text("Now collect more tissues to make an organ", cell.x+320,-50);
    text("Press Space to Continue",cell.x+500,200);
    cellCount = 0;
  }

  if(gameState === "organ"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    cell.changeAnimation("o",oImage);
    cell.scale = 0.1;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have now acquired enough tissues to make an organ!", cell.x+180,-100);
    text("Now collect more organs to make an organ system", cell.x+240,-50);
    text("Press Space to Continue",cell.x+500,200);
    tCount = 0;
  }

  if(gameState === "os"){
    textBack.visible = true;
    textBack.x = cell.x + 800;
    cell.changeAnimation("os",osImage);
    cell.scale = 0.2;
    textFont(font);
    textSize(45);
    fill("white");
    text("You have now acquired enough organs to make an organ system!", cell.x+100,-100);
    text("Now collect more organ systems to make an organism", cell.x+200,-50);
    text("Press Space to Continue",cell.x+500,200);
    oCount = 0;
  }

  if(gameState === "organism"){
    //textBack.visible = true;
    textBack.x = cell.x + 800;
    cell.changeAnimation("human",humanImage);
    cell.scale = 0.3;
    textFont(font);
    textSize(80);
    fill("white");
    text("You have now become an organism!", cell.x+220,-100);
    text("Thank you for playing!", cell.x+500,0);
    osCount = 0;
  }
}

function spawnCells(){
  if(frameCount % 140 === 0){
    c = createSprite(cell.x+1700,Math.round(random(-100,200)),20,20);
    c.addAnimation("first",aniCell);
    c.scale = 0.3;

    cellsGroup.add(c);
  }
}

function spawnTissues(){
  if(frameCount % 140 === 0){
    t = createSprite(cell.x+1700,Math.round(random(-100,200)),20,20);
    t.addAnimation("t",tImage);
    t.scale = 0.1;

    tissuesGroup.add(t);
  }
}

function spawnOrgans(){
  if(frameCount % 140 === 0){
    o = createSprite(cell.x+1700,Math.round(random(-100,200)),20,20);
    o.addAnimation("o",oImage);
    o.scale = 0.1;

    organsGroup.add(o);
  }
}

function spawnOs(){
  if(frameCount % 140 === 0){
    os = createSprite(cell.x+1700,Math.round(random(-100,200)),20,20);
    os.addAnimation("os",osImage);
    os.scale = 0.2;

    organSGroup.add(os);
  }
}