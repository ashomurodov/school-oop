"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const base_1 = require("./base");
class School extends base_1.Base {
    constructor(schoolName, schoolNumber, schoolState) {
        super();
        this.schoolName = schoolName;
        this.schoolNumber = schoolNumber;
        this.schoolState = schoolState;
    }
    getSchoolState() {
        return this.schoolState;
    }
    getSchoolNumber() {
        return this.schoolNumber;
    }
}
exports.School = School;
