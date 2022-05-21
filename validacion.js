let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let text = document.getElementById("txt");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function comprobacion() {
    if (!mail.value.match(mailFormat)){
        alert("Mail Incorrecto");
        return;
    }
    if (nombre.value.length == 0){
        alert("Completa el Campo Nombre");
    }
    if (apellido.value.length == 0){
        alert("Completa el Campo Apellido");
    }
    return alert("Enviado Correctamente!")
    }

const test = document.getElementById('enviar');
test.addEventListener("click", comprobacion);


