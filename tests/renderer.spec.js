const Renderer = require('../src/renderer')
const World = require('../src/world')
describe('Renderer', () => {
	describe('Constructor', () => {
		it('Has default values', () => {
			expect(new Renderer()).toEqual(new Renderer({
				frameRate: 30,
				world: new World(),
				canvas: 'c'
			}))
		})
	})

	describe('Create canvas', () => {
		it('Throws if there is no document', () => {
			expect(() => new Renderer().createCanvas()).toThrow()
		})

		// Error in DOM manipulation stuff
		// TODO : find way to simulate DOM
		it('Creates a canvas element', () => {
			let document = {
				els: {},
				getElementById: (id) => this.els.id || null,
				appendChild: (child) => this.els[child] = {
					setAttribute: (attr, val) => this[attr] = val,
					context: (cont) => this.context = cont
				}
			}

		})
	})
})