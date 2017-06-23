class DigitalNumber extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            numberFind: null
        };
        this.seccion = [{
                seccion: 'section top',
                css: 'border-top-color'
            },
            {
                seccion: 'section top-right',
                css: 'border-right-color'
            },
            {
                seccion: 'section bottom-right',
                css: 'border-right-color'
            },
            {
                seccion: 'section bottom',
                css: 'border-bottom-color'
            },
            {
                seccion: 'middle',
                css: ''
            },
            {
                seccion: 'section bottom-left',
                css: 'border-left-color'
            },
            {
                seccion: 'section top-left',
                css: 'border-left-color'
            }
        ];

        this.handleChange = this.handleChange.bind(this);
    }
    numeros() {

        return [{
                index: '0',
                patron: [{
                        seccion: 'section top',
                        css: 'border-top-color'
                    },
                    {
                        seccion: 'section top-right',
                        css: 'border-right-color'
                    },
                    {
                        seccion: 'section bottom-right',
                        css: 'border-right-color'
                    },
                    {
                        seccion: 'section bottom',
                        css: 'border-bottom-color'
                    },
                    {
                        seccion: 'section bottom-left',
                        css: 'border-left-color'
                    },
                    {
                        seccion: 'section top-left',
                        css: 'border-left-color'
                    }
                ]
            },
            {
                index: '1',
                patron: [{
                        seccion: 'section top-right',
                        css: 'border-right-color'
                    },

                    {
                        seccion: 'section bottom-right',
                        css: 'border-right-color'
                    }
                ]
            },
            {
                index: '2',
                patron: [{
                        seccion: 'section top',
                        css: 'border-top-color'
                    },
                    {
                        seccion: 'section top-right',
                        css: 'border-right-color'
                    },
                    {
                        seccion: 'middle',
                        css: ''
                    },
                    {
                        seccion: 'section bottom-left',
                        css: 'border-left-color'
                    },
                    {
                        seccion: 'section bottom',
                        css: 'border-bottom-color'
                    }
                ]

            },
			{
                index: '3',
                patron: [{
                        seccion: 'section top',
                        css: 'border-top-color'
                    },
                    {
                        seccion: 'section top-right',
                        css: 'border-right-color'
                    },
                    {
                        seccion: 'middle',
                        css: ''
                    },
                   {
                        seccion: 'section bottom-right',
                        css: 'border-right-color'
                    },
                    {
                        seccion: 'section bottom',
                        css: 'border-bottom-color'
                    }
                ]

            }

        ]

    }


    handleChange(event) {


        var find = this.firstOrDefault(this.numeros().filter(function(el) {
            return el.index === event.target.value
        }));
        this.setState({
            value: event.target.value
        });
        this.setState({
            numberFind: find
        });
        this.show(find);
    }
    firstOrDefault(array) {
        return array[0];
    }
    getDiferent(data1, data2) {
        debugger;
         var mat = new MathOwner();
         var todo=  mat.GetTotalSumImparCubo(1,10);

        var result = [];
        const map = data1.map(function(x) {
            return Object.assign({}, x)
        });

        for (let i = 0; i < data2.length; i++) {
            if (!(data2[i].seccion in map)) {
                result.push(Object.assign({}, data2[i]));
            }
        }

        return result;
    }
    show(num) {

        var remove = this.getDiferent(num.patron, this.seccion);
        this.clearStyle(remove);
        this.setStyle(num.patron);
    }

    clearStyle(remove) {
        var css = 'fdf';
        var css1 = 'fdf';
        var self = this;
        remove.forEach(function(element) {



            var css = element.seccion,
                css1 = element.css;

            if (css === 'middle')
                $('#midd').hide();
            else {
                var heart = document.getElementsByClassName(css)[0];
                heart.style[css1] = '#444';

            }

            console.log(element);
        });
    }
    setStyle(add) {
        add.forEach(function(element) {
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
    render() {


        var style = {
            display: 'none'
        }
		

        return (

   
        <form>
           <div className="number1">
              Ingresa un Número <input type="number" min="0" max="3"  value={this.state.value} onChange={this.handleChange} />
           </div>
           
            <div className="number">
                <div className="section top"   ></div>
                <div className="section top-right"></div>
                <div className="section top-left"></div>
                <div id='midd' className="middle"  style={style}></div>
                <div className="section bottom-right"></div>   
                <div className="section bottom-left"></div>
                <div className="section bottom"></div>

            </div>
            </form>
        )

    }
}
ReactDOM.render( < DigitalNumber saludo = "hola mundo" / > , document.getElementById('app'));