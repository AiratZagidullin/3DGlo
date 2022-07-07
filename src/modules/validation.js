const validation = () => {
    const priceInputs = document.querySelectorAll('div.calc-block>input')
    const nameInput = document.querySelectorAll('input[name=user_name]')
    const emailInput = document.querySelectorAll('input[name=user_email]')
    const phoneInput = document.querySelectorAll('input[name=user_phone]')
    const messInput = document.querySelector('input[name=user_message]')

    const valid = (element, reg) => [
        element.forEach(input => {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(reg, "")
                if (e.target.value === '') {
                    e.target.classList.remove('success')
                } else {
                    e.target.classList.add('success')
                }
            })
        })
    ]

    messInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]+/, "")
        if (e.target.value === '') {
            e.target.classList.remove('success')
        } else {
            e.target.classList.add('success')
        }
    })

    valid(priceInputs, /\D+/)
    valid(nameInput, /[^а-яА-Я\s\-]+/)
    valid(emailInput, /[^\@\-\.\!\~\*\'\w]+/)
    valid(phoneInput, /[^\(\)\-\d]+/)

}

export default validation