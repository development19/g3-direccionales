def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_icon(IconNames.TARGET)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_icon(IconNames.TARGET)
    elif input.button_is_pressed(Button.A):
        basic.show_arrow(ArrowNames.EAST)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_arrow(ArrowNames.EAST)
    elif input.button_is_pressed(Button.B):
        basic.show_arrow(ArrowNames.WEST)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.clear_screen()
basic.forever(on_forever)
