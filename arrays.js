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
