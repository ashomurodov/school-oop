export class Base{
    private id: number;

    getId(){
        return this.id;
    }

    setId(newID: number){
        this.id = newID;
    }
}

export type GENDER = "MALE" | "FEMALE";