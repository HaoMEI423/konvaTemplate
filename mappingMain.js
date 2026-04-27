// find our elements 
const stageContainer = document.getElementById("stage-container");
console.log(stageContainer);
const circleButton = document.getElementById("circle-button");

// find stage width
let stageContainerWidth = stageContainer.offsetWidth;
//console.log(stageContainerWidth);

// find stage height
let stageContainerHeight = stageContainer.offsetHeight;
//console.log(stageContainerHeight);

// set default circlr colour
let circleColour = "red"

// create the konva stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: stageContainerWidth,
    height: stageContainerHeight,
})

// handle when users change the window size
function resizeHandler (){
    // update our stage size when window resized
    stage.width(stageContainer.offsetWidth)
    stage.height(stageContainer.offsetHeight)

}
// attach to resize event
window.addEventListener("resize", resizeHandler)

// create layer
firstLayer = new Konva.Layer();

let isProtrait = window.matchMedia("(orientation")

// add the layer to the stage
stage.add(firstLayer);

// add inetaction to button
function drawNewCircle(){
    circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColour
    });
    // add the circle to first layer
    firstLayer.add(circle);
}

circleButton.addEventListener("click",drawNewCircle);


// drawing feature
// feature analysis
// what is the user goal? trying to draw a picture
// what is the represented model? cursor on the canvas : defined canvas : brush select : brush on?
// colour? or would that be its own system?
// how does it behaves?
// move our cursor onto canvas, press mouse button down, move mouse, release mouse button
// what is the implemented model? create a new line when mouse button down, add to that line when mouse moves
// how does it interact with other features?
// colour, images for the brush, eraser, uploaded image, 

// keep track of when button is held
let isDrawing = false;
let lastLine; 

// user presses mouse button
function drawMouseDown(){
    isDrawing= true;
    const pos =stage.getPointerPosition();
    lastLine = new Konva.Line({
        stroke: "red",
        strokeWidth: 5,
        lineCap: "round",
        lineJoin: "round",
        points: [pos.x, pos.y, pos.x, pos.y]
    });
    firstLayer.add(lastLine);
}
// add function to mousedown event
stage.on("mousedown", drawMouseDown);

// user moves their mouse
function drawMouseMove(){
    console.log(Date.now())
    // don't run if not drawing
    if(isDrawing === false){
        return;
    }
    // if isDrawing is true
    const pos = stage.getPointerPosition();
    let newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
}
// add function to mouse move event
stage.on("mousemove", drawMouseMove);

// user releases mouse button
function drawMouseUp(){
    isDrawing= false;
}
// add function to mouse up event
//stage.on("mouseup", drawMouseUp);
window.addEventListener("mouseup", drawMouseUp);


// user goal? to click buttons on the web
// what is the represented model? cursor on canvas, cursor down, cursor up, button feedback
// how does it behave? move cursor around web page, press mouse down, move mouse, release mouse buttopn