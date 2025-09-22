const filterButtons = document.querySelectorAll(".filter-btn")
const menuCards = document.querySelectorAll(".menu-card")

filterButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const filter = button.dataset.filter

        filterButtons.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")

        menuCards.forEach(card => {
            if(filter === "all" || card.dataset.category === filter){
                card.style.display = ""
            }
            else{
                card.style.display = "none"
            }
        })
    })
})

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})


// scroll animation

const scrollElements = document.querySelectorAll(".menu-card, .feature-card,  .testimonial-card")
const observer =  new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)"
        }
    })

}, {threshold: 0.1})

scrollElements.forEach(el =>{
    el.style.opacity = 0
    el.style.transform = "translateY(50px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
})