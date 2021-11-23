// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

 const ul = document.querySelector(".quadrati-container");

for (let i = 1; i <= 100; i++) {

    const li = document.createElement("li");
    li.append(i);
    li.classList.add("box");
    ul.append(li);

     if (i % 15 == 0) {
        li.innerHTML = "fizzbuzz"
        li.classList.add("red")
    }else if (i % 3 == 0) {
        li.innerHTML= "fizz";
        li.classList.add("green")
    } else if (i % 5 == 0) {
        li.innerHTML= "buzz";
        li.classList.add("yellow");
    } else {
        li.classList.add("blue")
    }
} 
