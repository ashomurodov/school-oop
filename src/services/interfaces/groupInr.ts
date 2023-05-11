import { Group } from "../../models/group";
import { School } from "../../models/school";
import { BaseService } from "../baseService";

export interface GroupServiceInterface extends BaseService<Group> {
  getGroupsByDegree(degree: number): Group[];
}
