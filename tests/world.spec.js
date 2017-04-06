const Vector = require('../src/vector')
const Body = require('../src/body')
const World = require('../src/world')


describe('World', () => {
	describe('Constructor', () => {
		it('Creates a new World Object', () => {
			expect(new World({})).toEqual({
				bodies: [],
				constraints: {
					x: 600,
					y: 600
				},
				gravity: 1
			})
		})
	})

	describe('AddBody', () => {
		it('Adds a body to the world', () => {
			let b1 = new Body({})
			var w = new World({})
			expect(w.addBody(b1)).toEqual([new Body({
				pos: new Vector(0, 0),
				vel: new Vector(0, 0),
				acc: new Vector(0, 0),
				mass: 10
			})])
		})

		it('Defaults a body if none is given', () => {
			let w = new World({})
			let b = new Body({})
			expect(w.addBody()).toEqual(w.addBody(b))
		})
	})

	describe('Update', () => {
		it('Updates the state of all the bodies', () => {
			let w = new World({})
			let b1 = new Body({
				acc: new Vector(1, 0)
			})
			w.addBody(b1)
			w.update()
			expect(w.bodies[0]).toEqual({
				pos: new Vector(1, 0),
				vel: new Vector(1, 0),
				acc: new Vector(0, 0),
				mass: 10
			})
		})
	})

	describe('SetG', () => {
		it('Sets the world gravity', () => {
			expect(new World({}).setG()).toEqual(1)			
		})
	})
})
