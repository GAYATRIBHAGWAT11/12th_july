let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let rows=matrix.length;
let start=matrix[0].length-1
let sum=0;
for(let i=0;i<rows;i++){
    sum+=matrix[i][start]
    start-=1
}
console.log(sum);