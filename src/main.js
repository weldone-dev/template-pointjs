import './style.css'
import PointJS from "wldd-pointjs"
import Logo from "./components/Logo.js";

(function () {
    const pjs = new PointJS(680, 480, {})
    const game = pjs.game
    const logo = new Logo(game)

    game.newLoop("game", () => {
        logo.render()
    })

    game.setLoop("game")
    game.start()
})()
