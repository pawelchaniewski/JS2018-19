let iife = (function(){
    let var1 = 'inner';
    let getValue = function(){
        return var1;
    };
    let setValue = function(newValue){
        var1 = newValue;
    }
    return {
        innerData: getValue,
        setInnerData: setValue
    };
})();

console.log(iife);
console.log(iife.innerData());

iife.setInnerData('new');
console.log(iife.innerData());
