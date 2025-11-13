let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function oneHome() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
    checkLead()
}
function twoHome() {
    homeScore +=2
    homeScoreEl.textContent = homeScore
    checkLead()
}
function threeHome() {
    homeScore +=3
    homeScoreEl.textContent = homeScore
    checkLead()
}

function oneGuest() {
    guestScore +=1
    guestScoreEl.textContent = guestScore
    checkLead()
}
function twoGuest() {
    guestScore +=2
    guestScoreEl.textContent = guestScore
    checkLead()
}
function threeGuest() {
    guestScore +=3
    guestScoreEl.textContent = guestScore
    checkLead()
}

function checkLead() {
    if (guestScore > homeScore){
        guestScoreEl.classList.add("highlight")
        homeScoreEl.classList.remove("highlight")

    }
    else if (guestScore < homeScore){
        homeScoreEl.classList.add("highlight")
        guestScoreEl.classList.remove("highlight")

    }
    else {
        guestScoreEl.classList.remove("highlight")
        homeScoreEl.classList.remove("highlight")

    }
}
function resetGame() {
    homeScore =0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    checkLead()
}