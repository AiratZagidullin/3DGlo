const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalContent = modal.querySelector('.popup-content')

    let count = -100
    let animationId

    const modalAnimate = () => {
        count += 5
        animationId = requestAnimationFrame(modalAnimate)
        modal.style.display = 'block'

        if (count <= 10) {
            modalContent.style.top = count + '%'
        } else {
            cancelAnimationFrame(animationId)
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (screen.width < 768) {
                modalContent.style.top = 10 + '%'
                modal.style.display = 'block'
            } else {
                modalAnimate()
            }
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            count = -100
            modalContent.style.top = -100 + '%'
        }
    })
}

export default modal