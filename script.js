
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (clicked) => {
        if (clicked.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (clicked.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            string = string + clicked.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})