var Vector = require('../src/vector')

describe('Vector class', () => {
	describe('Constructor', () => {
		it('Should create a Vector Object with x, y and modulus', () => {
			expect(new Vector(1, 1)).toEqual({
				x: 1,
				y: 1,
				mod: Math.sqrt(2)
			})
		})

		it('Should default x and y to 0', () => {
			expect(new Vector()).toEqual(new Vector(0, 0))
		})

		it('Should always have a modulus based on its components', () => {
			expect(new Vector(1, 1).mod).toEqual(1 * Math.sqrt(2))
		})
	})

	describe('Reset function', () => {
		it('Should change a vector\'s x, y and modulus', () => {
			let v1 = new Vector(10, 11)
			expect(v1.reset(12, 11)).toEqual(new Vector(12, 11))
		})

		it('Should default x and y to 0', () => {
			let v1 = new Vector(10, 10)
			expect(v1.reset()).toEqual(new Vector(0, 0))
		})
	})

	describe('Add function', () => {
		it('Should add two vector\'s components', () => {
			expect(new Vector(0, 0).add(new Vector(1, 1))).toEqual(new Vector(1, 1))
		})

		it('Should keep the module up to date', () => {
			expect(new Vector(0, 0).add(new Vector(1, 1)).mod).toEqual(1 * Math.sqrt(2))
		})
	})

	describe('Subtract function', () => {
		it('Should subtract two vector\'s components', () => {
			expect(new Vector(1, 1).sub(new Vector(1, 1))).toEqual(new Vector(0, 0))
		})

		it('Should update the module', () => {
			expect(new Vector(1, 1).sub(new Vector(1, 1)).mod).toEqual(0)
		})
	})

	describe('Mag function', () => {
		it('Should multiply a vector\'s components by a scalar', () => {
			expect(new Vector(1, 1).mag(0)).toEqual(new Vector(0, 0))
		})

		it('Should keep the module up to date', () => {
			expect(new Vector(1, 1).mag(0).mod).toEqual(0)
		})
	})
})