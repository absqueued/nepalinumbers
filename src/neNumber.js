'use strict';
/**
 * 
 * @param {integer } digit 
 * @returns {string} Returns Nepali converted string of given digit or number.
 * @example
 * 
 * neNumber(2090873)
 * // => २०९०८७३
 * 
 * neNumber()
 * // => false
 * 
 */

function neNumber (digit) {
    
    if(!digit) {
        console.log("@neNumber: Yuck, got nothing");
        return false;
    }

    if(isNaN(parseInt(digit, 10))) {
        console.log("@neNumber: Commooon, give it a number");
        return false;
    }

    const nepaliNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    const digitToConvert = digit.toString().split('');

    const output = digitToConvert.map(num => {
      let i = 0;
      const l = parseInt(num, 10);
      for (i; i < 10; i += 1) {
        if (i === l) {
            return nepaliNumbers[i];
        }
      }
    });

    return output.join('');
}

export default neNumber;