const observer = require('./Observer.js');
const Watch = require('./Watch.js');

const data = {
  a: 1,
  b: {
    c: 2
  }
};

console.log(data);
observer(data);

const watch = new Watch(data, 'a', function(){
  console.log('a was changed');
})

const watch2 = new Watch(data.b, 'c', function(){
  console.log('b was changes');
})

setTimeout(() => {
  console.log('change a')
  data.a = 2
}, 1000);

setTimeout(() => {
  console.log('change c')
  data.b.c = 3;
}, 2000);