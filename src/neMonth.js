'use strict';
/**
 * 
 * @param {integer } 1... 12 
 * @param { string } 'all'
 * @returns {string} Returns Nepali month name in unicode of given digit or number or all months in an array
 * @example
 * 
 * neMonth(1)
 * // => बैशाख
 * 
 * neMonth('all')
 * // => [बैशाख, ...]
 * 
 * neMonth(2)
 * // => जेठ
 * 
 * neMonth(12)
 * // => चैत
 * 
 */
function neMonth (digit) {

    if(!digit) {
        console.log("@neMonth: Yuck, got nothing");
        return false;
    }

    const nepaliMonths = ['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मङि्सर','पुष','माघ','फागुन','चैत'];
    const digitToConvert = parseInt(digit, 10) - 1;
    let output = '';

    if(digit === 'all') {
        return nepaliMonths;
    }

    if(digitToConvert >= 12) {
        console.log("@neMonth: Mustn't be more than 12");
        return false;
    }
    
    if(isNaN(digitToConvert)) {
        console.log("@neMonth: Commooon, give it a number");
        return false;
    }

    for (var i = 0; i <= nepaliMonths.length; i++) {
        if(i === digitToConvert){ 
            output = nepaliMonths[i];
            break;
        }
    };

    return output;
}

export default neMonth;