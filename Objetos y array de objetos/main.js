let alumno = {
    nombre: 'Emmanuel',
    apellido: 'Maldonado',
    dni: 45512322,
    correos: {
        gmail: 'em@gmail.com',
        yahoo: 'em@yahoo.com.ar',
        outlook: 'em@outlook.com',
    }
}
//Forma 1:
/* 
console.log(alumno.correos.gmail)
console.log(alumno.correos.yahoo)
console.log(alumno.correos.outlook)
*/
//Forma 2:
/*
const gmail = alumno.correos.gmail
const yahoo = alumno.correos.yahoo
const outlook = alumno.correos.outlook
console.log(`Correos:

    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)
*/
//Forma 3(Destructuring object):
const {yahoo, gmail, outlook} = alumno.correos
console.log(`Correos:

    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)