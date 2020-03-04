function Vnode(tag, data, children, text, element) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.element = element;
}

function createVnode(tag, data, children) {
  return new Vnode(tag, data, normalizeChildren(children), undefined, undefined);
}

function createElement(vnode) {
  if (!vnode) return;
  const { tag, data, children } = vnode;

  if (tag) {
    vnode.element = document.createElement(tag);

    if (data.attrs) {
      for (let key in data.attrs) {
        vnode.element.setAttribute(key, data.attrs[key]);
      }
    }

    if (children) {
      createChildren(vnode, children);
    }
  } else {
    vnode.element = document.createTextNode(vnode.text);
  }

  return vnode.element;
}

function normalizeChildren(children) {
  if (typeof children === 'string') {
    return [createTextNode(children)];
  }
  return children;
}

function createTextNode(val) {
  return new Vnode(undefined, undefined, undefined, String(val));
}

function createChildren(vnode, children) {
  const l = children.length;
  for (let index = 0; index < l; index++) {
    vnode.element.appendChild(createElement(children[index]));
  }
}

function emptyNodeAt(elm) {
  return new Vnode(elm.tagName.toLowerCase(), {}, [], undefined, elm);
}

function sameVnode(vnode1, vnode2) {
  return vnode1.tag === vnode2.tag;
}
