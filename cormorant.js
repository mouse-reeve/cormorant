class Cormorant {
    constructor() {
        // spine length is the reference for all other bird dimensions
        this.spine_length = 100
        this.spine_theta = (3 * PI) / 4

        // fixed point where it is standing
        this.base = {x: width / 2, y: 3 * height / 4}
    }

    get_body() {
        /* Body:  |\
                  |  \
           base -->\__\
        */
        // define the lengths of the body relative to the length of the spine
        var base_length = this.spine_length * 0.5

        var spine_base = {x: this.base.x + base_length, y: this.base.y}
        var spine_top = this.complete_line(spine_base, this.spine_theta, this.spine_length)

        var chest_apex = this.complete_line(spine_top, 3 * HALF_PI, base_length)

        return [
            this.base,
            spine_base,
            spine_top,
            chest_apex,
        ]
    }

    complete_line(point, theta, length) {
        return {
            x: Math.floor(point.x + cos(theta) * length),
            y: Math.floor(point.y - sin(theta) * length)
        }
    }

    // movement functions
    flap() {
    }
}
