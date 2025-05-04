{

let hello: string = "Muhammad Rafi hello world!"
console.log(hello);

type Tobj = {
    name: string
    age: number
    education?:{
        institution: 'University' | 'College' | 'School'
        level: 'Undergrad' | 'Graduate'
    }
}

const student1:Tobj = {
    name: 'muhammad rafi',
    age:24,
    education:{
        institution:'University',
        level: 'Undergrad'
    }
}

const student2:Tobj = {
    name: 'muhammad rafi 2',
    age:24,
}

console.log(student1,student2);

const fn = (input: number): number=>{
    const multi = input*input
    return multi;
}

console.log(fn(20));


const user = {
    name: 'Rafi',
    age: 20
}

const user2 = {
    ...user,
    address: "Chattogram"
}
const {name,age} = user2


const numbers : number[] = [1,2,3,4,5,6]

const numbers2 : number[] = [7,8,...numbers,10]
console.log(numbers2);

//type alias 
type TNickname = 'Hello' | 'World'

const person : TNickname = 'Hello'

type A = {
    Frontend: 'pro'
}
type B = {
    Backend: 'pro'
}

type AB = A & B;

const FullStack:AB={
    Frontend:'pro',
    Backend:'pro'
}
console.log(FullStack);

//ternary operator 
let userAge: number = 25
const status = userAge >= 18 ? 'approved' : 'pending'
console.log(status);
}