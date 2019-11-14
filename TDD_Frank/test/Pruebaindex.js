const assert = require ('chai').assert
const myModule = require('../indexTDD')
//chai.use(chaiWebdriver(driver));
var expect = require('chai').expect
//var should = require('chai').should() //actually call the function


describe ('Modulo que prueba una lista ', ()=>{
    it('Debiera ser', () =>{
        const result = myModule.doubleArray([1,2,3,])
        //chai.should.describe.result(result,[2,4,6])
        //foo.shoul.be.a(result,[2,4,6])
        //expect(foo).to.be.a(result,[2,4,6]);
        //assert.equal(result,[2,4,6]);

        assert.deepStrictEqual(result,[2,4,6])
        //assert.deepStrictEqual(result,[2,4,6])
    })
})