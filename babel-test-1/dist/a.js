"use strict";

var a = 1;
// npx babel js/a.js -o js/b.js 处理js文件
// npx babel js -d dist 处理目录
// npx babel js -d dist -w 监听文件变化
var b1 = function b1() {
  console.log(a);
};
b1();