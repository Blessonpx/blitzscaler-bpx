### 
### 
from collections import defaultdict
lim=[[1,4],[1,2],[4,3],[2,3],[3,10],[3,9],[2,5],[2,8],[5,6],[5,7],[7,8],[5,6]]
graph = defaultdict(list)
print(graph)
for i in lim:
  graph[i[0]].append(i[1])
  graph[i[1]].append(i[0])
print(graph)
queue=[]
queue.append(4)
list=[4]
while len(queue)>0:
  x=queue[0]
  for i in graph[x]:
    if i not in list:
      queue.append(i)
      list.append(i)
  queue=queue[1:]

print(list)
