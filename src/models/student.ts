import { Base, GENDER } from "./base";

export class Student extends Base {
  constructor(public studentFullName: string, public studentGroupId: number, public studentSchoolId: number, public studentPhoneNumber: string, public studentGender: GENDER) {
    super();
  }

  getStudentSchoolID(){
    return this.studentSchoolId;
  }

  getStudentGroupId(){
    return this.studentGroupId;
  }
}



