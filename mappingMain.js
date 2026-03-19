// find our elements 
const stageContainer = document.getElementById("stag-container");
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

// create layer
firstLayer = new Konva.Layer();

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