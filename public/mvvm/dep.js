let depid = 0;

class Dep {
    constructor(options) {
        this.id = depid++;
        this.key = options.key ? options.key : "";
        this.subs = [];
    }
    addSub(watcherInstance) {
        this.subs.push(watcherInstance);
    }
    removeSub(watcherInstance) {
        if (this.subs.indexOf(watcherInstance) !== -1) {
            this.subs.splice(index, 1);
        }
    }
    depend() {
        // Dep.target 指向的是 watcherInstance
        Dep.target && Dep.target.addDep(this);
    }
    notify() {
        const subs = this.subs.slice();
        subs.forEach(sub => {
            sub.update();
        });
    }
}

Dep.target = null;
