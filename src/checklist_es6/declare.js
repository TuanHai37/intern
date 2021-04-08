  /**
   * Var la function scope 
   * Let, Const la block scope 
   * Function scope bi gioi han trong function , block scope gioi han trong cap ngoac {} cua for,if...
   */
   function myFunc() {  
    var name = 'Luke'
    console.log(name); // 'Luke'
  }
  
  myFunc();
  console.log(name); // name is not defined  

  if(true) {  
    var name = 'Luke'
  }
  
  console.log(name); // 'Luke' 

  let name = 'Luke';

  if (true) {  
    let name = 'Phil';
    console.log(name); // 'Phil'
  }
  
  console.log(name); // 'Luke'  

  /**
   * Var la function scope 
   * Let, Const la block scope 
   */