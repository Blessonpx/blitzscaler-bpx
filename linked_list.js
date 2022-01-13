class linkedList{
  constructor(value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head,
    this.length=1;
  }
  append(value){
    const newNode={
      value:value,
      next:null
    };
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this
  }
  prepend(value){
    const newNode={
      value:value,
      next:null
    };
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
    return this
  }
  printList(){
    let currentNode=this.head;
    const valueArray=[]
    while(currentNode!==null){
      valueArray.push(currentNode.value);
      currentNode=currentNode.next;
    }
    return valueArray;
  }
  insert(index,value){
    if(index>=this.length){
      this.append(value);
    }
    const newNode={
      value:value,
      next:null
    };
    const leader = this.transverseIndex(index-1);
    const nextNode=leader.next;
    leader.next=newNode;
    newNode.next=nextNode;
    this.length++;
  }
  transverseIndex(index){
    let counter=0;
    let currentNode=this.head;
    while(counter!==index){
      currentNode=currentNode.next;
      counter++;
    }
    return currentNode
  }
  remove(index){
    if(index>=this.length){
      //index=this.length-1;
      const leader = this.transverseIndex(this.length-2);
      leader.next=null;
      return this.printList()
      this.length--;
    }    const leader = this.transverseIndex(index-1);
    const unwantedNode=leader.next;
    leader.next=unwantedNode.next;
    this.length--;
    return this.printList()
  }
}

class doubly_linkedList{
  constructor(value){
    this.head={
      value:value,
      next:null,
      prev:null
    }
    this.tail=this.head,
    this.length=1;
  }
  append(value){
    const newNode={
      value:value,
      next:null,
      prev:null
    };
    newNode.prev=this.tail;
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this
  }
  prepend(value){
    const newNode={
      value:value,
      next:null,
      prev:null
    };
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
    return this
  }
  printList(){
    let currentNode=this.head;
    const valueArray=[]
    while(currentNode!==null){
      valueArray.push(currentNode.value);
      currentNode=currentNode.next;
    }
    return valueArray;
  }
  insert(index,value){
    if(index>=this.length){
      this.append(value);
    }
    const newNode={
      value:value,
      next:null,
      prev:null
    };
    const leader = this.transverseIndex(index-1);
    const follower=this.transverseIndex(index);
    const nextNode=leader.next;
    // Allocations
    leader.next=newNode;
    newNode.next=nextNode;
    newNode.prev=leader;
    follower.prev=newNode;
    this.length++;
  }
  transverseIndex(index){
    let counter=0;
    let currentNode=this.head;
    while(counter!==index){
      currentNode=currentNode.next;
      counter++;
    }
    return currentNode
  }
  remove(index){
    if(index>=this.length){
      //index=this.length-1;
      const leader = this.transverseIndex(this.length-2);
      leader.next=null;
      return this.printList()
      this.length--;
    }    
    const leader = this.transverseIndex(index-1);
    const follower=this.transverseIndex(index+1); 
    const unwantedNode=leader.next;
    leader.next=unwantedNode.next;
    follower.prev=leader;
    this.length--;
    return this.printList()
  }
}


const linkList=new linkedList(10);

linkList.append(15);
linkList.append(20);
linkList.append(25);
linkList.prepend(8);
linkList.insert(1,8);
linkList.remove(3);

const linkList=new doubly_linkedList(10);
linkList.append(15);
linkList.append(20);
linkList.append(25);
linkList.prepend(8);
linkList.insert(1,8);
linkList.remove(3);
