{
    const sumOfNums = (...nums:number[])=>{
        let sum=0
        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
        }
        return sum;

    }
    let res = sumOfNums(1,2)
    console.log(res);
    
}