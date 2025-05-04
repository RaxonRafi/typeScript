{
    const getPropertyValue=<T,K extends keyof T>(obj:T,key:K):T[K]=>{
        return obj[key]
    }
    const user = {
        name: "Rafi",
        age: 24,
        email:"dev.muhammad.rafi@gmail.com"
    }
    const name = getPropertyValue(user,"name")
    const age = getPropertyValue(user,"age")
    const email = getPropertyValue(user,"email")
    console.log(name,age,email);
}