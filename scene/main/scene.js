
class Scene extends GuaScene {
    constructor(game) {
        super(game)


        // bg
        var title = GuaImage.new(game, 'title')
        this.addElement(title) 

        var label = GuaLable.new(game, 'Game Bird. Press k to start')
        this.addElement(label)

        game.registerAction('k', function () {
            let scene = SceneTitle.new(game)
            game.replaceScene(scene)
        })
    }

    // draw() {
    //     this.game.context.fillText('Game Bird, press k to start', 100, 180)
    // }


}