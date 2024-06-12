//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.


// we will want to iterate though the array with a for loop
// we want the for loop to exclude the negitive numbers
// add the positive numbers to get the sum


// set up for loop to iterate the length of the array
// if i is greater then 0 its not skipped
// addes all the positive numbers together
// return the sum
function positiveSum(arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i];
        }

    }
    return sum;
  
}