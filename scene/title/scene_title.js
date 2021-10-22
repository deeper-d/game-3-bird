class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup(game);

        // sky bg
        var sky = GuaImage.new(this.game, 'sky')
        this.addElement(sky)
        // player
        var w = GuaAnimation.new(game)
        console.log('w', w)
        w.x = 20
        w.y = 400
        this.w = w
        this.addElement(w)

    }

    setup(game) {
        var self = this
        var lable = GuaLable.new(game, 'hello this is gua game')
        this.addElement(lable)
    }
    
    draw() {
        super.draw()
        // this.game.context.fillText('开始游戏 按 k 开始', 100, 180)
    }
}
