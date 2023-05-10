"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const base_1 = require("./base");
class Group extends base_1.Base {
    constructor(groupName, groupDegree, groupNumber) {
        super();
        this.groupName = groupName;
        this.groupDegree = groupDegree;
        this.groupNumber = groupNumber;
        this.counter = 0;
        this.groupStudents = [];
    }
    addStudent(student) {
        if (this.isExist(student))
            throw new Error("This student already exists in the group");
        student.setId(++this.counter);
        this.groupStudents.push(student);
    }
    isExist(newStudent) {
        for (let student of this.groupStudents) {
            if (student.studentPhoneNumber === newStudent.studentPhoneNumber) {
                return true;
            }
        }
        return false;
    }
}
exports.Group = Group;
