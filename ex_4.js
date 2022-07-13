let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]


let rows=matrix.length;
let cols=matrix[0].length
for(let i=0;i<rows;i++){
    if(i%2!=0){
        for(let j=0; j<cols;j++){
            console.log(matrix[i][j]);
        }
    }else{
        for(let j=cols-i;j>=0;j--){
            console.log(matrix[i][j]);
        }
    }
}