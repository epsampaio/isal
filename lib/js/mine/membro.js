var usuario_logado = null;
var usuario_amigos = null;

function Membro() {

}

Membro.doLogin = function() {
	$.ajax({
		url: 'membros.json',
		success: function(res) {
			var login = $('#usrlogin').val();
			var passwd = $('#usrpasswd').val();
			passwd = calcMD5(passwd);
			$('#usrlogin').val('');
			$('#usrpasswd').val('');
			myjson = json_parse(res);
			smy = myjson.length;
			$('.dados-login').empty();
			for(var i=0; i<smy; i++) {
				if(myjson[i].login === login) {
					if(myjson[i].senha === passwd) {
						usuario_logado = myjson[i];
						$('.dados-login').remove();
						$('.dados-usuario').removeClass('invisivel');
						$('.menu-lateral').removeClass('invisivel');
						Membro.dados();
						menuLateral();
						return true;
					} else {
						usuario_logado = null;
						$('.dados-login').empty();
						$('.dados-login').append("<p class='destaque'>Senha inválida</p>");
						$('.dados-login').append("<p>Ctrl+R para tentar novamente</p>");
						return false;
					}
				}
			}
			$('.dados-login').empty();
			$('.dados-login').append("<p class='destaque'>Usuário inexistente</p>");
			$('.dados-login').append("<p>Ctrl+R para tentar novamente</p>");
		},
		error: function(res) {
			$('.dados-login').empty();
			$('.dados-login').append("<p class='destaque'>Login rejeitado</p>");
			$('.dados-login').append("<p>Ctrl+R para tentar novamente</p>");
		}
	});
}

Membro.dados = function() {
	if(usuario_logado) {
		$('.dados-usuario').append("<img class='borda2' src='foto." + usuario_logado.id + ".jpg'>");
		$('.dados-usuario').append("<a>" + usuario_logado.nome + "</a><br />");
		$('.dados-usuario').append("<a>(" + usuario_logado.login + ")</a>");
	}
}

