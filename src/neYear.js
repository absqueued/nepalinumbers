'use strict';
/**
 * 
 * @param {integer } digit 
 * @returns {string} Returns Nepali converted string of given digit or number.
 * @example
 * 
 * neYear(2019)
 * // => २०१९
 * 
 * neYear()
 * // => false
 * 
 */
function neYear (digit) {
    
    if(!digit) {
        console.log("@neYear: Yuck, got nothing");
        return false;
    }

    const nepaliDigits = ['०','१','२','३','४','५','६','७','८','९'];
    const digitsToConvert = digit.toString().split('');
    const output = [];


    if(digitsToConvert.length !== 4) {
        console.log("@neYear: Must be 4 character");
        return false;
    }
    
    if(isNaN(digit)) {
        console.log("@neYear: Commooon, give it a number");
        return false;
    }

    for(var i=0; i < digitsToConvert.length; i++) {

        var ii = parseInt(digitsToConvert[i], 10);

        for(var _i=0; _i < 10; _i++) {
            if (_i === ii) {
                output.push(nepaliDigits[_i])
            }
        }
    }

    return output.join('');
}

export default neYear;