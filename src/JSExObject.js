//serialize object to JSON string representation
if(!Object.prototype.serialize) {
    Object.prototype.serialize = function(){
        return JSON.stringify(this);
    }
}