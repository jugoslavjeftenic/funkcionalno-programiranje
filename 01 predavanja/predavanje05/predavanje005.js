"use strict";

let group = {
    title: "Nasa grupa:",
    students: ["Jova", "Pera", "Vera"],
    showList() {
        this.students.forEach(student => console.log(this.title, student));
    }
};

group.showList();
