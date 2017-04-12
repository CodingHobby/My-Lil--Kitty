module.exports = class Vector {

	/**
	 * Creates an instance of Vector and calculates its module
	 * 
	 * @param {Number} [x=0] - x component of the vector
	 * @param {Number} [y=0] - y component of the vector
	 */
	constructor(x, y) {
		this.x = x || 0
		this.y = y || 0
		this.mod = this.modulus()
	}


	/**
	 * Find the modulus of a vector using Pytagora's theorem
	 * 
	 * @return {Number} - the modulus of the vector
	 */
	modulus() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	}

	/**
	 * Resets its own x, y and modulus
	 * 
	 * @param {Number} [x = 0] - the new x
	 * @param {Number} [y = 0] - the new y
	 * 
	 * @return {Vector} - this
	 */
	reset(x, y) {
		this.x = x || 0
		this.y = y || 0
		this.mod = this.modulus()
		return this
	}

	/**
	 * Adds another vector to itself
	 * 
	 * @param {Vector} v - the vector to add to this
	 * @returns {Vector} - the product of the operation
	 */
	add(v) {
		return this.reset(this.x + v.x, this.y + v.y)
	}

	/**
	 * Subrtracts a vector from itself
	 * 
	 * @param {Vector} v - the vector to subtract from this
	 * @returns {Vector} - the reult of the operation
	 */
	sub(v) {
		return this.reset(this.x - v.x, this.y - v.y)
	}

	/**
	 * Multiplies itself by a scalar
	 * 
	 * @param {Number} n - the scalar by which everything should be multiplied
	 * @returns {Vector} - the result of the operation
	 */
	mag(n) {
		return this.reset(this.x * n, this.y * n)
	}
}