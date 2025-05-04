{
    type Employee = {
        name:string | null | undefined;
        address?:{
            city?: string;
            country?:string;
        }
    }

    const getDisplayName=(employee:Employee):string | undefined =>{


        return employee.name ?? "Anonymous";

    }
    const emp1:Employee={
        name: null,
        address:{
            city:"Chattogram",
            country:"Bangladesh"
        }
    }
    console.log(getDisplayName(emp1));

}



