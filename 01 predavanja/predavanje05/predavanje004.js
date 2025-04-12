"use strict";

let group = {
    title: "Nasa grupa",
    students: ["Jova", "Pera", "Vera"],
    showList() {
        console.log(`pokazivac this za showList(): `, this);
        this.students.forEach(function (student) {
            console.log(this.title, ': ', student);
        });
    }
};

console.log(`pokazivac this: `, this);

let hocuPoziv = prompt('da li zelite da pozovete funkciju showList()?', true);
if (hocuPoziv) group.showList();
