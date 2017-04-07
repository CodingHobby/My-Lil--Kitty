window.addEventListener('load', () => {
	const { Vector, Body, World, Renderer } = require('./my-lil-cat')

	const world = new World()

	const renderer = new Renderer({ world })
	const c = renderer.createCanvas(600, 600)
	c.background(51)
})
