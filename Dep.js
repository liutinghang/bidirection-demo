class Dep {
  constructor (){
    this.subs = []; 
  }
  addSub() {
    this.subs.push(Dep.Target);
  }
  notify () {
    console.log(this.subs);
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].cb();
    }
  }
}

Dep.Target = null;

function pushTarget(watch) {
  Dep.Target = watch;
  console.log('call pushTarget');
}

module.exports = {Dep, pushTarget};