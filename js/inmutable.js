

class MathOwner {
    constructor() {

    }

    ownMap(array, callback) {
        var result = new Array();
        for (var i = 0; i < array.length; i++) {

         
            result.push(typeof element === 'object'  ? Object.assign({}, callback(array[i]))  : callback(array[i]));
        }
        return result;
    }

    OwnFilter(array, callback) {
      

        var filtered_array = [];

        array.forEach(function(element, index, array) {
          
            if (callback(element, index, array)) {
                  
                filtered_array.push(typeof element === 'object'  ?Object.assign({}, element)  : element);
            }
        });

        return filtered_array;

    }

    OwnReduce(arr, fun, acc) {

      debugger;
        if (!Array.isArray(arr))
            throw new TypeError();

        if (typeof fun != "function")
            throw new TypeError();
        if (arr.length === 0)
            return acc
        else {
          
          return this.OwnReduce(arr.slice(1), fun, fun(acc==null ? arr[0] : acc, acc==null ? arr[1] : arr[0]))
        }
    }
   
    GetTotalSumImparCubo(min, max) {
      
   
        const intervalo = this.OwnFilter(this.GetNumerosImpares(min, max), function(x) {
          
            return ((x % 2)==0 ? false : true);
        });

      
        const cubos = this.ownMap(intervalo, function(x) {
            return x * x * x;
        });

        let resultado =  this.OwnReduce(cubos, function(acc, x) {

      
            return acc + x
        });
        debugger;
        return resultado;
    }
    GetNumerosImpares(min, max) {
        var array = [];
        for (let i = min; i <= max; i++) {
            //if (!(i%2==0))
            array.push(i);
        }
        return array;
    }

}