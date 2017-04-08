window.addEventListener('load', () => {
	const { Vector, Body, World, Renderer } = require('./my-lil-cat')

	const world = new World()
	const renderer = new Renderer({ world })
	const c = renderer.createCanvas(600, 600)

	const b1 = new Body({
		pos: new Vector(c.width/2, c.height/2)
	})

	b1.setShape('RECT')

	world.addBody(b1)

	c.background(51)
	// TODO replace w/ 3 arguments instead of an array
	c.fill(255)
	renderer.render()
})
