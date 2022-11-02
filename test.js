"use strict";
class Programmer {
    constructor(pName) {
        this.projects = [];
        this.name = pName;
    }
}
const programmer = new Programmer('Radik Poghosyan');
programmer.projects.push({
    duration: 365,
    projectName: 'test'
});
class Director {
    constructor(name, managerNames, projectsNames) {
        this.managerNames = [];
        this.projectsNames = [];
        this.name = name;
        this.managerNames = managerNames;
        this.projectsNames = projectsNames;
    }
}
const director = new Director("Hamo", ['Gago', 'Rudo'], ["Armenian", "Math", "Biology"]);
console.log(director);
