'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitalNumber = function (_React$Component) {
    _inherits(DigitalNumber, _React$Component);

    function DigitalNumber(props) {
        _classCallCheck(this, DigitalNumber);

        var _this = _possibleConstructorReturn(this, (DigitalNumber.__proto__ || Object.getPrototypeOf(DigitalNumber)).call(this, props));

        _this.state = {
            value: '',
            numberFind: null
        };
        _this.seccion = [{
            seccion: 'section top',
            css: 'border-top-color'
        }, {
            seccion: 'section top-right',
            css: 'border-right-color'
        }, {
            seccion: 'section bottom-right',
            css: 'border-right-color'
        }, {
            seccion: 'section bottom',
            css: 'border-bottom-color'
        }, {
            seccion: 'middle',
            css: ''
        }, {
            seccion: 'section bottom-left',
            css: 'border-left-color'
        }, {
            seccion: 'section top-left',
            css: 'border-left-color'
        }];

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(DigitalNumber, [{
        key: 'numeros',
        value: function numeros() {

            return [{
                index: '0',
                patron: [{
                    seccion: 'section top',
                    css: 'border-top-color'
                }, {
                    seccion: 'section top-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'section bottom-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'section bottom',
                    css: 'border-bottom-color'
                }, {
                    seccion: 'section bottom-left',
                    css: 'border-left-color'
                }, {
                    seccion: 'section top-left',
                    css: 'border-left-color'
                }]
            }, {
                index: '1',
                patron: [{
                    seccion: 'section top-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'section bottom-right',
                    css: 'border-right-color'
                }]
            }, {
                index: '2',
                patron: [{
                    seccion: 'section top',
                    css: 'border-top-color'
                }, {
                    seccion: 'section top-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'middle',
                    css: ''
                }, {
                    seccion: 'section bottom-left',
                    css: 'border-left-color'
                }, {
                    seccion: 'section bottom',
                    css: 'border-bottom-color'
                }]

            }, {
                index: '3',
                patron: [{
                    seccion: 'section top',
                    css: 'border-top-color'
                }, {
                    seccion: 'section top-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'middle',
                    css: ''
                }, {
                    seccion: 'section bottom-right',
                    css: 'border-right-color'
                }, {
                    seccion: 'section bottom',
                    css: 'border-bottom-color'
                }]

            }];
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {

            var find = this.firstOrDefault(this.numeros().filter(function (el) {
                return el.index === event.target.value;
            }));
            this.setState({
                value: event.target.value
            });
            this.setState({
                numberFind: find
            });
            this.show(find);
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(array) {
            return array[0];
        }
    }, {
        key: 'getDiferent',
        value: function getDiferent(data1, data2) {
            debugger;
            var mat = new MathOwner();
            var todo = mat.GetTotalSumImparCubo(1, 10);

            var result = [];
            var map = data1.map(function (x) {
                return Object.assign({}, x);
            });

            for (var i = 0; i < data2.length; i++) {
                if (!(data2[i].seccion in map)) {
                    result.push(Object.assign({}, data2[i]));
                }
            }

            return result;
        }
    }, {
        key: 'show',
        value: function show(num) {

            var remove = this.getDiferent(num.patron, this.seccion);
            this.clearStyle(remove);
            this.setStyle(num.patron);
        }
    }, {
        key: 'clearStyle',
        value: function clearStyle(remove) {
            var css = 'fdf';
            var css1 = 'fdf';
            var self = this;
            remove.forEach(function (element) {

                var css = element.seccion,
                    css1 = element.css;

                if (css === 'middle') $('#midd').hide();else {
                    var heart = document.getElementsByClassName(css)[0];
                    heart.style[css1] = '#444';
                }

                console.log(element);
            });
        }
    }, {
        key: 'setStyle',
        value: function setStyle(add) {
            add.forEach(function (element) {
                var css = element.seccion;
                var css1 = element.css;
                debugger;
                if (css === 'middle') {

                    $('#midd').show();

                    /*document.getElementsByClassName(css)[0].classList.toggle("cssBefore");
                    document.getElementsByClassName(css)[0].classList.toggle("cssAfter");*/
                    //	$('.middle').toggleClass('cssAfter')

                    /*$('.middle').toggleClass('changed');
                    $(".middle:before").toggleClass('changeBefore');
                    */
                } else {
                    debugger;
                    var heart = document.getElementsByClassName(css)[0];
                    heart.style[css1] = 'red';
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var style = {
                display: 'none'
            };

            return React.createElement(
                'form',
                null,
                React.createElement(
                    'div',
                    { className: 'number1' },
                    'Ingresa un N\xFAmero ',
                    React.createElement('input', { type: 'number', min: '0', max: '3', value: this.state.value, onChange: this.handleChange })
                ),
                React.createElement(
                    'div',
                    { className: 'number' },
                    React.createElement('div', { className: 'section top' }),
                    React.createElement('div', { className: 'section top-right' }),
                    React.createElement('div', { className: 'section top-left' }),
                    React.createElement('div', { id: 'midd', className: 'middle', style: style }),
                    React.createElement('div', { className: 'section bottom-right' }),
                    React.createElement('div', { className: 'section bottom-left' }),
                    React.createElement('div', { className: 'section bottom' })
                )
            );
        }
    }]);

    return DigitalNumber;
}(React.Component);

ReactDOM.render(React.createElement(DigitalNumber, { saludo: 'hola mundo' }), document.getElementById('app'));