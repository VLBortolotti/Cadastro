const button = document.getElementById('btn-submit');

button.addEventListener('click', (event) => {
	event.preventDefault();

	// variaveis para verificacao se os dados estao corretos
	var nomeCorreto = null;
	var enderecoCorreto = null;
	var emailCorreto = null;
	var foneCorreto = null;
	var cepCorreto = null;

	// Toda vez que o botao for clicado, pegar os valores abaixo
	const email = document.getElementById('email');
	const nome = document.getElementById('nome');
	const endereco = document.getElementById('endereco');
	const cep = document.getElementById('cep');
	const fone = document.getElementById('telefone');


	// Verificando se os valores digitados nos campos foram vazios
	if (nome.value == '') {
		nome.classList.add('errorInput');
		nomeCorreto = false;
	}
	else { // vendo se o nome esta correto
		nome.classList.add('correctInput');
		nomeCorreto = true; 
	};

	if (email.value == '') {
		email.classList.add('errorInput');
	}
	else {
		nome.classList.add('correctInput');
	}


	if (endereco.value == '') {
		endereco.classList.add('errorInput');
		enderecoCorreto = false;
	} 
	else { // verificando se o endereco esta correto
		endereco.classList.add('correctInput');
		enderecoCorreto = true;
	}

	if (cep.value == '') {
		cep.classList.add('errorInput');
	};

	if (fone.value == '') {
		fone.classList.add('errorInput');
	};

	// Validando o email
	if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
		email.classList.add('errorInput');
		emailCorreto = false;
	}
	else {
		email.classList.add('correctInput');
		emailCorreto = true;
	}

	// Validando o telefone
	if (isNaN(fone.value) == true) {
		fone.classList.add('errorInput')
		foneCorreto = false;
	}
	else if (fone.value.length < 10 || telefone.value.length > 11)
	{
		fone.classList.add('errorInput')
		foneCorreto = false;
	}
	else {
		fone.classList.add('correctInput')
		foneCorreto = true;
	};

	// Validando o CEP 
	if (isNaN(cep.value) == true || cep.value == '') {
		cep.classList.add('errorInput')
		cepCorreto = false;
	}
	else {
		cep.classList.add('correctInput');
		cepCorreto = true;
	};

	if (nomeCorreto == true && enderecoCorreto == true && emailCorreto == true && foneCorreto == true && cepCorreto == true) {
		alert('Cadastro realizado com sucesso.');

		// Limpando o formulario e removendo classes
		nome.value = '';
		nome.classList.remove('correctInput');
		nome.classList.remove('errorInput');

		email.value = '';
		email.classList.remove('correctInput');
		email.classList.remove('errorInput');

		endereco.value = '';
		endereco.classList.remove('correctInput');
		endereco.classList.remove('errorInput');

		cep.value = '';
		cep.classList.remove('correctInput');
		cep.classList.remove('errorInput');

		fone.value = '';
		fone.classList.remove('correctInput');
		fone.classList.remove('errorInput');
	};
})