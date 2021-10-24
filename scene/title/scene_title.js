class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.pipeGap = 200
        this.columnsOfPipe = 3
        for (var i = 0; i < this.columnsOfPipe; i++) {
            var p1 = GuaImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.pipeGap
            var p2 = GuaImage.new(game, 'pipe')
            p2.x = p1.x
           this.resetPipesPosition(p1, p2)
           this.pipes.push(p1)
           this.pipes.push(p2)
        }


    }

    static new(game) {
        return new this(game)
    }

    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(50, 200)
        p2.y = p1.y + p1.h + this.pipeSpace

    }

    update() {
        for (const p of this.pipes) {
            p.x -= 5
            if (p.x <= -100) {
                p.x += this.pipeGap * this.columnsOfPipe
            }
        }

    }

    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.ratation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
       
    }
}

class SceneTitle extends GuaScene {
    constructor(game) {
        console.log('SceneTitle')
        super(game)
        this.game = game
        this.setup(game);

        // bg
        var sky = GuaImage.new(game, 'sky')
        this.addElement(sky) 
        
        // 水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)

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
