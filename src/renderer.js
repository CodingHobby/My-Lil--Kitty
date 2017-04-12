const World = require('./world')
const Canvas = require('./canvas')

module.exports = class Renderer {
	/**
	 * Creates a new instance of Renderer
	 * 
	 * @param {Object} [opts] - the options for the renderer 
	 */
	constructor(opts) {
		if (opts) {
			// This is actually wrong. The frameRate should aready be something you can setInterval to to get a result which is based on fps.
			// Right now it works in the opposite way: bigger frameRate => more time between calls of setInterval

			// FIX: Find an accurate function to depict frames / second
			this.frameRate = opts.frameRate || 30
			this.world = opts.world || new World()
			this.canvas = opts.canvas || 'c'
		} else {
			this.frameRate = 30
			this.world = new World()
			this.canvas = 'c'
		}
	}

	/**
	 * Creates a canvas associated with this
	 * 
	 * @param {Number} w - width of the canvas
	 * @param {Number} h - height of canvas
	 * 
	 * @return {Canvas} - a new canvas
	 */
	createCanvas(w, h) {
		// Create a reference to the renderer's canvas
		this.canvas = new Canvas(w, h)
		return this.canvas
	}

	/**
	 * Update boides and draw them
	 * should be ran in a setInterval callback, so that it loops
	 * 
	 * @return {Void}
	 */
	render() {
			this.world.update()
			this.world.bodies.forEach(body => {
				this.canvas.draw(body)
			})
	}
}