export class Parish {
    _id: string;
    parish_name: string;

    constructor(id?: string, parish_name?:string){
        this._id = id!;
        this.parish_name = parish_name!;
    }
}