import { Group } from "../../models/group";
import { School } from "../../models/school";
import { GroupServiceInterface } from "../interfaces/groupInr";

export class GroupServiceImpl implements GroupServiceInterface {
  getSchoolById(id: number): School {
      throw new Error("Method not implemented.");
  }
  listGroups: Group[];
  getGroupsBySchoolName(name: string): Group[] {
    throw new Error("Method not implemented.");
  }
  getGroupsByDegree(degree: string): Group[] {
    throw new Error("Method not implemented.");
  }
  create(data: Group) {
    if (this.isExist(data)) throw new Error("Group already exists");
  }
  getById(id: number) {

  }
  deleteById(id: number) {}

  isExist(data: Group) {
    for (let group of this.listGroups) {
      if (group.getId == data.getId) return true;
    }
    return false;
  }
}
