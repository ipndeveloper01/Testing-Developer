
function  MathOwner()
{ 
	ownMap : function (array ,callback) {
		var result = new Array();
		for (var i = 0; i < array.length; i++) {
			result.push(Object.assign({}, callback(array[i])))
		}
		return result;
	},

   OwnFilter : function (array, callback) {
 
    var filtered_array = [];
 
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push( Object.assign({}, element));    
        }
    });
 
    return filtered_array;
 
   },
    
   OwnReduce : function (arr, fun, acc) {
	if(!Array.isArray(arr))
		throw new TypeError();

	if (typeof fun != "function")
		throw new TypeError();
	if (arr.length === 0)
		return acc
	else
	{
		if (acc==null)
		{
			return reduce(arr.slice(1), f, f(arr[0], arr[1]))
		}
		else
		{
			return reduce(arr.slice(1), f, f(acc, arr[0]))
		}

	}		
  },
	GetTotalSumImparCubo : function (min,max)
	{
		const intervalo = this.OwnFilter(this.GetNumerosImpares(min,max), function (x) { 
	                         	return !(x % 2);
		});	
		const cubos = this.ownMap(,function(x) { return x * x *x ;});
		
		return this.OwnReduce(cubos,function(acc, x) { return acc + x });
	}
	GetNumerosImpares : function(min , max)
	{
		const array =[];
		for (let i =min; i <=max ; i ++)
		{
			//if (!(i%2==0))
		      array.push(i);
		}
		return array;
	}
	


	
}

