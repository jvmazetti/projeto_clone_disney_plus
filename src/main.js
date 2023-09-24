document.addEventListener('DOMContentLoaded', function(){
	const button = document.querySelectorAll('[data-tab-button]');
	const questions = document.querySelectorAll('[data-faq-question]')


	for(let i = 0; i < button.lenght; i++){
		button[i].addEventListener('click', function(botao){
			const abaAlvo = botao.target.dataset.tabButton;
			const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
			escondeTodasAbas();
			aba.classList.add('shows__list--is-active');
			removeBotaoAtivo();
			botao.target.classList.add('shows__tabs__button--is-active')
		})
	}

	for (let i = 0; 1 < questions.length; i++){
		questions[i].addEventListener('click', abreOuFechaResposta);
	}
})

function abreOuFechaResposta(elemento){
	const classe = 'faq__questions__item--is-open';
	console.log(elemento);
	const elementoPai = elemento.target.parentNode;

	elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
	const button = document.querySelectorAll('[data-tab-button]');	
	for(let i = 0; i < button.lenght; i++){
		button[i].classList.remove('shows__tabs__button--is-active');
	}
}

function escondeTodasAbas(){
	const tabsContainer = document.querySelectorAll('[data-tab-id]');
	for (let i = 0; i < tabsContainer.length; i++){
		tabsContainer[i].classList.remove('shows__list--is-active')
	}
}
