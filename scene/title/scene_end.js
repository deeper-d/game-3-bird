
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.game = game
    }
    
    draw() {
        this.game.context.fillText('Game Over', 100, 180)
    }
}