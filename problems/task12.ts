{
const createGenericArray=<T>(arr:T[]):T[]=>{
    return [...new Set(arr)];
}
const res = createGenericArray<string>(["a", "b", "a", "c"])
console.log(res);

}