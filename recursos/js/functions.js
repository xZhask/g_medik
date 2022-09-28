function remove_addClass(contenedor, link) {
  $(contenedor + " .activo").removeClass("activo");
  $(link).addClass("activo");
}
function abrir_form(div, contenido) {
  $.ajax({
    method: "POST",
    url: "formularios/" + contenido,
  }).done(function (html) {
    $(div).html(html);
  });
}
const abrirformHoy = () => {
  ValidarSesion("#contenido", "hoy.php", ".menu", "#li-hoy");
};

const abrirformCitas = () => {
  ValidarSesion("#contenido", "citas.php", ".menu", "#li-citas");
};
const abrirformPacientes = () => {
  ValidarSesion("#contenido", "pacientes.php", ".menu", "#li-pacientes");
};
const abrirformAtenciones = () => {
  ValidarSesion("#contenido", "atenciones.php", ".menu", "#li-atenciones");
};
const abrirformCaja = () => {
  ValidarSesion("#contenido", "caja.html", ".menu", "#li-caja");
};
const abrirUsuarios = () => {
  ValidarSesion("#contenido", "usuarios.php", ".menu", "#li-usuarios");
};
const abrirProcedimientos = () => {
  ValidarSesion(
    "#contenido",
    "procedimientos.html",
    ".menu",
    "#li-procedimientos"
  );
};
const abrirReportes = () => {
  ValidarSesion("#contenido", "reportes.html", ".menu", "#li-reportes");
};
const abrirExternos = () => {
  ValidarSesion("#contenido", "externos.php", ".menu", "#li-externos");
};
const abrirMedicamentos = () => {
  ValidarSesion("#contenido", "medicamentos.php", ".menu", "#li-medicamentos");
};
const abrirPendientes = () => {
  ValidarSesion("#contenido", "pagospendientes.php", ".menu", "#li-pendientes");
};
/* MODAL */
const abrirRegistrarCita = () => {
  AbrirModal("#frmregistrarcita");
  $("#AccionCita").val("REGISTRAR_CITA");
  ValidarSesion2();
};
const abrirRegistrarPaciente = () => {
  AbrirModal("#frmregistrarpaciente");
  $("#AccionPaciente").val("REGISTRAR_PACIENTE");
};
const abrirRegistrarPago = () => {
  AbrirModal("#frmregistrarpago");
};
const abrirAperturarCaja = () => {
  AbrirModal("#frmraperturarcaja");
};
const abrirRegistroCargo = () => {
  AbrirModal("#frmregistrarcargo");
};
const abrirRegistroEstablecimiento = () => {
  AbrirModal("#frmregistrarEstablecimiento");
};
const abrirRegistroGasto = () => {
  AbrirModal("#frmRegistrarGasto");
};
const abrirRegistroSignosVitales = () => {
  AbrirModal("#frmRegistrarSignosV");
};
const abrirRegistroCitaExterna = () => {
  AbrirModal("#frmregistrarcita_externa");
};
const abrirRegistroTratamiento = () => {
  AbrirModal("#frmRegistrarTratamiento");
};
const abrirKardex = () => {
  AbrirModal("#frmKardex");
};
const abrirBuscarCita = () => {
  AbrirModal("#frmBuscarCitas");
};
const abrirCambioPass = (idusuario) => {
  $("#IdUsuario").val(idusuario);
  AbrirModal("#frmCambioPass");
};
const abrirRegistroProcedimiento = () => {
  AbrirModal("#frmRegistrarProcedimiento");
  $("#AccionProcedimiento").val("REGISTRAR_PROCEDIMIENTO");
};
const abrirHistorial = () => {
  AbrirModal("#frmHistorial");
  $(".modal").addClass("w100");
  $(".bg-dark").addClass("all");
};
const abrirRegistroUsuario = () => {
  AbrirModal("#frmregistrarusuario");
  $("#AccionUsuario").val("REGISTRAR_USUARIO");
  $("#Pass").css("display", "block");
};
const abrirRegistroMovimientoAlmacen = () => {
  AbrirModal("#frmRegistrarProducto");
};
const abrirRegistrarAtencion = () => {
  AbrirModal("#frmRegistrarAtencion");
  $(".modal").addClass("w100");
  $(".bg-dark").addClass("all");
};
function AbrirModal(idform) {
  $(".bg-dark").addClass("activo");
  $(".modal").addClass("activo");
  $(".modal form").removeClass("activo");
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $(idform).addClass("activo");
}
function cerrarmodal() {
  $(".bg-dark").removeClass("activo");
  $(".modal").removeClass("w100");
  $(".bg-dark").removeClass("all");
  limpiar();
  $(".modal").removeClass("green");
  $(".modal").removeClass("red");
  $(".modal").removeClass("ambar");
}
function MostrarInputs() {
  $(".cont-input-toggle").addClass("visible");
}
function OcultarInputs() {
  $(".cont-input-toggle").removeClass("visible");
}
function LimpiarInputsCita() {
  $("#NombrePacienteCita").val("");
  $("#ApellidosPacienteCita").val("");
  $("#FechaNacCita").val("");
}
/* OTRAS FUNCIONES */
function DesahabilitarBoton(boton) {
  $(boton).prop("readonly", "readonly");
  $(boton).addClass("textdisabled");
}
function HabilitarBoton(boton) {
  $(boton).prop("readonly", false);
  $(boton).removeClass("textdisabled");
}

//RESET
function limpiar() {
  document.getElementById("frmregistrarusuario").reset();
  document.getElementById("frmregistrarcargo").reset();
  document.getElementById("frmregistrarEstablecimiento").reset();
  document.getElementById("frmregistrarpaciente").reset();
  document.getElementById("frmregistrarcita").reset();
  document.getElementById("frmregistrarpago").reset();
  document.getElementById("frmRegistrarSignosV").reset();
  document.getElementById("frmRegistrarAtencion").reset();
  document.getElementById("frmRegistrarProcedimiento").reset();
  document.getElementById("frmHistorial").reset();
  document.getElementById("frmregistrarcita_externa").reset();
  document.getElementById("frmRegistrarTratamiento").reset();
  document.getElementById("frmRegistrarProducto").reset();
  document.getElementById("frmKardex").reset();
  document.getElementById("frmBuscarCitas").reset();
  document.getElementById("frmCambioPass").reset();

  HabilitarBoton("#NroDocPersonal");
  HabilitarBoton("#NroDocPaciente");

  $(".cont-input-toggle").removeClass("visible");
  CancelarTratamiento();
  $(".consulta_historia").removeClass("examen");
  $(".consulta_historia").removeClass("consulta");
  $("#cont-examen").html("");
  $("#tbKardex").html("");
  $("#lblstockactual").html("Stock Actual : ");
  $("#tbBusquedaCitas").html("");
  $("#lblNombreBuscarCitas").html("Paciente : ");
  $("#Pass").css("display", "block");
}
/* VALIDACIÓN */

/* LISTADOS */
const ajaxFunction = (data) => {
  let respuesta;
  $.ajax({
    type: "POST",
    url: "sistema/controlador/controlador.php",
    data: data,
    async: false,
    //dataType: 'JSON',
    error: function () {
      alert("Error occured");
    },
    success: function (response) {
      respuesta = response;
    },
  });
  return respuesta;
};
$("#frmlogin").on("submit", function (e) {
  e.preventDefault();
  let datax = $("#frmlogin").serializeArray();
  let data = datax;
  let llamadoAjax = ajaxFunction(data);
  if (llamadoAjax == "INICIO") window.location.assign("index.php");
  else alert("DATOS INCORRECTOS");
});
$("#btn-off").on("click", function () {
  let data = { accion: "LOGOUT" };
  let llamadoAjax = ajaxFunction(data);
  if (llamadoAjax == 1) window.location.assign("login.php");
});
function ListarPersonal() {
  let usuario = $("#searchUsuario").val();
  let data = { accion: "LISTAR_PERSONAL", filtro: usuario };
  let llamadoAjax = ajaxFunction(data);
  $("#tbUsuarios").html(llamadoAjax);
}

function ListarCargos() {
  let data = { accion: "LISTAR_CARGOS" };
  let llamadoAjax = ajaxFunction(data);
  $("#idcargo").html(llamadoAjax);
}
function CargarEstablecimientos() {
  let data = { accion: "CARGAR_ESTABLECIMIENTOS" };
  let llamadoAjax = ajaxFunction(data);
  $(".establecimiento").html(llamadoAjax);
}
function ListarPacientes() {
  let data = { accion: "LISTAR_PACIENTES", filtro: "" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbPacientes").html(llamadoAjax);
}
function ListarMedicamentos() {
  let data = { accion: "LISTAR_MEDICAMENTOS" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbMedicamentos").html(llamadoAjax);
}
function ListarInsumos() {
  let data = { accion: "LISTAR_INSUMOS" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbInsumos").html(llamadoAjax);
}
function ListarPendientes() {
  let data = { accion: "LISTAR_PENDIENTES" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbPendientes").html(llamadoAjax);
}
function ListarProcedimientos() {
  let data = { accion: "LISTAR_PROCEDIMIENTOS", filtro: "" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbProcedimientos").html(llamadoAjax);
}
function ListarCitas() {
  fecha = $("#FechaCitados").val();
  let data = { accion: "LISTAR_CITAS", fecha: fecha };
  let llamadoAjax = ajaxFunction(data);
  $("#tbCitas").html(llamadoAjax);
}
function ListarConfirmados() {
  let data = { accion: "LISTAR_CITAS_CONFIRMADAS" };
  let llamadoAjax = ajaxFunction(data);
  $("#tbConfirmados").html(llamadoAjax);
}
function ListarAtenciones() {
  fecha = $("#fechaAtenciones").val();
  let data = { accion: "LISTAR_ATENCIONES", fecha: fecha };
  let llamadoAjax = ajaxFunction(data);
  $("#tbAtenciones").html(llamadoAjax);
}
function listargastos() {
  let idcajadiaria = $("#idcajadiaria").val();
  let data = { accion: "LISTAR_GASTOS", idcajadiaria: idcajadiaria };
  let llamadoAjax = ajaxFunction(data);
  $("#tbgastoscaja").html(llamadoAjax);
}
function listarmontoscaja() {
  let data = {
    accion: "LISTAR_MONTOS",
    idcajadiaria: $("#idcajadiaria").val(),
  };
  let llamadoAjax = ajaxFunction(data);
  $("#tbmontoscaja").html(llamadoAjax);
}
function listarultimosingresos() {
  let data = {
    accion: "LISTAR_ULTIMOS_INGRESOS",
    idcajadiaria: $("#idcajadiaria").val(),
  };
  let llamadoAjax = ajaxFunction(data);
  $("#tbingresoscaja").html(llamadoAjax);
}
function ObtenerCitas() {
  let dni = $("#NroDocBuscarCita").val();
  let data = { accion: "OBTENER_DATOS_PACIENTE", dni: dni };
  let llamadoAjax = ajaxFunction(data);
  json = JSON.parse(llamadoAjax);
  paciente = json.paciente;
  $("#lblNombreBuscarCitas").html(
    `Paciente : ${paciente[0].apellidos}, ${paciente[0].nombre}`
  );
  data = { accion: "BUSCAR_CITAS", dni: dni };
  llamadoAjax = ajaxFunction(data);
  $("#tbBusquedaCitas").html(llamadoAjax);
}
function ListarAtencionesPorPaciente(dni) {
  let data = { accion: "LISTAR_ATENCIONES_PACIENTE", dni: dni };
  let llamadoAjax = ajaxFunction(data);
  $("#ul-atenciones").html(llamadoAjax);
}
function ListarOtrosExamenes(dni) {
  let data = { accion: "LISTAR_OTROS_EXAMENES", dni: dni };
  let llamadoAjax = ajaxFunction(data);
  $("#ul-otrosexamenes").html(llamadoAjax);
}
function Kardex() {
  let idproducto = $("#IdProductoKardex").val();
  let fecha1 = $("#KardexDesde").val();
  let fecha2 = $("#KardexHasta").val();
  let data = {
    accion: "KARDEX",
    idproducto: idproducto,
    fecha1: fecha1,
    fecha2: fecha2,
  };
  let llamadoAjax = ajaxFunction(data);
  $("#tbKardex").html(llamadoAjax);
}
/*--------------- FILTROS Y BÚSQUEDAS ------------------ */
function BuscarPersonaPersonal() {
  dni = $("#NroDocPersonal").val();
  ObtenerDatosDni(dni, "PERSONAL");
}
function BuscarPersonaPaciente() {
  dni = $("#NroDocPaciente").val();
  ObtenerDatosDni(dni, "PACIENTE");
}

function ObtenerDatosDni(nro_doc, tipo_persona) {
  let data = { accion: "CONSULTA_DNI", dni: nro_doc };
  let llamadoAjax = ajaxFunction(data);
  let json = JSON.parse(llamadoAjax);
  if (tipo_persona == "PERSONAL") {
    $("#NombrePersonal").val(json["data"].nombres);
    $("#ApellidosPersonal").val(
      json["data"].apellido_paterno + " " + json["data"].apellido_materno
    );
  } else if (tipo_persona == "PACIENTE") {
    bloquearControlsPaciente();
    $("#menorPaciente").prop("checked", false);
    if (json["success"] == false) {
      $("#checkPaciente").addClass("visible");
    } else if (json["success"] == true) {
      $("#checkPaciente").removeClass("visible");
      $("#NombrePaciente").val(json["data"].nombres);
      $("#ApellidosPaciente").val(
        json["data"].apellido_paterno + " " + json["data"].apellido_materno
      );
      $fechanac = json["data"].fecha_nacimiento;
      if ($fechanac !== null) {
        $("#fechanac").val($fechanac);
      } else {
        $("#fechanac").val("");
      }
    }
  }
}
function FiltrarPaciente() {
  filtro = $("#FiltroPaciente").val();
  let data = { accion: "LISTAR_PACIENTES", filtro: filtro };
  let llamadoAjax = ajaxFunction(data);
  $("#tbPacientes").html(llamadoAjax);
}
function FiltrarProcedimiento() {
  filtro = $("#FiltroProcedimiento").val();
  let data = { accion: "LISTAR_PACIENTES", filtro: filtro };
  let llamadoAjax = ajaxFunction(data);
  $("#tbProcedimientos").html(llamadoAjax);
}
function ObtenerDatosPaciente() {
  let dni = $("#NroDocCita").val();
  LimpiarInputsCita();
  bloquearControlsCita();
  $("#menor").prop("checked", false);
  $("#NombrePacienteC").val("");
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: {
      accion: "OBTENER_DATOS_PACIENTE",
      dni: dni,
    },
  }).done(function (respuesta) {
    if (respuesta == "NO REGISTRADO") {
      $.ajax({
        method: "POST",
        url: "sistema/controlador/controlador.php",
        data: {
          accion: "CONSULTA_DNI",
          dni: dni,
        },
      }).done(function (text) {
        json = JSON.parse(text);
        console.log(json);
        $("#TipoPaciente").val("NOREG");
        if (json["success"] == false) {
          $("#checkCita").addClass("visible");
        } else if (json["success"] == true) {
          $("#NombrePacienteC").val(json["data"].nombre_completo);
          $("#NombrePacienteCita").val(json["data"].nombres);
          $("#ApellidosPacienteCita").val(
            `${json["data"].apellido_paterno} ${json["data"].apellido_materno}`
          );
          $fechanac = json["data"].fecha_nacimiento;
          if ($fechanac !== null) {
            $("#FechaNacCita").val($fechanac);
          } else {
            $("#FechaNacCita").val("");
          }
          $("#checkCita").removeClass("visible");
        }
        MostrarInputs();
      });
    } else {
      json = JSON.parse(respuesta);
      paciente = json.paciente;
      console.log(json);
      $("#TipoPaciente").val("REG");
      $("#NombrePacienteC").val(
        paciente[0].apellidos + ", " + paciente[0].nombre
      );
      $("#NroCelularCita").val(paciente[0].telefono);
      OcultarInputs();
      $("#checkCita").removeClass("visible");
    }
  });
}
function validar_menor() {
  LimpiarInputsCita();
  if (document.getElementById("menor").checked) {
    desbloquearControlsCita();
  } else {
    bloquearControlsCita();
  }
}
function validar_menorPaciente() {
  $("#NombrePaciente").val("");
  $("#ApellidosPaciente").val("");
  if (document.getElementById("menorPaciente").checked) {
    desbloquearControlsPaciente();
  } else {
    bloquearControlsPaciente();
  }
}
function desbloquearControlsCita() {
  $("#NombrePacienteCita").prop("readonly", false);
  $("#ApellidosPacienteCita").prop("readonly", false);
  $("#NombrePacienteCita").removeClass("textdisabled");
  $("#ApellidosPacienteCita").removeClass("textdisabled");
}
function bloquearControlsCita() {
  $("#NombrePacienteCita").prop("readonly", true);
  $("#ApellidosPacienteCita").prop("readonly", true);
  $("#NombrePacienteCita").addClass("textdisabled");
  $("#ApellidosPacienteCita").addClass("textdisabled");
}
function desbloquearControlsPaciente() {
  $("#NombrePaciente").prop("readonly", false);
  $("#ApellidosPaciente").prop("readonly", false);
  $("#NombrePaciente").removeClass("textdisabled");
  $("#ApellidosPaciente").removeClass("textdisabled");
}
function bloquearControlsPaciente() {
  $("#NombrePaciente").prop("readonly", true);
  $("#ApellidosPaciente").prop("readonly", true);
  $("#NombrePaciente").addClass("textdisabled");
  $("#ApellidosPaciente").addClass("textdisabled");
  $("#NombrePaciente").val("");
  $("#ApellidosPaciente").val("");
}

function FiltrarMedicamento() {
  filtro = $("#filtroProducto").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "LISTAR_MEDICAMENTOS", filtro: filtro },
  }).done(function (html) {
    $("#tbMedicamentos").html(html);
  });
}
/* REGISTROS */
//Personal
function RegistrarPersonal() {
  datax = $("#frmregistrarusuario").serializeArray();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: datax,
  }).done(function (respuesta) {
    console.log(respuesta);
    alert(respuesta);
    ListarPersonal();
    limpiar();
    cerrarmodal();
  });
}
function RegistrarCargo() {
  cargo = $("#NombreCargo").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "REGISTRAR_CARGO", cargo: cargo },
  }).done(function (respuesta) {
    alert(respuesta);
    ListarCargos();
    limpiar();
    cerrarmodal();
  });
}
function RegistrarEstablecimiento() {
  establecimiento = $("#NombreEstablecimiento").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: {
      accion: "REGISTRAR_ESTABLECIMIENTO",
      establecimiento: establecimiento,
    },
  }).done(function (respuesta) {
    alert(respuesta);
    CargarEstablecimientos();
    cerrarmodal();
  });
}
$(function () {
  $(document).on("click", "#tbUsuarios .edit-usuario", function (event) {
    event.preventDefault();
    var parent = $(this).closest("table");
    var tr = $(this).closest("tr");
    codigo = $(tr).find("td").eq(0).html();

    $("#NroDocPersonal").val(codigo);
    DesahabilitarBoton("#NroDocPersonal");
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: {
        accion: "OBTENER_DATOS_PERSONAL",
        dni: codigo,
      },
    }).done(function (resultado) {
      json = JSON.parse(resultado);
      usuario = json.usuario;
      $("#NombrePersonal").val(usuario[0].nombre);
      $("#ApellidosPersonal").val(usuario[0].apellidos);
      $("#Nick").val(usuario[0].nick);
      $("#idcargo").val(usuario[0].idcargo);
      $("#EstadoUsuario").val(usuario[0].estado);
      $("#AccionUsuario").val("ACTUALIZAR_USUARIO");
    });
    abrirRegistroUsuario();
    $("#Pass").css("display", "none");
  });
});
//Pacientes
function RegistrarPaciente() {
  datax = $("#frmregistrarpaciente").serializeArray();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: datax,
  }).done(function (respuesta) {
    alert(respuesta);
    ListarPacientes();
    limpiar();
    cerrarmodal();
  });
}

$(function () {
  $(document).on("click", "#tbPacientes .edit-paciente", function (event) {
    event.preventDefault();
    var parent = $(this).closest("table");
    var tr = $(this).closest("tr");
    codigo = $(tr).find("td").eq(0).html();

    $("#NroDocPaciente").val(codigo);
    DesahabilitarBoton("#NroDocPaciente");
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: {
        accion: "OBTENER_DATOS_PACIENTE",
        dni: codigo,
      },
    }).done(function (resultado) {
      json = JSON.parse(resultado);
      paciente = json.paciente;
      $("#NombrePaciente").val(paciente[0].nombre);
      $("#ApellidosPaciente").val(paciente[0].apellidos);
      $("#NroCelular").val(paciente[0].telefono);
      $("#fechanac").val(paciente[0].fecha_nac);
      $("#AccionPaciente").val("ACTUALIZAR_PACIENTE");
    });
    abrirRegistrarPaciente();
  });
});

function RegistrarCita() {
  if ($("#TipoPaciente").val() == "NOREG" && $("#FechaNacCita").val() == "") {
    alert("Ingrese Fecha de Nacimiento");
  } else {
    if ($("#FechaCita").val() == "" || $("#HoraCita").val() == "") {
      alert("INGRESE FECHA Y HORA DE CITA");
    } else {
      datax = $("#frmregistrarcita").serializeArray();
      $.ajax({
        method: "POST",
        url: "sistema/controlador/controlador.php",
        data: datax,
      }).done(function (respuesta) {
        console.log(respuesta);
        $("#IdCita").val(respuesta);
        //ListarCita()
        $("#frmregistrarcita").removeClass("activo");
        $("#frmEleccionPago").addClass("activo");
        ListarCitas();
        //limpiar()
      });
    }
  }
}
function MostrarPagar() {
  $("#frmEleccionPago").removeClass("activo");
  $("#frmregistrarpago").addClass("activo");
  idcita = $("#IdCita").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "OBTENER_DATOS_CITA", idcita: idcita },
  }).done(function (respuesta) {
    json = JSON.parse(respuesta);
    cita = json.cita;
    console.log(json);
    $("#NombrePago").val(
      cita[0].apellidospaciente + ", " + cita[0].nombrepaciente
    );
    $("#MotivoPago").val(cita[0].motivo);

    if (cita[0].estado === "A CUENTA") {
      MostrarPagarCuenta(cita[0].precio_consulta);
    } else {
      $("#PrecioPago").val(cita[0].precio_consulta);
      $("#ACuentaPago").val(cita[0].precio_consulta);
    }
  });
}
//
function MostrarPagarCuenta(MontoTotal) {
  $("#frmregistrarpago").addClass("activo");
  $("#PrecioPago").val("");
  $("#ACuentaPago").val("");
  let idcita = $("#IdCita").val();
  let data = { accion: "OBTENER_MOVIMIENTO_CUENTA", idcita: idcita };
  let llamadoAjax = ajaxFunction(data);
  monto = MontoTotal - llamadoAjax;
  $("#PrecioPago").val(monto);
  $("#ACuentaPago").val(monto);
}

function aperturarcaja() {
  monto = $("#MontoInicial").val();
  if (monto === "") {
    alert("INGRESE MONTO INICIAL");
  } else {
    $("#btnaperturarcaja").prop("disabled", true);
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: {
        accion: "APERTURAR_CAJA",
        montoinicial: monto,
        tipo_movimiento: "APERTURA",
        descripcion: "APERTURA CAJA",
      },
    }).done(function (html) {
      verificarcajaabierta();
      verificarcaja();
      $("#btnaperturarcaja").prop("disabled", false);
      cerrarmodal();
      console.log(html);
    });
  }
}
function cerrarcaja() {
  let data = {
    accion: "CERRAR_CAJA",
    idcajadiaria: $("#idcajadiaria").val(),
    montocierre: $("#totalcaja").html(),
  };
  let llamadoAjax = ajaxFunction(data);
  $("#fecha_inicio_caja").html("");
  verificarcaja();
  verificarcajaabierta();
  cerrarmodal();
}
function RegistrarPago() {
  if ($("#tipopago").val() == "0") alert("SELECCIONE TIPO DE PAGO");
  else {
    datax = $("#frmregistrarpago").serializeArray();
    let llamadoAjax = ajaxFunction(datax);
    generarticketPDF(llamadoAjax);
    ListarCitas();
    cerrarmodal();
  }
}
function verificarcajaabierta() {
  let data = { accion: "VERIFICAR_CAJA" };
  let llamadoAjax = ajaxFunction(data);
  let tipo = llamadoAjax === "SIN REGISTRO" ? true : false;
  if (llamadoAjax === "SIN REGISTRO") {
    $("#btnsi_mostrarpago").addClass("btndisabled");
    $("#btn-regPago").addClass("btndisabled");
  } else {
    $("#btnsi_mostrarpago").removeClass("btndisabled");
    $("#btn-regPago").removeClass("btndisabled");
  }
  $("#btnsi_mostrarpago").prop("disabled", tipo);
  $("#btn-regPago").prop("disabled", tipo);
}
function verificarcaja() {
  let llamadoAjax = ajaxFunction({ accion: "VERIFICAR_CAJA" });
  if (llamadoAjax === "SIN REGISTRO") {
    $("#fecha_inicio_caja").html("");
    $("#btncerrarcaja").removeClass("btnhabilitado");
    $("#btncerrarcaja").addClass("btndisabled");
    $("#btncerrarcaja").prop("disabled", true);

    $("#btnaperturarcaja").prop("disabled", false);
    $("#btnaperturarcaja").removeClass("btndisabled");
    $("#btnaperturarcaja").addClass("btnhabilitado");
    $(".cont_tablas_caja").css("display", "none");
    $(".cont_caja_cerrada").css("display", "block");
  } else {
    json = JSON.parse(llamadoAjax);
    datoscaja = json.datoscaja;
    $("#idcajadiaria").val(datoscaja[0].idcajadiaria);
    $("#fecha_inicio_caja").html(datoscaja[0].fecha_apertura);
    $("#btnaperturarcaja").removeClass("btnhabilitado");
    $("#btnaperturarcaja").addClass("btndisabled");
    $("#btnaperturarcaja").prop("disabled", true);
    $("#btncerrarcaja").prop("disabled", false);
    $("#btncerrarcaja").addClass("btnhabilitado");
    $("#btncerrarcaja").removeClass("btndisabled");
    $(".cont_tablas_caja").css("display", "block");
    $(".cont_caja_cerrada").css("display", "none");
    listargastos();
    listarmontoscaja();
    listarultimosingresos();
  }
}
function registrargasto() {
  monto = $("#MontoGasto").val();
  descripcion = $("#DescripcionGasto").val();
  if (monto === "" || descripcion === "") {
    alert("INRGRESE MONTO Y DESCRIPCIÓN");
  } else {
    $("#btnregistrargasto").prop("disabled", true);
    datax = $("#frmRegistrarGasto").serializeArray();
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: datax,
    }).done(function (html) {
      console.log(html);
      listargastos();
      listarmontoscaja();
      cerrarmodal();
      $("#btnregistrargasto").prop("disabled", false);
    });
  }
}

$(function () {
  $(document).on("click", "#tbConfirmados .fa-heartbeat", function (e) {
    e.preventDefault();
    let parent = $(this).closest("table");
    let tr = $(this).closest("tr");
    let codigo = $(tr).find("td").eq(1).html();
    $("#idatencion_signos").val(codigo);

    let data = { accion: "OBTENER_SIGNOS_VITALES", idatencion: codigo };
    let llamadoAjax = ajaxFunction(data);
    if (llamadoAjax !== "SIGNOS NO REGISTRADOS") {
      json = JSON.parse(llamadoAjax);
      signos = json.signos;
      $("#fr_signosv").val(signos[0].fr);
      $("#pa_signosv").val(signos[0].pa);
      $("#temp_signosv").val(signos[0].temp);
      $("#so2_signosv").val(signos[0].so2);
      $("#peso_signosv").val(signos[0].peso);
      $("#btnregistrarsignos").html("Actualizar Signos");
    } else {
      $("#btnregistrarsignos").html("Registrar Signos");
    }
    abrirRegistroSignosVitales();
  });
});

function registrarSignosVitales() {
  datax = $("#frmRegistrarSignosV").serializeArray();
  let llamadoAjax = ajaxFunction(datax);
  cerrarmodal();
}
function RegistrarAtencion() {
  $("#btnregistraratencion").prop("disabled", true);
  datax = $("#frmRegistrarAtencion").serializeArray();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: datax,
  }).done(function (respuesta) {
    console.log(respuesta);
    if (respuesta == "SE REGISTRÓ ATENCIÓN") {
      $("#btnregistraratencion").prop("disabled", false);
      ListarConfirmados();
      MostrarRegistrarTratamiento();
    }
  });
}
$(function () {
  $(document).on("click", "#tbPacientes .open-atencion", function (e) {
    e.preventDefault();
    let parent = $(this).closest("table");
    let tr = $(this).closest("tr");
    dni = $(tr).find("td").eq(0).html();
    let data = { accion: "OBTENER_DATOS_PACIENTE", dni: dni };
    let llamadoAjax = ajaxFunction(data);
    json = JSON.parse(llamadoAjax);
    paciente = json.paciente;
    $("#h2Paciente").html(
      `${paciente[0].apellidos}, ${paciente[0].nombre}<br/><span>Dni: ${paciente[0].dni} | Fecha Nac.: ${paciente[0].fecha_nac}</span>`
    );
    $("#IdPacienteHistoria").val(dni);
    ListarAtencionesPorPaciente(dni);
    ListarOtrosExamenes(dni);
    limpiarhistoria();
    abrirHistorial();
  });
});
function VerAtencion(idatencion) {
  $(".consulta_historia").removeClass("examen");
  $(".consulta_historia").addClass("consulta");
  $(".consulta_historia").removeClass("otropdf");
  $(".consulta_historia").removeClass("otroimg");
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "OBTENER_DATOS_ATENCION", idatencion: idatencion },
  }).done(function (respuesta) {
    json = JSON.parse(respuesta);
    atencion = json.atencion;
    console.log(respuesta);
    $("#hist_fecha").html("Fecha : " + atencion[0].fechaatencion);
    $("#hist_fc").html("<span>FC : " + atencion[0].fr + "</span>");
    $("#hist_pa").html("<span>PA : " + atencion[0].pa + "</span>");
    $("#hist_t").html("<span>T° : " + atencion[0].temp + "</span>");
    $("#hist_so2").html("<span>So2 : " + atencion[0].so2 + "</span>");
    $("#hist_peso").html("<span>PESO : " + atencion[0].peso + "</span>");
    $("#hist_antecedente").html(atencion[0].antecedente);
    $("#hist_molestia").html(atencion[0].motivoconsulta);
    $("#hist_anamnesis").html(atencion[0].anamensis);
    $("#hist_exfisico").html(atencion[0].exfisico);
    $("#hist_diagnostico").html(atencion[0].diagnostico);
    $("#hist_tratamiento").html(atencion[0].tratamiento);
  });
}
function limpiarhistoria() {
  $("#hist_fecha").html("Fecha : -");
  $("#hist_fc").html("<span>FC : -");
  $("#hist_pa").html("<span>PA : --");
  $("#hist_t").html("<span>T° : -");
  $("#hist_so2").html("<span>So2 : -");
  $("#hist_peso").html("<span>PESO : -");
  $("#hist_antecedente").html("-");
  $("#hist_molestia").html("-");
  $("#hist_anamnesis").html("-");
  $("#hist_exfisico").html("-");
  $("#hist_diagnostico").html("-");
  $("#hist_tratamiento").html("-");
  $("#cont-imagenes").html("");
  $("#cont-examen").html("");
}
function VerExamen(idatencion) {
  $(".consulta_historia").addClass("examen");
  $(".consulta_historia").removeClass("consulta");
  $(".consulta_historia").removeClass("otropdf");
  $(".consulta_historia").removeClass("otroimg");
  $("#cont-examen").html("");
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "OBTENER_DATOS_EXAMEN", idatencion: idatencion },
  }).done(function (respuesta) {
    json = JSON.parse(respuesta);
    atencion = json.atencion;
    console.log(respuesta);
    $("#cont-examen").html(
      `<iframe src="formularios/${atencion[0].examen}" width="100%"></iframe>`
    );
    console.log(atencion[0].examen);
  });
}
// ------------------------------ ↓↓ CAMBIOOOS ↓↓ --------------------------
function VerPDF(idexamen) {
  $(".consulta_historia").addClass("examen");
  $(".consulta_historia").addClass("otropdf");
  $(".consulta_historia").removeClass("consulta");
  $(".consulta_historia").removeClass("otroimg");
  $("#cont-examen").html("");
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "OBTENER_OTRO_EXAMEN", idexamen: idexamen },
  }).done(function (respuesta) {
    json = JSON.parse(respuesta);
    examenes = json.examenes;
    $("#cont-examen").html(
      `<div class="cont-opciones-examenes"><button type="button" class="btndel" onclick="EliminarExamen(${idexamen})">Eliminar Examen</button></div><iframe src="${examenes[0].archivo}" width="100%"></iframe>`
    );
    console.log(examenes[0].archivo);
  });
}
function VerIMG(idexamen) {
  $(".consulta_historia").removeClass("examen");
  $(".consulta_historia").removeClass("otropdf");
  $(".consulta_historia").removeClass("consulta");
  $(".consulta_historia").addClass("otroimg");
  $("#cont-imagenes").html("");
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: { accion: "OBTENER_OTRO_EXAMEN_IMG", idexamen: idexamen },
  }).done(function (respuesta) {
    $("#cont-imagenes").html(
      `<div class="cont-opciones-examenes"><button type="button" class="btndel" onclick="EliminarExamen(${idexamen})">Eliminar Examen</button></div>${respuesta}`
    );
  });
}
function EliminarExamen(idexamen) {
  dni = $("#IdPacienteHistoria").val();
  Swal.fire({
    title: "Desea Eliminar el examen " + idexamen + "?",
    text: "Esta acción no podrá revertirse",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#b2bec3",
    confirmButtonText: "Sí, Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let data = { accion: "ELIMINAR_EXAMEN", idexamen: idexamen };
      let llamadoAjax = ajaxFunction(data);
      Swal.fire("Se ha eliminado el examen", idexamen, "success");
      ListarOtrosExamenes(dni);
      limpiarhistoria();
    }
  });
}
// ------------------------------ ↑↑ CAMBIOOOS ↑↑ --------------------------
function RegistrarProcedimiento() {
  datax = $("#frmRegistrarProcedimiento").serializeArray();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: datax,
  }).done(function (respuesta) {
    alert(respuesta);
    ListarProcedimientos();
    cerrarmodal();
  });
}
$(function () {
  $(document).on("click", "#tbProcedimientos .fa-edit", function (event) {
    event.preventDefault();
    var parent = $(this).closest("table");
    var tr = $(this).closest("tr");
    codigo = $(tr).find("td").eq(0).html();
    nombre = $(tr).find("td").eq(1).html();
    precio = $(tr).find("td").eq(2).html();

    $("#idprocedimiento").val(codigo);
    DesahabilitarBoton("#idprocedimiento");
    $("#NombreProcedimiento").val(nombre);
    $("#PrecioProcedimiento").val(precio);
    abrirRegistroProcedimiento();
    $("#AccionProcedimiento").val("ACTUALIZAR_PROCEDIMIENTO");
  });
});
$(function () {
  $(document).on("click", "#tbCitas .fa-sliders-h", function (event) {
    event.preventDefault();
    let parent = $(this).closest("table");
    let tr = $(this).closest("tr");
    idcita = $(tr).find("td").eq(0).html();
    $("#CodigoCita").val(idcita);
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: {
        accion: "OBTENER_DATOS_CITA",
        idcita: idcita,
      },
    }).done(function (resultado) {
      json = JSON.parse(resultado);
      cita = json.cita;
      console.log(resultado);
      $("#TipoPaciente").val("REG");
      $("#NroDocCita").val(cita[0].dni);
      $("#NombrePacienteC").val(
        cita[0].apellidospaciente + ", " + cita[0].nombrepaciente
      );
      $("#IdMovitoCita").val(cita[0].idtipoatencion);
      $("#MovitoCita").val(cita[0].motivo);
      $("#PrecioMotivoCita").val(cita[0].precio);
      $("#FechaCita").val(cita[0].fecha);
      $("#HoraCita").val(cita[0].horario);
      $("#NroCelularCita").val(cita[0].telefono);
    });
    abrirRegistrarCita();
    $("#AccionCita").val("ACTUALIZAR_CITA");
  });
});
$(function () {
  $(document).on("click", "#tbAtenciones .fa-eye", function (event) {
    event.preventDefault();
    var parent = $(this).closest("table");
    var tr = $(this).closest("tr");
    idatencion = $(tr).find("td").eq(0).html();
    dni = $(tr).find("td").eq(1).html();
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: {
        accion: "OBTENER_DATOS_PACIENTE",
        dni: dni,
      },
    }).done(function (resultado) {
      json = JSON.parse(resultado);
      paciente = json.paciente;
      $("#h2Paciente").html(
        paciente[0].apellidos +
          ", " +
          paciente[0].nombre +
          "<br/><span>Dni: " +
          paciente[0].dni +
          " | Fecha Nac.: " +
          paciente[0].fecha_nac +
          "</span>"
      );
      ListarAtencionesPorPaciente(dni);
      ListarOtrosExamenes(dni);
      VerAtencion(idatencion);
    });
    abrirHistorial();
  });
});
function Reporte() {
  fecha1 = $("#ReporteDesde").val();
  fecha2 = $("#ReporteHasta").val();
  tipomov = $("input:radio[name=tipomovimiento]:checked").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: {
      accion: "LISTAR_REPORTE",
      tipomovimientocaja: tipomov,
      fecha1: fecha1,
      fecha2: fecha2,
    },
  }).done(function (html) {
    $("#tbReporte").html(html);
    nFilas = $("#tbReporte tr").length;
    var total = 0;
    efectivo = 0;
    transferencia = 0;
    pos = 0;
    yape = 0;
    var num = 0;
    $("#tbReporte tr").each(function () {
      tipopago = $(this).find("td").eq(5).html();
      estado = $(this).find("td").eq(7).html();
      if (tipopago === "EFECTIVO" && estado !== "ANULADO") {
        efectivo += parseFloat($(this).find("td").eq(4).html());
      }
      if (tipopago === "TRANSFERENCIA" && estado !== "ANULADO") {
        transferencia += parseFloat($(this).find("td").eq(4).html());
      }
      if (tipopago === "POS" && estado !== "ANULADO") {
        pos += parseFloat($(this).find("td").eq(4).html());
      }
      if (tipopago === "YAPE" && estado !== "ANULADO") {
        yape += parseFloat($(this).find("td").eq(4).html());
      }
      //total += parseFloat($(this).find('td').eq(3).html());
      num++;
    });
    total = efectivo + transferencia + pos + yape;
    total = total.toFixed(2);
    $("#lbltotal").html("MONTO TOTAL : S/. " + total);
    $("#lbltotalEfectivo").html("EFECTIVO : S/. " + efectivo);
    $("#lbltotalTransf").html("TRANSFERENCIA : S/. " + transferencia);
    $("#lbltotalPos").html("POS : S/. " + pos);
    $("#lbltotalYape").html("YAPE : S/. " + yape);
  });
}
function RegistrarCitaExterna() {
  datax = $("#frmregistrarcita_externa").serializeArray();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: datax,
  }).done(function (respuesta) {
    alert(respuesta);
    ListarCitasExternas();
    cerrarmodal();
  });
}
function ListarCitasExternas() {
  fecha1 = $("#FechaExterno1").val();
  fecha2 = $("#FechaExterno2").val();
  establecimiento = $("#establecimiento").val();
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: {
      accion: "LISTAR_CITAS_EXTERNAS",
      fecha1: fecha1,
      fecha2: fecha2,
      establecimiento: establecimiento,
    },
  }).done(function (html) {
    $("#tbCitasExternas").html(html);
    nFilas = $("#tbCitasExternas tr").length;
    var total = 0;
    var num = 0;
    $("#tbCitasExternas tr").each(function () {
      total += parseFloat($(this).find("td").eq(6).html());
      num++;
    });
    total = total.toFixed(2);
    $("#lbltotalexterno").html("TOTAL : S/. " + total);
  });
}
function RegistrarMedicamento() {
  producto = $("#nombreMedicamento").val();
  cantidad = $("#CantidadInicial").val();
  if (producto == "") {
    alert("INGRESE NOMBRE DE PRODUCTO");
  } else if (cantidad == "" || cantidad < 0) {
    alert("INGRESE CANTIDAD VÁLIDA");
  } else {
    datax = $("#frmMedicamentos").serializeArray();
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: datax,
    }).done(function (respuesta) {
      alert(respuesta);
      ListarMedicamentos();
      CancelarRegProd();
    });
  }
}
function CancelarRegProd() {
  document.getElementById("frmMedicamentos").reset();
  $("#accionProducto").val("REGISTRAR_PRODUCTO");
  $("#btnRegistrarProducto").html("Registrar");
  $("#CantidadInicial").css("display", "block");
  $("#btnCancelarProducto").css("display", "none");
  limpiar();
}
function RegistrarMovimientoA() {
  tipomov = $("input:radio[name=movimientoalmacen]:checked").val();
  producto = $("#IdProducto").val();
  cantidad = $("#CantidadProducto").val();
  stock = $("#StockProducto").val();
  descripcion = $("#Descripcion").val();
  if (tipomov == "" || tipomov == null) {
    alert("SELECCIONE TIPO DE MOVIMIENTO");
  } else if (
    producto == "" ||
    cantidad == "" ||
    cantidad < 1 ||
    descripcion == ""
  ) {
    alert("TODOS LOS DATOS SON NECESARIOS");
  } else {
    if (tipomov == "S" && cantidad > stock) {
      alert("CANTIDAD DE EXISTENCIAS INSUFICIENTES");
    } else {
      $("#btnregistrarMovimientoA").prop("disabled", true);
      datax = $("#frmRegistrarProducto").serializeArray();
      $.ajax({
        method: "POST",
        url: "sistema/controlador/controlador.php",
        data: datax,
      }).done(function (respuesta) {
        alert(respuesta);
        ListarMedicamentos();
        cerrarmodal();
        $("#btnregistrarMovimientoA").prop("disabled", false);
      });
    }
  }
}
function CancelarTratamiento() {
  $.ajax({
    method: "POST",
    url: "sistema/controlador/controlador.php",
    data: {
      accion: "CANCELAR_CARRITO",
    },
  }).done(function (html) {
    $("#tbTratamiento").html(html);
  });
}
function MostrarRegistrarTratamiento() {
  $("#frmRegistrarAtencion").removeClass("activo");
  $("#frmRegistrarTratamiento").addClass("activo");
  idatencion = $("#ate_idatencion").val();
  $("#idatencion_trat").val(idatencion);
  console.log(idatencion);
  $(".modal").removeClass("w100");
  $(".bg-dark").removeClass("all");
}

function CambiarPass() {
  pass1 = $("#pass1").val();
  pass2 = $("#pass2").val();
  if (pass1 == "" || pass2 == "") {
    alert("INGRESAR CONTRASEÑAS VÁLIDAS");
  } else if (pass1 != pass2) {
    alert("CONTRASEÑAS NO COINCIDEN");
  } else {
    datax = $("#frmCambioPass").serializeArray();
    $.ajax({
      method: "POST",
      url: "sistema/controlador/controlador.php",
      data: datax,
    }).done(function (respuesta) {
      alert(respuesta);
      cerrarmodal();
    });
  }
}

function generarPDF(idatencion) {
  var ancho = 1000;
  var alto = 800;
  var x = parseInt(window.screen.width / 2 - ancho / 2);
  var y = parseInt(window.screen.height / 2 - alto / 2);

  $url = `recursos/pdf/index.php?idatencion=${idatencion}`;
  window.open(
    $url,
    "Reporte",
    `left=${x},top=${y},height=${alto}width=${ancho},scrollbar=si,location=no,resizable=si,menubar=no`
  );
}
function generarPDFExterno() {
  fecha1 = $("#FechaExterno1").val();
  fecha2 = $("#FechaExterno2").val();
  establecimiento = $("#establecimiento").val();
  var ancho = 1000;
  var alto = 800;
  var x = parseInt(window.screen.width / 2 - ancho / 2);
  var y = parseInt(window.screen.height / 2 - alto / 2);

  $url = `recursos/pdf/reporteexterno.php?fecha1=${fecha1}&fecha2=${fecha2}&establecimiento=${establecimiento}`;
  window.open(
    $url,
    "Reporte",
    `left=${x},top=${y},height=${alto}width=${ancho},scrollbar=si,location=no,resizable=si,menubar=no`
  );
}
function generarticketPDF(idcita) {
  var ancho = 1000;
  var alto = 800;
  var x = parseInt(window.screen.width / 2 - ancho / 2);
  var y = parseInt(window.screen.height / 2 - alto / 2);

  $url = `recursos/pdf/ticket.php?idcita=${idcita}`;
  window.open(
    $url,
    "Reporte",
    `left=${x},top=${y},height=${alto}width=${ancho},scrollbar=si,location=no,resizable=si,menubar=no`
  );
}
function generarPDFReporte() {
  fecha1 = $("#ReporteDesde").val();
  fecha2 = $("#ReporteHasta").val();
  tipomovimiento = $("input:radio[name=tipomovimiento]:checked").val();
  var ancho = 1000;
  var alto = 800;
  var x = parseInt(window.screen.width / 2 - ancho / 2);
  var y = parseInt(window.screen.height / 2 - alto / 2);

  $url = `recursos/pdf/reporte.php?fecha1=${fecha1}&fecha2=${fecha2}&tipomovimiento=${tipomovimiento}`;
  window.open(
    $url,
    "Reporte",
    `left=${x},top=${y},height=${alto}width=${ancho},scrollbar=si,location=no,resizable=si,menubar=no`
  );
}
function ValidarSesion(div, contenido, contenedor, link) {
  let llamadoAjax = ajaxFunction({ accion: "VALIDAR_SESION" });
  if (llamadoAjax == "NECESITA VOLVER A LOGEAR")
    window.location.replace("login.php");
  else {
    abrir_form(div, contenido);
    remove_addClass(contenedor, link);
  }
}
function ValidarSesion2() {
  let data = { accion: "VALIDAR_SESION" };
  let llamadoAjax = ajaxFunction(data);
  if (llamadoAjax == "NECESITA VOLVER A LOGEAR")
    window.location.replace("login.php");
}
function ObtenerDatosPacienteCExt() {
  dni = $("#NroDocCitaExt").val();
  $("#NombrePacienteCExt").val("");
  let data = { accion: "OBTENER_DATOS_PACIENTE", dni: dni };
  let llamadoAjax = ajaxFunction(data);
  if (llamadoAjax == "NO REGISTRADO") {
    data = { accion: "CONSULTA_DNI", dni: dni };
    llamadoAjax = ajaxFunction(data);
    json = JSON.parse(llamadoAjax);
    if (json["success"] == false)
      $("#NombrePacienteCExt").prop("readonly", false);
    else if (json["success"] == true)
      $("#NombrePacienteCExt").val(json["data"].nombre_completo);
  } else {
    json = JSON.parse(llamadoAjax);
    paciente = json.paciente;
    $("#NombrePacienteCExt").val(
      paciente[0].apellidos + ", " + paciente[0].nombre
    );
  }
}
