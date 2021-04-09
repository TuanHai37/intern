
//For in
/**
 * for (variable in object)
    statement
 */
    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
    // expected output:
    // "a: 1"
    // "b: 2"
    // "c: 3"

    /**ForEach */
  var words = ['one', 'two', 'three', 'four'];
    words.forEach((word)=>{
      console.log(word);
      if (word === 'two') {
        words.shift();  //shift bo qua bien tiep theo
      }
    });
    // one
    // two
    // four

    /**For of 
     * Lap qua 1 string va array*/ 
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
      console.log(element);
    }
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
    