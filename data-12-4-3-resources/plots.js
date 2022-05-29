function init (){ // all the code is nested inside the init() function, which is called at the end
    
    // d3.select is used to select the dropdown menu with an ID of "selDataset", and the menu is assigned to the variable "selector"
    let selector = d3.select("#selDataset");
    // this line of code assigns the object from "samples.json" the arbitrary argument name "data"
    d3.json("samples.json").then((data) => {
        // inside the data object, the names array contains all the participants' ID's
        console.log(data);
        // the variable sampleNames is assigned to represent the names within the data object
        let sampleNames = data.names;

        sampleNames.forEach((sample) => {

            selector
                .append("option")
                .text(sample)
                .property("value", sample);
                
        });
})};

init();

function optionChanged(newSample) { //this function takes an argument "newSample" and logs it to the browser console and is called from the HTML document
    buildMetadata(newSample);
    buildCharts(newSample);
}                                  // the function is delcared in this js file, but it is never called in the .js file
                                    // it is actually called by the onchange attribute of the dropdown menu in index.html, unlike init, which is both delcared and called in this .js file
                                    // the argument name newSample refers to the value of the selected menu option in index.html
                                    // onchange=optionChanged(this.value) passes the selected menu options value to the optionChanged function, which gives this info the argument name newSample
                                    // this.value and newSample are the same

// next we'll print the information to the demographic panel
// when a change takes place in the dropdown menu, two things need to happen:
    // the demographic info panel is populated with a specific volunteers info
    // the volunteers data is visualized in a separate <div>

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let PANEL = d3.select("#sample-metadata");
        
        
    
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => PANEL.append("h6").text(`${key} : ${value}`));
        // the above code was with assistance from askBCS, it says to pull key/value pairs for all the entries in the object "result" (Object.entries(result)), 
        // and for each of the key value pairs (forEach(([key, value])) => ), append them to the PANEL with an "h6" size (PANEL.append("h6")) in text with the 
        // following format
    });
}




