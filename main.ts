function hond () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # # . . #
        . # # # .
        . # . # .
        `)
}
function slang () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . . # .
        . . . # .
        . . . # #
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # . #
        . . # . #
        . . # # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . # . # #
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # # .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
    slang()
})
