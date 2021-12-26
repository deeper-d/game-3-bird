class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(game) {
        var instance = new this(game)
        return instance
    } 

    addElement(img) {
        this.elements.push(img)
        img.scene = this
    }

    draw() {
        for (let ele of this.elements) {
            ele.draw()
            ele.update()
        }

    }

    update() {
        for (var e of this.elements) {
            e.debug && e.debug()
        }

        for (let e of this.elements) {
            e.draw()
            e.update()
        }
    }
}

