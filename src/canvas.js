module.exports = class Canvas {
	constructor(w, h) {
		this.id = 'c'
		this.width = w
		this.height = h
		this.fillColor = 'rgb(0, 0, 0)'
		this.strokeColor = 'rgb(0, 0, 0)'

		if (!document) {
			throw new Error('Cannot get the document')
		}

		this.el = document.createElement('CANVAS')
		this.el.setAttribute('id', this.id)
		document.body.appendChild(this.el)
		this.context = this.el.getContext('2d')

		this.el.style.display = 'inline-block'
		this.el.setAttribute('width', this.width)
		this.el.setAttribute('height', this.height)
	}

	background(color) {
		if (typeof color == 'number') this.el.style.background = 'rgb(' + color + ',' + color + ',' + color + ')'
		else if (color instanceof Array) this.el.style.background = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
		else throw new Error('Unsopported color format')
	}

	draw(body) {
		let shape = body.shape
		this.context.fillStyle = this.fillColor
		if (typeof shape == 'string') {
			switch (shape.toUpperCase()) {
				case 'RECT':
					this.context.rect(body.pos.x, body.pos.y, body.w, body.h)
					if (this.fillColor) this.context.fill()
					if (this.strokeColor) this.context.stroke()
					console.log('Yup')
					break
				default:
					console.log('Nah')
			}
		} else {
			console.log('Nope')
		}
	}

	fill(color) {
		if (typeof color == 'number') this.fillColor = 'rgb(' + color + ',' + color + ',' + color + ')'
		else if (color instanceof Array) this.fillColor = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
		else if (color == null) this.strokeColor = null
		else throw new Error('Unsopported color format')
	}

	stroke(color) {
		if (typeof color == 'number') this.strokeColor = 'rgb(' + color + ',' + color + ',' + color + ')'
		else if (color instanceof Array) this.strokeColor = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
		else if (color == null) this.strokeColor = null
		else throw new Error('Unsopported color format')
	}
}