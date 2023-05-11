import { Group } from "../../models/group";
import { School } from "../../models/school";
import { Student } from "../../models/student";
import { BaseService } from "../baseService";

export interface StudentServiceInterface extends BaseService<Student> {
  switchStudentGroup(student: Student, toGroup: Group): any;
  switchStudentSchool(student: Student, toGroup: Group, toSchool: School): any;
  getStudentsByGender(gender: string): Student[];
  getStudentList(): Student[];
  getStudentsByGroupName(name: string): Student[];
  getStudentsBySchoolName(name: string): Student[];
}
