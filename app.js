window.addEventListener('load', () => {
	const { Vector, Body, World, Renderer } = require('./my-lil-cat')

	const world = new World()

	world.addBody(new Body({shape: 'RECT'}))

	const renderer = new Renderer({ world })
	const c = renderer.createCanvas(600, 600)
	renderer.render()
	c.background(51)
})
