class App {
    constructor () {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        window.requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * pixelRatio
        this.canvas.height = this.stageHeight * pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, stageHeight)
    }
}

window.onload = () => {
    new App();
}