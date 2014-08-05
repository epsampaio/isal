function mudarImagens() {
	var arq = $('.img-sata').attr('src');
	var l = arq.split('_');
	var num = parseInt(l[1]);
	num++;
	if(num > 5) {
		num = 1; 
	};
	if(num === 1) {
		quotes();
	}
	var narq = 'sata_' + num + '.jpg';
	$('.img-sata').attr('src',narq);
}