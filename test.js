const fs = require('fs')
const test = JSON.parse(fs.readFileSync('./test.json'));

n1 = '73998095072'
n2 = '73998095073'
n3 = '73998095074'
n4 = '25'

console.log(test[1])
if (test.includes(n3)) {
  console.log('ja existe')
  } else {
//test.push("{test:")
//test.push(n3)
//fs.writeFileSync('./test.json', JSON.stringify(test))
console.log('adicionado')
}

for (key in test) {
console.log(test[key]['n3'])
console.log(test[key])

}