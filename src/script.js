function subscribe() {
    let name = prompt("What is your name?");
    let contact = prompt("Write your email, we'll send you the list ASAP");
    let movie = prompt("Would you like to get your movie recommendation every Friday?");
    movie = movie.toLowerCase()
    movie = movie.trim()

    let h1 = document.querySelector("h1");

        if (movie === "yes" || movie === "sure" || movie === "of course" || movie === "all right" || movie === "absolutely") {
            h1.innerHTML = "Great choice, " + name + "! We'll be in touch✨";
} else {
        alert("Then, have a good day, " + name + "! Watch a great movie🍿");
    }
    }

    let listButton = document.querySelector("button");

    listButton.addEventListener("click", subscribe);