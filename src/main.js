import PointJS from "wldd-pointjs"
import Logo from "./components/Logo.js";

(function () {
    const pjs = new PointJS()
    pjs.system.initFullPage()

    const components = [
        new Logo(pjs)
    ]

    pjs.system.addEvent("gameResize", "PointJS_resizeGame", function () {
        console.log("gameResize")
        components.forEach(component => component.resize())
    });
    pjs.game.newLoop("game", () => {
        components.forEach(component => component.render())
    })


    pjs.game.setLoop("game")
    pjs.game.start()
})()
