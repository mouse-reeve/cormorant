class Cormorant {
    constructor() {
        // spine length is the reference for all other bird dimensions
        this.spine_length = 200
        this.spine_theta = (2 * PI) / 3

        // fixed point where it is standing
        this.base = {x: width / 2, y: 3 * height / 4}
    }

    get_body() {
        /* Body:  |\
                  |  \
           base -->\__\
        */
        // define the lengths of the body relative to the length of the spine
        var stomach_length = this.spine_length * 0.4
        var stomach_depth = this.spine_length * 0.3
        var chest_length = Math.sqrt(
            (((this.spine_length - stomach_length) / 2) ** 2) +
            (stomach_depth ** 2)
        )
        var theta = PI - acos(
            ((this.spine_length - stomach_length) / 2) / chest_length
        )

        var chest_apex = this.complete_line(this.base, this.spine_theta, stomach_length)
        var spine_top = this.complete_line(chest_apex, theta - (PI - this.spine_theta), chest_length)
        var spine_base = this.complete_line(spine_top, this.spine_theta, TWO_PI - this.spine_length)

        return [
            this.base,
            chest_apex,
            spine_top,
            spine_base,
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
