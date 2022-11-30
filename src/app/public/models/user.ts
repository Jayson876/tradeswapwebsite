export class User {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone_number:string;
  work_rate:string;
  roleID:string;
  parishID:string;
  categoryID:string;

    constructor(id?: string,first_name?:string,last_name?:string, username?:string,
      email?:string,password?:string,phone_number?:string,work_rate?:string,
      roleID?:string, parishID?:string, categoryID?:string){
        this._id = id!;
        this.first_name = first_name!;
        this.last_name = last_name!;
        this.username = username!;
        this.email = email!;
        this.password = password!;
        this.phone_number = phone_number!;
        this.work_rate = work_rate!;
        this.roleID = roleID!;
        this.parishID = parishID!;
        this.categoryID = categoryID!;
    }
}
