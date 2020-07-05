var div = document.getElementById('highlight-mensagem');
var textos = ['Historia', 'Curiosidades', 'Pinturas'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); 
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 120);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 120);
}

function rodape(conteudos, el) {
    var atual = -1;
	function prox(cb){
		if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escrever(str, function(){
			limpar(prox);
		});
	}
	prox(prox);
}
rodape(textos);


window.sr = ScrollReveal();
sr.reveal('.img-seta');
sr.reveal('.nav-itemLink');
sr.reveal('.nav-itemMenu');
sr.reveal('.sobre-p');
sr.reveal('.desenvolvedores-container');
