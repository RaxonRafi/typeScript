{
    type User = {
        name: string,
        age: number,
    }
    const fetchUserData= async ():Promise<User>=>{

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    name:"Muhmmad Rafi",
                    age:24
                })
            },1000)
        })

    }
    fetchUserData().then((user)=>{
        console.log("Fetched user",user);
    })
}
