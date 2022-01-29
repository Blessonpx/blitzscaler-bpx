// Check if a word is a Palindrome or not
// Use Arrays of 0's to count 

function palinCheck_array(c){
  x = new Array(26).fill(0)
  for (let i=0; i<c.length;i++){
  x[c.charCodeAt(i)-'a'.charCodeAt(0)]++;}
  let count=0;
  for(let z=0;z<x.length;z++){
    count+=x[z]%2
  }
  return count<=1;
}

function palinCheck_hash(c){
  // simple hash
  let hash = {}
  let charcount=0;
  for(let i=0;i<c.length;i++){
    if(hash[c[i]]){
      delete hash[c[i]]
    }else {
      hash[c[i]]=true
    }
    charcount++
  }
  if(charcount%2===0){
    return Object.keys(hash).length===0;
  } else {
    return Object.keys(hash).length===1;
  }
}

let r='raca'
console.log(palinCheck_array(r))
console.log(palinCheck_hash(r))
