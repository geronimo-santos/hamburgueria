const imagemHamburguer = document.querySelector('.imagem-cabecalho');
const botao = document.querySelector('button');
const navegacao = document.querySelector('nav');

botao.addEventListener('click',()=>{
	//botao.classList.add('margem-botao');
	navegacao.classList.toggle('block');

	imagemHamburguer.classList.toggle('hidden');

 })

