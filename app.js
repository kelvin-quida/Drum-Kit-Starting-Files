let a = document.querySelectorAll("button.drum")
for (let count = 0; count < a.length; count++)
    document.querySelectorAll("button.drum")[count].addEventListener("click", function () {
        let buttonHTML = this.innerHTML
        animation(buttonHTML)

        switch (buttonHTML) {
            case 'w':
                let tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            case 'a':
                let tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
            case 's':
                let tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;
            case 'd':
                let tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;
            case 'j':
                let snare = new Audio("sounds/snare.mp3")
                snare.play()
                break;
            case 'k':
                let crash = new Audio("sounds/crash.mp3")
                crash.play()
                break;
            case 'l':
                let kick = new Audio("sounds/kick-bass.mp3")
                kick.play()
                break;
            default:
                break;
        }
    })

document.addEventListener("keydown", function (event) {
    animation(event.key)
    switch (event.key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case 'j':
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case 'k':
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case 'l':
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        default:
            break;
    }
})

function animation(saberatos) {
    let a = document.querySelector("." + saberatos)
    a.classList.add("pressed")

    setTimeout(() => {
        a.classList.remove("pressed")
    }, 100);
}

