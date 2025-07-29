let a = [1,2,3,4,5]
const result = a.map((ab)=>{
      return(ab+5)
})
console.log(result);

let b = [1,2,3,4,5]
const result1 = b.filter((abc)=>{
      return(abc==5)
})
console.log(result1);

let c = [1,2,3,4,5]
const result2 = c.reduce((a,b)=>{
      return(a+b)
})
console.log(result2);