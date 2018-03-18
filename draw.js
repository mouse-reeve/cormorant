var cormorant;

function setup() {
    createCanvas(600, 500)
    background('#00f')
    cormorant = new Cormorant()
    noLoop();
}

function draw() {
    // movement
    var body = cormorant.get_body()

    push();
    stroke('#000')
    noFill()
    strokeWeight(2)

    beginShape();
    for (var i = 0; i < body.length; i++) {
        var body_point = body[i]
        console.log(body_point)
        vertex(body_point.x, body_point.y)
    }
    endShape(CLOSE)
    pop();
}

