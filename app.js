window.addEventListener('load', () => {
	const { Vector, Body, World, Renderer } = require('./my-lil-cat')

	const world = new World()
	const renderer = new Renderer({ world })
	const c = renderer.createCanvas(600, 600)

	const b1 = new Body({
		pos: new Vector(c.width/2, c.height/2)
	})

	b1.setShape([[b1.pos.x, b1.pos.y], [b1.pos.x + 50, b1.pos.y], [b1.pos.x + 50, b1.pos.y + 50], [b1.pos.x, b1.pos.y + 50]])

	world.addBody(b1)

	renderer.render()
	c.fill(255)
	c.background(51)
})
