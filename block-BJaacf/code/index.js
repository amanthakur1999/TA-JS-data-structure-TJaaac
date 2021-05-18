// 1. Create an array named numbers and store 5 number values in it
let arr=[1,2,3,4,5]

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
 sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    
}
console.log(sum/5);
// 4. Find the highest number in the array and print it to the console using console.log()
let highest=0
for(let i=0; i<arr.length; i++){
    highest< arr[i];
    highest=arr[i];
}
console.log(highest);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest=0
for(let i=0; i<arr.length; i++){
    lowest>arr[i];
    lowest=arr[i];
}
console.log(lowest);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even=[];
    for(let number of arr){
        if (number%2===0){
            even.push(number)
        }
    }
    console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd=[];
    for(let number of arr){
        if (number%2!==0){
            odd.push(number)
        }
    }
    console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// 9. Log all the element of the array one by one
console.log(arr);
// 10. Find all the number in the array that is divisible by 3
let div=[];
    for(let number of arr){
        if (number%3==0){
            div.push(number)
        }
    }
    console.log(div);