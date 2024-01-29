
let name1 = ("Name: Sikandar Ahmed Khan");
console.log(name1);

let class1 = ("Class: Web_Development");
console.log(class1);

let Roll_No = ("Rol No: 123456");
console.log(Roll_No);

let total_subject = ("Total Subject: 4");
console.log(total_subject);

let total_marks = ("Total Marks: 400");
console.log(total_marks);

let html = prompt("Your Marks In Paper_1 HTML");
let result1 = Number(html)
console.log("Your Marks In Mathematics:" , html);

let css = prompt("Your Marks In Paper_2 CSS");
let result2 = Number(css)
console.log("Your Marks In Physics:" , css);

let js = prompt("Your Marks In Paper_3 JavaScript");
let result3 = Number(js)
console.log("Your Marks In Chemistry:" , js);

let ts = prompt("Your Marks In Paper_4 TYpeScript");
let result4 = Number(ts)
console.log("Your Marks In English:" , ts);


let total = (result1 + result2 + result3 + result4);
let result6 = (total)
console.log("Total Marks:" ,total);

if(total <= 400 && total >=301) {
    console.log("Your Grade Is A");
} else if(total <= 300 && total >=201) {
    console.log("Your Grade Is C");
} else if(total <= 200 && total >=101) {
    console.log("Your Grade Is D");
} else if(total <= 100 && total >=1) {
    console.log("You Are Fail");
} else if (total>500){
    console.log("Not Available");
}
