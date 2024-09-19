let title = document.querySelector('section.banner h1')
let leaf = document.querySelector('section.banner .leaf')
let hill1 = document.querySelector('section.banner .hill1')
let hill4 = document.querySelector('section.banner .hill4')
let hill5 = document.querySelector('section.banner .hill5')

window.addEventListener('scroll',()=>{
    let value = window.scrollY
    title.style.letterSpacing = `${value * 0.08}px`
    title.style.marginTop = `${value * 1.0}px`
    leaf.style.top = `${value * -1.5}px`
    leaf.style.left = `${value * 1.0}px`
    hill5.style.left = `${value * 0.3}px`
    hill4.style.left = `${value * -0.5}px`
    hill1.style.top = `${value * 0.5}px`
    if (document.querySelector("header nav").classList.contains("active")) {
        document.querySelector("header nav").classList.remove("active")
        document.querySelector("header .buttonToggle").innerHTML = `<i class="fas fa-bars"></i>`
        document.querySelector("section.banner").classList.remove("active")
    }
})

function menuToggle() {
    if (document.querySelector("header nav").classList.contains("active")) {
        document.querySelector("header nav").classList.remove("active")
        document.querySelector("header .buttonToggle").innerHTML = `<i class="fas fa-bars"></i>`
        document.querySelector("section.banner").classList.remove("active")
    } else {
        document.querySelector("header nav").classList.add("active")
        document.querySelector("header .buttonToggle").innerHTML = `<i class="fas fa-times"></i>`
        document.querySelector("section.banner").classList.add("active")
    }
}