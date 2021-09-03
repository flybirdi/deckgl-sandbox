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

/*
 * BUG in SliderTool, it's a one liner, but we can't find it
 */
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
