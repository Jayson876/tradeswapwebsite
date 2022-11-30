export class User {
  _id: string;
  first_name:string;
  last_name:string;
  email:string;
  username:string;
  password:string;
  phone_number:string
  work_rate:string;
  parishID: string;
  categoryID: string;
  roleID: string;

  constructor(id?: string, first_name?:string,last_name?:string,email?:string,
              username?:string,password?:string,phone_number?:string,work_rate?:string,parishID?:string,
              categoryID?:string,roleID?:string){
      this._id = id!;
      this.first_name = first_name!;
      this.last_name = last_name!;
      this.email = email!;
      this.username = username!;
      this.password = password!;
      this.phone_number = phone_number!;
      this.work_rate = work_rate!;
      this.parishID = parishID!;
      this.categoryID = categoryID!;
      this.roleID = roleID!;
  }
}