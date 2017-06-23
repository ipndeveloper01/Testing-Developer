


function getCubosImpares (fun)
{

}
http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/
https://auth0.com/blog/intro-to-immutable-js/

http://www.enrique7mc.com/2015/12/metodos-map-filter-y-sort-en-javascript/

https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/
Array.prototype.ownMap = function(callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
      result.push(Object.assign({}, callback(this[i])))
  }
  return result;
}