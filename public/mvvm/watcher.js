class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm;
        this.expOrFn = expOrFn;
        this.cb = cb;
        this.depIds = {};
        this.deps = [];
        if (typeof expOrFn === "function") {
            this.getter = expOrFn;
        } else {
            this.getter = this.parseGetter(expOrFn.trim());
        }
        this.value = this.get();
    }
    update() {
        let value = this.get();
        let oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }
    addDep(dep) {
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
            this.deps.push(dep);
        }
    }
    get() {
        Dep.target = this;
        const value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value;
    }
    depend() {
        let i = this.deps.length;
        while (i--) {
            this.deps[i].depend();
        }
    }
    parseGetter(exp) {
        if (/[^\w.$]/.test(exp)) return;
        var exps = exp.split(".");
        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                obj = obj[exps[i]];
            }
            return obj;
        };
    }
}
