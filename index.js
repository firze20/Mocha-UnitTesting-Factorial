const Calculate = {
    factorial(num) {
        if(typeof num !== "number") {
            throw TypeError;
        }

        if(num === 0){
            return 1;
        }

        let result = 1;
        // factorial in a for loop
        for(let i=num; i>0; i--){
            result*=i;
        }
        return result;
    }
}

module.exports = Calculate;

