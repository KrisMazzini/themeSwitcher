const elements = () => document.querySelectorAll("*")

function setInitialTheme() {
    const time = new Date().getHours();
    const theme = (time >= 6 && time < 18) ? "light" : "dark"

    elements().forEach(elem => elem.classList.add(theme))
}

function switchTheme() {
    elements().forEach(elem => {
        elem.classList.toggle("light")
        elem.classList.toggle("dark")
    })
}