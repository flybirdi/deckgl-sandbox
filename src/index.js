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
 * Question 1:
 * BUG in SliderTool, it's a one liner, but we can't find it
 *
 * uncomment the below to get started.
 */
/*
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
*/

/*
 * Question 2
 * Implement the below
*/
/*
toolbar.remove(id)
*/

/*
 * Question 3 (Open ended)
 *
 * Pretent we're product managers who can't code.
 *
 * User Story: As a user, I want to be able to draw on the map.
 * It doesn't bother me if it's freehand(pen tool) or known shapes.
 *
 * Let's build it.
 */
