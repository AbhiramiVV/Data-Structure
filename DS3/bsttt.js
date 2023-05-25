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
        if(this.isEmpty){
            this.root==newNode
        }else{
                this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}
const obj=new Binary()
obj.insert(10);
obj.insert(15);
obj.insert(20);
obj.insert(30);
obj.insert(40);
obj.inOrder(obj.root)