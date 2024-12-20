/*

LECTURE: Basic Operators

1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

*/

let population = 146;

const continent = 'South Europe';
const isIsland = false;
const language = 'Russian';
const country = 'Russia';

let populationRussia = 146;
let newPopulation = (populationRussia / 2);
newPopulation++
console.log(newPopulation);

let populationFinland = 6;
console.log(populationRussia > populationFinland);

let averagePopulation = 33;
console.log(populationRussia < averagePopulation);

let description = `Russia is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

// =>>> strings-and-template-literals.js