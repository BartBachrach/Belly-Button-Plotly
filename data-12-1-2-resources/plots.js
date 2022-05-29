let sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

let topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

let topfiveCityNames = cityGrowths.map(city => city.City);
let topfiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);
console.log(topfiveCityGrowths);

let trace = {
    x: topfiveCityNames,
    y: topfiveCityGrowths,
    type: "bar"
};
let data = [trace];
let layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

let sevenLargest = cityGrowths.sort((a,b) => a.population - b.population).reverse().slice(0,7);
console.log(sevenLargest);

let sevenNames = sevenLargest.map(city => city.City);

let sevenPop = sevenLargest.map(city => parseInt(city.population));
console.log(sevenPop);

let trace_1 = {
    x: sevenNames,
    y: sevenPop,
    type: "bar"
};
let data7 = [trace_1];
let layout1 = {
    title: "Seven Largest by Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot-one", data7, layout1);