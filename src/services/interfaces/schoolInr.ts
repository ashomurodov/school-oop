import { Group } from "../../models/group";
import { School } from "../../models/school";
import { BaseService } from "../baseService";

export interface SchoolServiceInterface extends BaseService<School> {
  getSchoolList(): School[];
  getSchoolsByState(state: string): School[];
  getSchoolByName(name: string, state: string): School;
}
