const Vector = require('./vector')
const Body = require('./body')

module.exports = class World {
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

	addBody(body) {
		this.bodies.push(body || new Body({
			pos: new Vector(0, 0),
			vel: new Vector(0, 0),
			gravity: this.gravity
		}))

		return this.bodies
	}

	update() {
		this.bodies.forEach(body => {
			body.update()
			body.edges(this.constraints)

			return this.bodies
		})
	}

	setG(mag) {
		this.gravity = mag || 1
		return this.gravity
	}
}
