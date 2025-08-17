
//Triangulo
console.group('Triangulo')

function calcularTriangulo (lado1, lado2, base, altura){
    return{
        perimetro: lado1+lado2+base,
        area: (base*altura)/2
    };
}

//Triangulo Isosceles para calcular altura
console.log(trianguloIsoscelesAltura(3,4))

function trianguloIsoscelesAltura(lado,base){

    if( lado == base){
        console.warn("Este no es un triangulo isosceles")
    }else{
        return{
        altura: Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2)/4)).toFixed(3)
        };
    }
}

//Triangulo Escaleno
console.log(trianguloEscalenoAltura(16,8,10))

function trianguloEscalenoAltura(lado1,lado2,lado3){

    if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.warn("Este no es un triangulo Escaleno, Recuerda que todos los lados deben ser diferentes!!!!!")
    }else{
        let semiperimetro = (lado1+lado2+lado3)/2
        let area = Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-lado3))

        return{
            alturaLadoA: ((2*area)/lado1).toFixed(3),
            alturaLadoB: ((2*area)/lado2).toFixed(3),
            alturaLadoC: ((2*area)/lado3).toFixed(3),
        }
    }

}


console.groupEnd('Triangulo')

//Cuadrado 
console.group('Cuadrado')
function calcularCuadrado (lado){
    return{
        perimetro: lado*4,
        area: lado*lado
    };
}
console.groupEnd('Cuadrado')

//Circulo
console.group('Circle')
console.log(calcularCirculo(3))

function calcularCirculo(radio){

    let diametro = radio * 2;

    return{
        diametro: diametro,
        circunferencia: diametro * Math.PI.toFixed(2),
        area: Math.pow(radio, 2) * Math.PI.toFixed(2),
    };
}
console.groupEnd('Cirlce')



