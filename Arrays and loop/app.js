// question .1 

var arrayOfarr = [[], [], []];

// question .2 

var arrayOfarr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write("<br>" + arrayOfarr[0].join("") + "<br>");
document.write(arrayOfarr[1].join("") + "<br>");
document.write(arrayOfarr[2].join("") + "<br>");

// question .3 

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// question .4 

var tableNumber = parseInt(prompt("Enter Table Number"));
var tableLength = parseInt(prompt("Enter Table Length"));

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " " + "X" + " " + i + " " + "=" + tableNumber * i + "<br>");
}

// question .5 

var fruitsArr = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruitsArr[0]);
document.write(fruitsArr[1]);
document.write(fruitsArr[2]);
document.write(fruitsArr[3]);
document.write(fruitsArr[4]);

for (var i = 0; i <= 4; i++) {
    document.write("Element At Index" + i + " " + "is" + " " + fruitsArr[i] + "<br>");
}

// question .6 

// part-a
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}

// part-b
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}

// part-c
for (var i = 0; i <= 10; i++) {
    document.write(i * 2 + ",");
}

// part-d
for (var i = 1; i <= 19; i++) {
    document.write(i++ + ",");
}

// part-e
for (var i = 1; i <= 10; i++) {
    document.write(i * 2 + "k" + " ");
}

// question .7 

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var takingOrder = prompt("Welcome To The Bakery. What do you want to buy from our bakery?");
var order = true
for (var i = 0; i < bakeryItems.length; i++) {
    if (takingOrder === bakeryItems[i]) {
        document.write(takingOrder + " is <strong> Available </strong> at index " + i + " is " + bakeryItems[i] + "<br>");
        order = false
    }
}
if (order === true) {
    document.write("We are Sorry " + takeOrder + " is <strong> Not Available </strong> in our bakkery" + "<br>");
}

// question .8 

var numberArr = [24, 53, 78, 91, 12];
document.write("Array items is:" + " " + numberArr + "<br>");
document.write("The largest number is:" + " " + Math.max(...numberArr));

// question .9 

var numberArr2 = [24, 53, 78, 91, 12];
document.write("Array items is:" + " " + number2 + "<br>");
document.write("The largest number is:" + " " + Math.min(...numberArr2));

// question .10

for (var i = 1; i <= 20; i++) {
    document.write(5 * i + "," + " ");
}