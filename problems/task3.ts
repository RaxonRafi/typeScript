type Address={
    city: string;
    country: string;
}
type Job ={
    title: string;
    company: string;
    salary: number;
}
type Skills={
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
type maritalStatus = 'single' | 'married' | 'divorced' | 'widowed';

type Person = {
    name: string;
    address: Address;
    hair: string;
    eye: string;
    income: number;
    expense: number;
    hobbies: string[];
    family: string[];
    job:Job;
    skills: Skills[];
    maritalStatus: maritalStatus;
    friends: string[];
}

const testPerson : Person = {
    name:"Muhammad Rafi",
    address:{
        city: 'Chattogram',
        country: 'Bangladesh'
    }, 
    hair:'black',  
    eye:'black', 
    income:40000,
    expense:20000,
    hobbies:['reading','traveling'],
    family:["Father","Mother","Brother"], 
    job:{
        title:"Software Engineer",
        company:"Google",
        salary:600000
    }, 
    skills:[
        {name:"TypeScript",level:"expert"},
        {name:"PHP",level:"advanced"},
        {name:"NextJS",level:"expert"},
    ],
    maritalStatus:"single", 
    friends:['sayed','piu','susmoy']
}
console.log(testPerson);