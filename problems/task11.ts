{
    //unknown type
    const processData = (data: unknown)=> {

        if(typeof data === "string"){
            return data.toUpperCase();
        } else if (typeof data === "number"){
            return data*data;
        }
        return data;
    }

    // let res = processData(10)
    // console.log(res);

    //Never type
    const handleError  = (message: string):never=> {
        throw new Error(message)
    }

    let res = handleError("this is error")
    console.log(res);
}