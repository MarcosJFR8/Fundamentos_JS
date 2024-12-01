// VARIABLES
    // let MyName;
    // MyName ="josefino";

    // let MyAge = 15

// let MyName = "josefino2",
//     MyAge = 15,
//     MyMessage = "hello";

// alert(MyName);
// alert(MyAge);
// alert(MyMessage);


// CONSTANTES
// const MyBirthDay = "December 17, 2005";

// alert(MyBirthDay);

// TIPOS DE DATOS
// let MyAge = 33;
// let IsActive = true;
// let IsBlue = false;

// let MyHeight = null;
// let MyHeight2 = undefined;

// PROMPTS
// let year = prompt('anyo actual:');
    // alert(year);

// CONFIRM
// let IsBoss = confirm("Eres el jefe?");
    // alert(IsBoss)

// OPERADORES MATEMATICOS
// let Num1 = 10;
// let Num2 = 20;

// alert( Num1 + Num2 );
// alert ( Num1 - Num2 );
// alert ( Num1 * Num2 );
// alert ( Num1 / Num2 );

// let Num3 = 2;
// Num3++;
// alert(Num3);

// OPERADORES DE COMPARACION
// alert( 2 > 1 );
// alert( 2 < 1 );
// alert( 2 == 1 );
// alert( 2 != 1 ); 

// CONDICONALES
// let year = prompt("ingerse el anyo actual:");

// if ( year == 2024 ) {
//     alert("Muy bien");
//     alert("Mondongo");
// }

// let year = prompt("ingrese el anyo actual:");

// if ( year == 2024 ) {
//     alert("Muy bien");
//     alert("Mondongo");
// } else {
//     alert("No es correcto");
// }

// CONDICIONALES ENCADENADOS
// let year = prompt("ingrese el anyo actual:");

//  if ( year == 2024 ) {
//         alert("Muy bien");
//         alert("Mondongo");
// } else if ( year > 2024 ){
//     alert("Muy alto")
// } else if ( year < 2024 ){
//     alert("Muy bajo")
// }


// OPERADORES LOGICOS = or '||'
// or ||
// alert( true || true ); //true
// alert( true || false ); //true
// alert( false || true ); //true
// alert( false || false ); //false


// let hour = 12;
// let IsWeekend = false;

// if ( hour < 9 || hour > 18 || IsWeekend){
//     alert("La oficina esta cerrada");
// } else {
//     alert("Open");
// }


// OPERADOR LOGICO = and '&&'
// alert( true && true ); //true
// alert( true && false ); //false
// alert( false && true ); //false
// alert( false && false ); //false


let User = prompt('Quien es?', '')
let PassWord = prompt('Y tu contrasenya?', '')

if (User == "Admin") {


    if ( PassWord == "Buenas" ){
        alert("Bienvenido jefe");
    } else if ( PassWord == '' || PassWord == null ) {
        alert("Escribe")
    } else {
        alert("No puedes")
    }
} else if ( User == '' || User == null ) {
    alert( "Quien eres" )
} else {
    alert( "Deja" )
}