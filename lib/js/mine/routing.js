var fs = require('fs');

function getSplitFilename(d) {
	return d.split('.');
}

function getSplitRouteAndData(d) {
	return d.split('/');
}

function getExt(d) {
	var l = getSplitFilename(d);
	var sl = l.length;
	return l[sl-1];
}

function getFirstFilename(d) {
	var l = getSplitFilename(d);
	return l[0];
}

function rotacss(d,res) {
	var ffname = getFirstFilename(d);
	switch(ffname) {
		case 'bootstrap': filename = 'lib/js/others/bootstrap/css/' + d; break;
		default:          filename = 'static/css/' + d; break;
	}
	res.writeHead(200, {'Content-Type': 'text/css'});
	var f = fs.readFileSync(filename);
	res.end(f);
}

function rotajs(d,res) {
	var ffname = getFirstFilename(d);
	switch(ffname) {
		case 'jquery':    filename = 'lib/js/others/jquery/' + d; break;
		case 'bootstrap': filename = 'lib/js/others/bootstrap/js/' + d; break;			
		default: filename = 'lib/js/mine/' + d; break;
	}
	res.writeHead(200, {'Content-Type': 'text/javascript'});
	var f = fs.readFileSync(filename);
	res.end(f);
}

function rotapdf(d,res) {
	var ffname = getFirstFilename(d);
	switch(ffname) {
		case 'revista': filename = 'static/pdf/revista/' + d; break;		
		default:        filename = 'static/pdf/' + d; break;
	}
	res.writeHead(200, {'Content-Type': 'application/pdf'});
	var f = fs.readFileSync(filename);
	res.end(f);
}

function rotajson(d,res) {
	filename = 'data/' + d;
	res.writeHead(200, {'Content-Type': 'application/pdf'});
	var f = fs.readFileSync(filename);
	res.end(f);
}

function imagePath(d) {
	var filename = null;
	var ffname = getFirstFilename(d);
	switch(ffname) {
		case 'foto':
			var l = getSplitFilename(d);
			d = l[1] + '.' + l[2];
			filename = 'static/img/fotos/' + d;
			break;
		default:     filename = 'static/img/' + d; break;
	}
	return filename;
}

function rotapng(d,res) {
	var filename = imagePath(d);
	res.writeHead(200, {'Content-Type': 'image/png'});
	var f = fs.readFileSync(filename);
	res.end(f);	
}

function rotajpg(d,res) {
	var filename = imagePath(d);
	res.writeHead(200, {'Content-Type': 'image/jpeg'});
	var f = fs.readFileSync(filename);
	res.end(f);	
}

function rotagif(d,res) {
	var filename = imagePath(d);
	res.writeHead(200, {'Content-Type': 'image/gif'});
	var f = fs.readFileSync(filename);
	res.end(f);	
}

function rotaico(d,res) {
	var filename = 'static/img/' + d;
	res.writeHead(200, {'Content-Type': 'image/x-icon'});
	var f = fs.readFileSync(filename);
	res.end(f);	
}

function rotamvc(d,res) {
	var l = getSplitRouteAndData(d);
	var controller = l[0];
	var action = l[1];
}

function roteamento(req,res) {
	var d = req.url;
	d = d.substr(1);
	var filename = null;
	var ctype = null;
	var ext = getExt(d);
	switch(ext) {
		case 'css'  :  rotacss(d,res); break;
		case 'js'   :  rotajs(d,res); break;
		case 'png'  :  rotapng(d,res); break;
		case 'jpg'  :
		case 'jpeg' :  rotajpg(d,res); break;		
		case 'gif'  :  rotagif(d,res); break;
		case 'ico'  :  rotaico(d,res); break;
		case 'pdf'  :  rotapdf(d,res); break;
		case 'json' :  rotajson(d,res); break;
		default:       rotamvc(d,res); break;
	}
}

exports.rota = roteamento;