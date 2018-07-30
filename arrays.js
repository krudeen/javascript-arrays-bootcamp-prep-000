var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

<<<<<<< HEAD
function addElementToBeginningOfArray(array, string){
  return [string, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, string){
  array.unshift(string);
  return array;
}

function addElementToEndOfArray(array, string){
  return [...array, string];
}
 
function destructivelyAddElementToEndOfArray(array, string){
  array.push(string);
  return array;
=======
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
>>>>>>> 3b9d9f3bf8c96bf172f9c46f1593e5b3773728fe
}

function accessElementInArray(array, index){
  return array[index];
}

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

function removeElementFromBeginningOfArray(array){
  return array.slice(-3, array.length - 1);
}



function removeElementFromBeginningOfArray(array){
  return array.slice(1)
=======
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}




function removeELementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(-3, chocolateBars.length - 1);
}

function removeELementFromBeginningOfArray(chocolateBars){
  
>>>>>>> 3b9d9f3bf8c96bf172f9c46f1593e5b3773728fe
}




<<<<<<< HEAD
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
=======

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
>>>>>>> 3b9d9f3bf8c96bf172f9c46f1593e5b3773728fe
}
