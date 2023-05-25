class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }
    hasEdges(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->'+[...this.adjacencyList[vertex]]);
        }
    }
    removeEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)

    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null
        }else{
            for(let removeVertex in this.adjacencyList){
                this.removeEdges(vertex,removeVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }
 
dfs(start){
    let visited= new Set()
    let result=[]
    const dfsHelper=(vertex)=>{
        visited.add(vertex)
        result.push(vertex)
        this.adjacencyList[vertex].forEach(neighbor => {
            if(!visited.has(neighbor)){
                dfsHelper(neighbor)
            }
        });
    }
    dfsHelper(start)
    return result
}


bfs(start){
    const queue=[start]
    let visited=new Set(start)
    let result=[]
    while(queue.length){
        let currentVertex=queue.shift()
        result.push(currentVertex)
        this.adjacencyList[currentVertex].forEach((neighbor)=>{
            if(!visited.has(neighbor)){
                queue.push(neighbor)
                visited.add(neighbor)
            }
        })
    }
    return result;
}

}

const graph=new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "E");
graph.addEdges("D", "E");
graph.addEdges("D", "F");
graph.addEdges("E", "F");
console.log("ggg");
graph.display();
console.log(graph);
console.log(graph.dfs('A'));
console.log(graph.bfs('A'));