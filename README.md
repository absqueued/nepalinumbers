# Nepali Date Converter
This JavaScript utility is written to convert English integers into Nepali integers with week and month names in Nepali script.

## How to use
Add `NepaliCalendar.js` script to your HTML Page.

    <script src="NepaliDateConverter/NepaliCalendar.js"></script>

After this 'NepaliDates' object will be available for you to use. Example:

	<script>
		var nepYear = NepaliDates.getNumber(2072),
			nepMonth = NepaliDates.getMonth(6),
			nepWeek =NepaliDates.getWeek(6),
			nepDay = NepaliDates.getNumber(8);

		console.log(nepYear, nepMonth, nepDay, nepWeek);
		//Expected output: **२०७२ असोज ८ शुक्रबार**
	</script>

TODO:
Write more comprehensive doc with examples.

##License
This utility is licensed under MIT.