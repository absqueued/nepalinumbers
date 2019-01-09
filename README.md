# nepalinumbers
This JavaScript utility is written to convert English integers into Nepali integers with week and month names in Nepali script.

## Why?
So that you don't need third party API integration like Google Translation just to convert few strings. Makes life easier and app lighter.

## How To
First install the package:

`npm i -S @danfebooks/nepalinumbers;`

Then follow the below examples,

```
import nepalinumbers from 'nepalinumbers';

const yearToConvert = 2019;
const convertedYear = nepalinumbers.year(yearToConvert);
// => २०१९

const monthToConvert = 12;
const convertedMonth = nepalinumbers.month(monthToConvert);
// => चैत

const weekToConvert = 2;
const convertedWeek = nepalinumbers.week(weekToConvert);
// => सोमबार

const numberToConvert = 35476865;
const convertedNumber = nepalinumbers.number(numberToConvert);
// => ३५४७६८६५


```


## Pre-requisite
Babel or any ES6 Transpiler or Webpack within your App.
Browser version of minified JS is coming soon!

## Methods
| Method | Options | Description  |
|---|---|---|
| year | n/a|Transforms/Converts 4 digit year to Nepali unicode  |
| month | 'all' or Integer | Translate/Converts month name to Nepali unicode |
| week | 'all or Integer | Translate/Converts week name to Nepali unicode |
| number | n/a | Transforms/Converts numbers to Nepali unicode |

## Examples
```
const nepaliMonths = nepalinumbers.month('all');
// => ['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मङि्सर','पुष','माघ','फागुन','चैत']
```
```
const nepaliWeeks = nepalinumbers.weeks('all');
// => ['आइतबार','सोमबार','मङ्गलबार','बुधबार','बिहिबार','शुक्रबार','शनिबार']
```