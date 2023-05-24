const formulario = document.getElementById("formulario");
const copiarForm = document.getElementById("copiarForm");
var primerNombre_form = document.getElementById("primerNombre_form");
var segundoNombre_form = document.getElementById("segundoNombre_form");
var primerApellido_form = document.getElementById("primerApellido_form");
var segundoApellido_form = document.getElementById("segundoApellido_form");
var tipoDeDocumento_form = document.getElementById("tipoDeDocumento_form");
var cedula_form = document.getElementById("cedula_form");
var masculino_form = document.getElementById("masculino_form");
var femenino_form = document.getElementById("femenino_form");
var indefinido_form = document.getElementById("indefinido_form");
var correo_form = document.getElementById("correo_form");
var telefono_form = document.getElementById("telefono_form");
var direccion_form = document.getElementById("direccion_form");
var pais_form = document.getElementById("pais_form");
var departamento_form = document.getElementById("departamento_form");
var ciudadf = document.getElementById("ciudad");


const modal_form = document.getElementById("formulario_modal");
const copiarmodal = document.getElementById("CopiarModal");
var primerNombre_modal = document.getElementById("primerNombre_modal");
var segundoNombre_modal = document.getElementById("segundoNombre_modal");
var primerApellido_modal = document.getElementById("primerApellido_modal");
var segundoApellido_modal = document.getElementById("segundoApellido_modal");
var tipoDeDocumento_modal = document.getElementById("tipoDeDocumento_modal");
var cedula_modal = document.getElementById("cedula_modal");
var masculino_modal = document.getElementById("masculino_modal");
var femenino_modal = document.getElementById("femenino_modal");
var indefinido_modal = document.getElementById("indefinido_modal");
var correo_modal = document.getElementById("correo_modal");
var telefono_modal = document.getElementById("telefono_modal");
var direccion_modal = document.getElementById("direccion_modal");
var pais_modal = document.getElementById("pais_modal");
var departamento_modal = document.getElementById("departamento_modal");
var ciudad = document.getElementById("ciudad2");

/*abrir y cerrar modal*/
const abrir_modal = document.getElementById("abrir_modal");
const cerra_modal = document.getElementById("cerrar_modal");
const modal = document.getElementById("modal");

//var copiarDatos = $("#Copiar").Val();//onclick="copiardatos()"
// $("#Copiar").click(
//     alert("iniciando")
// );
abrir_modal.addEventListener("click", function () {
    modal.showModal();
});

cerra_modal.addEventListener("click", function () {
    modal_form.reset();
    modal.close();
});

//historial

let listaEmplados = []

const odjEmpleado = {
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    tipoDeDocumento: "",
    numeroDeDocumento: "",
    genero: "",
    correo: "",
    telefono: "",
    direccion: "",
    pais: "",
    departamento: "",
    ciudad: ""

}

const historial = document.getElementById("historial");
const abrir_hs = document.getElementById("abrir_historial");
const cerrar_hs = document.getElementById("cerrar_historial");

abrir_hs.addEventListener("click", function () {
    historial.show();
});

cerrar_hs.addEventListener("click", function () {
    historial.close();
})

const btt_agregar = document.getElementById("agregar");

// Función para mostrar el género seleccionado
function mostrarGeneroSeleccionado() {
    debugger;
    var generoSeleccionado = "";

    if (masculino_form.checked) {
        generoSeleccionado = "Hombre";
    } else if (femenino_form.checked) {
        generoSeleccionado = "Mujer";
    } else if (indefinido_form.checked) {
        generoSeleccionado = "Indefinido";
    } else {
        generoSeleccionado = "";
    }
    return generoSeleccionado;
}


// Función para validar los datos del formulario
function validarDatos() {

    if (primerNombre_form.value !== "" && primerApellido_form.value !== "" && segundoApellido_form.value !== ""&& mostrarGeneroSeleccionado() !=="" && tipoDeDocumento_form.value !== "" && cedula_form.value !== "" && correo_form.value !== "" && telefono_form.value !== "" && direccion_form.value !== "" && pais_form.value !== "" && departamento_form.value !== "") {
        debugger;
        odjEmpleado.primer_nombre = primerNombre_form.value;
        odjEmpleado.segundo_nombre = segundoNombre_form.value;
        odjEmpleado.primer_apellido = primerApellido_form.value;
        odjEmpleado.segundo_apellido = segundoApellido_form.value;
        odjEmpleado.genero = mostrarGeneroSeleccionado();
        odjEmpleado.tipoDeDocumento = tipoDeDocumento_form.value;
        odjEmpleado.numeroDeDocumento = cedula_form.value;
        odjEmpleado.correo = correo_form.value;
        odjEmpleado.telefono = telefono_form.value;
        odjEmpleado.direccion = direccion_form.value;
        odjEmpleado.pais = pais_form.value;
        odjEmpleado.departamento = departamento_form.value;

        agreagarEmpleado();
    } else {
        alert("por favor llena todos los espacios")
    }

};

// Función para agregar un empleado a la lista
function agreagarEmpleado() {

    listaEmplados.push({ ...odjEmpleado });

    mostrarEmplado();
}

// Función para mostrar los empleados en el historial
function mostrarEmplado() {

    const divEmpleados = document.getElementById("div_empleados");
    listaEmplados.forEach(empleado => {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, genero, tipoDeDocumento, numeroDeDocumento, correo, telefono, direccion, pais, departamento } = empleado;

        const parrafo = document.createElement("p");
        parrafo.textContent = `${primer_nombre} - ${segundo_nombre} - ${primer_apellido} - ${segundo_apellido} -${genero}- ${tipoDeDocumento} - ${numeroDeDocumento} - ${correo} - ${telefono} - ${direccion} - ${pais} - ${departamento}-`;

        const hr = document.createElement('hr');// el hr pone los elementos en una b arra horizontal

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    })
}

// Evento para copiar los datos del formulario al modal
// Agrega las demás asignaciones según los campos que tengas en el segundo formulario
copiarForm.addEventListener("click", function () {
    debugger
    primerNombre_modal.value = primerNombre_form.value;
    segundoNombre_modal.value = segundoNombre_form.value;
    primerApellido_modal.value = primerApellido_form.value;
    segundoApellido_modal.value = segundoApellido_form.value;
    tipoDeDocumento_modal.value = tipoDeDocumento_form.value;
    cedula_modal.value = cedula_form.value;
    masculino_modal.checked = masculino_form.checked;
    femenino_modal.checked = femenino_form.checked;
    indefinido_modal.checked = indefinido_form.checked
    correo_modal.value = correo_form.value;
    telefono_modal.value = telefono_form.value;
    direccion_modal.value = direccion_form.value;
    pais_modal.value = pais_form.value;
    departamento_modal.value = departamento_form.value;
    alert("copia exitosa");
})
//modal
copiarmodal.addEventListener("click", function () {

    primerNombre_form.value = primerNombre_modal.value;
    segundoNombre_form.value = segundoNombre_modal.value;
    primerApellido_form.value = primerApellido_modal.value;
    segundoApellido_form.value = segundoApellido_modal.value;
    tipoDeDocumento_form.value = tipoDeDocumento_modal.value;
    cedula_form.value = cedula_modal.value;
    masculino_form.checked = masculino_modal.checked;
    femenino_form.checked = femenino_modal.checked;
    indefinido_form.checked = indefinido_modal.checked;
    correo_form.value = correo_modal.value;
    telefono_form.value = telefono_modal.value;
    direccion_form.value = direccion_modal.value;
    pais_form.value = pais_modal.value;
    departamento_form.value = departamento_modal.value;
    alert("copia exitosa");
});
/*desmarcar boxcheck*/

masculino_form.addEventListener("click", function () {

    if (masculino_form.checked) {

        femenino_form.checked = false;
        indefinido_form.checked = false;
    }
});

femenino_form.addEventListener("click", function () {
    if (femenino_form.checked) {
        masculino_form.checked = false;
        indefinido_form.checked = false;
    }
});

indefinido_form.addEventListener("click", function () {

    if (indefinido_form.checked) {
        masculino_form.checked = false;
        femenino_form.checked = false;
    }
});

/*modal*/
masculino_modal.addEventListener("click", function () {
    if (masculino_modal.checked) {

        femenino_modal.checked = false;
        indefinido_modal.checked = false;
    }
});

femenino_modal.addEventListener("click", function () {
    if (femenino_modal.checked) {

        masculino_modal.checked = false;
        indefinido_modal.checked = false;
    }
});

indefinido_modal.addEventListener("click", function () {

    if (indefinido_modal.checked) {
        masculino_modal.checked = false;
        femenino_modal.checked = false;
    }
});


pais_form.addEventListener("change", ubicacion_form);
// Función para establecer las opciones de departamento según el país seleccionado en el formulario
function ubicacion_form() {
    if (pais_form.value === "Colombia") {

        borarSelect_form();

        var cl_cuandinamrca = document.createElement("option");
        cl_cuandinamrca.value = "cundinamarca";
        cl_cuandinamrca.innerHTML = "cundinamarca";
        departamento_form.appendChild(cl_cuandinamrca);

        var cl_tolima = document.createElement("option");
        cl_tolima.value = "tolima";
        cl_tolima.innerHTML = "tolima";
        departamento_form.appendChild(cl_tolima);

        var cl_medellin = document.createElement("option");
        cl_medellin.value = "medellin";
        cl_medellin.innerHTML = "medellin";
        departamento_form.appendChild(cl_medellin);

    }
    else if (pais_form.value === "Argentina") {
        borarSelect_form()

        var arg_Buenos_Aires = document.createElement("option");
        arg_Buenos_Aires.value = "Buenos_Aires";
        arg_Buenos_Aires.innerHTML = "Buenos Aires";
        departamento_form.appendChild(arg_Buenos_Aires);

        var arg_Cordoba = document.createElement("option");
        arg_Cordoba.value = "Cordoba";
        arg_Cordoba.innerHTML = "Cordoba";
        departamento_form.appendChild(arg_Cordoba);

        var arg_Mendoza = document.createElement("option");
        arg_Mendoza.value = "Mendoza";
        arg_Mendoza.innerHTML = "Mendoza";
        departamento_form.appendChild(arg_Mendoza);

    }
    else if (pais_form.value === "Brasil") {
        borarSelect_form()

        var Br_São_Paulo = document.createElement("option");
        Br_São_Paulo.value = "São_Paulo";
        Br_São_Paulo.innerHTML = "São Paulo";
        departamento_form.appendChild(Br_São_Paulo);

        var Br_Rio_de_Janeiro = document.createElement("option");
        Br_Rio_de_Janeiro.value = "Rio_de_Janeiro";
        Br_Rio_de_Janeiro.innerHTML = "Rio de Janeiro";
        departamento_form.appendChild(Br_Rio_de_Janeiro);

        var Br_Minas_Gerais = document.createElement("option");
        Br_Minas_Gerais.value = "Minas_Gerais";
        Br_Minas_Gerais.innerHTML = "Minas Gerais";
        departamento_form.appendChild(Br_Minas_Gerais);
    } else {
        alert("elija un pais papu")
    }
};

// Función para eliminar las opciones existentes en el select de departamento del formulario
function borarSelect_form() {
    while (departamento_form.options.length > 1) {
        departamento_form.options[departamento_form.options.length - 1].remove();
    }
};

//modal
pais_modal.addEventListener("change", ubicacion);

// Función para establecer las opciones de departamento según el país seleccionado en el modal
function ubicacion() {

    if (pais_modal.value === "Colombia") {

        borarSelect();

        var cl_cuandinamrca = document.createElement("option");
        cl_cuandinamrca.value = "cundinamarca";
        cl_cuandinamrca.innerHTML = "cundinamarca";
        departamento_modal.appendChild(cl_cuandinamrca);

        var cl_tolima = document.createElement("option");
        cl_tolima.value = "tolima";
        cl_tolima.innerHTML = "tolima";
        departamento_modal.appendChild(cl_tolima);

        var cl_medellin = document.createElement("option");
        cl_medellin.value = "medellin";
        cl_medellin.innerHTML = "medellin";
        departamento_modal.appendChild(cl_medellin);

    }
    else if (pais_modal.value === "Argentina") {
        borarSelect()

        var arg_Buenos_Aires = document.createElement("option");
        arg_Buenos_Aires.value = "Buenos_Aires";
        arg_Buenos_Aires.innerHTML = "Buenos Aires";
        departamento_modal.appendChild(arg_Buenos_Aires);

        var arg_Cordoba = document.createElement("option");
        arg_Cordoba.value = "Cordoba";
        arg_Cordoba.innerHTML = "Cordoba";
        departamento_modal.appendChild(arg_Cordoba);

        var arg_Mendoza = document.createElement("option");
        arg_Mendoza.value = "Mendoza";
        arg_Mendoza.innerHTML = "Mendoza";
        departamento_modal.appendChild(arg_Mendoza);

    }
    else if (pais_modal.value === "Brasil") {
        borarSelect()

        var Br_São_Paulo = document.createElement("option");
        Br_São_Paulo.value = "São_Paulo";
        Br_São_Paulo.innerHTML = "São Paulo";
        departamento_modal.appendChild(Br_São_Paulo);

        var Br_Rio_de_Janeiro = document.createElement("option");
        Br_Rio_de_Janeiro.value = "Rio_de_Janeiro";
        Br_Rio_de_Janeiro.innerHTML = "Rio de Janeiro";
        departamento_modal.appendChild(Br_Rio_de_Janeiro);

        var Br_Minas_Gerais = document.createElement("option");
        Br_Minas_Gerais.value = "Minas_Gerais";
        Br_Minas_Gerais.innerHTML = "Minas Gerais";
        departamento_modal.appendChild(Br_Minas_Gerais);
    } else {
        alert("elija un pais papu")
    }
};

// Función para eliminar las opciones existentes en el select de departamento del modal
function borarSelect() {
    while (departamento_modal.options.length > 1) {
        departamento_modal.options[departamento_modal.options.length - 1].remove();
    }
};

//tabla-----

const abrir_tb = document.getElementById("create_table");
const table = document.getElementById("tabla");
const tb_body = document.getElementById("tb_body");


const nombre = [];
const numero_id = [];
const tel = [];

// Evento para crear una fila en la tabla con los datos del formulario
abrir_tb.addEventListener("click", function () {


    nombre.push(primerNombre_form.value);

    nombre.push(segundoNombre_form.value);

    nombre.push(primerApellido_form.value);

    nombre.push(segundoApellido_form.value);

    numero_id.push(cedula_form.value);

    tel.push(telefono_form.value);


    var fila = document.createElement("tr");

    var colum_nombre = document.createElement("td");
    colum_nombre.textContent = nombre.join(' ');

    var colum_numeroId = document.createElement("td");
    colum_numeroId.innerHTML = numero_id[numero_id.length - 1];

    var colum_tel = document.createElement("td");
    colum_tel.innerHTML = tel[tel.length - 1];


    fila.appendChild(colum_nombre);
    fila.appendChild(colum_numeroId);
    fila.appendChild(colum_tel);
    tb_body.appendChild(fila);

    nombre.length = 0;
    numero_id.length = 0;
    tel.length = 0;
});


