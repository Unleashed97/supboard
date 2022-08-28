// animation
export const animation = () => {
    const animatedElements = document.querySelectorAll(
        '.anim--fade-up, .anim--fade-down, .anim--fade-right, .anim--fade-left, .anim--zoom-bg',
    )

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('active', entry.isIntersecting)

                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        },
        {
            threshold: 0.5,
        },
    )

    animatedElements.forEach((el) => {
        observer.observe(el)
    })
}

export const handleBurger = () => {
    const burgerCheckbox = document.querySelector('.burger__checkbox')

    burgerCheckbox.addEventListener('change', () => {
        if (burgerCheckbox.checked) document.body.classList.add('fixed')
        else document.body.classList.remove('fixed')
    })

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth >= 768) {
            document.body.classList.remove('fixed')
            burgerCheckbox.checked = false
        }
    })
}
