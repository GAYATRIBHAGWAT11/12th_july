let nums=[10,13,69,45,36,65]
let target=45
function isPresent(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
        return true
    }
    return false
}
console.log(isPresent(nums, target));