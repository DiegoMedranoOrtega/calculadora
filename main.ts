input.onButtonPressed(Button.A, function () {
    suma = numero1 + numero2
    basic.showNumber(suma)
    suma = "sumaste"
})
input.onButtonPressed(Button.AB, function () {
    multiplicación = numero1 * numero2
    basic.showNumber(multiplicación)
    multiplicación = "multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    resta = numero1 + numero2
    basic.showNumber(resta)
    resta = "restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(numero1)
    basic.showNumber(numero2)
    basic.showString(texto)
})
let texto = ""
let multiplicación = 0
let resta = 0
let suma = 0
let numero2 = 0
let numero1 = 0
numero1 = randint(1, 5)
numero2 = randint(1, 5)
suma = 0
resta = 0
multiplicación = 0
texto = "Ninguna"
basic.forever(function () {
	
})
