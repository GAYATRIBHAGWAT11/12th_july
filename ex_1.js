let nums=[10,13,45,23,58, 86, 87,36, 97]
let target=10
let start=0
let end=nums.length-1

while(start<=end){
    let middle=Math.floor(start+end/2)

    if(nums[middle]==target){
        console.log('found at', middle);
        start+=1
        end-=1
    }else if(nums[middle]<target){
        start=middle+1
    }else{
        end=middle-1
    }
}