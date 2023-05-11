import { School } from "../../models/school";
import { SchoolServiceInterface } from "../interfaces/schoolInr";
import { schoolList } from "../lists/schoolList";

export class SchoolServiceImp implements SchoolServiceInterface {
//   listSchools: School[];
  private counter = 0;

  getSchoolList(): School[] {
    return schoolList;
  }

  getSchoolsByState(state: string): School[] {
    const list: School[] = [];
    for (let school of schoolList) {
      if (school.schoolState === state) {
        list.push(school);
      }
    }
    return list;
  }

  getSchoolByName(name: string, state: string): School {
    for (let school of schoolList) {
      if (school.schoolName === name && school.schoolState == state) {
        return school;
      }
    }
   

    throw new Error(state + " has not this " + name + " school");
  }

  create(data: School) {
    if (this.isExist(data)) throw new Error("School already exist");
    data.setId(++this.counter);
    schoolList.push(data);
  }

  getById(id: number) {
    for (let school of schoolList) {
      if (school.getId() === id) {
        return school;
      }
    }

    throw new Error("School not found");
  }

  deleteById(id: number) {
    for (let school of schoolList) {
      if (school.getId() === id) {
        schoolList.splice(schoolList.indexOf(school), 1);
        return;
      }
    }

    throw new Error("School not found");
  }

  isExist(data: School) {
    for (let school of schoolList) {
      if (school.getId == data.getId) {
        return true;
      }
    }
    return false;
  }
}
