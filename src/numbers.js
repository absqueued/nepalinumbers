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
    let digitToConvert = [];
    let output = (digits) => digits.map(num => {
        let i = 0;
        const l = parseInt(num, 10);
        for (i; i < 10; i += 1) {
          if (i === l) {
              return nepaliNumberss[i];
          }
        }
      });

    // is whole number
    if(digit % 1 === 0) {
      digitToConvert = digit.toString().split('');
      output = output(digitToConvert);
    }

    // is decimal number
    if(digit % 1 !== 0) {
      digitToConvert = digit.toString().split('.');    
      const digitToConvertFirst = digitToConvert[0].toString().split(''); // numbers befor decimal
      const digitToConvertLast = digitToConvert[1].toString().split(''); // numbers after decimal

      const outputFirst = output(digitToConvertFirst);
      const outputLast = output(digitToConvertLast);

      output = outputFirst.concat(['.'], outputLast)

    }


    return output.join('');
}

export default numbers;