// Array Higher-Order Methods

// 1. forEach() — Print each number
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(num) {
    console.log(num);
});

// 2. forEach() — Print Hello with each student name
let students = ["Aalan", "Bryant", "Karthi", "Kabi"];
students.forEach(function(name) {
    console.log("Hello, " + name);
});

// 3. map() — Multiply each number by 2
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(function(num) {
    return num * 2;
});
console.log(result);

// 4. map() — Add 100 to every price
let prices = [100, 200, 300, 400];
let result = prices.map(function(price) {
    return price + 100;
});
console.log(result);

// 5. filter() — Get only even numbers
let numbers = [10, 15, 20, 25, 30, 35];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

// 6. filter() — Get students aged 18 or above
let ages = [15, 18, 20, 16, 25, 17];
let adults = ages.filter(function(age) {
    return age >= 18;
});
console.log(adults);

// 7. find() — Find first number greater than 50
let numbers = [10, 25, 45, 60, 75, 90];
let result = numbers.find(function(num) {
    return num > 50;
});
console.log(result);

// 8. find() — Find first student with mark greater than 80
let students = [
    { name: "Aalan", mark: 75 },
    { name: "Karthi", mark: 85 },
    { name: "Kabi", mark: 90 }
];
let student = students.find(function(s) {
    return s.mark > 80;
});
console.log(student);

// 9. reduce() — Calculate total sum
let numbers = [10, 20, 30, 40, 50];
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total);

// 10. reduce() — Calculate total price
let prices = [100, 200, 300, 400];
let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);
console.log(total);

// 11. some() — Check if at least one number is greater than 100
let numbers = [20, 50, 80, 120, 40];
let result = numbers.some(function(num) {
    return num > 100;
});
console.log(result);

// 12. every() — Check whether all marks are above 35
let marks = [45, 60, 75, 50, 80];
let result = marks.every(function(mark) {
    return mark > 35;
});
console.log(result);


// Sort / Join / Array Conversion

// 13. sort() — Ascending order
let numbers = [50, 10, 40, 20, 30];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

// 14. sort() — Descending order
let numbers = [50, 10, 40, 20, 30];
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);

// 15. toString() — Convert array into a string
let students = ["Aalan", "Bryant", "Karthi", "Kabi"];
let result = students.toString();
console.log(result);

// 16. join() — Combine names using " - "
let names = ["Aalan", "Bryant", "Karthi", "Kabi"];
let result = names.join(" - ");
console.log(result);

// 17. join() — Display products as one sentence
let products = ["Laptop", "Mobile", "Tab", "Headset"];
let result = products.join(", ");
console.log(result);


// String Methods

// 18. charAt() — Character at index 4
let text = "JavaScript";
let result = text.charAt(4);
console.log(result);

// 19. charCodeAt() — Character code of first character
let text = "JavaScript";
let result = text.charCodeAt(0);
console.log(result);

// 20. length — Find string length
let text = "Hello JavaScript";
console.log(text.length);

// 21. slice() — Extract "JavaScript"
let text = "JavaScript Developer";
let result = text.slice(0, 10);
console.log(result);

// 22. toUpperCase() — Convert lowercase to uppercase
let text = "javascript developer";
let result = text.toUpperCase();
console.log(result);

// 23. toLowerCase() — Convert uppercase to lowercase
let text = "JAVASCRIPT DEVELOPER";
let result = text.toLowerCase();
console.log(result);

// 24. trim() — Remove extra spaces
let text = "   Hello JavaScript   ";
let result = text.trim();
console.log(result);

// 25. includes(), indexOf(), startsWith(), endsWith()
let sentence = prompt("Enter a sentence:");
console.log("Includes JavaScript:",sentence.includes("JavaScript"));
console.log("Index of JavaScript:",sentence.indexOf("JavaScript"));
console.log("Starts with Hello:",sentence.startsWith("Hello"));
console.log("Ends with Developer:",sentence.endsWith("JavaScript"));


// Date Methods

// 26. Current Year, Month, Date and Day
let date = new Date();
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Date:", date.getDate());
console.log("Day:", date.getDay());
getMonth() starts from 0, so we use + 1.
getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday.

// 27. Current Hours, Minutes and Seconds
let date = new Date();
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());

// 28. Change the year using setFullYear()
let date = new Date();
date.setFullYear(2030);
console.log(date);

// 29. Change month and date
let date = new Date();
date.setMonth(5);
date.setDate(15);
console.log(date);

// 30. Get date of birth and find the day
let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let date = new Date(dob);
let day = date.getDay();
if (day === 0) {
    console.log("You were born on Sunday");
} else if (day === 1) {
    console.log("You were born on Monday");
} else if (day === 2) {
    console.log("You were born on Tuesday");
} else if (day === 3) {
    console.log("You were born on Wednesday");
} else if (day === 4) {
    console.log("You were born on Thursday");
} else if (day === 5) {
    console.log("You were born on Friday");
} else {
    console.log("You were born on Saturday");
}
