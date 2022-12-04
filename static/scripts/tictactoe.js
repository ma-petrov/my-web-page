const canvas = document.querySelector("#game-field");
if (!canvas.getContext) {
    alert("unsupported browser");
    window.location.href = "/";
}

const ctx = canvas.getContext("2d");

function drawTile(ctx, i, j, status) {
    const x = j * 50 + i * 50;
    const y = 75 + i * 25 - j * 25;

    ctx.beginPath();
    ctx.moveTo(x + 5, y);
    ctx.lineTo(x + 50, y + 22.5);
    ctx.lineTo(x + 50, y - 22.5);
    if (status == "focused") {
        ctx.fillStyle = "#A0A0A0";
    }
    else {
        ctx.fillStyle = "#D0D0D0";
    }
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 95, y);
    ctx.lineTo(x + 50, y + 22.5);
    ctx.lineTo(x + 50, y - 22.5);
    if (status == "focused") {
        ctx.fillStyle = "#808080";
    }
    else {
        ctx.fillStyle = "#B0B0B0";
    }
    ctx.fill();
}

function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else {
            ctx.lineTo(r, 0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawGameField(ctx) {
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            drawTile(ctx, i, j, "default");
        }
    }

    // ctx.fillRect(0, 0, 150, 150);
    // ctx.translate(75, 75);

    // // Create a circular clipping path
    // ctx.beginPath();
    // ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
    // ctx.clip();

    // // draw background
    // var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    // lingrad.addColorStop(0, '#232256');
    // lingrad.addColorStop(1, '#143778');

    // ctx.fillStyle = lingrad;
    // ctx.fillRect(-75, -75, 150, 150);

    // draw stars
    // for (var j = 1; j < 50; j++) {
    //     ctx.save();
    //     ctx.fillStyle = '#fff';
    //     ctx.translate(75 - Math.floor(Math.random() * 150),
    //                 75 - Math.floor(Math.random() * 150));
    //     drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    //     ctx.restore();
    // }
    
}

function drawCross(ctx, i, j, frame) {
    const x = j * 50 + i * 50;
    const y_wo_frame = 75 + i * 25 - j * 25;

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x + 5, y_wo_frame);
    ctx.lineTo(x + 50, y_wo_frame + 22.5);
    ctx.lineTo(x + 90, y_wo_frame);
    ctx.lineTo(x + 50, y_wo_frame - 22.5);
    ctx.clip();

    const y = 75 + i * 25 - j * 25 + (25 - frame * 2.5);

    ctx.beginPath();
    ctx.moveTo(x + 45, y);
    ctx.lineTo(x + 30, y + 7.5);
    ctx.lineTo(x + 35, y + 10);
    ctx.lineTo(x + 50, y + 2.5);
    ctx.lineTo(x + 65, y + 10);
    ctx.lineTo(x + 70, y + 7.5);
    ctx.lineTo(x + 55, y + 0);
    ctx.lineTo(x + 70, y - 7.5);
    ctx.lineTo(x + 65, y - 10);
    ctx.lineTo(x + 50, y - 2.5);
    ctx.lineTo(x + 35, y - 10);
    ctx.lineTo(x + 30, y - 7.5);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 30, y - 7.5);
    ctx.lineTo(x + 45, y);
    ctx.lineTo(x + 30, y + 7.5);
    ctx.lineTo(x + 35, y + 10);
    ctx.lineTo(x + 35, y + 50);
    ctx.lineTo(x + 30, y + 50);
    ctx.fillStyle = "#B0B0B0";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 70, y - 7.5);
    ctx.lineTo(x + 55, y);
    ctx.lineTo(x + 70, y + 7.5);
    ctx.lineTo(x + 65, y + 10);
    ctx.lineTo(x + 65, y + 50);
    ctx.lineTo(x + 70, y + 50);
    ctx.fillStyle = "#D0D0D0";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 35, y + 10);
    ctx.lineTo(x + 50, y + 2.5);
    ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x + 35, y + 50);
    ctx.fillStyle = "#D0D0D0";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 65, y + 10);
    ctx.lineTo(x + 50, y + 2.5);
    ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x + 65, y + 50);
    ctx.fillStyle = "#B0B0B0";
    ctx.fill();

    ctx.restore();
}

function drawCircle(ctx, i, j, frame) {
    const x = j * 50 + i * 50;
    const y_wo_frame = 75 + i * 25 - j * 25;

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x + 5, y_wo_frame);
    ctx.lineTo(x + 50, y_wo_frame + 22.5);
    ctx.lineTo(x + 90, y_wo_frame);
    ctx.lineTo(x + 50, y_wo_frame - 22.5);
    ctx.clip();

    const y = 75 + i * 25 - j * 25 + (25 - frame * 2.5);

    ctx.beginPath();
    ctx.moveTo(x + 26, y);
    ctx.lineTo(x + 74, y);
    ctx.lineTo(x + 74, y + 50);
    ctx.lineTo(x + 26, y + 50);
    let lingrad = ctx.createLinearGradient(x + 26, y, x + 74, y);
    lingrad.addColorStop(0, '#808080');
    lingrad.addColorStop(1, '#D0D0D0');
    ctx.fillStyle = lingrad;
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x + 50, y, 24, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x + 50, y, 18, 9, 0, 0, Math.PI * 2);
    lingrad = ctx.createLinearGradient(x + 32, y, x + 68, y);
    lingrad.addColorStop(0, '#D0D0D0');
    lingrad.addColorStop(1, '#808080');
    ctx.fillStyle = lingrad;
    ctx.fill();

    ctx.restore();
}

drawGameField(ctx);

function getClickCoordinates(canvas, e) {
    /* Get click coordinates of canvas */
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return {x: x, y: -y}
}

function distanceBetweenPoints(a, b) {
    const xDeltaSqr = Math.pow(a.x - b.x, 2);
    const yDeltaSqr = Math.pow(a.y - b.y, 2);
    return Math.sqrt(xDeltaSqr + yDeltaSqr);
}

function transformCoordinates(c) {
    /* Transform square coordinates of canvas into rect coordinates */
    const beta_x = 0.5 * c.x - c.y - 75;
    const beta_y = -0.5 * beta_x - 75;

    const trn_x = distanceBetweenPoints({x: beta_x, y: beta_y}, {x: 0, y: -75});
    const trn_y = distanceBetweenPoints({x: beta_x, y: beta_y}, c);

    let x_sign = 1;
    if (0.5 * c.x - 75 - c.y < 0) {
        x_sign = -1;
    }
    let y_sign = 1;
    if (0.5 * c.x + 75 + c.y < 0) {
        y_sign = -1;
    }

    return {x: trn_x * x_sign, y: trn_y * y_sign};
}

function getTileCoordinates(c) {
    /* Transform pixel coordinates into tile coordinates */
    const w = Math.sqrt(Math.pow(50, 2) + Math.pow(25, 2));
    return {
        x: Math.floor(c.x/w),
        y: Math.floor(c.y/w),
    }
}

function coordinatesInFieldArea(c) {
    return c.x >= 0 && c.x < 3 && c.y >= 0 && c.y < 3;
}

let prevTileCoordinates = {x: 0, y: 0}

document.addEventListener("mousemove", (e) => {
    const p = prevTileCoordinates;
    const cord = getClickCoordinates(canvas, e);
    const trnC = transformCoordinates(cord);
    const c = getTileCoordinates(trnC);
    console.log(`x: ${c.x}, y: ${c.y}`);
    if (e.target == canvas && coordinatesInFieldArea(c)) {
        if (p.x != c.x || p.y != c.y) {
            if (notPointed(c)) {
                drawTile(ctx, c.x, c.y, "focused");
            }
            if (notPointed(p)) {
                drawTile(ctx, p.x, p.y, "default");
            }
            prevTileCoordinates = {x: c.x, y: c.y};
        }
    }
    else if (notPointed(p)) {
        drawTile(ctx, p.x, p.y, "default");
    }
});

let moveCounter = 0;

canvas.addEventListener("click", (e) => {
    const cord = getClickCoordinates(canvas, e);
    const trnC = transformCoordinates(cord);
    const c = getTileCoordinates(trnC);
    if (coordinatesInFieldArea(c) && notSetted(c)) {
        drawTile(ctx, c.x, c.y, "default");
        if (moveCounter % 2 == 0) {
            for (let frame = 0; frame < 10; frame += 1) {
                setTimeout(() => {drawCross(ctx, c.x, c.y, frame);}, frame * 50);
            }
            setCross(c.x, c.y);
        }
        else {
            for (let frame = 0; frame < 10; frame += 1) {
                setTimeout(() => {drawCircle(ctx, c.x, c.y, frame);}, frame * 50);
            }
            setCircle(c.x, c.y);
        }
        checkWin();
        moveCounter += 1;
    }
});


let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function notSetted(c) {
    return field[c.x][c.y] == 0;
}

function notPointed(c) {
    return !coordinatesInFieldArea(c) || notSetted(c);
}

function setCross(x, y) {
    field[x][y] = 1;
}

function setCircle(x, y) {
    field[x][y] = 2;
}

function checkLine(line) {
    if (line[0] == line[1] && line[1] == line[2]) {
        return line[0];
    }
    else {
        return 0;
    }
}

function checkWin() {
    lineIndexes = [
        {
            first: {x: 0, y: 0},
            second: {x: 0, y: 1},
            third: {x: 0, y: 2},
        },
        {
            first: {x: 1, y: 0},
            second: {x: 1, y: 1},
            third: {x: 1, y: 2},
        },
        {
            first: {x: 2, y: 0},
            second: {x: 2, y: 1},
            third: {x: 2, y: 2},
        },
        {
            first: {x: 0, y: 0},
            second: {x: 1, y: 0},
            third: {x: 2, y: 0},
        },
        {
            first: {x: 0, y: 1},
            second: {x: 1, y: 1},
            third: {x: 2, y: 1},
        },
        {
            first: {x: 0, y: 2},
            second: {x: 1, y: 2},
            third: {x: 2, y: 2},
        },
        {
            first: {x: 0, y: 0},
            second: {x: 1, y: 1},
            third: {x: 2, y: 2},
        },
        {
            first: {x: 0, y: 2},
            second: {x: 1, y: 1},
            third: {x: 2, y: 0},
        },
    ]
    lineIndexes.forEach(i => {
        line = [
            field[i.first.x][i.first.y],
            field[i.second.x][i.second.y],
            field[i.third.x][i.third.y],
        ]
        check = checkLine(line);
        if (check > 0) {
            let fig = "Crosses";
            if (check == 2) {
                fig = "Circles"
            }
            setTimeout(() => {
                alert(`${fig} win!`);
                window.location.href = "/tictactoe";
            }, 500);
        }
    }); 
}
