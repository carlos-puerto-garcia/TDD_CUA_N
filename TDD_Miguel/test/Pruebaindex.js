const assert = require ('chai').assert
const myModule = require('../indexTDD')


describe ('Modulo que prueba una lista ', ()=>{
    it('Deberia Ser un String', () =>{
        assert.typeOf('Miguel_' , 'string', 'we have a string');
    })
})


