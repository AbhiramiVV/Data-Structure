class Hash{
    constructor(size){
        this.table=new Array(size);
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.table.length;
    }

    set(key,value){
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[];
        }
        this.table[index].push([key,value]);
    }
    get(key){
        let index=this.hash(key)
        if(!this.table[index]){
            return undefined;
        }
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]===key){
                return this.table[index][i][1];
            }
        }
        return undefined;
    }
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const obj=new Hash(50);
obj.set("name","abhi");
obj.set("age","34");
obj.set("name","wert")
obj.display();
obj.remove("age")
console.log(12345);
obj.display();


