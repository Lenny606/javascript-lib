const constants = {
    "kmToMile": 0.621371,
    "mileToKm": 1.60934

}

/**
 * @add constants
 * @example conversion(10, constants.kmToMile)
 */
export function kmToMiles(input, conversion) {

    return input * conversion;
}