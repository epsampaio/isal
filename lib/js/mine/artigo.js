function Artigo() {

}

Artigo.paginacao = function(q,n) {
	var resto = q % n;
	var quoc = (q - resto) / n;
	var npages = (resto > 0) ? (quoc + 1) : quoc;
	$('.area-conteudo').empty();
	var divpag = $("<div id='divpag' class='pagination'></div>");
	var listapag = $("<ul id='listapag'></ul>");
	var listaitem = null;
	var itemname = null;
	for(var i=1; i<=npages; i++) {
		itemname = "item_" + i;
		listaitem = $("<li id='" + itemname + "'></li>");
		$("<a href='javascript:void(0)' onclick='paginar(" + q + "," + n + "," + i ")'>" + i + "</a>");
	}
	
}

Artigo.listaPublicos = function() {
	$.ajax({
		url: 'artigospub.json',
		success: function(res) {
			myjson = json_parse(res);
			smy = myjon.length;
			Artigo.paginacao(smy,10);
			for(var i=(smy-1); i>=0; i--) {
				
			}
		},
		error: function(res) {
		
		}
	});
}
