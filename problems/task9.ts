{
    type Employee = {
        name:string;
        address?:{
            city?: string;
            country?:string;
        }
    }

    const getEmployeeCity=(employee:Employee):string | undefined =>{

        return employee.address?.city;

    }
    const emp1:Employee={
        name: "Muhammad Rafi",
        address:{
            city:"Chattogram",
            country:"Bangladesh"
        }
    }
    console.log(getEmployeeCity(emp1));

}



