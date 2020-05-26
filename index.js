'use strict';
/*!
 * Converts to Nepali Unicode
 * Licensed under the MIT
 * Author: @danfebooks
 * Version: 1.0.2
 * This JavaScript utility is written to convert English integers into Nepali integers with week and month name. 
 */

import month from './src/month';
import week from './src/week';
import numbers from './src/numbers';

class NepaliNumbers {
    constructor() {
        this.VERSION = '1.0.2';
    }
    
    month(numbers) {
        return month(numbers);
    }
    
    week(numbers) {
        return week(numbers)
    }
    
    numbers(number) {
        return numbers(number);
    }
}

export default new NepaliNumbers();
export { month, week, numbers };