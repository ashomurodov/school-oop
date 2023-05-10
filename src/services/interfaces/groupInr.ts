import { Group } from "../../models/group";
import { School } from "../../models/school";
import { BaseService } from "../baseService";

export interface GroupServiceInterface extends BaseService<Group> {
  listGroups: Group[];
  getGroupsBySchoolName(name: string): Group[];
  getGroupsByDegree(degree: string): Group[];
  getSchoolById(id: number): School;
}
