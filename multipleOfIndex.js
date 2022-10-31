/**
 * This function returns a new array consisting of elements which are multiple of their own index in input array
 * @param {*} array An array of numbers
 * @returns A new array consiting of numbers from the input array that are multiples of their index
 */
function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0)
  }