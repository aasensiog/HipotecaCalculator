$(document).on('pageshow', '#index', function() {
    $('#calcular').click(function() {

        var dinero = parseFloat($('input#dinero').val()),
        	interes_anual = parseFloat($('input#interes').val()),
        	anos = parseFloat($('input#años').val());

        var tasa_interes_mensual = interes_anual / 1200;
        var dinero_interes_mensual = dinero * tasa_interes_mensual;
        var tasa_interes_mensual_mas_uno = tasa_interes_mensual + 1;
        var potencia = Math.pow(tasa_interes_mensual_mas_uno, -(anos * 12));
        var resta_uno = 1 - potencia;
        var mensual = dinero_interes_mensual / resta_uno;

        mostrar_resultado(mensual);
    });
});

function mostrar_resultado(pago) {
	$('#resultado').html(pago);
}