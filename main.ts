input.onButtonPressed(Button.A, function () {
    sing = 1 - sing
    if (sing == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    } else {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    danse = 1 - danse
})
let right = 0
let left = 0
let danse = 0
let sing = 0
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (danse == 1) {
        left = randint(-100, 100)
        right = randint(-100, 100)
        basic.pause(1000)
        RingbitCar.freestyle(left, right)
    } else {
        RingbitCar.freestyle(0, 0)
    }
})
