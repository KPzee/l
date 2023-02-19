let home = 0
let guest = 0
let guestEl = document.getElementById('guest')
let homeEl = document.getElementById('home')

function addOneGuest() {
	guest = guest + 1 
	guestEl.textContent = guest
}
function addTwoGuest() {
	guest = guest + 2 
	guestEl.textContent = guest
}
function addThreeGuest() {
	guest = guest + 3 
	guestEl.textContent = guest
}
function addOneHome() {
	home = home + 1 
	homeEl.textContent = home
}
function addTwoHome() {
	home = home + 2 
	homeEl.textContent = home
}
function addThreeHome() {
	home = home + 3 
	homeEl.textContent = home
}
function reset() {
	home = 0
	guest = 0
	homeEl.textContent = home
	guestEl.textContent = guest
}
console.log(home)