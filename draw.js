var cormorant;
var x = 0
var head_theta
var spine_theta
var wing_stretch

function setup() {
    createCanvas(600, 500)
    cormorant = new Cormorant()
    head_theta = PI
    spine_theta = (3 * PI) / 4
    wing_stretch = 0.5
}

function draw() {
    // movement
    background('#fff')
    var bird = cormorant.get_bird(spine_theta, head_theta, wing_stretch)
    draw_bird(bird)
    head_theta += sin(x / 4) / 200
    spine_theta += sin(x / 8) / 400
    wing_stretch += sin(x / 8) / 50
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
    for (var i = 0; i < bird.feet.length - 1; i++) {
        line(bird.feet[i].x, bird.feet[i].y, bird.feet[i + 1].x, bird.feet[i + 1].y)
    }

    // wings
    for (var w = 0; w < bird.wings.length; w++) {
        for (var i = 0; i < bird.wings[w].length - 1; i++) {
            line(bird.wings[w][i].x, bird.wings[w][i].y, bird.wings[w][i + 1].x, bird.wings[w][i + 1].y)
        }
    }

    pop();
}
