// Importar las funciones de conversión desde `app.js`
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app");

// Prueba de fromEuroToDollar
test("Convierte 1 euro a dólares (1.07 USD)", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

// Prueba de fromDollarToYen
test("Convierte 1 dólar a yenes japoneses", () => {
    // 1 dólar = (1 / 1.07) euros * 156.5 yenes/euro
    expect(fromDollarToYen(1)).toBeCloseTo((1 / 1.07) * 156.5);
});

// Prueba de fromYenToPound
test("Convierte 1 yen a libras esterlinas", () => {
    // 1 yen = (1 / 156.5) euros * 0.87 libras/euro
    expect(fromYenToPound(1)).toBeCloseTo((1 / 156.5) * 0.87);
});