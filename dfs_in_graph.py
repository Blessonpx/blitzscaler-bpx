### 
from collections import defaultdict
lim=[[1,4],[1,2],[4,3],[2,3],[3,10],[3,9],[2,5],[2,8],[5,6],[5,7],[7,8],[5,6]]
graph = defaultdict(list)
print(graph)
for i in lim:
  graph[i[0]].append(i[1])
  graph[i[1]].append(i[0])
print(graph)
stack=[]
stack.append(1)
list=[]
def dfsUtil(graph,v,visited):
  visited.append(v)
  for n in graph[v]:
    if n not in visited:
      dfsUtil(graph,n,visited)

dfsUtil(graph,1,list)
print(list)
