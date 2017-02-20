var arr1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(array) {
  var obj = {};
  for(var i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

fromListToObject(arr1)



var arr2 = [
    [ 
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'] 
    ],
    
    [ 
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'] 
    ]
];

function transformEmployeeData(array) {
  var finalArr = [];
  for(var i = 0; i < array.length; i++) {
    debugger;
    var obj = {};
    for(var j = 0; j < array[i].length; j++) {
      obj[array[i][j][0]] = array[i][j][1];
    }
    finalArr.push(obj);
  }
  return finalArr;
}

transformEmployeeData(arr2);