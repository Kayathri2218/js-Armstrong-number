// Armstrong Number or not Armstrong

//153, 370, 371, 407, 1634, 8208, 9474, 54748

let number = prompt("Enter the number : ");
let a = 0;
let num = number;
while (num > 0) {
    let sum = num % 10;
    num = (num - sum) / 10;
    a++; 
}
console.log(a);
let b = number;
let cal = 0;
while (b > 0) {
    let sum = b % 10;
    cal += sum ** a;
    b = parseInt(b / 10);
} if (number == cal) {
    document.write("Armstrong Number");
} else {
    document.write("Not Armstrong Number");
}