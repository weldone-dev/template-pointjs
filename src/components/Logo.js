import logoPath from "../assets/logo.png";
import Component from "../utils/Component.js";

class Logo extends Component {
    init() {
        const canvasWH = this.pjs.system.getWH()
        const width = canvasWH.w/2
        const height = width
        console.log({width, height})
        this.obj = this.pjs.game.newImageObject(   {
            file : logoPath,
            x : canvasWH.w/2 - width/2,
            y : canvasWH.h/2 - height/2,
            w : width,
            h : height,
        });
        console.log({...canvasWH})
        console.log(this.obj.x)
    }
    render() {
        this.obj.turn(1);
        this.obj.draw()
    }
}

export default Logo