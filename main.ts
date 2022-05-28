input.onButtonPressed(Button.A, function on_button_pressed_a() {
    while (true) {
        basic.showLeds(`
                        # . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . #
        `)
        basic.pause(1000)
        basic.showLeds(`
                        . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        `)
        basic.pause(1000)
    }
})
