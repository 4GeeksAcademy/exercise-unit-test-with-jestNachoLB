// Definir las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; // Convertimos dólares a euros
    return euros * oneEuroIs.JPY; // Convertimos euros a yenes
}

// Función para convertir de yenes a libras esterlinas
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY; // Convertimos yenes a euros
    return euros * oneEuroIs.GBP; // Convertimos euros a libras
}

// Exportamos las funciones para poder usarlas en `test.js`
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };