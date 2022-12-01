class Container {
    constructor(element, id) {
        this.element = element;
        this.id = id;
        this.top = this.getInitialTop(id);
    }

    getInitialTop(i) {
        return 100*i;
    }

    updateTop() {
        this.element.style.top = `${String(this.top)}vh`;
    }

    moveUp() {
        this.top += 100;
        this.updateTop();
    }

    moveDown() {
        this.top -= 100;
        this.updateTop();
    }
}

class ContainerSwitchManager {
    constructor() {
        this.containers = new Array();
        let containers = document.querySelectorAll(".container");
        for (let id = 0; id < containers.length; id += 1) {
            this.containers.push(new Container(containers[id], id));
        }
        document.querySelectorAll(".move-up-button").forEach(e => {
            e.addEventListener("click", () => {this.moveUp();})
        });
        document.querySelectorAll(".move-down-button").forEach(e => {
            e.addEventListener("click", () => {this.moveDown();})
        });
    }

    moveUp() {
        this.containers.forEach(c => {c.moveUp();});
    }

    moveDown() {
        this.containers.forEach(c => {c.moveDown();});
    }
}

const containerSwitchManager = new ContainerSwitchManager();