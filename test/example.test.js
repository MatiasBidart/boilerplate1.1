const {it, describe}= require('mocha');
// const { assert } = require('chai'); 
import('chai')

const sumar = (a,b) => a+b
describe('Test de la función sumar', () => {
it ('Debería retornar 12 cuando le pasamos 8 y 4', (done) => {
const response = sumar(8,4)
assert.equal(response, 12)
done()})
it ('Debería retornar 5 cuando le pasamos 2 y 3', (done) => {
const response = sumar(2,3)
assert.equal(response, 5)
done()})})