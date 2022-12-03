class Logger {
    constructor(context) {
        this.context = context;
    }

    log(level, msg) {
        let log = `[${level}] [${this.context}] - ${msg}`
        $.ajax({
            method: "post",
            url: "/log",
            data: log,
        });
    }

    info(msg) {
        this.log('INFO', msg);
    }
}