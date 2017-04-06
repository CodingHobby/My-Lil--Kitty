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
		it('Adds a force to the bodie\'s acceleration', () => {
			expect(new Body({ acc: new Vector(1, 0) }).applyForce(new Vector(1, 1))).toEqual(new Vector(2, 1))
		})
	})

	describe('Update', () => {
		it('updates a body\'s instance variables', () => {
			let body = new Body({ acc: new Vector(0, 1) })
			body.update()
			expect(body).toEqual(new Body({ pos: new Vector(0, 1), vel: new Vector(0, 1), acc: new Vector(0, 0) }))
		})
	})

	describe('Set G', () => {
		it('sets an object\'s gravity', () => {
			let body = new Body({})
			body.setG(1)
			expect(body.gravity).toEqual(1)
		})
	})

	describe('Apply G', () => {
		it('applies gravity to a body', () => {
			let body = new Body({})
			body.setG(1)
			body.applyG()
			expect(body.acc.y).toEqual(1)
		})
	})

	describe('Dist', () => {
		it('Determines the distance between two bodies', () => {
			let b1 = new Body({ pos: new Vector(10, 10) })
			let b2 = new Body({ pos: new Vector(10, 11) })

			expect(b1.dist(b2)).toBe(1)
		})
	})

	describe('Collides', () => {
		it('Determines wether a body is colliding with another', () => {
			let b1 = new Body({ pos: new Vector(10, 10) })
			let b2 = new Body({ pos: new Vector(10, 10) })

			expect(b1.collides(b2)).toBe(true)
		})
	})

	describe('Edges', () => {
		it('Returns whether the body is out of the boundaries', () => {
			let b1 = new Body({ pos: new Vector(10, 10) })

			expect(b1.edges(new Vector(9, 9))).toBe(true)
		})

		it('Coordinates a reaction to the information it gets', () => {
			let b1 = new Body({
				pos: new Vector(10, 10),
				vel: new Vector(0, 1)
			})
			b1.edges({ x: 9, y: 9 })
			b1.update()

			expect(b1.vel).toEqual(new Vector(0, -1))
			expect(b1.pos).toEqual(new Vector(9, 8))
		})
	})
})