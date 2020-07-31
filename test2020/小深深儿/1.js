let x = 0;
async function test() {
  x += await 2;
  console.log(x);
}
test();
x += 1;
console.log(x);

const throttle = function (fn,time) {
  let flag = true;
  return function(args) {
    if(!flag) return
    flag = false;
    setTimeout(() => {
      fn.apply(this, ...args)
      flag = true;
    }, time)
  }
}