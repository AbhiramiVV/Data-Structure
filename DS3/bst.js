class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class Binary{
  constructor(){
    this.root=null;
  }
  isEmpty(){
    return this.root===null;
  }
  insert(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
      this.root=newNode
    }else{
      this.inasertMethod(this.root,newNode)
    }
  }
  inasertMethod(root,newNode){
    if(newNode.value<root.value){
      if(root.left===null){
        root.left=newNode
      }else{
        this.inasertMethod(root.left,newNode)
      }

    }
    else{
      if(root.right===null){
        root.right=newNode
      }else{
        this.inasertMethod(root.right,newNode)
      }
    }
  }
  search(root,value){
    if(!root){
      return false
    }
    if(root.value===value){
      return true
    }else if(value<root.value){
      return this.search(root.left,value)
    } 
    else if(value>root.value)
    {
     return this.search(root.right,value)
    }
  }
  inorder(root){
    if(root){
      this.inorder(root.left)
      console.log(root.value);
      this.inorder(root.right)
    }
  }
  preorder(root){
    if(root){
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);

      console.log(root.value);
    }
  }
  levelOrder(){
    let queue=[]
    queue.push(this.root)
    while (queue.length) {
      let cur=queue.shift();
      console.log(cur.value);
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
      
    }
  }
  min(root){
    if(!root.left){
      return root.value
    }else{
      return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right)
    }
  }
delete(value){
  this.root=this.deleteNode(this.root,value)
}
deleteNode(root,value){
  if(this.root===null){
    return null;
  }
  else if(value<root.value){
    root.left=this.deleteNode(root.left,value)
  }else if(value>root.value){
    root.right=this.deleteNode(root.right,value)
  }else{
    if(!root.left&&!root.right){
      return null
    }
     if(!root.left){
      return root.right
     }
     else if(!root.right){
      return root.left
     }
     root.value=this.min(root.right)
     root.right=this.deleteNode(root.right,root.value)
  }
  return root;
}
prime(root){
  if(!root){
    return null
  }
  if(root){
    let flag=0;
    for(let i=2;i <= Math.sqrt(root.value);i++){
      if(root.value%i==0){
        flag =1
      }
    }
    if(flag==0){
      console.log(root.value);
    }
    this.prime(root.left)
    this.prime(root.right)
  }
}

}
const obj=new Binary()
obj.insert(5);
obj.insert(45);
obj.insert(55);
obj.insert(20);
obj.insert(10);
obj.insert(15);
obj.insert(46);
obj.insert(52);
obj.insert(60);



console.log(obj.search(obj.root,10));
// console.log("inorder");
// obj.inorder(obj.root)
// obj.preorder(obj.root)
// obj.postOrder(obj.root)
console.log(obj.min(obj.root));
obj.inorder(obj.root)
console.log("level");
obj.levelOrder()
console.log("prime");
obj.prime(obj.root)