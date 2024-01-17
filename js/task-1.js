"use strict";
function isEnoughCapacity(products, containerSize) {
    let sumProduct=0; 
    let values = Object.values(products);
 
    for(let prod of values){
      sumProduct += prod;
    }
  
 
    if(sumProduct<containerSize){
      return console.log(true);
    }else{
      return console.log(false);
    }
  
  };
  
 
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8); // true
  
  
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12); // false
  
  
    isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14); // true
  
  
    isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7); // false