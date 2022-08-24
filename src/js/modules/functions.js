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
