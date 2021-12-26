

class Cloud extends GuaImage {
    constructor(game) {
        var type = randomBetween(1, 5)
        var name = 'cloud' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = 1
        this.x = randomBetween(-100, 200)
        this.y = -randomBetween(0, 200)
    }

    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }

}



class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()

    }

    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'sky')
        // this.cloud = GuaImage.new(game, 'cloud1')
        // this.player = GuaImage.new(g, 'plane') 
        this.player = Player.new(game)
        this.player.x = 200
        this.player.y = 500
        //
        this.numOfEnemies = 10

        // 在父类 GuaImage 里统一 draw 
        this.elements = []
        this.addElement(this.bg)
        this.addElement(this.player)
        //

    }

    addClouds() {
        var es = []
        for (let i = 0; i < 5; i++) {
            var e = Cloud.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    addEnemies() {
        var es = []
        for (let i = 0; i < this.numOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        var g = this.game;   
        var s = this;
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('z', function () {
            s.player.moveDown()
        })
        g.registerAction('j', function () {
            s.player.fire()
        })
    }

    update() {
        
    }

}