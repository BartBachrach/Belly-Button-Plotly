//Plotly.newPlot("newPlotArea", [{x:[5, 10, 15], y:[10, 20, 30]}]);  // make sure the name of the plot area is the same here as is referenced in the HTML file

// let trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type : "bar"
// };

// let layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Options"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("lunchArea", [trace], layout);

// let drinks = {
//     labels: ["beer", "wine", "cognac", "rum", "bourbon", "soda", "margs", "sweet tea"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };

// let data = [drinks];

// let layout = {
//     title: "Drinks Survey",
//     xaxis: {title: "Drink Options"},
//     yaxis: {title: "Percent Voted For Option"}
// };

// Plotly.newPlot("drinksArea", data, layout);

let ranNum = {
    x: [1, 3, 5, 7, 9, 1.1],
    y: [2.7, 4.3, 1.6, 2.8, 6.5, 7.4],
    mode: "markers",
    type: "scatter"
};

let ranNum2 = {
    x: [5.9, 6.7, 4.9, 5.7, 7.92, 9.19],
    y: [5, 3.7, 8.4, 1.2, 2.9, 4.1],
    mode: "lines",
    type: "scatter"
};

let layout = {
    title: "Practice Scatter",
    xaxis: {title: "Some X variable"},
    yaxis: {title: "Some Y Variable"}
};

let data = [ranNum, ranNum2];

Plotly.newPlot("scatterArea", data, layout);



