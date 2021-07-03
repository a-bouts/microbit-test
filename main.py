right = 0
left = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
music.start_melody(music.built_in_melody(Melodies.BIRTHDAY),
    MelodyOptions.FOREVER_IN_BACKGROUND)

def on_forever():
    global left, right
    left = randint(-100, 100)
    right = randint(-100, 100)
    basic.pause(1000)
    RingbitCar.freestyle(left, right)
basic.forever(on_forever)
