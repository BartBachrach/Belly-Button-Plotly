function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {

  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    let sampleItems = data.samples;
    console.log(sample);

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let sampleArray = sampleItems.filter(sampleObj => sampleObj.id == sample);
    
    //  5. Create a variable that holds the first sample in the array.
    let sampleData = sampleArray[0];
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otuID = sampleData.otu_ids;
    let otuLabel = sampleData.otu_labels;
    let samVal = sampleData.sample_values;
    
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    // let yticks = go through the results, find the 10 most populous bacteria in a bellybutton,
    // order them in descending order

    let yticks = otuID.slice(0,10).map(otuID => `OTU ${otuID}`).reverse()

    

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: samVal.slice(0, 10).reverse(),
      y: yticks,
      type: "bar",
      orientation: "h",
      text: otuLabel
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: "Amount of Bacteria"},
      yaxis: {title: "OTU ID"}
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)

     // 1. Create the trace for the bubble chart.
     var bubbleData = [{
      x: otuID,
      y: samVal,
      mode: "markers",
      marker: {
        size: samVal,
        color: otuID
      }
     }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample"
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // Create a variable that holds the samples array. 
    let washingItems = metadata.wfreq;

    // Create a variable that filters the samples for the object with the desired sample number.
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    let washArray = washingItems.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    let washData = washArray[0];

     // 3. Create a variable that holds the washing frequency.
     wFreq = washingItems;
    
     // 4. Create the trace for the gauge chart.
     var gaugeData = [{
      domain: {x:[0,10], y:[0,10]},
      value: wFreq,
      type: "indicator",
      mode: "guage+number"
     }];
     
     // 5. Create the layout for the gauge chart.
     var gaugeLayout = { 
      title: "Guage",
      width: 600,
      height: 500,
      margin: {t: 0, b:0}
     };
 
     // 6. Use Plotly to plot the gauge data and layout.
     Plotly.newPlot("guage", gaugeData, gaugeLayout);
   });


  
}
