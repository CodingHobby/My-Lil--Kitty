const Vector = require('./body')

module.exports = class World {
	constructor(opts) {
		this.bodies = opts.bodies || []
		this.gravity = opts.gravity || 1
		this.constraints = opts.constraints || {
			x: 600, y: 600
		}

		bodies.forEach(body => body.setG(this.gravity))
	}

	addBody(name, body) {
		this.bodies[name] = body || new Body({
			pos: new Vector(0, 0),
			vel: new Vector(0, 0),
			gravity: this.gravity
		})
	}

	update() {
		this.bodies.forEach(body => {
			body.update()
			body.edges(this.constraints)
			for (var j = 0; j < bodies.length; i++) {
				if (bodies[j] !== body) body.bounce(bodies[j])
			}
		})
	}

	setG(mag) {
		this.gravity = mag || 1
	}
}
