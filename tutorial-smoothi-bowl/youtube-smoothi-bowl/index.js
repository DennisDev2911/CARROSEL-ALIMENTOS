function changeSmoothie(fruit) {
    const bowls = document.getElementById('bowls')

    bowls.classList =''
    bowls.classList.add(fruit)

    const body = document.querySelector('body')
    body.style.backgroundColor = `var(--${fruit}-background)`
}