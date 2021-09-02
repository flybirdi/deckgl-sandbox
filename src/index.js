import { initMap } from "./map";
import { ToolBar } from "./ToolSet";
import { SliderTool } from "./SliderTool";
import { airportLayer, arcLayer } from "./layers";
import './styles.css';

const map = initMap(document.getElementById("container"));
map.addLayers([airportLayer, arcLayer]);

const toolbar = new ToolBar({
  toolsContainer: document.getElementById("tools"),
});

const arcWidthSlider = new SliderTool({
  id: "slider",
  min: 1,
  max: 5,
  handler: (value) => {
    map.mapState.arcWidth = value;
    map.redraw();
  },
});
toolbar.addTool(arcWidthSlider);

const arcHeightSlider = new SliderTool({
  id: "slider-2",
  min: 0.1,
  max: 2,
  handler: (value) => {
    map.mapState.arcHeight = value;
    map.redraw();
  },
});
toolbar.addTool(arcHeightSlider);

// Questions:
// 1. Create a toolbar.removeTool function and ensure everything is cleaned up
// 2. Implement remove all tools
// 3. Create a toggle tool that toggles flight paths
// 4*. Create a color picker
// 5.
// ? Create a layer that updates in realtime

// ? Track tools in the Tool class
// Vector to raster to map?
// Deliberate start test with broken function due to arrow function
// Show values of sliders next to slider

// Refactoring exercises
// (from - original(not this repo)) refactorings? decouple toolbar state and map state
// (from - original(not this repo)) Refactor intitial layers so they're injected at startup rather than being inbuilt in the map setup

// Random broader ideas
// Free draw (annotate) shit on map -> get canvas -> handle mouse events -> store state -> render on map (with fixed zoom level) -> extension = handle zoom
