export class autoScroll {
    #animate;
    #id;
    #interval;
    #backtrack;
    #direction = 'toBottom';
    #mouse;
    #timer = null;
    constructor({ id = '', interval = 2000, backtrack = false, mouse = true }) {
        this.#id = id
        this.#interval = interval
        this.#backtrack = backtrack
        this.#mouse = mouse
    }
    start() {
        const animateFn = () => {
            const dom = document.querySelector(this.#id)
            if (dom.scrollHeight <= dom.clientHeight) {
                return
            }
            if (dom) {
                this.#direction === 'toTop' && (dom.scrollTop -= 1)
                this.#direction === 'toBottom' && (dom.scrollTop += 1)
                if (dom.scrollTop === 0) {
                    this.clear()
                    this.#direction = 'toBottom'
                    this.move(animateFn, this.#interval)
                } else if (dom.scrollHeight - dom.clientHeight <= dom.scrollTop) {
                    this.clear()
                    if (this.#backtrack) {
                        this.#direction = 'toTop'
                        this.move(animateFn, this.#interval)
                    } else {
                        dom.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                        this.move(animateFn, this.#interval)
                    }

                } else {
                    this.move(animateFn)
                }
            }
        }
        setTimeout(() => {
            animateFn()
            this.#mouse && this.mouseListen(animateFn)
        }, 0);
    }
    mouseListen(animateFn) {
        const dom = document.querySelector(this.#id)
        dom.addEventListener('mouseover', () => this.clear())
        dom.addEventListener('mouseleave', animateFn)
    }
    move(animateFn, time) {
        time && !this.#timer && (this.#timer = setTimeout(() => {
            this.#animate = requestAnimationFrame(animateFn);
            this.#timer = null
        }, time))
        !time && !this.#timer && (this.#animate = requestAnimationFrame(animateFn))
    }
    clear() {
        cancelAnimationFrame(this.#animate)
    }
}