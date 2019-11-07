var assert  = require("chai").assert;
var calculadora = require("../app/calculadora_suma");
const myModule = require('../app/calculadora_suma');


//Daniel Ballesteros Bedoya
describe("Calculadora de dos numeros: ", () => {
	describe("Checkeo de la funcion sumaNumeros: ", () => {
		it("Verificación de la suma usando: assert.typeOf(valor,'valor'): ", () => {
			result = calculadora.sumaNumeros(2,2);
			assert.typeOf(result, 'number');
		});		
	});		
});
