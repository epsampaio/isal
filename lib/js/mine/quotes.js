function quotes() {
	$.ajax({
		url: 'frases.json',
		success: function(res) {
			var myjson = json_parse(res);
			var smy = myjson.length;
			var ind = Math.floor((Math.random() * smy) + 1);
			ind--;
			$('.mensagem-diaria').html(myjson[ind].frase + ' (' + myjson[ind].autor + ')');
		},
		error: function(res) {
			$('.mensagem-diaria').html('<h1>Erro!</h1>');
		}
	});
}
