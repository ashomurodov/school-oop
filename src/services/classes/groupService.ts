import { Group } from "../../models/group";
import { School } from "../../models/school";
import { GroupServiceInterface } from "../interfaces/groupInr";
import { groupList } from "../lists/groupList";
import { schoolList } from "../lists/schoolList";
import { SchoolServiceImp } from "./schoolService";

export class GroupServiceImpl implements GroupServiceInterface {
  //   listGroups: Group[];

  getGroupsByName(name: string): Group[] {
    return groupList.filter((group) => group.groupName == name);
  }

  getGroupsByDegree(degree: number): Group[] {
    return groupList.filter((group) => group.groupDegree == degree);
  }

  create(data: Group) {
    if (this.isExist(data)) throw new Error("Group already exists");
  }

  getById(id: number) {
    return groupList.find((group) => group.getId() == id);
  }

  deleteById(id: number) {
    for (let group of groupList) {
      if (group.getId() == id) {
        groupList.splice(groupList.indexOf(group), 1);
      }
    }
  }

  isExist(data: Group) {
    for (let group of groupList) {
      if (group.getId == data.getId) return true;
    }
    return false;
  }

  getGroupsBySchoolName(name: string) {
    const school = schoolList.find((school) => school.schoolName === name);
    const list = [];
    for (let group of groupList) {
      if (group.schoolId === school?.getId()) list.push(group);
    }

    if(list) return list;

    throw new Error("Grous not found in this school");
  }

  
}
