const toggle = document.getElementById("toggle")
const body = document.body
const bodyStyle = getComputedStyle(body)
const mode_name = document.getElementById("tg-txt")
let mode = body.getAttribute("color-mode")


toggle.addEventListener('click', switchMode)

function switchMode() {
    if (mode === "dark") mode = "light"
    else mode = "dark"

    const dot = document.getElementById("mode-dot")
    const styles = body.style
    if (mode === "light") {
        styles.setProperty("--very-dark-blue-bg","white")
        styles.setProperty("color","hsl(230, 17%, 14%)")
        styles.setProperty("--desaturated-blue","hsl(228, 12%, 44%)")
        styles.setProperty("--dark-desaturated-blue","hsl(227, 47%, 96%)")
        mode_name.innerHTML = "Light Mode"
        dot.classList.add("go-light")
        
    } else {
        styles.setProperty("--very-dark-blue-bg","hsl(230, 17%, 14%)")
        styles.setProperty("color","white")
        styles.setProperty("--desaturated-blue","hsl(228, 34%, 66%)")
        styles.setProperty("--dark-desaturated-blue","hsl(228, 28%, 20%)")
        mode_name.innerHTML = "Dark Mode"
        dot.classList.remove("go-light")

        
    }
}
