//serialize object to JSON string representation
if(!Object.prototype.serialize) {
    Object.prototype.serialize = function(){
        return JSON.stringify(this);
    }
}
if(!Object.prototype.getProperties){
    Object.prototype.getProperties = function(){
        var d = [];
        for(var x in this)
        {
            if(this.hasOwnProperty(x) && typeof(this[x]) != 'function'){
                d.push({key: x, value: this[x]});
            }
        }
        return d;
    }
}