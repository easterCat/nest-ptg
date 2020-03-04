class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = el.nodeType === 1 ? el : document.querySelector(el);
    if (this.$el) {
      this.$fragment = this.nodeToFragment(this.$el);
      this.compile(this.$fragment);
      this.$el.appendChild(this.$fragment);
    }
  }
  nodeToFragment(el) {
    let fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  }
  compile(fragment) {
    let childNodes = fragment.childNodes;
    let _this = this;
    Array.prototype.slice.call(childNodes).forEach(node => {
      let text = node.textContent;
      let reg = /\{\{(.*)\}\}/; // 表达式文本
      if (node.nodeType === 1) {
        _this.compileElement(node);
      }
      if (node.nodeType === 3 && reg.test(text)) {
        compileUtil.text(node, this.$vm, RegExp.$1);
      }
      if (node.childNodes && node.childNodes.length) {
        _this.compile(node);
      }
    });
  }
  compileElement(element) {
    const attrs = element.attributes;
    const _this = this;
    Array.prototype.slice.call(attrs).forEach(attr => {
      let attrName = attr.name;
      let attrValue = attr.value;
      // 如 <span v-text="content"></span> 中指令为 v-text
      if (attrName.indexOf('v-') === 0) {
        let dir = attrName.substring(2);
        // 绑定methods
        if (dir.indexOf('on') === 0) {
          compileUtil.eventHandler(element, _this.$vm, attrValue, dir);
        } else {
          compileUtil[dir] && compileUtil[dir](element, _this.$vm, attrValue);
        }
        element.removeAttribute(attrName);
      }
    });
  }
}

const compileUtil = {
  text: function(node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },
  html: function(node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },
  model: function(node, vm, exp) {
    this.bind(node, vm, exp, 'model');
    let _this = this;
    let val = _this._getVMVal(vm, exp);
    node.addEventListener('input', function(e) {
      let newValue = e.target.value;
      if (val === newValue) {
        return;
      }

      _this._setVMVal(vm, exp, newValue);
      val = newValue;
    });
  },
  class: function(node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },
  bind: function(node, vm, exp, dir) {
    let updaterFn = updater[dir + 'Updater'];

    updaterFn && updaterFn(node, this._getVMVal(vm, exp, dir));

    new Watcher(vm, exp, function(value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },
  eventHandler: function(node, vm, exp, dir) {
    let eventType = dir.split(':')[1];
    let fn = vm.options.methods && vm.options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },
  _getVMVal: function(vm, exp, dir) {
    let val = vm;
    exp.split('.').forEach(function(k) {
      val = val[k.trim()];
    });
    return val;
  },

  _setVMVal: function(vm, exp, value) {
    let val = vm;
    exp = exp.split('.');
    exp.forEach(function(k, i) {
      // 非最后一个key，更新val的值
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  },
};

const updater = {
  textUpdater: function(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },
  htmlUpdater: function(node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value;
  },
  classUpdater: function(node, value, oldValue) {
    let className = node.className;
    className = className.replace(oldValue, '').replace(/\s$/, '');
    let space = className && String(value) ? ' ' : '';
    node.className = className + space + value;
  },
  modelUpdater: function(node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  },
};
