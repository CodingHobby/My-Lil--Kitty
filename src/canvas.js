module.exports = class Canvas {
	constructor(w, h) {
		this.id = 'c'
		this.width = w
		this.height = h
		this.fillColor = 'rgb(0, 0, 0)'
		this.strokeColor = null

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
		this.context.strokeStyle = this.strokeColor
		if (typeof shape == 'string') {
			switch (shape.toUpperCase()) {
				case 'RECT':
					this.context.rect(body.pos.x, body.pos.y, body.w, body.h)
					if (this.fillColor) this.context.fill()
					if (this.strokeColor) this.context.stroke()
					break
				default:
					throw new Error('String not valid')
			}
		} else if(shape instanceof Array) {
			this.context.beginPath()
			this.context.moveTo(body.pos.x, body.pos.y)
			shape.forEach(coord => {
				this.context.lineTo(coord[0], coord[1])
			})
			if(this.fillColor) this.context.fill()
			if(this.strokeColor) this.context.stroke()
		} else {
			throw new Error('Unsopported type')
		}
	}

	fill(r, g, b) {
		if(!g && !b) {
			if(typeof r == 'number') {
				this.fillColor = 'rgb(' + r + ', ' + r + ', ' + r + ')'
			} else if(r instanceof Array) {
				this.fillColor = 'rgb(' + r[0] + ', ' + r[1] + ', ' + r[2]
			}
		} else if(r && g && b) {
			this.fillColor = 'rgb(' + r + ', ' + g + ', ' + b
		} else {
			throw new Error('Unsupported color format')
		}
	}

	stroke(r, g, b) {
		if(!g && !b) {
			if(typeof r == 'number') {
				this.strokeColor = 'rgb(' + r + ', ' + r + ', ' + r + ')'
			} else if(r instanceof Array) {
				this.strokeColor = 'rgb(' + r[0] + ', ' + r[1] + ', ' + r[2]
			}
		} else if(r && g && b) {
			this.strokeColor = 'rgb(' + r + ', ' + g + ', ' + b
		} else {
			throw new Error('Unsupported color format')
		}
	}
}
