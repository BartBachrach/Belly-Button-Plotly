console.log(`hello world`);

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

let numbers_1 = [0, 2, 4, 6, 8, 10];
let addFive = numbers_1.map(function(nums){
    return nums + 5;
});
console.log(addFive);

let cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

let cityName = cities.map(function(city){
    return city.population;
});
console.log(cityName);

let numbers_2 = [1, 2, 3, 4, 5]
let larger = numbers_2.filter(function(numb){
    return numb > 1;
});
console.log(larger);

let familyAge = [2, 3, 39, 57, 10];
let olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive);

let words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

let startsWithS = words.filter(function(word) {
    return word[0] === "s";
});
console.log(startsWithS);

let numbers_3 = [1, 2, 3, 4, 5];
let doubled_1 = numbers_3.map(nubs => nubs *2);
console.log(doubled_1);

let calibers = [9, 45, 40, 10, 357];
let sortedCalibers = calibers.sort((a,b) => a - b).reverse();
console.log(sortedCalibers);

let trucks  = ["tacoma", "frontier", "ranger", "dakota"];
let firstThree = trucks.slice(0, 3);
console.log(firstThree);

let middle = trucks.slice(2, );
console.log(middle);

