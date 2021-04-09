function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 15, 25, 42)
  console.log(arr)  // [30, 50, 84]

  function sortRestArgs(...theArgs){
      let sort=theArgs.sort();
      return sort
  }
  console.log(sortRestArgs(3,8,2,6));

  let a=(3,2,1,...5)
  console.log(a.sort());
