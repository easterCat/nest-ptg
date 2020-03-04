function observer(data) {
    if (data !== null && typeof data === "object") {
        return new Observer(data);
    }
    return;
}

class Observer {
    constructor(data) {
        this.data = data;
        this.walk(data);
    }
    walk(data) {
        Object.entries(data).forEach(([key, value]) => {
            this.convert(key, value);
        });
    }
    convert(key, val) {
        this.defineReactive(this.data, key, val);
    }
    defineReactive(data, key, value) {
        const dep = new Dep({ key });
        observer(value);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return value;
            },
            set: function(newValue) {
                if (value === newValue) return;
                value = newValue;
                observer(newValue);
                dep.notify();
            }
        });
    }
}
