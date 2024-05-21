let Definir = 0
basic.forever(function () {
    Definir = input.lightLevel()
    led.plotBarGraph(
    Definir,
    128
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Definir)
    }
})
