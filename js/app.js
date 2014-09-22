$(document).on('pageshow', '#index', function() {
    $('#calcular').click(function() {

        var dinero = parseFloat($('input#dinero').val()),
        	interes_anual = parseFloat($('input#interes').val()),
        	anos = parseFloat($('input#años').val());

        if ($.isNumeric(dinero) && $.isNumeric(interes_anual) && $.isNumeric(anos)) {
            var tasa_interes_mensual = interes_anual / 1200,
                dinero_interes_mensual = dinero * tasa_interes_mensual,
                tasa_interes_mensual_mas_uno = tasa_interes_mensual + 1,
                potencia = Math.pow(tasa_interes_mensual_mas_uno, - (anos * 12)),
                resta_uno = 1 - potencia,
                mensual = dinero_interes_mensual / resta_uno;

            mostrar_resultado((mensual.toFixed(2)).toString() + '€');
        } else {
            $.mobile.showPageLoadingMsg("c", "Los datos deben ser numéricos.");
            mostrar_resultado('');
            setTimeout(function() {
                $.mobile.hidePageLoadingMsg();
            }, 1500);
        }
    });
});

function mostrar_resultado(pago) {
	$('#resultado').html(pago);
}