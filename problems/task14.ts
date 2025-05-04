{
   const isString=(value: unknown): value is string =>{
     return typeof value === "string";
   }

   const printUpperCase=(value: unknown): void=>{

    if(isString(value)){
        console.log(value.toUpperCase());
        
    } else {
        console.log("Not String!");
        
    }
       
   }
   printUpperCase("rafi")
   printUpperCase(123)
}