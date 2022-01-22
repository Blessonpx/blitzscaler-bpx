class node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class Stack{
  constructor(){
    this.top=null;
    this.bottom=null;
    this.length=0;
  }
  push(data){
    const stackNode = new node(data);
    if(this.length===0){
      this.top=stackNode;
      this.bottom=stackNode;
      //this.length++;
      //return this
    } else{
    const currentHead=this.top;
    this.top=stackNode;
    this.top.next=currentHead;
    // return this
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.top){
      return null;
    }
    const holdingPointer = this.top;
    this.top=this.top.next;
    this.length--
    return this;
  }
  peek(){
    return this.top
  }
    peekTop(){
    return this.top
  }
    peekBottom(){
    return this.top
  }
  popBottom(){
    if(!this.top){
      return null;
    }
    this.bottom=this.bottom.next;
  }
  s_length(){
    return this.length;
  }
}

class Queue{
  constructor(){
    this.first=null;
    this.last=null;
    this.length=0;
  }
  enqueue(data){
    const stackNode = new node(data);
    if(this.length===0){
      this.first=stackNode;
      this.last=stackNode;
      //this.length++;
      //return this
    } else{
    const currentLast=this.last;
    this.last.next=stackNode;
    //this.last=stackNode;
    this.last=stackNode;
    // return this
    }
    this.length++;
    return this;
  }
  dequeue(){
    if(!this.first){
      return null;
    }
    const holdingPointer = this.first;
    this.first=this.first.next;
    this.length--
    return this;
  }
  peek(){
    return this.first
  }
}


class Queue_w_stacks{
  constructor(){
    const stackQ = new Stack();
    this.first=stackQ.peekBottom();
    this.last=stackQ.peek();
    this.length=0;
  }
  enqueue(data){
  }
  dequeue(){
    
  }
  peek(){
    return this.first
  }
}



const Stack1 = new Stack();
Stack1.push('google')
Stack1.push('udemy')
Stack1.push('Youtube')
//Stack1.peek()
Stack1.pop()



const Queue1 = new Queue();
Queue1.enqueue('google')
Queue1.enqueue('udemy')
Queue1.enqueue('Youtube')
Queue1.dequeue()

// Queues using stacks 
