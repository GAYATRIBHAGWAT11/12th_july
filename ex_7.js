let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16] 
]
let cols=matrix[0].length 
// cols=4
let start=3;
let sum=0;
for(let i=0;i<cols;i++){
    sum+=matrix[start][i]
}
console.log(sum);

// console.log(cols);