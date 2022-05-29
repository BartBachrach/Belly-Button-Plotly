const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then((spaceXResults) => console.log({spaceXResults}));
// JS function returns undefined if the variable being evaluated does not have an assigned value
