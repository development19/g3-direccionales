basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Target)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.East)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showArrow(ArrowNames.East)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.West)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showArrow(ArrowNames.West)
    } else {
        basic.clearScreen()
    }
    
})
