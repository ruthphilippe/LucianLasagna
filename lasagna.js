
//
// Good luck preparing some lasagna!

/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared. **/

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function actualMinutesInOven() {
  return 20;
}

actualMinutesInOven(20);

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
remainingMinutesInOven(20)

/**
 * Given a number of layers, determines the total preparation time.
 **/

export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}
preparationTimeInMinutes(2)

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return  numberOfLayers * 2 + actualMinutesInOven;
}

totalTimeInMinutes(2, 20)
