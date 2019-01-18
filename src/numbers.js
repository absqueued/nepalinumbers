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
    const digitToConvert = digit.toString().split('');

    const output = digitToConvert.map(num => {
      let i = 0;
      const l = parseInt(num, 10);
      for (i; i < 10; i += 1) {
        if (i === l) {
            return nepaliNumberss[i];
        }
      }
    });

    return output.join('');
}

export default numbers;