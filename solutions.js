
const plusSeven = (num) => {
return num + 7
}


const deepEquals1 = (a, b, description='') => {

  if (a === b){
      const message = `test passed,${a} deeply equals${b} ${description}`
      return message
  } else {
      return `test failed ${description}`
  }
    
}
deepEquals1(plusSeven(6), 13) // output should be 'test passed, 13 deeply equals 13'
deepEquals1(plusSeven(6), 13, ': 6 plus 7 should equal 13') // output should be 'test passed, 13 deeply equals 13: 6 plus 7 should equal 13'



const deepEquals2= (obj)=>{


  const {expected, actual, description=''} = obj


    
  if (expected === actual){
      const message = `test passed,${ expected} deeply equals ${ actual } ${ description}`
      return message
  } else {
      return `test failed ${ description}`
  }

}

const obj = {expected: 10, actual: 10}
const objWithDesc = {expected: 15, actual: 15, description: ': 5 plus 10 should equal 15'}
deepEquals2(objWithDesc)
//should return 'test passed, 15 deeply equals 15: 5 plus 10 should equal 15'
deepEquals2(obj) 
//should return 'test passed, 10 deeply equals 10'





const uniqueVals= (arr1, arr2)=>{
  const joinedArrs = [...arr1, ...arr2]
  const uniq = new Set(joinedArrs)
  uniq.forEach(a=> console.log(a))
}
const arr1 = [1, 5, 6]
const arr2 = [3, 5, 6]

uniqueVals(arr1, arr2) // should console.log 1 5 6 3


