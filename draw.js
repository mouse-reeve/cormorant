var cormorant;
var x = 0
var head_theta
var spine_theta

function setup() {
    createCanvas(600, 500)
    cormorant = new Cormorant()
    head_theta = PI
    spine_theta = (3 * PI) / 4
}

function draw() {
    // movement
    background('#fff')
    var bird = cormorant.get_bird(spine_theta, head_theta)
    draw_bird(bird)
    head_theta += sin(x / 4) / 200
    spine_theta += sin(x / 8) / 400
    x++
}

function draw_bird(bird) {
    push();
    stroke('#000')
    noFill()
    strokeWeight(2)

    // body
    beginShape();
    for (var i = 0; i < bird.body.length; i++) {
        var body_point = bird.body[i]
        vertex(body_point.x, body_point.y)
    }
    endShape(CLOSE)
    // neck
    for (var i = 0; i < bird.neck.length - 1; i++) {
        line(bird.neck[i].x, bird.neck[i].y, bird.neck[i + 1].x, bird.neck[i + 1].y)
    }

    // feet
    beginShape();
    for (var i = 0; i < bird.feet.length - 1; i++) {
        line(bird.feet[i].x, bird.feet[i].y, bird.feet[i + 1].x, bird.feet[i + 1].y)
    }
    endShape(CLOSE)

    pop();
}
