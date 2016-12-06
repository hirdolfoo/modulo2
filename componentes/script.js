$(document).on(pagebeforeshow', function() {
	$('#inicio').load('componentes/inicio.html',function() {
		$('[data-role="page"]').trigger('create');
	});
});