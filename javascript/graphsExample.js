class Graph{
    constructor(){
      this.adjacencyList = {}
    }
    addVertex(vertex){
      let list = this.adjacencyList
      if(!list[vertex]){
        list[vertex] = []
      }
    }
    // addEdge(vertex1, vertex2){
    //   let list = this.adjacencyList;
    //   console.log(list[vertex1], 'startOfList')
    //   list[vertex1].push( vertex2)
    //   console.log(list)
      
    // }
    addEdge(vertexOne, vertexTwo){
      let value = this.adjacencyList[vertexOne]
      value.push(vertexTwo)
      let value2 = this.adjacencyList[vertexTwo]
      value.push(vertexOne)
    }
    removeEdge(){
    }
  }

  dfs(vtx){
    const stack = [vtx]
    const visited = {}
    const result = []
    while(stack.length){
      const currentNode = stack.pop()
      if(visited[currentNode]) continue
      visited[currentNode] = true
      result.push(currentNode)
      this.adjacencyList[currentNode].forEach(n => {
        stack.push(n)
      })
    }
    return result
  }
  //this is the iterative approach and you need a stack. If you do it the recursive way, the call stack will be your stack
  
  let gr = new Graph()
  gr.addVertex(5)
  gr.addEdge(5, 15)
  gr.addEdge(5,20)
  console.log(gr)

