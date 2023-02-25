
let button = document.getElementById("increment-btn")

let increment1 = 0

let countEl = document.getElementById("count-el")

let clicked = false

let errorMes = document.getElementById("error")

let level = "No Level Selected"

let secondsset = 10

console.log(clicked)

function level1Set() {
    secondsset = secondsset + 9
    level = "Level 1"
    clicked = true
    console.log(clicked)
}

function level2Set() {
    secondsset = secondsset - 1
    level = "Level 2"
    clicked = true
    console.log(clicked)
}
function level3Set() {
    secondsset = secondsset - 6
    level = "Level 3"
    clicked = true
    console.log(clicked)
}

function start() {

    if (clicked) {
        increment()
    }

    if (increment1 < 1) {

        document.getElementById("increment-btn").disabled = true;
        errorMes.innerText = "Please Select a Level!"
        setTimeout(() => {
            errorMes.innerText = ""
            document.getElementById("increment-btn").disabled = false;
        }, 5000)
    }
}

function increment() {
    console.log(clicked)

            if (increment1 <= 1) {
                timer()
            }
            increment1 += 1
            countEl.innerText = increment1
        }


function timer() {
    var seconds = secondsset
    var counter = setInterval(function() {
        document.getElementById("increment-btn").innerHTML= seconds
        seconds--
        if (seconds < 0) {
            clearInterval(counter)
            location.reload()
        }
    }, 1000)

}
