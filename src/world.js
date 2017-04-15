const Vector = require('./vector')
const Body = require('./body')

module.exports = class World {
	/**
	 * Creates an instance of World.
	 * 
	 * @param {Object} [opts] the options for the world
	 */
	constructor(opts) {
		if (opts) {
			this.bodies = opts.bodies || []
			this.gravity = opts.gravity || 1
			this.constraints = opts.constraints || {
				x: 600, 
				y: 600
			}
		} else {
			this.bodies = []
			this.gravity = 1
			this.constraints = {
				x: 600,
				y: 600
			}
		}

		this.bodies.forEach(body => body.setG(this.gravity))
	}

	/**
	 * Adding a body to the world
	 * 
	 * @param {Body} [body=new Body()] the body to add
	 * @returns {Body[]} the world's bodies
	 */
	addBody(body) {
		this.bodies.push(body || new Body({
			pos: new Vector(0, 0),
			vel: new Vector(0, 0),
			gravity: this.gravity
		}))

		return this.bodies
	}

	/**
	 * Updates all of the bodies of the world
	 * 
	 * @return {Body[]} the world's bodies
	 */
	update() {
		this.bodies.forEach(body => {
			body.update()
			body.edges(this.constraints)

			return this.bodies
		})
	}

	/**
	 * Set the magnitude of the gravity
	 * 
	 * @param {Number} [mag] 
	 * @returns {Number} the current gravity
	 */
	setG(mag) {
		this.gravity = mag || 1
		this.bodies.forEach(body => {
			vody.setG(mag)
		})
		return this.gravity
	}
}
