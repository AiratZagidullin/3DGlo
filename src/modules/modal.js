import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalContent = modal.querySelector('.popup-content')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (screen.width < 768) {
                modalContent.style.top = 10 + '%'
                modal.style.display = 'block'
            } else {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.display = 'block'
                        modalContent.style.top = (10 * progress) + '%';
                    }
                });
            }
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal