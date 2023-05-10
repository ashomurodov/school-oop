"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const base_1 = require("./base");
class Student extends base_1.Base {
    constructor(studentFullName, studentGroupId, studentSchoolId, studentPhoneNumber, studentGender) {
        super();
        this.studentFullName = studentFullName;
        this.studentGroupId = studentGroupId;
        this.studentSchoolId = studentSchoolId;
        this.studentPhoneNumber = studentPhoneNumber;
        this.studentGender = studentGender;
    }
}
exports.Student = Student;
