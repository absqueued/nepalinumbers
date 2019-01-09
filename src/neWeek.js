'use strict';
/**
 * 
 * @param {integer} 1 ... 7 
 * @param {string} 'all' 
 * @returns {string} Returns Nepali week name in unicode string of relevant week number or all week names in an array
 * @example
 * 
 * neWeek(1)
 * // => आइतबार
 * 
 * neWeek('all')
 * // => [आइतबार, ...]
 * 
 * neWeek(2)
 * // => सोमबार
 * 
 */
function neWeek (digit) {

    if(!digit) {
        console.log("@neWeek: Yuck, got nothing");
        return false;
    }

    const nWeekNames = ['आइतबार','सोमबार','मङ्गलबार','बुधबार','बिहिबार','शुक्रबार','शनिबार'];
    const digitToParse = parseInt(digit, 10) - 1;
    let output = '';

    if(digit === 'all') {
        return nWeekNames;   
    }
    
    if(isNaN(digitToParse)) {
        console.log("@neWeek: Commooon, give it a number");
        return false;
    }

    if(digitToParse > 6) {
        console.log("@neWeek: Week digit can't be more than 7.");
        return false;
    }
    

    for (var i = 0; i < nWeekNames.length; i++) {
        if(i === digitToParse) {
            output = nWeekNames[i];
            break;
        }
    };

    return output;
}

export default neWeek;