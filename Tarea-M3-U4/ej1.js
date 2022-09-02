function changeBodyColor(color) {
    let bodyStyle = document.body.style;
    let colorLowered = color.toLowerCase();
    bodyStyle.backgroundColor = colorLowered;
    if (['red','blue'].includes(colorLowered)) {
        bodyStyle.color = 'white';
    } else {
        bodyStyle.color = 'black';
    }
}

let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        changeBodyColor(box.innerText);
    })
});