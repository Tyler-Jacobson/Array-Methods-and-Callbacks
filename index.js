
import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');  

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log("Task 1:");
const worldCupFinal = fifaData.filter(function(input){
    return input["Year"] === 2014 && input["Stage"] === "Final";
})
console.log(worldCupFinal[0]["Home Team Name"]);
console.log(worldCupFinal[0]["Away Team Name"]);
console.log(worldCupFinal[0]["Home Team Goals"]);
console.log(worldCupFinal[0]["Away Team Goals"]);
console.log(worldCupFinal[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const mappedData = data.filter(function(state) {
        return state["Stage"] === "Final";
    });
    return mappedData;
}

console.log("");
console.log("Task 2:");

const output = getFinals(fifaData);
console.log(output);

// const mappedData = fifaData.map(function(state) {
//     return state["Year"];
// });


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
    const finalYears = getFinals(fifaData).map(function(matchData) {
        return matchData.Year;
    });
    return finalYears;
};

console.log("");
console.log("Task 3:");
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    const finalWinners = getFinals(fifaData).map(function(matchData) {
        if (matchData["Home Team Goals"] > matchData["Away Team Goals"]) {
            return matchData["Home Team Name"];
        } else {
            return matchData["Away Team Name"];
        };
    });
    return finalWinners;
};

console.log("");
console.log("Task 4:");
console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYear(getWinners, getYears) {
    for (let i = 0; i < getYears(getFinals).length; i++) {
        console.log(`In ${getYears(getFinals)[i]}, ${getWinners(getFinals)[i]} won the world cup!`)
    }
};

console.log("");
console.log("Task 5:");
getWinnersByYear(getWinners, getYears);








/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoals = data.reduce(function(accumulator, item){
        return (accumulator += item["Home Team Goals"]);
    }, 0);
    return homeGoals / data.length;
};

console.log("");
console.log("Task 6:");
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
