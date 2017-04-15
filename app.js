window.addEventListener('load', () => {
	const { Vector, Body, World } = require('my-lil-cat')
	const { Canvas } = require('marejs')
	const world = new World()
	const canvas = new Canvas()

	const b1 = new Body({
		pos: new Vector(canvas.width / 2, canvas.height / 2),
		acc: new Vector(0, 1)
	})


	world.addBody(b1)

	setInterval(function() {
		canvas.background(51)
		canvas.fill(255)
		world.update()
		canvas.rect(b1.pos.x, b1.pos.y, b1.w, b1.h)
	}, 30)
})