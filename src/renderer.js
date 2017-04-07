const World = require('./world')
const Canvas = require('./canvas')

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

	createCanvas(w, h) {
		return new Canvas(w, h)
	}

	render() {
		setInterval(this.frameRate, () => {
			world.update()
		})
	}
}