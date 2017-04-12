module.exports = class Canvas {
	/**
	 * Creates an instance of Canvas
	 * 
	 * @param {Number} w - the width of the canvas
	 * @param {Number} h - the height of the canvas
	 * @param {Object} [opts] - additional options
	 */
	constructor(w, h, opts) {
		// The DOM element's id
		this.id = opts ? (opts.id || 'c') : 'c'
		this.width = w
		this.height = h
		// Defaulting fill and stroke colors
		this.fillColor = 'rgb(0, 0, 0)'
		this.strokeColor = null

		// In case we can't create the elemnt because there is no document
		if (!document) {
			throw new Error('Cannot get the document')
		}

		// Creating the element and appending it to the body
		this.el = document.createElement('CANVAS')
		this.el.setAttribute('id', this.id)
		document.body.appendChild(this.el)
		// Getting the canvas context
		this.ctx = this.el.getContext('2d')
		this.backgroundColor = this.el.style.background

		// General styling
		this.el.style.display = 'inline-block'

		// Setting width and height
		this.el.setAttribute('width', this.width)
		this.el.setAttribute('height', this.height)
	}

	/**
	 * Sets the canvas's background
	 * 
	 * @param {Number|Array} r - quantity of red / Grayscale value / array
	 * @param {Number} [g] - quantity of green
	 * @param {Number} [b] - quantity of blue
	 * 
	 * @return {String} - background color in rgb notation
	 */
	background(r, g, b) {
		// This we need to avoid strange type conversions (i.e. 0 defaulting to r)
		// If g & b are undefined, it means the the color is being passed in as a grayscale value, so we want the 3 params to be equal
		let rp = r
		let gp = g != undefined ? g : rp
		let bp = b != undefined ? b : gp

		// Change background
		if (typeof r == "number") {
			this.el.style.background = `rgb(${rp}, ${gp}, ${bp})`
		} else if (r instanceof Array) {
			this.el.style.background = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
		} else {
			throw new Error('Unsupported color format')
		}
		// Set this.background to the newly set background
		this.backgroundColor = this.el.style.background
		return this.el.style.background
	}

	/**
	 * Draw the body on the canvas
	 * 
	 * @param {String|Array} body - the body you want to draw. Must have a shape property
	 * 
	 * @return {Void}
	 */
	draw(body) {
		let shape = body.shape

		// Start by setting fill and stroke color
		this.ctx.fillStyle = this.fillColor
		this.ctx.strokeStyle = this.strokeColor
		if (typeof shape == 'string') {
			switch (shape.toUpperCase()) {
				// TODO: Add more default string shapes
				case 'RECT':
					this.ctx.rect(body.pos.x, body.pos.y, body.w, body.h)

					// Only use stroke and fill if they are properties
					if (this.fillColor) this.ctx.fill()
					if (this.strokeColor) this.ctx.stroke()
					break
				default:
					throw new Error('String not valid')
			}
			// This represents a path of points
		} else if (shape instanceof Array) {
			this.ctx.beginPath()
			this.ctx.moveTo(body.pos.x, body.pos.y)
			shape.forEach(coord => {
				this.ctx.lineTo(coord[0], coord[1])
			})
			if (this.fillColor) this.ctx.fill()
			if (this.strokeColor) this.ctx.stroke()
		} else {
			throw new Error('Unsopported type')
		}
	}

	/**
	 * Changes the canvas's fill color
	 * 
	 * @param {Number|Array} r - quantity of red / Grayscale value / array
	 * @param {Number} [g] - quantity of green 
	 * @param {Number} [b] - quantity of blue
	 * 
	 * @return {String} - the current fill color as an rgb value
	 */
	fill(r, g, b) {
		// This we need to avoid strange type conversions (i.e. 0 defaulting to r)
		// If g & b are undefined, it means the the color is being passed in as a grayscale value, so we want the 3 params to be equal
		let rp = r
		let gp = g != undefined ? g : rp
		let bp = b != undefined ? b : gp

		if (typeof r == "number") {
			this.fillColor = `rgb(${rp}, ${gp}, ${bp})`
		} else if (r instanceof Array) {
			this.fillColor = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
		} else {
			throw new Error('Unsupported color format')
		}
		return this.fillColor
	}

	/**
	 * Changes the canvas's stroke color
	 * 
	 * @param {Number|Array} r - quantity of red / Greyscale value / array
	 * @param {Number} [g] - quantity of green
	 * @param {Number} [b] - quantity of blue
	 * 
	 * @return {String} - the current stroke color as an rgb value
	 */
	stroke(r, g, b) {
		// Protection against strange conversions
		// If g & b are undefined, it means the color is expressed as a grayscale value, so we want the 3 params to be equal
		let rp = r
		let gp = g != undefined ? g : rp
		let bp = b != undefined ? b : gp

		if (typeof r == "number") {
			this.strokeColor = `rgb(${rp}, ${gp}, ${bp})`
		} else if (r instanceof Array) {
			this.strokeCOlor = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
		} else {
			throw new Error('Unsupported color format')
		}
	}
}
