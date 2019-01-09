# nepalinumbers
This JavaScript utility is written to convert English integers into Nepali integers with week and month names in Nepali script.

## How To

```
import nepalinumbers from 'nepalinumbers';

const yearToConvert = 2019;
const convertedYear = nepalinumbers.year(yearToConvert);
// => २०१९

const monthToConvert = 2;
const convertedMonth = nepalinumbers.month(yearToConvert);
// => चैत

const weekToConvert = 2;
const convertedWeek = nepalinumbers.week(yearToConvert);
// => सोमबार

const numberToConvert = 35476865;
const convertedNumber = nepalinumbers.number(numberToConvert);
// => ३५४७६८६५


```

## Methods
| Method | Description  |
|---|---|
| year | Transforms/Converts 4 digit year to Nepali unicode  |
| month | Translate/Converts month name to Nepali unicode |
| week | Translate/Converts week name to Nepali unicode |
| number | Transforms/Converts numbers to Nepali unicode |

## Examples
```
const nepaliMonths = nepalinumbers.month('all');
// => ['बैशाख','जेठ','असार','साउन','भदौ','असोज','कार्तिक','मङि्सर','पुष','माघ','फागुन','चैत']
```
```
const nepaliWeeks = nepalinumbers.weeks('all');
// => ['आइतबार','सोमबार','मङ्गलबार','बुधबार','बिहिबार','शुक्रबार','शनिबार']
```
