class MyArray {
	constructor() {
		this.length = 0
		this.data = {}
	}
	get(index) {
		return this.data[index]
	}
	push(item) {
		this.data[this.length] = item
		this.length++
		return this.data
	}
	pop() {
		const lastItem = this.data[this.length - 1]
		delete this.data[this.length - 1]
		this.length--
		return lastItem
	}
	delete(index) {
		const item = this.data[index]
		this.shiftIndex(index)
		return item
	}
	shiftIndex(index) {
		//* Aqui se reajusta todo para que el valor de el elemento siguiente pase al anterior
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		//* Esto elimina el elemento final sobrante
		delete this.data[this.length - 1]
		//* Aqui se reduce el dato que proporciona informacion de el tamaño de el array
		this.length--
	}
	// Agrega un elemento al inicio del array
	unshift(item) {
		//* Aqui pasas a los ultimos elementos el dato de el elemento anterior
		for (let i = this.length; i > 0; i--) {
			this.data[i] = this.data[i - 1]
		}
		//* Aquí agregas el tem en la primera posición y aumentas el tamaño de el array
		this.data[0] = item
		this.length++
		return this.data
	}
}

const myArray = new MyArray()
