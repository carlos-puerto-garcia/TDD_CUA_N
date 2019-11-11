const assert= require ('chai').assert
const myModule = require('../indexTDD')


describe ('Modulo que prueba una lista ', ()=>{
    it('La lista deberia tener la misma longitud', () =>{
        const result = myModule.doubleArray([1,2,3])
        assert.lengthOf(result,3)
    })
})