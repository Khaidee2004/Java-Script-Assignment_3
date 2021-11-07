//Question 1

var stdArr = []
console.log(stdArr)

//Question 2

var stdNarr = []
stdArr[0] = "Talha";
stdArr[1] = "Web and Mobile Development";
stdArr[2]= "Sec-A";
console.log(stdNarr)

//Question 3

var stringArr = [""];
console.log(stringArr)

//Question 4

var numberArr = [];
console.log(numberArr)

//Question 5

var booleanArr = true/false;
console.log(booleanArr)

//Question 6

var mixedArr = ["Khalil",1, true ];
console.log(mixedArr)

//Question 7
document.write("<h1>Qualifications</h1>")
var peduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("<br>" + "1)" + " " + peduArr[0] + "<br>")
document.write("2)" + " " + peduArr[1] + "<br>")
document.write("3)" + " " + peduArr[2] + "<br>")
document.write("4)" + " " + peduArr[3] + "<br>")
document.write("5)" + " " + peduArr[4] + "<br>")
document.write("6)" + " " + peduArr[5] + "<br>")
document.write("7)" + " " + peduArr[6] + "<br>")
document.write("8)" + " " + peduArr[7] + "<br>")

//Question 8
var stdNarr = ["Micheal", "John", "Tony"];
var stdSarr = [320 , 230, 480];
var percentArr =[stdSarr[0]/500*100, stdSarr[1]/500*100, stdSarr[2]/500*100]
document.write("<br>" + "Score of " + " " + stdNarr[0] + " " + stdSarr[0] +"." +" " +"Percentage:"+" "+percentArr[0]+"%"+"<br>")  
document.write("Score of " + " " + stdNarr[1] + " " + stdSarr[1] +"." +" " +"Percentage:"+" "+percentArr[1]+"%"+"<br>")  
document.write("Score of " + " " + stdNarr[2] + " " + stdSarr[2] +"." +" " +"Percentage:"+" "+percentArr[2]+"%"+"<br>")  

//Question 9

var clrArr = ["violet", "indigo", "blue", "green", "yellow",];
document.write("<h1> Color names </h1>")
document.write(clrArr+"<br>")

// part-a
var clrArr1 = ["violet", "indigo", "blue", "green", "yellow",];
var userClr = prompt("Enter Color name to add in begining");
clrArr1.unshift(userClr)
document.write("<h1> Color Add In Begining </h1>")
document.write(clrArr1 + "<br>")

// part b
var clrArr2 = ["violet", "indigo", "blue", "green", "yellow",];
var userClr = prompt("Enter Color name to add in end");
clrArr2.push(userClr)
document.write("<h1> Color Add In End </h1>")
document.write(clrArr2 + "<br>")

// part c
clrArr.unshift("yellow","red")
document.write("<h1> Adding two Colors </h1>")
document.write(clrArr + "<br>")

// pard d
clrArr.shift()
document.write("<h1> Delete begining color</h1>")
document.write(clrArr + "<br>")

// part e
clrArr.pop()
document.write("<h1> Delete last color</h1>")
document.write(clrArr+"<br>")

// part f
var location = prompt("Enter location for adding :eg(0-4)");
var clrName = prompt("Enter Color Name");
clrArr.splice(location, 0 , clrName)
document.write("<h1> After Adding</h1>")
document.write(clrArr)

// part g
var location2 = prompt("Enter location For Deleting Color :eg(0-4)");
var dltClr = prompt("How Many Color Do you Want to Delete?") ;
clrArr.splice(location2, dltClr)
document.write("<h1> After deleting </h1>")
document.write(clrArr)

//Question 10

document.write("<h1> Sorting Numbers </h1>")
var stdScore = [320,230,480,120];
document.write("<br>" + "Score of students" + " " + stdScore + "<br>")
stdScore.sort()
document.write("Ordered Score of students:"+" "+stdScore+"<br>")

//Question 11

document.write("<h1> Cities List </h1>")
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshsawar"];
document.write("<br>" + cities + "<br>")
var citesCopy = cities.slice(2,4);
document.write("<h1> Selected Cities </h1>")
document.write(copyCites + "<br>")

//Question 12

document.write("<h1> Arrays </h1>")
var arr = ["This", "is ", "my ",  "cat"];
document.write(arr)
document.write("<br>")
var joinArr = arr.join("")
document.write(joinArr)

//Question 13

document.write("<h1>Devices:</h1>")
var componentsArr = ["Keyboard","Mouse","printer","Monitor"];
document.write(deviceArr)
document.write("Out:" + "<br>" + componentsArr[0] + "<br>")
document.write("Out:" + "<br>" + componentsArr[1] + "<br>")
document.write("Out:" + "<br>" + componentsArr[2] + "<br>")
document.write("Out:" + "<br>" + componentsArr[3] + "<br>")

//Question 14

document.write("<h1>Devices2:</h1>")
var componentsArr2 = [];
componentsArr2[0] ="Keyborad";
componentsArr2[1] ="mouse";
componentsArr2[2] ="Printer";
componentsArr2[3] ="monitor";
document.write(deviceArr2)
document.write("Out:" + "<br>" + componentsArr2[0] + "<br>")
document.write("Out:" + "<br>" + componentsArr2[1] + "<br>")
document.write("Out:" + "<br>" + componentsArr2[2] + "<br>")
document.write("Out:" + "<br>" + componentsArr2[3] + "<br>")

//Question 15

document.write("<h1> Mobile Phones </h1>")
var mobCompanies = ["Apple","Samsung"," Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select> <option>" + mobCompanies[0] + "</option>")
document.write("<option>" + mobCompanies[1] + "</option>")
document.write("<option>" + mobCompanies[2] + "</option>")
document.write("<option>" + mobCompanies[3] + "</option>")
document.write("<option>" + mobCompanies[4] + "</option>")
document.write("<option>" + mobCompanies[5] + "</option>" + "</select>")