class SceneTitle extends GuaScene {
    constructor(game) {
        console.log('SceneTitle')
        super(game)
        this.game = game
        this.setup(game);

        // bg
        var sky = GuaImage.new(game, 'sky')
        this.addElement(sky)        

        // 循环移动的地面
        this.grounds = []
        for (let i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = 540
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 5

        // bird
        var b = GuaAnimation.new(game)
        b.x = 80
        b.y = 100
        this.bird = b
        this.addElement(b)
        this.setupInputs()

    }

    setup(game) {
        var self = this
        var lable = GuaLable.new(game, 'hello this is gua game')
        this.addElement(lable)
    }
    
    setupInputs() {
        var self = this
        var bird = this.bird
        self.game.registerAction('a', function (keyStatus) {
            bird.move(-5, keyStatus)
        })
        self.game.registerAction('d', function (keyStatus) {
            bird.move(5, keyStatus)
        })
        self.game.registerAction('j', function (keyStatus) {
            console.log('keyStatus =', keyStatus)
            bird.jump()
        })
    }

    draw() {
        super.draw()
        // this.game.context.fillText('开始游戏 按 k 开始', 100, 180)
    }

    update() {
        // TODO:为什么这里让地面滚动需要调用父类的update??
        super.update()
        // 地面移动
        this.skipCount--
        var offset = -5
        if (this.skipCount === 0) {
            this.skipCount = 5
            offset = 20
        }
        for (let i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
}
