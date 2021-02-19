"use strict";
function tikTock(){
let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

/*var dayNight is "am" but using a conditional "if" statement will turn it into "pm" when appropriate
a condiotnal "if" statement also turns clock into a 12hr clock vs being the default 24hr clock*/
let dayNight = "am";

if (hrs == 0){
    hrs = 12;
}

if (hrs > 12){
    hrs = hrs - 12;
    dayNight = "pm";
}

/*I'm using a conditional/ternary operator, which operates on 3 values. the values are written and between them go a question mark and colon (10 ? `0{hrs}` : hrs;)
The value on the left of the "?" picks which of the other 2 values will come out. When the arguement is "true" it will pick the middle value, "`0{hrs}`", 
when it is false it will choose the last vale, "hrs".

so in other words, the argument is "are the hrs value less than 10?" ("hrs < 10 ?"), is the answer is yes (True) then it will put a 0 infront of the value (`0${hrs}`),
if the answer is no (False) it will display the value normally.
so the clock will read something like "02:09", instead of "2:9"*/

hrs = hrs < 10 ? `0${hrs}` : hrs;
min = min < 10 ? `0${min}` : min;
sec = sec < 10 ? `0${sec}` : sec;

let currentTime = `${hrs}:${min}:${sec} ${dayNight}`;
setInterval(tikTock, 1000);

document.getElementById("CLOCK").innerHTML = currentTime;

//I'm assigning names to the days of the weeks and calendar months, make sure to remember they are STRINGS and therefore need quotations to know when the string starts and ends!!!
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let wd = day[date.getDay()]; //this will get the specific day of the week
let dd = date.getDay();
let mm = month[date.getMonth()]; //this will get the month by name vs by number
let yy = date.getFullYear();

let mayan = `${wd}, ${mm} ${dd} ${yy}`;

document.getElementById("DATE").innerHTML = mayan;
}

tikTock();

/*calling tikTock() function to initiate the process */

/*
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