'use strict';
/**
 * 
 * @param {integer } digit 
 * @returns {string} Returns Nepali converted string of given digit or numbers.
 * @example
 * 
 * numbers(2090873)
 * // => २०९०८७३
 * 
 * numbers()
 * // => false
 * 
 */

function numbers (digit) {
    
    const isdigit = parseInt(digit, 10);
    if(typeof isdigit !== "number") {
        console.log("@numbers: Yuck, got nothing");
        return false;
    }

    if(isNaN(isdigit)) {
        console.log("@numbers: Commooon, give it a numbers");
        return false;
    }

    const nepaliNumberss = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];    

    // convert eng number to nepali number
    const digitToConvert = digit.toString().split('');
    let output = digitToConvert.map((num, i) => {
      return nepaliNumberss[i, num];
    });

    // check number is float or negative
    const digitDecimal = digitToConvert.indexOf('.');
    const digitNegative = digitToConvert.indexOf('-');
    output[digitDecimal] = '.';
    output[digitNegative] = '-';

    return output.join('');
}

export default numbers;