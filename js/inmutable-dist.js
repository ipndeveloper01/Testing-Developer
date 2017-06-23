'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MathOwner = function () {
    function MathOwner() {
        _classCallCheck(this, MathOwner);
    }

    _createClass(MathOwner, [{
        key: 'ownMap',
        value: function ownMap(array, callback) {
            var result = new Array();
            for (var i = 0; i < array.length; i++) {

                result.push((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' ? Object.assign({}, callback(array[i])) : callback(array[i]));
            }
            return result;
        }
    }, {
        key: 'OwnFilter',
        value: function OwnFilter(array, callback) {

            var filtered_array = [];

            array.forEach(function (element, index, array) {

                if (callback(element, index, array)) {

                    filtered_array.push((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' ? Object.assign({}, element) : element);
                }
            });

            return filtered_array;
        }
    }, {
        key: 'OwnReduce',
        value: function OwnReduce(arr, fun, acc) {

            debugger;
            if (!Array.isArray(arr)) throw new TypeError();

            if (typeof fun != "function") throw new TypeError();
            if (arr.length === 0) return acc;else {

                return this.OwnReduce(arr.slice(1), fun, fun(acc == null ? arr[0] : acc, acc == null ? arr[1] : arr[0]));
            }
        }
    }, {
        key: 'GetTotalSumImparCubo',
        value: function GetTotalSumImparCubo(min, max) {

            var intervalo = this.OwnFilter(this.GetNumerosImpares(min, max), function (x) {

                return x % 2 == 0 ? false : true;
            });

            var cubos = this.ownMap(intervalo, function (x) {
                return x * x * x;
            });

            var resultado = this.OwnReduce(cubos, function (acc, x) {

                return acc + x;
            });
            debugger;
            return resultado;
        }
    }, {
        key: 'GetNumerosImpares',
        value: function GetNumerosImpares(min, max) {
            var array = [];
            for (var i = min; i <= max; i++) {
                //if (!(i%2==0))
                array.push(i);
            }
            return array;
        }
    }]);

    return MathOwner;
}();