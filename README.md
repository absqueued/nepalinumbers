# nepalinumbers
This JavaScript utility is written to convert English integers into Nepali integers with week and month names in Nepali script.
<br /><br />
Bonus: Converts month and week numbers into Nepali Unicode names.


## Why?
So that you don't need third-party API integration like Google Translation just to convert a few strings. Makes life easier and app lighter.

[![npm version](https://badge.fury.io/js/%40danfebooks%2Fnepalinumbers.svg)](https://badge.fury.io/js/%40danfebooks%2Fnepalinumbers)

## What it doesn't do
It doesn't convert dates or numbers from AD to BS or vice-versa;

## How To
```
// Install the package:
`npm i -S @danfebooks/nepalinumbers;`

//Then follow the below examples,
import nepalinumbers from '@danfebooks/nepalinumbers';

// or, import only selected modules
import { week, month } from '@danfebooks/nepalinumbers';

const yearToConvert = 2019;
const convertedYear = nepalinumbers.numbers(yearToConvert);
// => २०१९

const numberToConvert = 35476865;
const convertedNumber = nepalinumbers.numbers(numberToConvert);
// => ३५४७६८६५

const monthToConvert = 12;
const convertedMonth = nepalinumbers.month(monthToConvert);
// => चैत

const weekToConvert = 2;
const convertedWeek = nepalinumbers.week(weekToConvert);
// => सोमबार

```


## Pre-requisite
Babel or any ES6 Transpiler or Webpack within your App. The browser version of minified JS is coming soon!

## Methods
| Method | Options | Description  |
|---|---|---|
| month | 'all' or Integer | Translate/Converts month number to Nepali Unicode |
| week | 'all' or Integer | Translate/Converts week number to Nepali Unicode |
| numbers | n/a | Transforms/Converts numbers to Nepali Unicode |

## Examples
```
const nepaliMonths = nepalinumbers.month('all');
// => ['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मङि्सर','पुष','माघ','फागुन','चैत']
```
```
const nepaliWeeks = nepalinumbers.week('all');
// => ['आइतबार','सोमबार','मङ्गलबार','बुधबार','बिहिबार','शुक्रबार','शनिबार']
```