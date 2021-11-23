
const button = document.querySelector("button");

button.addEventListener("click", function() {
    
    const ul = document.querySelector(".quadrati-container");
    ul.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        const mate = Math.floor(Math.random() * 101);
        const li = document.createElement("li");
        li.append(mate);
        li.classList.add("box");
        ul.append(li);
    
         if (mate % 15 == 0) {
            li.innerHTML = "fizzbuzz"
            li.classList.add("red")
        }else if (mate % 3 == 0) {
            li.innerHTML= "fizz";
            li.classList.add("green")
        } else if (mate % 5 == 0) {
            li.innerHTML= "buzz";
            li.classList.add("yellow");
        } else {
            li.classList.add("blue")
        }
    } 
})

