const language = {
    log: [],
    set current(name) {
        this.log.push(name);
    }
};

language.current = "EN";
console.log(language.log);

language.current = "FA";
console.log(language.log);
