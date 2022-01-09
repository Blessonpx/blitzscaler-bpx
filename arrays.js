class myArray{
  constructor(){
    this.length=0;
    this.data={};
  }
  get(index){
    return data[index];
  }
  push(item){
    this.data[this.length]=item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index){
    const delItem=this.data[index];
    this.shiftitems(index);
  }
  shiftitems(index){
    for (let i = index;i<this.length-1;i++)
    {
      this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;

  }
}

function reverseStr(str){
  const array=[];
  for (i=str.length-1;i>=0;i--){
    array.push(str[i]);
  }
  str2=array.join('');
  return str2;
}

function reverseStr2(str){
  return str.split('').reverse().join('')
}

function mergesortedarrays(arr1,arr2){
  i=0;
  j=0;
  const mergearray=new myArray();
  if (arr1.length>=arr2.length){
    max=arr1.length
  }
  if (arr1.length<arr2.length){
    max=arr2.length
  }
  for (k=0;k<=arr2.length+arr1.length;k++){
    if(arr1.get(i)<=arr2.get(j)){
      mergearray.push(arr1.get(i));
      i++;
      console.log(i,j)
      console.log(mergearray)
      continue;
    }
    if (arr1.get(i)>arr2.get(j)){
      mergearray.push(arr2.get(j));
      j++;
      console.log(i,j)
      console.log(mergearray)
      continue;
    }
/*    if(i<arr1.length){
      for (l=i;l<arr1.length;l++){
        mergearray.push(arr1.get(l));
      }
    }
    if(j<arr2.length){
      for (m=j;m<arr2.length;m++){
        mergearray.push(arr2.get(m));
      }
    }
*/    
  }
  return mergearray
}

function mergesortedarrays2(arr1,arr2){
  const mergedarray=[];
  let array1item=arr1[0];
  let array2item=arr2[0];
  // Check Input
  let i=1;
  let j=1;
  if(arr1.length === 0 ){
    return arr2;
  }
  if(arr2.length === 0  ){
    return arr1;
  }
  while (array1item || array2item ){
    if (array1item<array2item){
      mergedarray.push(array1item);
      array1item=arr1[i];
      i++
    } else {
      mergedarray.push(array2item);
      array2item=arr2[j];
      j++;
    }
  }
  return mergedarray;
}


const newArray = new myArray();
newArray.push('hi')
newArray.push('you')
newArray.push('are')
newArray.push('great')
newArray.push('!!!!!')
console.log(newArray)
newArray.pop()
console.log(newArray)
newArray.delete(2)
console.log(newArray)
y=reverseStr('Hello')
console.log(y)
z=reverseStr2('Hello')
console.log(z)



const newarray2 = new myArray();
newarray2.push(2)
newarray2.push(4)
newarray2.push(6)

console.log(newarray1)
console.log(newarray2)
//console.log(newarray1.get(1))
//zeta=mergesortedarrays(newarray1,newarray2)
console.log(mergesortedarrays(newarray1,newarray2))
console.log(mergesortedarrays2([1,3,5],[2,4,6]))
