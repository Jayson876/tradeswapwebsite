export class Skills {
    _id: string;
    category_name: string;

    constructor(id?: string, category_name?:string){
        this._id = id!;
        this.category_name = category_name!;
    }
}