{
    const typeChecker = (input: string | number): string | number => {

        if(typeof input === "string"){
            return input.length;
        } else if (typeof input === "number"){
            return input*input;
        }
        return input;
    }

    let res = typeChecker(10)
    console.log(res);
}