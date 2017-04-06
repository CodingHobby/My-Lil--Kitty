module.exports = class Vector {

	/**
	 * Creates an instance of Vector and calculates its module
	 * 
	 * @param {Number} x x component of the vector
	 * @param {Number} y y component of the vector
	 */
	constructor(x, y) {
		this.x = x || 0
		this.y = y || 0
		this.mod = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	}

	/**
	 * Adds another vector to itself
	 * 
	 * @param {Vector} v the vector to add to this
	 * @returns {Vector} the product of the operation
	 */
	add(v) {
		return new Vector(this.x + v.x, this.y + v.y)
	}

	/**
	 * Subrtracts a vector from itself
	 * 
	 * @param {Vector} v the vector to subtract from this
	 * @returns {Vector} the reult of the operation
	 */
	sub(v) {
		return new Vector(this.x - v.x, this.y - v.y)
	}

	/**
	 * Multiplies itself by a scalar
	 * 
	 * @param {Number} n 
	 * @returns {Vector} the result of the operation
	 */
	mag(n) {
		return new Vector(this.x * n, this.y * n)
	}
}