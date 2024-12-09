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


//  let User = prompt('Quien es?', '')

//  if (User == "Admin") {

//      let PassWord = prompt('Y tu contrasenya?', '')

//      if ( PassWord == "Buenas" ){
//          alert("Bienvenido jefe");
//      } else if ( PassWord == '' || PassWord == null ) {
//          alert("Escribe")
//      } else {
//          alert("No puedes")
//      }
// } else if ( User == '' || User == null ) {
//      alert( "Quien eres" )
//  } else {
//      alert( "Deja" )
//  }



// CICLOS while
// while (condition) {
//     sentences;
//     sentences;
// }

// let counter = 0;

// while (counter < 3){
//     alert(counter)
//     counter++;
// }

// CICLOS for
// for (begin; condition, step); {
// for body 
// }

// for (let counter = 0; counter < 3; counter++) {
//     alert(counter);
// }



// FUNCIONES
// function showMessage() {
//     alert("Hola");
// }

// showMessage();
// showMessage();



// FUNCIONES CON VARIABLES LOCALES
// function showMessage() {
//     let message = "hola"
//     alert(message)
// }

// showMessage();
// alert(message);



// FUNCIONES CON VARIABLES EXTERNAS
// let userName = "Alex";

// function showMessage() {
//     let message = "hola" + userName;
//     alert(message);
// }

// showMessage();



function calculator() {
    let continueCalculating = true;

    while (continueCalculating) {
        let Num1 = prompt( 'Ingresa el primer numero' );
        let Operator = prompt( 'Que operacion' );
        let Num2 = prompt( 'Ingresa el segundo numero' );

        if (Num1 === null || Operator === null || Num2 === null) {
            alert('Hasta luego');
            break;
        }

        Num1 = Number(Num1);
        Num2 = Number(Num2);

            if ( Operator === '+' ){
                alert( Num1 + Num2 );
            } else if ( Operator === '-' ) {
                alert( Num1 - Num2 );
            } else if ( Operator === '*' ) {
                alert( Num1 * Num2 );
            } else if ( Operator === '/' ) {
                alert( Num1 / Num2 );
            }
        }
}

calculator();