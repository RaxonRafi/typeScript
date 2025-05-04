type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {

  return `Admin Name: ${user.name}, Email: ${user.email}, Level: ${user.adminLevel}`;

}
const admin: AdminUser = {
    name: "muhammad rafi",
    email: "dev.muhammad.rafi@gmail.com",
    adminLevel: 2
  };
  
console.log(describeAdmin(admin)); 

