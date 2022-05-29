function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];
    Plotly.newPlot("plot", data);
};
// the above function renders the initial chart when a user first loads the page, a regular x-y graph, 5 along the x-axis, 15 (stops before 16), along the y-axis
// this is the default chart that is displayed

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
// when a menu option is selected, the updatePlotly function is triggered
// when a change takes place with the HTML id "dropdownMenu", the updatePlotly function is called
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    // dropdownMenu variable is assigned to the HTML element "#dropdownMenu"
    var dataset = dropdownMenu.property("value");
    // dataset is assigned to the value of the dropdown menu option selected by the user, in this case
    // that is either dataset1 or dataset2

    var xData = [1, 2, 3, 4, 5]; // x-axis values stay the same, 1-5, so there will be no change there
    var yData = []; //initialize an empty array of yData to store the various sets of yData below

    if (dataset === "dataset1") {
        yData = [1, 2, 4, 8, 16];
    };
    // if dataset1 is selected, the yData values will be assigned to the y-axis

    if (dataset === "dataset2") {
        yData = [1, 10, 100, 1000, 10000];
    };
    // if dataset2 is chosen, the y-axis will be assigned the dataset2 integers
    var trace = {
        x: [xData],
        y: [yData],
        // xData and yData arrays are established in the trace object
    };
    Plotly.restyle("plot", trace); // code in parentheses refers to a <div> containing a chart ("plot") and a JS object "trace"
    // Plotly.restyle() is used to re-render the page on the browser. this method is more efficient than calling 
    // Plotly.newPlot(), as it does not create a brand new chart, just modifieds the existing one with updated info
};

init();

