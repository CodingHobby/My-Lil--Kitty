var Vector = require('../src/vector')
var Body = require('../src/body')

describe('Body', () => {
	describe('Constructor', () => {
		it('Creates a body based on a set of options', () => {
			expect(new Body({})).toEqual({
				pos: new Vector(0, 0),
				vel: new Vector(0, 0),
				acc: new Vector(0, 0),
				mass: 10
			})
		})
	})

	describe('Apply Force', () => {
		it('Adds a force to the bodie\'s acc', () => {
			expect(new Body({acc: new Vector(1, 0)}).applyForce(new Vector(1, 1))).toEqual(new Vector(2, 1))
		}) 
	})
})