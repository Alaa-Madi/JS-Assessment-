let player = {
    name: "لاعبنا",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false // Reset blackjack status
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
el
function renderGame() {
    cardsEl.textContent = "البطاقات: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "المجموع: " + sum
    if (sum <= 20) {
        message = "هل تريد سحب بطاقة جديدة؟"
    } else if (sum === 21) {
        message = "لقد حصلت على بلاك جاك!"
        hasBlackJack = true
        // player.chips += 50 // Example: Award chips for Blackjack
        // playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "لقد تجاوزت الحد، لقد خسرت!"
        isAlive = false
        // player.chips -= 10 // Example: Deduct chips for losing
        // playerEl.textContent = player.name + ": $" + player.chips
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
