// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    let washingItems = metadata.wfreq;

    // Create a variable that filters the samples for the object with the desired sample number.
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    let washArray = washingItems.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
  

    // 2. Create a variable that holds the first sample in the metadata array.
    let washData = washArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otuID = washData.otu_ids
    let otuLabel = washData.otu_labels
    let washVal = washData.sample_values

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
     title: "Guage"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
