
function app() {

    // имя пользователя
   let name_user = parseString(document.getElementById('name_user').value) 


    //ввод данных
    //let x = parseInt(prompt("Введите х"))
    let message = parseString(document.getElementById('x').value)
    
    //логика
    const result = message  
    
    //вывод данных
   alert(`Квадрат х = ${result}`)
   document.getElementById('result').innerText = result

}
