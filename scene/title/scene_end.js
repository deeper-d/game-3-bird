
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.game = game
    }
    
    draw() {
        console.log('this.game ==', this.game)
        this.game.context.fillText('Game Over', 100, 180)
    }
}