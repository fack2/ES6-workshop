

function plusSeven (num) {
    return num + 7
}


function deepEquals1 (a, b, description) {
  if (description === undefined){
  description = ''
  }
  if (a === b){
      var message = 'test passed, ' + a + ' deeply equals ' + b + '' + description
      return message
  } else {
      return 'test failed ' + description
  }  
}

deepEquals1(plusSeven(6), 13) // output should be 'test passed, 13 deeply equals 13'
deepEquals1(plusSeven(6), 13, ': 6 plus 7 should equal 13') // output should be 'test passed, 13 deeply equals 13: 6 plus 7 should equal 13'



function deepEquals2 (obj){
  var expected = obj.expected
  var actual = obj.actual
  var description = obj.description

  if (description === undefined){
  description = ''
  }
  
  if (expected === actual){
      var message = 'test passed, ' + expected + ' deeply equals ' + actual + '' + description
      return message
  } else {
      return 'test failed ' + description
  }

}

var obj = {expected: 10, actual: 10}
var objWithDesc = {expected: 15, actual: 15, description: ': 5 plus 10 should equal 15'}
deepEquals2(objWithDesc)
//should return 'test passed, 15 deeply equals 15: 5 plus 10 should equal 15'
deepEquals2(obj) 
//should return 'test passed, 10 deeply equals 10'


function uniqueVals (arr1, arr2){
    var joinedArrs = arr1.concat(arr2)
    return joinedArrs.filter(function (value, index, self) { return self.indexOf(value) === index }).forEach(a=> console.log(a))

}
const arr1 = [1, 5, 6]
const arr2 = [3, 5, 6]

uniqueVals(arr1, arr2) // should console.log 1 5 6 3


