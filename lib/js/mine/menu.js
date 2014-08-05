function menuLateral() {
	$.ajax({
		url: 'menu.json',
		success: function(res) {
			var myjson = json_parse(res);
			var smy = myjson.length;
			$('.menu-lateral').empty();
			var elemMenu = $('.menu-lateral');
			var elemLista = $("<ul class='lista-menu'></ul>");
			for(var i=0; i<smy; i++) {
				if(myjson[i].nseg) {

				} else {
					if(myjson[i].texto === 'sep') {
						$(elemLista).append("<li>&nbsp;</li>");
					} else {
						$(elemLista).append("<li><a class='clickable' href='javascript:void(0)'>" + myjson[i].texto + "</a></li>");
					}				
				}
			}
			$(elemMenu).append(elemLista);
		},
		error: function(res) {
			$('.menu-lateral').html('<h1>Erro!</h1>');
		}
	});
}
