/*
    Esta prueba tiene como el objetivo de entender y analizar como funciona los callbaks de las funciones
*/

function funcionPadre(inta, intb, cb)
{
    console.log('Empiezan suma')
    var int1 = inta,
        int2 = intb

    console.log(int1 + int2)

    cb()
}

console.log('Empieza el flujo')

funcionPadre(3,3, () =>
{
    console.log('Holi')
    // Solamente se pueden ejecutar cb descedentemente que NO sean anonimos 
    sayHoli('parece funcionar', () =>
    {
        sayHoli('Creo que si UwU', () =>
        {
            console.log('Si *w*')
        })
    })
})

function sayHoli(text, cb)
{
    console.log(text)
    cb()
}
