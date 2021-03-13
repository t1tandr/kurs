
let box = document.getElementById('main')

while(true){

    let color = prompt("Enter rgb color:")

    if (color == "blue" || color == "red" || color == "green") {
        box.style.backgroundColor = color
        break
    }
    else{
        alert("Vvedite norm znacheniya")
    }
}

while(true){
    let width = prompt("Введите ширину")
    if(isNaN(width) == true){
        alert("Введите число!!!")
    }
    else{
        box.style.width = width+"px"
        break
    }
}
while(true){
    let height = prompt("Введите ширину")
    if(isNaN(height) == true){
        alert("Введите число!!!")
    }
    else{
        box.style.height = height+"px"
        break
    }
}