class HashTable{
  constructor(size){
    this.data=new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i)*i) %this.data.length
    }
    return hash;
  }

  set(key,value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address]=[];
      //console.log(this.data)
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key){
    let address = this._hash(key);
    const currentbucket = this.data[address];
    //console.log(currentbucket)
    if(currentbucket){
      for (let i=0;i<currentbucket.length;i++){
        if(currentbucket[i][0]===key){
          return currentbucket[i][1]
        }
      }
    }
    return undefined
  }



  keys(){
    if (!this.data.length){
      return undefined
    }
    let keysArray=[];
    for(let i =0;i<this.data.length;i++){
      if(this.data[i] && this.data[i].length){
        if(this.data.length > 1){
        for (let j=0;j<this.data[i].length;j++){      keysArray.push(this.data[i][j][0]);
        //console.log(this.data[i][j][0]);
        } 
        //console.log(this.data[i][0][0]);
      }else {
        keysArray.push(this.data[i][0]); 
        }
    }
    }
    return keysArray
  }
}


const myhashtable= new HashTable(50);
myhashtable.set('apples',10000)
myhashtable.set('grapes',345)
myhashtable.set('pineapples',450)
myhashtable.set('coconut',323)
myhashtable.set('oranges',3)
myhashtable.get('apples')
myhashtable.keys()


// SHow first  repeating element
// non ordered
// why hashtable
// Search should be fast 


function firstRecurringElement(input){
  let map = {}
  for (let i=0;i<input.length;i++){
    if(map[input[i]]!== undefined){
      return input[i];
    } else 
    { map[input[i]]=i}
    console.log(map)
  }
  return undefined
}

input = [2,5,1,2,3,5,1,2,4]
input2 = [2,5,5,2,3,5,1,2,4]
x=[]
console.log(typeof(x))
firstRecurringElement(input2)
