## Contaoms edits for both iterative and recursive methods


class node:
  def __init__(self, val=0,right=None,left=None):
    self.val=val
    self.right=right
    self.left=left

class tree:
  def __init__(self, val=0):
    root=node(val)
    self.root=root
  def createTree(self,arr):
    newNode=node(arr[0])
    self.root=newNode
    def createTreeArr(arr,root,i):
      n=len(arr)
      if i<n:
        newNode=node(arr[i])
        root=newNode
        root.left=createTreeArr(arr,root.left,2*i+1)
        root.right=createTreeArr(arr,root.right,2*i+2)
      return root
    self.root=createTreeArr(arr,self.root,0)
    return self.root
  def bfs(self):
    curNode=self.root
    queue=[]
    list=[]
    queue.append(curNode)
    list.append(curNode.val)
    while(len(queue)>0):
      curNode=queue[0]
      queue=queue[1:]
      if curNode.left:
        queue.append(curNode.left)
        list.append(curNode.left.val)
      if curNode.right:
        queue.append(curNode.right)
        list.append(curNode.right.val)
    return list
  def bfs_recur(self,queue,list):
    if(len(queue)==0):
      return list
    while(len(queue)>0):
      curNode=queue[0]
      queue=queue[1:]
      if curNode.left:
        queue.append(curNode.left)
        list.append(curNode.left.val)
      if curNode.right:
        queue.append(curNode.right)
        list.append(curNode.right.val)
    return self.bfs_recur(queue,list)

Tree=tree()
arr = [1, 2, 3, 4, 5, 6, 6, 6, 6]
x=Tree.createTree(arr)
#print(x.left.left.right.val)    
y=Tree.bfs()
print(y)
z=Tree.bfs_recur([Tree.root],[Tree.root.val])
print(z)
lim=[[0,1],[1,2],[2,3],[4,5]]
