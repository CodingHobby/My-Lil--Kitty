module.exports = class Canvas {
	constructor(w, h) {
		this.id = 'c'
		this.width = w
		this.height = h

		if (!document) {
			throw new Error('Cannot get the document')
		}

		this.el = document.createElement('CANVAS')
		this.el.setAttribute('id', this.id)
		document.body.appendChild(this.el)
		this.context = c.getContext('2D')

		this.el.style.display = 'inline-block'
		this.el.style.width = this.width+'px'
		this.el.style.height = this.height+'px'
	}

	background(color) {
		if(typeof color == 'number') this.el.style.background = 'rgb(' + color + ',' + color + ',' + color + ')'
		else if(color instanceof Array) this.el.style.background = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
	}
}