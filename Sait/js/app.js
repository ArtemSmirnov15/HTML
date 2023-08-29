
function app() {
    //ввод данных
    //let x = parseInt(prompt("Введите х"))
    let x = parseInt(document.getElementById('x').value)
    
    if (x === 0) {
        document.getElementById('message').innerText = "х = 0"
    } 

    //логика
    const result = x * x  
    
    //вывод данных
   // alert(`Квадрат х = ${result}`)
   document.getElementById('result').innerText = result
}
