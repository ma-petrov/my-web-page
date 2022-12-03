// class Observer {

// }

// class Observable {
//     constructor() {
//         this.observers = new Array();
//     }

//     addSubscriber(observer) {
//         if (typeof(observer) === Observer) {
//             this.observers.push(observer);
//         }
//     }

//     notice(msg) {
//         this.observers.forEach(o => {
//             o.update(msg);
//         });
//     }
// }


class Container {
    constructor(element, id) {
        this.element = element;
        this.id = id;
        this.top = 100 * id;
        this.updateTop(this.top);
    }

    updateTop(top) {
        this.element.style.top = `${String(top)}vh`;
    }

    move(deltaY) {
        this.top += deltaY;
        this.updateTop(this.top);
    }
}


class ContainersScroller {
    constructor() {
        this.logger = new Logger("ContainersScroller");
        this.containers = new Array();
        let containerElements = $(".container");
        for (let id = 0; id < containerElements.length; id += 1) {
            this.containers.push(new Container(containerElements[id], id));
        }
    }

    move(deltaY) {
        this.logger.info(`move, delta y: ${deltaY}`);
        this.containers.forEach(c => {
            c.move(deltaY);
        });
    }
}


class ScrollTouch {
    constructor() {
        this.containersScroller = new ContainersScroller();
        this.logger = new Logger("ScrollTouch");
        this.isTouch = false;
        this.firstY = 0;
        this.nextY = 0;
        $(document).on("touchstart", (e) => {this.onTouchStart(e);});
        $(document).on("touchmove", (e) => {this.onTouchMove(e);});
        $(document).on("touchend", (e) => {this.onTouchEnd(e);});
    }

    onTouchStart(e) {
        if (e.touches.length == 1) {
            this.firstY = e.touches.item(0).clientY;
            this.nextY = this.firstY;
            this.isTouch = true;
            this.logger.info(`TS, first Y: (${this.firstY})`);
        }
        else {
            this.isTouch = false;
        }
    }

    onTouchMove(e) {
        if (e.touches.length == 1 && this.isTouch) {
            let y = e.touches.item(0).clientY;
            let deltaY = y - this.nextY;
            this.nextY = y;
            // this.logger.info(`TM, delta Y: (${deltaY})`);
            this.containersScroller.move(deltaY / 2);
        }
        else {
            this.isTouch = false;
        }
    }

    onTouchEnd(e) {
        if (this.isTouch) {
            this.isTouch = false;
            let deltaY = e.touches.item(0).clientY - this.firstY;
            this.logger(`TE, delta Y: ${deltaY}`);
        }
    }
}


const scrollTouch = new ScrollTouch();
