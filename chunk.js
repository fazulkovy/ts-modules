class Chunk {
    constructor(size = 1) {
        this._size = size
        this._chunkArray = []
        this._event = []
    }

    get size() {
        return this._size
    }

    get value() {
        return Object.assign([], this._chunkArray)
    }

    setSize(size) {
        this._size = size
    }

    add(value) {
        this._chunkArray.push(value)

        if (this._size <= this._chunkArray.length)
            this.end()
    }

    end() {
        if (this._chunkArray.length) {
            this._event.forEach(cb => cb.call(this, this._chunkArray))
            this._chunkArray = []
        }
    }

    onFull(cb) {
        this._event.push(cb)
    }
}


module.exports = Chunk