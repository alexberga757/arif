![c](images/banner)

# ARIF
```javascript
const paf = require('./arif/arif-v1.js');
const exmp = new paf.readArif(`
example:test0
example2:test1
bool0:true
int0:4


`);


console.log(exmp.getString('example'));

```

"ARIF" or "Attribute Reader In File" is an open data created by: https://www.youtube.com/@lengoccuong757

#### fun fact: I actually made it for fun :>

# 1 readArif.getString(name)

```javascript
const paf = require('./arif/arif-v1.js');
const exmp = new paf.readArif(`example:hello,world!`);
console.log(exmp.getString('example'));
```
output:
```txt
hello,world!
```
operations: get string from in properties

# 2 readArif.getBool(name) 
```javascript
const paf = require('./arif/arif-v1.js');
const exmp = new paf.readArif('example:true');
console.log(exmp.getBool('example'));
```
output:
```javascript
true
```
operations: to get the boolean in the property
# 3 readArif.getInt(name)

```javascript 
const paf = require('./arif/arif-v1.js');
const exmp = new paf.readArif('example:5');
console.log(exmp.getString('example'));
```

output:
```javascript
5
```
operations: get integers from properties

# current versions
* v1-sv [Open]('arif/arif-v1.js')

(sv:sketchy version)


