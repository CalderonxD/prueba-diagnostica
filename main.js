let cursos = ["JavaScript", "Python", "Html,Css"];

function agregarCurso() {
  nuevoCurso = prompt("ingrese el nuevo nombre del curso:");
  cursos.push(nuevoCurso);
  console.log(cursos);
}

console.log(cursos);

function verCursos() {
  console.log(cursos);
  const resultDiv = document.getElementById("listaCursos");
  for (let i = 0; i < cursos.length; i++) {
    const li = document.createElement("li");
    li.textContent = cursos[i];
    resultDiv.appendChild(li);
  }
}

function editarCursos() {}

function eliminarCurso() {
  alert(cursos + " <- estos son los cursos disponibles");
  let eliminar = String(
    prompt("Ingrese el nombre del curso que va a eliminar")
  );
  for (let i = 0; i < cursos.length; i++) {
    if (eliminar === i) {
      cursos.pop[i];
    }

    }   
    console.log(cursos);
}
