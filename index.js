const paf = require('./arif/arif-v1.js');
const exmp = new paf.readArif(`
hello:t
example:test0
example2:test1
bool0:true
int0:4


`);
console.log(exmp.getString('example'));
console.log(exmp.getString('example2'));
console.log(exmp.getBool('bool0'));
console.log(exmp.getInt('int0'));
console.log(exmp.getPoperties('int0'));

