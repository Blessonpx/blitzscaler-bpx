// Check if a word is a Palindrome or not
// Use Arrays of 0's to count 

function palinCheck(c){
  x = new Array(26).fill(0)
  for (let i=0; i<c.length;i++){
  x[c.charCodeAt(i)-'a'.charCodeAt(0)]++;}
  let count=0;
  for(let z=0;z<x.length;z++){
    count+=x[z]%2
  }
  return count<=1;
}
let r='raca'
console.log(palinCheck(r))
