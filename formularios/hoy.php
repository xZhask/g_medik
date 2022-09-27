<?php
session_start();
$cargo = $_SESSION['cargo'];
?>
<div class="cabecera">
  <h2>ATENCIONES DE HOY</h2>
</div>
<div class="cont-tabla">
  <table>
    <thead>
      <tr>
        <th>Horario</th>
        <!--<th>Dni</th>-->
        <th>Paciente</th>
        <th>Motivo de Consulta</th>
        <th>Reg. Signos Vitales</th>
        <?php
        if ($cargo == 1 || $cargo == 2) { ?>
          <th>Registrar Atención</th>
        <?php }
        ?>
      </tr>
    </thead>
    <tbody id="tbConfirmados">
    </tbody>
    <tfoot></tfoot>
  </table>
</div>
<script>
  ListarConfirmados()
  $(function() {
    $(document).on('click', '#tbConfirmados .fa-calendar-plus', function(
      event,
    ) {
      event.preventDefault()
      var parent = $(this).closest('table')
      var tr = $(this).closest('tr')
      codigo = $(tr).find('td').eq(1).html()
      $('#ate_idatencion').val(codigo)
      $.ajax({
        method: 'POST',
        url: 'sistema/controlador/controlador.php',
        data: {
          accion: 'OBTENER_DATOS_ATENCION',
          idatencion: codigo
        },
      }).done(function(respuesta) {
        json = JSON.parse(respuesta)
        atencion = json.atencion

        $('#NombresAtencion').html(
          atencion[0].paciente +
          '<br/><span>Dni: ' +
          atencion[0].dni +
          ' | Edad: ' +
          atencion[0].edad +
          ' años</span>',
        )
        $('#ate_fc').val(atencion[0].fr)
        $('#ate_pa').val(atencion[0].pa)
        $('#ate_temp').val(atencion[0].temp)
        $('#ate_so2').val(atencion[0].so2)
        $('#ate_peso').val(atencion[0].peso)
        $('#dni_atencion').val(atencion[0].dni)
        $.ajax({
          method: 'POST',
          url: 'sistema/controlador/controlador.php',
          data: {
            accion: 'OBTENER_ANTECEDENTES_G',
            dni: atencion[0].dni
          },
        }).done(function(respuesta) {
          json = JSON.parse(respuesta)
          antecedentesgenerales = json.antecedentesgenerales

          if (antecedentesgenerales[0].HTA === 'SI') {
            $('#htasi').prop('checked', true)
          }
          if (antecedentesgenerales[0].HIV === 'SI') {
            $('#hivsi').prop('checked', true)
            $('#frmRegistrarAtencion').css('color', '#f7b731')
            $('.modal').addClass('ambar')
          }
          if (antecedentesgenerales[0].DM === 'SI') {
            $('#dmsi').prop('checked', true)
          }

          if (antecedentesgenerales[0].HEPATITIS === 'SI') {
            $('#hepsi').prop('checked', true)
            $('#frmRegistrarAtencion').css('color', '#27ae60')
            $('.modal').addClass('green')
          }
          $('#alergias').val(antecedentesgenerales[0].ALERGIAS)
          if ($('#alergias').val() !== '-') {
            $('#frmRegistrarAtencion').css('color', '#e74c3c')
            $('.modal').addClass('red')
          } else {
            $('#alergias').val('-')
          }
        })
        abrirRegistrarAtencion()
      })
    })
  })
  $(function() {
    $(document).on('click', '#tbConfirmados .fa-file-medical', function(
      event,
    ) {
      event.preventDefault()
      var parent = $(this).closest('table')
      var tr = $(this).closest('tr')
      codigo = $(tr).find('td').eq(1).html()
      nombre = $(tr).find('td').eq(3).html()
      var ancho = 1000
      var alto = 800
      var x = parseInt(window.screen.width / 2 - ancho / 2)
      var y = parseInt(window.screen.height / 2 - alto / 2)

      $url =
        'recibearchivo.php?id=' +
        codigo +
        '&nombre=' +
        nombre
      window.open(
        $url,
        'His',
        'left=' +
        x +
        ',top=' +
        y +
        ',height=' +
        alto +
        'width=' +
        ancho +
        ',scrollbar=si,location=no,resizable=si,menubar=no',
      )
      //ListarConfirmados()
    })
  })
</script>