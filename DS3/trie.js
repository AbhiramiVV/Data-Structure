class Node{
    constructor(){
        this.children=new Map()
        this.isEndofWord=false
    }
}
class Trie{
    constructor(){
        this.root=new Node();
    }
    insert(word){
        for (let i = 0; i < word.length; i++) {
            this.subStringinsert(i,word);           
        }
    }
    subStringinsert(index,word){
        let node=this.root
        for (let i = index; i < word.length; i++) {
            let cur=word[i]
            if(!node.children.has(cur)){
                node.children.set(cur,new Node())

            } 
            node=node.children.get(cur)           
        }
        node.isEndofWord=true;
    }
    search(word){
        let node=this.root
        for (let i = 0; i < word.length-1; i++) {
            let char=word[i]
            if(!node.children.has(char)){
                return false
            } 
            node=node.children.get(char)           
        }
        return node.isEndofWord;

    }
    searchPrefix(preFix){
        let node=this.root;
        for (let i = 0; i < preFix.length; i++) {
            let char=preFix[i]
            if(!node.children.has(char)){
                return false
            }
            node=node.children.get(char)
            
        }
        return true;
    }
}
const j=new Trie()
j.insert("haiii");
console.log(j.search("h"));
console.log(j.searchPrefix("ha"));