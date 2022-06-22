const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const mainLink = document.querySelector('main>a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (event) => {
            handleMenu() //усложненное задание
            event.preventDefault(); //усложненное задание

            let href = menuItem.getAttribute('href').substring(1); //усложненное задание
            const scrollTarget = document.getElementById(href) //усложненное задание
            const elementPosition = scrollTarget.getBoundingClientRect().top; //усложненное задание

            window.scrollBy({ //усложненное задание
                top: elementPosition,
                behavior: "smooth"
            })
        })
    });

    mainLink.addEventListener('click', (event) => {  //усложненное задание
        const scrollTarget = document.getElementById('service-block')
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        event.preventDefault();

        window.scrollBy({
            top: elementPosition,
            behavior: "smooth"
        })
    })
}

export default menu