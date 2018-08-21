const {Dep, pushTarget} = require('./Dep.js');

module.exports = class Watch {
  constructor (ob, exp, cb) {
    this.exp = exp;
    this.cb = cb;
    this.ob = ob;
    pushTarget(this);
    ob[exp];
  }
}
