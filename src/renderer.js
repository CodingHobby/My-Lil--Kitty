const World = require('./world')

module.exports = class Renderer {
	constructor(opts) {
		if (opts) {
			this.frameRate = opts.frameRate || 30
			this.world = opts.world || new World()
			this.canvas = opts.canvas || 'c'
		} else {
			// TODO This is totally wrong, since the framerate should be inverse, since we're using setInterval
			// Find a fix!
			this.frameRate = 30
			this.world = new World()
			this.canvas = 'c'
		}
	}

	init() {
		this.createCanvas(this.canvas)
	}

	createCanvas(canvas) {
		if (!document) {
			throw new Error('Cannot get the document')
			return false
		}

		if (!document.querySelector('#canvas')) {
			document.querySelector('#app').appendChild(document.createElement('canvas')).setAttribute('id', canvas)
		}

		let c = document.getElementById(canvas)
		let context = c.getContext('2D')
		return context
	}

	render() {
		setInterval(this.frameRate, () => {
			world.update()
		})
	}
}