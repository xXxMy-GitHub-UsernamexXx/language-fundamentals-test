const readlineSync = require("readline-sync");

const MILES_TO_INCHES = 63360;
const MILES_TO_FEET = 5280;
const MILES_TO_YARDS = 1760;

let startingUnit = null;
let endingUnit = null;
let validity = null;

do {

        startingUnit = readlineSync.question("Enter an origin unit: ");
        startingUnit = String.toUppercase(startingUnit);
        switch (startingUnit) {

                case "MILES": validity = true; break;
                case "YARDS": validity = true; break;
                case "INCHES": validity = true; break;
                case "FEET": validity = true; break;
                default: validity = false; break;

        }

} while (validity == true);

console.log(startingUnit);
