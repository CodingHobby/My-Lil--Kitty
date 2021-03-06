var Vector = require('./vector')

module.exports = class Body {

	/**
	 * Creates an instance of Body
	 * 
	 * @param {Object} [opts] - An object that contains diferent options for the body, such as the position, velocity and acceleration
	 * 
	 * @return {Void}
	 */
	constructor(opts) {
		if (opts) {
			if (opts.pos) this.pos = new Vector(opts.pos.x, opts.pos.y)
			else this.pos = new Vector(0, 0)

			if (opts.vel) this.vel = new Vector(opts.vel.x, opts.vel.y)
			else this.vel = new Vector(0, 0)

			if (opts.acc) this.acc = new Vector(opts.acc.x, opts.acc.y)
			else this.acc = new Vector(0, 0)

			this.mass = opts.mass || 10

			this.w = opts.w || 100
			this.h = opts.h || 100

		} else {
			this.pos = new Vector(0, 0)
			this.vel = new Vector(0, 0)
			this.acc = new Vector(0, 0)
			this.mass = 10
			this.w = 100
			this.h = 100
		}

		// cf = F / mg
		this.cf = new Vector(this.vel.x / (this.mass * this.gravity), this.vel.y / (this.mass * this.gravity))
	}


	/**
	 * Applies a force to a rigid body
	 * 
	 * @param {Vector} v - the vector representing the force
	 * 
	 * @returns {Vector} - the result of the addition between the acceleration of the body and the Vector v
	 */

	// TODO: base force on inverse proportionality with mass
	applyForce(v) {
		// using Vector.prototype.add()
		return this.acc.add(v)
	}

	/**
	 * Updates the state of the body, in particular its acceleration, velocity and position
	 * 
	 * @returns {Body} - the body itself
	 */
	update() {
		this.applyG(this.gravity || 0)
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		return this
	}

	/**
	 * Changes the body's gravitational pull
	 * 
	 * @param {number} [mag] - the magnitude of the y component ofthe rgavity force
	 * 
	 * @returns {number} - the current gravitational pull of the object
	 */
	setG(mag) {
		return this.gravity = mag || 1
	}


	/**
	 * Apply the gravitational pull to the body, changing its acceleration
	 * 
	 * @returns {Body} - the body itself
	 */

	// TODO Multiply by the mass * some constant, since the force will be changed to be based on the inverse of mass
	applyG() {
		return this.applyForce(new Vector(0, this.gravity))
	}

	/**
	 * Check if the object is colliding with another object
	 * 
	 * @param {Body} obj - the object to check
	 * 
	 * @returns {Boolean} - is the distance between the two objects less than 0?
	 */
	collides(obj) {
		return this.dist(obj) == 0
	}

	/**
	 * Find out the distance between two bodies
	 * 
	 * @param {Body} obj - the object to check
	 * @returns {Number} - the distance between the two objects
	 */
	dist(obj) {
		// Only return the modulus of the vector representing the distance between the two objects
		return new Vector(this.pos.x - obj.pos.x, this.pos.y - obj.pos.y).mod
	}

	/**
	 * Make an object bounce on the screen edges
	 * 
	 * @param {Vector} constraints - the edges of the world
	 * 
	 * @return {Boolean} - did the body hit the edges?
	 */
	edges(constraints) {
		let out = false

		// Determine whether we are actually out of the boundaries
		// And setting the output accordingly
		if (this.pos.x + this.w > constraints.x ||
			this.pos.y + this.h > constraints.y ||
			this.pos.x < 0 ||
			this.pos.y < 0) out = true

		// Changing the object's position and velocity based on whether we really are out of the boundaries
		if (this.pos.x + this.w > constraints.x) {
			// This avoids an infinte loop. Important
			this.pos.x = constraints.x
			// Invert direction in which the body moves
			this.vel.x *= -1 + (this.cf.x / 10)
		} else if (this.pos.x < 0) {
			this.pos.x = 0
			this.vel.x *= -1 + (this.cf.x / 10)
		}

		if (this.pos.y > constraints.y) {
			this.pos.y = constraints.y
			this.vel.y *= -1 + (this.cf.y / 10)
		} else if (this.pos.y < 0) {
			this.pos.y = 0
			this.vel.y *= -1 + (this.cf.y / 10)
		}
		return out
	}
}
