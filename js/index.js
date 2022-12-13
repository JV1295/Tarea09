
const inputCodigo = document.getElementById("inputCodigo")
const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputCorreo = document.getElementById("inputCorreo")
const selectCargo = document.getElementById("selectCargo")
const form = document.getElementById("form")

class Empleado {
  codigo;
  nombre;
  apellido;
  correo;
  cargo;

  sueldoBr = 0;
  recorte = 0;

  sueldoBruto() {
    switch (this.cargo) {
      case "jefe":
        this.sueldoBr = 5000
        break
      case "analista":
        this.sueldoBr = 4000
        break
      case "programador":
        this.sueldoBr = 3000
        break
      case "soporte":
        this.sueldoBr = 2000
        break
      case "asistente":
        this.sueldoBr = 1000
        break
      default:
        this.sueldoBr = 0
    }
    alert(`${this.nombre} ${this.apellido} su sueldo bruto es $/. ${this.sueldoBr}`)
  }

  descuento() {
    this.recorte = this.sueldoBr * 0.125
    alert(`Su descuento es de $/. ${this.recorte}`)
  }

  sueldoNeto() {
    const total = this.sueldoBr - this.recorte
    alert(`Su sueldo neto es $/. ${total}`)
  }
}

function validar(e) {
  e.preventDefault()
  if (inputNombre === "" || inputApellido.value === "" || inputCodigo === "" || inputCorreo.value === "" || selectCargo.value === "") {
    return
  }

  const nuevoEmpleado = new Empleado();

  nuevoEmpleado.codigo = inputCodigo.value
  nuevoEmpleado.nombre = inputNombre.value
  nuevoEmpleado.apellido = inputApellido.value
  nuevoEmpleado.correo = inputCorreo.value
  nuevoEmpleado.cargo = selectCargo.value

  nuevoEmpleado.sueldoBruto()
  nuevoEmpleado.descuento()
  nuevoEmpleado.sueldoNeto()
}

form.addEventListener('submit', validar)

