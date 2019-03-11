class Randomizer{
    getNumber(){

    }

    getNumberFromRange(min,max){
        // TO DO
        // returns random number beetwen min .. max
    }

    getNNumbersInRange(min,max,n){

    }    
}

class NumberChecker{
    isPrimal(n){
        //checks if n is primal number
        // yes => true
        // no => false
    }

    isOdd(n){
        //checks if n is odd number
        // yes => true
        // no => false
    }
}

class RangePicker{
    constructor(rangeStart=1, rangeStop=100){
        this.rangeStart = rangeStart;
        this.rangeStop = rangeStop;
        this.randomizer = new Randomizer(); 
    }

    getRange(){
        var firstValue = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);
        var secondValue = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);
        // TO DO
        // swap firstValue and secondValue if firstValue > secondValue 

        return {
            rangeStart: firstValue,
            rangeStop: secondValue
        };
    }

    moveMaxByN(n){
        // check if valid
        this.rangeStop += n;  
    }

    moveMinByN(n){
        // check if valid
        this.rangeStart += n;  
    }
}
