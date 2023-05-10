import { Base } from "./base";

export class Group extends Base {
  constructor(public groupName: string, public groupDegree: number,) {
    super();
  }

  getGroupName(){
    return this.groupName;
  }

  getGroupDegree(){
    return this.groupDegree;
  }
}
