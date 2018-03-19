var cormorant;

function setup() {
    createCanvas(600, 500)
    background('#00f')
    cormorant = new Cormorant()
    noLoop();
}

function draw() {
    // movement
    var bird = cormorant.get_bird()

    push();
    stroke('#000')
    noFill()
    strokeWeight(2)

    // body
    beginShape();
    ellipse(bird.body[0].x, bird.body[0].y, 4)
    for (var i = 0; i < bird.body.length; i++) {
        var body_point = bird.body[i]
        vertex(body_point.x, body_point.y)
    }
    endShape(CLOSE)
    // neck
    for (var i = 0; i < bird.neck.length - 1; i++) {
        line(bird.neck[i].x, bird.neck[i].y, bird.neck[i + 1].x, bird.neck[i + 1].y)
    }

    beginShape();
    for (var i = 0; i < bird.feet.length - 1; i++) {
        line(bird.feet[i].x, bird.feet[i].y, bird.feet[i + 1].x, bird.feet[i + 1].y)
    }
    endShape(CLOSE)

    pop();
}

