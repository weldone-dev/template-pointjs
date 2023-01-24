class Component {
    constructor(pjs) {
        this.pjs = pjs
        this.init()
    }
    resize(){
        setTimeout(this.init, 200)
    }
    init() {}

    render() {}
}
export default Component