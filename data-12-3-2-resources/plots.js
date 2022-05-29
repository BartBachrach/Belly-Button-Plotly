d3.json("samples.json").then(function(data){
    console.log(data);
})

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a); // this line defines what wfreq is, by specifying where in the array it is, and also lists it in descending order
    filteredWfreq = wfreq.filter(element => element != null); // this line defines what filtered wash frequency is by taking the wfreq and applying the filter function to it
    console.log(filteredWfreq); //this prints the filtered data
})
// the above code displays how map works, and also shows us how we would take the
// variable we set to get the object and filtered it

researcher1 = {
    name: 'roza',
    age: 34,
    hobby: 'hiking'
};

console.log(Object.entries(researcher1));
// Object.entries() returns key-value pairs of an object as arrays


// independent practice
d3.json("samples.json").then(function(data){
    bactID = data.samples.map(bacteria => bacteria.otu_ids);
    console.log(bactID);
})

// combine Object.entries and forEach() to access any invidivual set of data
// in the below code, we are extracting the metadata of the first person in the dataset (zero index position) (we define the first person as the metadata portion within the data at position 0)
// the Object.entries portion pulls all the entries for the first item in the Object, and the forEach portion means to pull each key/value pair from that first entry
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ':' + value);});
});
// the result was that it printed all the items in the metadata for the first individual, the inidivuals ID, ethnicity, gender, age, etc

// more independent practice
d3.json("samples.json").then(function(data){
    allNames = data.metadata.map(name => name.id);
    console.log(allNames);
})

