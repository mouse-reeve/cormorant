class Cormorant {
    constructor() {
        // spine length is the reference for all other bird dimensions
        this.spine_length = 200
        this.spine_theta = (3 * PI) / 4
        this.head_theta = PI

        // fixed point where it is standing
        this.base = {x: width / 2, y: 3 * height / 4}
    }

    get_bird() {
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

        var bird = {body: [
            this.base,
            chest_apex,
            spine_top,
            spine_base,
        ]}

        /* Neck
                 __
    spine_base -->/
                  |\
                  |  \
           base -->\__\
        */
        // position the top of the neck over the base + offset
        var neck_length = this.spine_length * 0.5
        var neck_base_x = this.base.x - (neck_length * 0.3)

        var neck_theta = acos((neck_base_x - spine_top.x) / neck_length)
        var neck_top = {
            x: neck_base_x,
            y: spine_top.y - sin(neck_theta) * neck_length
        }
        var beak_point = this.complete_line(neck_top, this.head_theta, neck_length / 2)
        bird.neck = [spine_top, neck_top, beak_point]

        /* Feet
                 __
                  /
                  |\
                  |  \
           base -->\__\
                   ^
        */
        var leg_length = this.spine_length * 0.1
        var toe_length = leg_length * 1.2
        var leg_end_y = this.base.y + leg_length
        var leg_distance = chest_length / 3
        bird.feet = [
            this.base,
            {x: this.base.x, y: leg_end_y},
            {x: this.base.x - toe_length, y: leg_end_y + (leg_length / 2)},
            {x: this.base.x, y: leg_end_y + (leg_length / 6)},
            {x: this.base.x + toe_length, y: leg_end_y + (leg_length / 2)},
            {x: this.base.x, y: leg_end_y},
        ]
        return bird
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
