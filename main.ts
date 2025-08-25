let one = 0
basic.forever(function () {
    one = 0
    basic.showString("GO!")
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
    one = randint(0, 5)
    if (one == 1) {
        for (let index = 0; index < 3 + 1; index++) {
            basic.showLeds(`
                . . # . .
                # # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
        }
        basic.showString("Anne")
        basic.pause(100)
        basic.clearScreen()
        basic.showString("Noapte Buna, draga.")
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
        basic.showString("¶ Tu reviendras…")
    }
})
