# TICKTOCK
Digital clock with date
/*
JS steps for making clock with date:

1) Create a function

2) Create an instance of the Date object

3) Using the methods of Date object get “hours”, “minute” and “seconds”

4) Set AM/PM depending on the hour value. The Date object works on 24-hour format so we change hour back to 1 when it get’s larger than 12. The AM/PM also changes according to that.

5) Make it so a 0 will be displayed infront of any number less than 10

6) Now make a string using the "Hrs:Min:Sec am/pm" format

7) To call the function every second use setInterval() method and set time-interval as 1000ms which is equal to 1s.

8) Now replace the string variable in the correct “div” using innerHTML property.

9) Create variables with STRINGS of the names of the months and days of the week

10)Using the methods of Date object get "Week day", "Day", "Month", "year"

11) create a string using the "Weekday, Month Day Year" format

12) Now replace the string variable in the correct "div" using innerHTML property.

13) Now call the function at the end to start function at exact reloading/rendering time as setInterval() will call first after 1s of rendering.
*/
