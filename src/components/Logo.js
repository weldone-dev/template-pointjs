import logoPath from "../assets/logo.png";

class Logo {
    constructor(game) {
        this.obj = game.newImageObject(   {
            file : logoPath,
            x : 90,
            y : 40,
            w : 400,
            h : 400,
        });
    }
    render() {
        this.obj.turn(1);
        this.obj.draw()
    }
}
export default Logo