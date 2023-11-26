// const PI = 3.141592653589793;
// let x = 2;
// var y = 3;


// const cars = ["Saab", 4, "BMW"];


// const fruits = [];
// fruits.push("banana", "apple", "peach");

// console.log(fruits.length); // 3
// console.log("nasze zajecia JS"); 
// console.log("Ile ma elementów tablica? ", fruits.length); 



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     pets: 'cat'
// };


// alert(message) 




// function showMessage() {
//     alert( "Hello everyone!" );
// }
// showMessage()









// PROMPT dla wieku 21



// var wiek = prompt('podaj wiek');

// if (wiek >= 18) {
//     alert('Yay, you can enter our website!');
// } else {
//     alert('Sorry, you’re too young!');
// }





// prompt(message, default)
// spytaj o wiek i alert






// let age = prompt('How old are you?', 18);
  
// if ( age >=18 ) {
//     alert( 'Access granted' );
// } else {
//     alert( 'Access denied' );
// }



















// ALERT i PROMPT (wiek i sprawdzenie)






// var wiek = prompt('podaj wiek');

// if (wiek >= 18) {
//     alert('Yay, you can enter our website!');
// } else {
//     // funkcja czy rodzić pozwolił Ci wejśc na strone?
// }







// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
// }
  
// let age = prompt('How old are you?', 18);
  
// if ( checkAge(age) ) {
//     alert( 'Access granted' );
// } else {
//     alert( 'Access denied' );
// }























// DOODAWANIE

















// function sum(a, b) {
//     return a + b;
// }

// let number1 = prompt('Dodawanie - pierwsza liczba');
// let number2 = prompt('Dodawanie - druga liczba');

// let result = sum(parseInt(number1), parseInt(number2));
// alert( result ); 














// LOOP i wypisywanie liczb
// for (let i = 0; i < n; i++) 

















// let number = prompt('Ile liczb wypisać?');

// function showNumber(n) {
//     for (let i = 0; i < n; i++) {
//       console.log('Liczba', i)
//     }
// }

// showNumber(number)















// var photosSection = document.getElementById("photos");
// photosSection.style.backgroundColor = 'red';





var mobileMenu = document.getElementsByClassName("hero-title")[0];
mobileMenu.style.color = 'red';
