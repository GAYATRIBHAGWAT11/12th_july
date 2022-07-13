let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [16,14,15,16] 
]

let rows=matrix.length
let start=matrix[0].length-1
for(let i=0;i<rows;i++){
     console.log(matrix[i][start])
    // start=matrix.length-1

 if(rows-1+start==16){
   console.log( matrix[start][i])
    start-=1
 }
 else if(start=matrix[0].length-4 && i==matrix.length && rows>=1){
    console.log(matrix[start][i])
    i-=1
 }else if(i==matrix.length-3 && start==matrix[0].length-4 && start<=2){
     console.log(matrix[start][i])
 }else if(i==matrix.length-3 && start==matrix[0].length-1 && i<=matrix.length-1){
    console.log( matrix[i][start])
     start-=1
     i-=1}


 }