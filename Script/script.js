const principalAmount = document.querySelector('input')
const rate = document.querySelectorAll('input')[1]
const time = document.querySelectorAll('input')[2]
const total = document.querySelector('[data-calc]')
const calculate = document.querySelector('button')
const resetVal = document.querySelectorAll('button')[1]

function calculateInt() {
    let p = principalAmount.value
    let t = time.value
    let r = rate.value

    let simpleInterest = (p * t * r) / 100
    let result = simpleInterest.toFixed(2)
    total.innerText = result
}

function reset() {
    principalAmount.value = ''
    rate.value = ''
    time.value = ''
    total.innerText = ''
}

calculate.addEventListener('click', calculateInt)
resetVal.addEventListener('click', reset)