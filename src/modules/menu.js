const menu = () => {
    const body = document.querySelector('body')
    const menu = document.querySelector('menu')

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.toggle('active-menu')
        } else if (e.target.closest('main>a')) {
            e.preventDefault();

            const scrollTarget = document.getElementById('service-block');
            const elementPosition = scrollTarget.getBoundingClientRect().top;

            window.scrollBy({
                top: elementPosition,
                behavior: "smooth"
            })
        }

        if (e.target.classList.contains('close-btn') || (!e.target.closest('.menu') && !e.target.closest('menu'))) {
            menu.classList.remove('active-menu')
        } else if (e.target.closest('menu>ul>li>a')) {
            menu.classList.remove('active-menu')
            e.preventDefault();

            let href = e.target.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;

            window.scrollBy({
                top: elementPosition,
                behavior: "smooth"
            })
        }
    })
}

export default menu
