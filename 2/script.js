let top_button = document.getElementById('top')
let left_button = document.getElementById('left')
let right_button = document.getElementById('right')
let bottom_button = document.getElementById('bottom')
let stop = document.getElementById('stop')
let game_object = document.getElementById('object')

let horizontal = 0
let vertical = 0

top_button.onclick = function() {
    vertical -= 20
    game_object.style.marginTop = vertical+"px"
}
left_button.onclick = function() {
    horizontal -= 20
    game_object.style.marginLeft = horizontal +"px"
}
right_button.onclick = function() {
    horizontal += 20
    game_object.style.marginLeft = horizontal +"px"
}
bottom_button.onclick = function() {
    vertical += 20
    game_object.style.marginTop = vertical+"px"
}