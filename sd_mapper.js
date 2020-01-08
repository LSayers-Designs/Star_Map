"use strict";
//Use strict to create good coding habits when writing js
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Letisha Rahming
   Date Start:   January 7, 2020 
   Date Complete: January 8, 2020
   Total Sections: 2
	Section1: Time and Date
	Section2: Star Map

*/
/*PREMEBLE: Create an arbitrary start date and time as: new Date(February 3, 2018 3:15:28 AM) to use during the development phase and then
remove contents within parenthesis to display the curent date and time per the laptop when all coding is complete END PREMBLE*/

/*SECTION 1 - Time and Date*/
//Create a variable to include the date and time together which will serve as the basis for this project
var thisTime = new Date();

//a good practice is to convert all time and date stamps to local time and date formats for any timezone
var timeStr = thisTime.toLocaleString();

//incorporate timeStr into the inner HTML to reflect local time and date format
document.getElementById("timeStr").innerHTML = timeStr;


/*SECTION2 - Star Map*/
//Create a set of givens required to automatically calculate the relevant skymap for the hour
var thisHour = thisTime.getHours();
var	thisMonth = thisTime.getMonth();
var mapNum = (thisHour + thisMonth)%24

//Use the aformentioned givens to create the variable sky map of the hour
var imgStr = "<img src = 'sd_sky"+mapNum+".png'/>";

//Incorporate the variable imgStr into the inner HTML to display the star map in its designated place
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);


//Follow directions per PREMEBLE to complete project.
/*END OF PROJECT*/
