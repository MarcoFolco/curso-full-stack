const formEx1 = document.querySelector("#exercise1 .container form");
const distance = document.querySelector("#exercise1 .container form input#distance");
const resultEx1 = document.querySelector("#resultEx1");

const formEx2 = document.querySelector("#exercise2 .container form");
const numbers_str = document.querySelector("#exercise2 .container form input#numbers");
const resultEx2 = document.querySelector("#resultEx2");


distance.addEventListener('change', (e) => {
    let meters = distance.value;
    if(meters != '') {
        resultEx1.style.cssText += 'color: black;';
        if(meters >= 0 && meters <= 1000) {
            resultEx1.textContent = 'Debe recorrer la distancia a pie';
        } else if (meters > 1000 && meters <= 10000) {
            resultEx1.textContent = 'Debe recorrer la distancia en bicicleta';
        } else if (meters > 10000 && meters <= 30000) {
            resultEx1.textContent = 'Debe recorrer la distancia en colectivo';
        } else if (meters > 30000 && meters <= 100000) {
            resultEx1.textContent = 'Debe recorrer la distancia en auto';
        } else if (meters > 100000) {
            resultEx1.textContent = 'Debe recorrer la distancia en avión';
        } else {
            resultEx1.textContent = 'La distancia ingresada no es válida';
            resultEx1.style.cssText = 'color: red;';
        }
    } else {
        resultEx1.textContent = 'Debe ingresar una distancia';
        resultEx1.style.cssText += 'color: red;';
    }
});

numbers_str.addEventListener('change', (e) => {
    if(numbers_str.value != "") {
        resultEx2.style.cssText = 'color: black;';
        const numbers = numbers_str.value.split(",");
        const onlyNumbers = numbers.every(element => {
            return !isNaN(element);
        });
        if (onlyNumbers) {
            numbers.sort((a,b) => {
                return a-b;
            });
            resultEx2.textContent = `El número más grande es ${numbers.pop()}`;
        } else {
            resultEx2.textContent = 'Debe ingresar solo números';
            resultEx2.style.cssText = 'color: red;';
        }
    } else {
        resultEx2.textContent = 'Debe ingresar al menos un número';
        resultEx2.style.cssText = 'color: red;';
    }
});