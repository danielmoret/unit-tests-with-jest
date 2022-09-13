// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) =>{
    let valueInEuro = valueInDollar/1.2

    return Number((valueInEuro*127.9).toFixed(2))
}

console.log(fromDollarToYen(2))

const fromYenToPound = (valueInYen) =>{
    let valueInEuro = valueInYen/127.9

    return Number((valueInEuro*0.8).toFixed(2));
}

console.log(fromYenToPound(10000))


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };