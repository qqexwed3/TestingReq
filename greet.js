function greet(name) {
    
    if(name === null){
        return "Hello, my friend.";
    }else if(typeof(name) === "object") {
        if(name.length == 2){
            return "Hello, "+name[0]+" and "+name[1]+".";
        }else{
            return  "Hello, "+name[0]+", "+name[1]+", and "+name[2]+".";
        }      
    }else if(name.toUpperCase() === name){
        return "HELLO "+name+"!";
    }
    
    return "Hello, "+name+".";
}
module.exports = greet;