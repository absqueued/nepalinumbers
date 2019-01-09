'use strict';
/*!
 * Converts to Nepali Unicode
 * Licensed under the MIT
 * Author: @danfebooks
 * Version: 0.1.0
 * This JavaScript utility is written to convert English integers into Nepali integers with week and month name. 
 */

import neYear from './src/neYear';
import neMonth from './src/neWeek';
import neWeek from './src/neWeek';

class NepaliNumbers {
    constructor() {
        this.VERSION = '0.1.0';
    }

    year(numbers) {
        return neYear(numbers);
    }
    
    month(numbers) {
        return neMonth(numbers);
    }
    
    week(numbers) {
        return neWeek(numbers)
    }
    
    number(numbers) {
        console.log('@nepalinumbers/numbers - work in progress', numbers);
        return numbers;
    }
}

export default new NepaliNumbers();