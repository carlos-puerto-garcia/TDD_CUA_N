var assert  = require("chai").assert;
var calculadora = require("../app/calculadora_suma");
const myModule = require('../app/calculadora_suma');



describe("Calculadora de dos numeros: ", () => {
	describe("Checkeo de la funcion sumaNumeros: ", () => {
		it("Verificación de la suma usando: assert.typeOf(valor,'valor'): ", () => {
			result = calculadora.sumaNumeros(2,2);
			assert.typeOf(result, 'number');
		});		
	});		
});
<<<<<<< HEAD
=======


>>>>>>> 1c17a11f155c8e10e215a53d0f5c37f95b0c502d
