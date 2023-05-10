import { Base } from "./base";

export class School extends Base{
    constructor(public schoolName: string, public schoolNumber: number, public schoolState: string){
        super()
    }

    getSchoolState(){
        return this.schoolState
    }

    getSchoolNumber(){
        return this.schoolNumber
    }
}