let textArea = document.querySelector('#ta');
let display = document.querySelector('#display span');
textArea.addEventListener('input', ()=> {
    display.innerText = textArea.value.length;
})