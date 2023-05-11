import { Group } from "../../models/group";
import { School } from "../../models/school";
import { Student } from "../../models/student";
import { StudentServiceInterface } from "../interfaces/studentInt";
import { groupList } from "../lists/groupList";
import { schoolList } from "../lists/schoolList";
import { studentList } from "../lists/studentList";

export class StudentServiceImpl implements StudentServiceInterface {
  private counter = 0;
  switchStudentGroup(student: Student, toGroup: Group) {
    for (let group of groupList) {
      if (group.getId() == student.getStudentGroupId()) {
        group.studentsCount = group.studentsCount - 1;
      }
    }
    student.studentGroupId = toGroup.getId();
    toGroup.studentsCount++;
  }

  switchStudentSchool(student: Student, toGroup: Group, toSchool: School) {
    for (let group of groupList) {
      if (group.getId() == student.getStudentGroupId()) {
        group.studentsCount = group.studentsCount - 1;
      }
    }

    student.studentSchoolId = toSchool.getId();
    student.studentGroupId = toGroup.getId();
    toGroup.studentsCount++;
  }

  getStudentsByGender(gender: string): Student[] {
    const list = [];
    for (let student of studentList) {
      if (student.studentGender == gender) {
        list.push(student);
      }
    }

    if (list.length) return list;

    throw new Error("This gender not exist");
  }

  getStudentList(): Student[] {
    return studentList;
  }

  getStudentsByGroupName(name: string): Student[] {
    const groups = groupList.filter((group) => group.groupName == name);
    const list = [];
    for (let i = 0; i < groups.length; i++) {
      for (let student of studentList) {
        if (student.getStudentGroupId() == groups[i].getId()) {
          list.push(student);
        }
      }
    }

    if (list.length) return list;

    throw new Error("This group not exist");
  }

  getStudentsBySchoolName(name: string): Student[] {
    const school = schoolList.filter((school) => school.schoolName == name);
    const list = [];
    for (let i = 0; i < school.length; i++) {
      for (let student of studentList) {
        if (student.getStudentSchoolID() == school[i].getId()) {
          list.push(student);
        }
      }
    }
    if (list.length) return list;
    throw new Error("This school not exist");
  }

  create(data: Student) {
    if (this.isExist(data)) throw new Error("Student already exists");
    data.setId(++this.counter);
    studentList.push(data);
  }

  getById(id: number) {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number) {
    for (let student of studentList) {
      if (student.getId() === id) {
        studentList.splice(studentList.indexOf(student), 1);
      }
    }
  }
  isExist(data: Student) {
    for (let student of studentList) {
      if (student.studentPhoneNumber == data.studentPhoneNumber) return true;
    }

    return false;
  }
}
