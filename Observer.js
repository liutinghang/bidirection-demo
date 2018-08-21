const Dep = require('./Dep.js').Dep;

class Observer {
  constructor (data) {
    this.walk(data);
  }
  walk (data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(data, keys[i], data[keys[i]]);
    }
  }
}

function defineReactive (data, key, val) {
  observer(val);
  const dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.addSub();
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      observer(newVal);
      dep.notify();
    }
  });
}

function observer (data) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    return;
  }
  new Observer(data);
}

module.exports = observer;

