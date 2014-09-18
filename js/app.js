$(document).on('pageshow', '#index', function() {
    $('#calcular').click(function() {
        //TODO: recoger, validar, calcular, pintar resultado
        var dinero = $('input#dinero').val(),
        	interes = $('input#interes').val(),
        	años = $('input#años').val();

        mostrar_resultado(854.32);
    });
});

function mostrar_resultado(pago) {
	$('#resultado').html(pago);
}