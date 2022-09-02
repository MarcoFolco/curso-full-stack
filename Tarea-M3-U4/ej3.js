let alumnos = [
  {
    nombre: "Juan Gomez",

    nota: 7,
  },
  {
    nombre: "Pedro Rodriguez",

    nota: 4,
  },
  {
    nombre: "Roxana García",

    nota: 8,
  },
  {
    nombre: "Luciano Lopez",

    nota: 5,
  },
  {
    nombre: "Fernanda Gimenez",

    nota: 6,
  },
  {
    nombre: "Florencia Martinez",

    nota: 10,
  },
  {
    nombre: "Raul Sanchez",

    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",

    nota: 8,
  },
];

let aprobados = alumnos.filter((alumno) => alumno.nota >= 7);
let list = document.querySelector('#list');
aprobados.forEach(alumno => {
    let item = document.createElement('li');
    item.innerText = `${alumno.nombre} - ${alumno.nota}`;
    list.appendChild(item);
})
console.log(aprobados);
