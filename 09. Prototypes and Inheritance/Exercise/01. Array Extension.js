function arrayExtension () {
    let myArr = [1, 2, 3, 4];
    let anotherArr = [9, 8, 7, 6, 5];
    
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function(n) {
        return this.slice(n);
    }
    
    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }
    
    Array.prototype.sum = function() {
        return this.reduce((prevValue, nextValue) => prevValue + nextValue);
    }
    
    Array.prototype.average = function(){
        return this.sum() / this.length;
    }
    
    console.table(Array.prototype);
    console.log(myArr.sum());
    console.log(anotherArr.sum());
}

arrayExtension()
